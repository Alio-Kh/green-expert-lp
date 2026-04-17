import { createElement } from "react"
import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
// Using Resend's react renderer via @react-email/render (installed) – no need for react-dom/server
import { TeamEmailTemplate, ClientEmailTemplate } from "./email-templates"

// Simple in-memory rate limiting (per process). Suitable for low-traffic and
// development without external services. For production at scale, use a
// shared store (Redis). Here we keep per-IP and per-email windows.
const ipWindowMs = 5 * 60 * 1000 // 5 minutes
const ipMaxRequests = 5
const emailWindowMs = 60 * 60 * 1000 // 1 hour
const emailMaxRequests = 3

type Counter = { count: number; resetAt: number }
const ipCounters = new Map<string, Counter>()
const emailCounters = new Map<string, Counter>()

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return null
  }

  return new Resend(apiKey)
}

function isLimited(map: Map<string, Counter>, key: string, max: number, windowMs: number) {
  const now = Date.now()
  const entry = map.get(key)
  if (!entry || entry.resetAt <= now) {
    map.set(key, { count: 1, resetAt: now + windowMs })
    return { limited: false, resetAt: now + windowMs }
  }
  if (entry.count >= max) {
    return { limited: true, resetAt: entry.resetAt }
  }
  entry.count += 1
  return { limited: false, resetAt: entry.resetAt }
}

const FROM_ADDRESS = process.env.CONTACT_FROM_EMAIL || "Green Expert <contact@greenexpert.ma>"
const TO_ADDRESS = process.env.CONTACT_TO_EMAIL || "said@greenexpert.ma"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const rawName = typeof body.name === "string" ? body.name.trim() : ""
    const rawEmail = typeof body.email === "string" ? body.email.trim() : ""
    const rawPhone = typeof body.phone === "string" ? body.phone.trim() : ""
    const rawProjectType = typeof body.projectType === "string" ? body.projectType.trim() : ""
    const rawMessage = typeof body.message === "string" ? body.message.trim() : ""
    const website = typeof body.website === "string" ? body.website : ""

    // Honeypot (hidden field). If it has a value, silently pretend success.
    if (website.trim() !== "") {
      return NextResponse.json({ success: true, message: "Ok" })
    }

    // Basic rate limiting
    const ipHeader = request.headers.get("x-forwarded-for") || ""
    const ip = ipHeader.split(",")[0]?.trim() || "unknown"
    const ipResult = isLimited(ipCounters, ip, ipMaxRequests, ipWindowMs)
    if (ipResult.limited) {
      return NextResponse.json(
        { error: "Trop de demandes. Réessayez plus tard." },
        { status: 429 }
      )
    }

    const emailKey = rawEmail.toLowerCase()
    const emailResult = isLimited(emailCounters, emailKey, emailMaxRequests, emailWindowMs)
    if (emailResult.limited) {
      return NextResponse.json(
        { error: "Trop de demandes depuis cet email. Réessayez plus tard." },
        { status: 429 }
      )
    }

    // Validate required fields
    if (!rawName || rawName.length < 2) {
      return NextResponse.json({ error: "Nom invalide" }, { status: 400 })
    }
    if (!rawEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(rawEmail)) {
      return NextResponse.json({ error: "Email invalide" }, { status: 400 })
    }
    if (!rawPhone || rawPhone.replace(/\D/g, "").length < 8) {
      return NextResponse.json({ error: "Téléphone invalide" }, { status: 400 })
    }
    if (!rawMessage || rawMessage.length < 10) {
      return NextResponse.json({ error: "Message trop court" }, { status: 400 })
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://greenexpert.ma"
    const resend = getResendClient()

    if (!resend) {
      console.error("Missing RESEND_API_KEY")
      return NextResponse.json({ error: "Service email non configuré" }, { status: 503 })
    }

    // Send email to Green Expert team
    const teamResult = await resend.emails.send({
      from: FROM_ADDRESS,
      to: [TO_ADDRESS],
      replyTo: rawEmail,
      subject: `Nouvelle demande de contact - ${rawProjectType || "Projet général"}`,
      react: createElement(TeamEmailTemplate, {
        name: rawName,
        email: rawEmail,
        phone: rawPhone,
        projectType: rawProjectType,
        message: rawMessage,
        baseUrl,
      }),
    })

    if (teamResult.error) {
      console.error("Resend team email error:", teamResult.error)
      return NextResponse.json({ error: "Erreur lors de l'envoi de l'email" }, { status: 502 })
    }

    console.info("Team email sent:", teamResult.data?.id)

    // Send confirmation email to client. Do not fail the request if this fails.
    const clientResult = await resend.emails.send({
      from: FROM_ADDRESS,
      to: [rawEmail],
      subject: "Confirmation de votre demande - Green Expert",
      react: createElement(ClientEmailTemplate, {
        name: rawName,
        projectType: rawProjectType,
        message: rawMessage,
        baseUrl,
      }),
    })

    if (clientResult.error) {
      console.error("Resend client email error:", clientResult.error)
    } else {
      console.info("Client email sent:", clientResult.data?.id)
    }

    return NextResponse.json({ success: true, message: "Email envoyé avec succès" })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Erreur interne du serveur" }, { status: 500 })
  }
}
