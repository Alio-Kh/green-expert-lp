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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, projectType, message, website } = body

    // Honeypot (hidden field). If it has a value, silently pretend success.
    if (typeof website === "string" && website.trim() !== "") {
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

    const emailKey = (email || "").toLowerCase()
    const emailResult = isLimited(emailCounters, emailKey, emailMaxRequests, emailWindowMs)
    if (emailResult.limited) {
      return NextResponse.json(
        { error: "Trop de demandes depuis cet email. Réessayez plus tard." },
        { status: 429 }
      )
    }

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Nom, email et message sont requis" }, { status: 400 })
    }

    // Generate HTML from TSX templates
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://greenexpert.ma"
    const resend = getResendClient()

    if (!resend) {
      console.error("Missing RESEND_API_KEY")
      return NextResponse.json({ error: "Service email non configuré" }, { status: 503 })
    }

    // Send email to Green Expert team
    const { error } = await resend.emails.send({
      from: "Green Expert <contact@greenexpert.ma>",
      to: ["said@greenexpert.ma"],
      subject: `Nouvelle demande de contact - ${projectType || "Projet général"}`,
      react: createElement(TeamEmailTemplate, {
        name,
        email,
        phone,
        projectType,
        message,
        baseUrl,
      }),
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: "Erreur lors de l'envoi de l'email" }, { status: 500 })
    }

    // Send confirmation email to client
    await resend.emails.send({
      from: "Green Expert <contact@greenexpert.ma>",
      to: [email],
      subject: "Confirmation de votre demande - Green Expert",
      react: createElement(ClientEmailTemplate, { name, projectType, message, baseUrl }),
    })

    return NextResponse.json({ success: true, message: "Email envoyé avec succès" })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Erreur interne du serveur" }, { status: 500 })
  }
}
