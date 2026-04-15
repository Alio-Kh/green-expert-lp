import type * as React from "react"

// Minimal inline components to avoid adding peer-dep conflicts
const Html = (props: React.PropsWithChildren<React.HTMLAttributes<HTMLHtmlElement>>) => (
  <html {...props}>{props.children}</html>
)
const Head = (props: React.PropsWithChildren) => <head>{props.children}</head>
const Body = (props: React.PropsWithChildren<React.HTMLAttributes<HTMLBodyElement>>) => (
  <body {...props}>{props.children}</body>
)
const Text = (props: React.PropsWithChildren<React.HTMLAttributes<HTMLParagraphElement>>) => (
  <p {...props}>{props.children}</p>
)
const Img = ({
  src,
  alt,
  width,
  style,
}: { src: string; alt?: string; width?: number; style?: React.CSSProperties }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img src={src || "/placeholder.svg"} alt={alt} width={width} style={style} />
)
const Link = ({ href, children, style }: { href: string; children: React.ReactNode; style?: React.CSSProperties }) => (
  <a href={href} style={{ color: "#1a2821", textDecoration: "underline", ...(style || {}) }}>
    {children}
  </a>
)
interface TeamEmailProps {
  name: string
  email: string
  phone?: string
  projectType?: string
  message: string
  baseUrl: string
}

export function TeamEmailTemplate({ name, email, phone, projectType, message }: TeamEmailProps) {
  return (
    <Html>
      <Head />
      <Body
        style={{
          backgroundColor: "#f8faf9",
          margin: 0,
          fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
        }}
      >
        <table
          role="presentation"
          width="100%"
          cellPadding={0}
          cellSpacing={0}
          style={{ backgroundColor: "#f8faf9", borderCollapse: "collapse", padding: "40px 16px" }}
        >
          <tbody>
            <tr>
              <td align="center">
                <table
                  role="presentation"
                  width={600}
                  cellPadding={0}
                  cellSpacing={0}
                  style={{
                    width: "100%",
                    maxWidth: 600,
                    backgroundColor: "#ffffff",
                    borderRadius: 20,
                    overflow: "hidden",
                    borderCollapse: "collapse",
                    boxShadow: "0 10px 40px rgba(26, 40, 33, 0.1)",
                  }}
                >
                  <tbody>
                    <tr>
                      <td
                        style={{
                          background: "linear-gradient(135deg, #0f1a13 0%, #1a2821 50%, #243529 100%)",
                          padding: "40px 24px",
                          textAlign: "center",
                          position: "relative",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background:
                              'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fillRule="evenodd"%3E%3Cg fill="%23ffffff" fillOpacity="0.03"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat',
                            opacity: 0.1,
                          }}
                        ></div>
                        <div style={{ position: "relative", zIndex: 1 }}>
                          <div
                            style={{
                              backgroundColor: "rgba(255, 255, 255, 0.95)",
                              borderRadius: 16,
                              padding: "20px 32px",
                              display: "inline-block",
                              marginBottom: 16,
                              border: "1px solid rgba(255, 255, 255, 0.3)",
                              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                            }}
                          >
                            <Img
                              src="https://res.cloudinary.com/ddpoq8ufw/image/upload/v1734908167/Green%20Expert/u137zv9bapnk6uaeulhq.png"
                              width={180}
                              alt="Green Expert"
                              style={{
                                display: "block",
                                margin: "0 auto",
                              }}
                            />
                          </div>
                          <Text
                            style={{
                              color: "#ffffff",
                              margin: "0",
                              fontSize: 18,
                              fontWeight: 700,
                              letterSpacing: 0.5,
                              textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                            }}
                          >
                            <img
                              src="https://res.cloudinary.com/dux6wfype/image/upload/v1757786878/Leaf_vqmsr6.png"
                              alt="Leaf"
                              style={{
                                display: "inline",
                                marginRight: 8,
                                width: 16,
                                height: 16,
                                verticalAlign: "middle",
                              }}
                            />{" "}
                            Nouvelle Demande de Contact
                          </Text>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td style={{ padding: "32px 24px" }}>
                        <Text
                          style={{
                            color: "#1a2821",
                            fontSize: 28,
                            fontWeight: 800,
                            marginTop: 0,
                            marginBottom: 8,
                            lineHeight: 1.2,
                          }}
                        >
                          Nouveau Contact
                        </Text>
                        <Text style={{ color: "#6b7280", fontSize: 16, margin: "0 0 24px 0", lineHeight: 1.6 }}>
                          Détails de la demande reçue
                        </Text>

                        <table
                          role="presentation"
                          width="100%"
                          cellPadding={0}
                          cellSpacing={0}
                          style={{
                            backgroundColor: "#f8faf9",
                            borderRadius: 16,
                            border: "2px solid #e6efe8",
                            marginBottom: 20,
                          }}
                        >
                          <tbody>
                            <tr>
                              <td style={{ padding: 24 }}>
                                <Text style={{ color: "#1a2821", fontSize: 18, fontWeight: 700, margin: "0 0 16px 0" }}>
                                  <img
                                    src="https://res.cloudinary.com/dux6wfype/image/upload/v1757786877/user_ocq5ir.png"
                                    alt="User"
                                    style={{
                                      display: "inline",
                                      marginRight: 8,
                                      width: 18,
                                      height: 18,
                                      verticalAlign: "middle",
                                    }}
                                  />{" "}
                                  Informations Client
                                </Text>
                                <table role="presentation" width="100%" cellPadding={0} cellSpacing={0}>
                                  <tbody>
                                    <tr>
                                      <td style={{ padding: "8px 0", borderBottom: "1px solid #e6efe8" }}>
                                        <Text style={{ margin: 0, fontSize: 15, lineHeight: 1.6 }}>
                                          <span
                                            style={{
                                              color: "#6b7280",
                                              fontWeight: 600,
                                              display: "inline-block",
                                              width: 120,
                                            }}
                                          >
                                            Nom:
                                          </span>
                                          <span style={{ color: "#1a2821", fontWeight: 700 }}>{name}</span>
                                        </Text>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style={{ padding: "8px 0", borderBottom: "1px solid #e6efe8" }}>
                                        <Text style={{ margin: 0, fontSize: 15, lineHeight: 1.6 }}>
                                          <span
                                            style={{
                                              color: "#6b7280",
                                              fontWeight: 600,
                                              display: "inline-block",
                                              width: 120,
                                            }}
                                          >
                                            Email:
                                          </span>
                                          <Link
                                            href={`mailto:${email}`}
                                            style={{ color: "#9bbb2d", fontWeight: 600, textDecoration: "none" }}
                                          >
                                            {email}
                                          </Link>
                                        </Text>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style={{ padding: "8px 0", borderBottom: "1px solid #e6efe8" }}>
                                        <Text style={{ margin: 0, fontSize: 15, lineHeight: 1.6 }}>
                                          <span
                                            style={{
                                              color: "#6b7280",
                                              fontWeight: 600,
                                              display: "inline-block",
                                              width: 120,
                                            }}
                                          >
                                            Téléphone:
                                          </span>
                                          <span style={{ color: "#1a2821", fontWeight: 600 }}>
                                            {phone || "Non renseigné"}
                                          </span>
                                        </Text>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td style={{ padding: "8px 0 0 0" }}>
                                        <Text style={{ margin: 0, fontSize: 15, lineHeight: 1.6 }}>
                                          <span
                                            style={{
                                              color: "#6b7280",
                                              fontWeight: 600,
                                              display: "inline-block",
                                              width: 120,
                                            }}
                                          >
                                            Projet:
                                          </span>
                                          <span
                                            style={{
                                              color: "#9bbb2d",
                                              fontWeight: 700,
                                              backgroundColor: "#9bbb2d20",
                                              padding: "4px 8px",
                                              borderRadius: 6,
                                              fontSize: 13,
                                            }}
                                          >
                                            {projectType || "Non spécifié"}
                                          </span>
                                        </Text>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table
                          role="presentation"
                          width="100%"
                          cellPadding={0}
                          cellSpacing={0}
                          style={{
                            backgroundColor: "#ffffff",
                            borderRadius: 16,
                            border: "2px solid #9bbb2d20",
                            boxShadow: "0 4px 12px rgba(155, 187, 45, 0.1)",
                          }}
                        >
                          <tbody>
                            <tr>
                              <td style={{ padding: 24 }}>
                                <Text
                                  style={{
                                    marginTop: 0,
                                    color: "#1a2821",
                                    fontSize: 18,
                                    fontWeight: 700,
                                    marginBottom: 12,
                                  }}
                                >
                                  <img
                                    src="https://res.cloudinary.com/dux6wfype/image/upload/v1757786878/message-square_ovn3r4.png"
                                    alt="Message"
                                    style={{
                                      display: "inline",
                                      marginRight: 8,
                                      width: 18,
                                      height: 18,
                                      verticalAlign: "middle",
                                    }}
                                  />{" "}
                                  Message du Client
                                </Text>
                                <Text
                                  style={{
                                    margin: 0,
                                    lineHeight: 1.7,
                                    fontSize: 15,
                                    color: "#374151",
                                    backgroundColor: "#f9fafb",
                                    padding: 16,
                                    borderRadius: 12,
                                    borderLeft: "4px solid #9bbb2d",
                                  }}
                                >
                                  {message}
                                </Text>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table
                          role="presentation"
                          width="100%"
                          cellPadding={0}
                          cellSpacing={0}
                          style={{ marginTop: 24 }}
                        >
                          <tbody>
                            <tr>
                              <td align="center">
                                <table role="presentation" cellPadding={0} cellSpacing={0}>
                                  <tbody>
                                    <tr>
                                      <td style={{ paddingRight: 12 }}>
                                        <a
                                          href={`mailto:${email}`}
                                          style={{
                                            display: "inline-block",
                                            background: "#9bbb2d",
                                            color: "#ffffff",
                                            padding: "12px 24px",
                                            borderRadius: 12,
                                            textDecoration: "none",
                                            fontWeight: 700,
                                            fontSize: 14,
                                            boxShadow: "0 4px 12px rgba(155, 187, 45, 0.3)",
                                          }}
                                        >
                                          <img
                                            src="https://res.cloudinary.com/dux6wfype/image/upload/v1757786878/mail_y1jgtu.png"
                                            alt="Mail"
                                            style={{
                                              display: "inline",
                                              marginRight: 6,
                                              width: 14,
                                              height: 14,
                                              verticalAlign: "middle",
                                            }}
                                          />{" "}
                                          Répondre
                                        </a>
                                      </td>
                                      <td>
                                        <a
                                          href={`tel:${phone}`}
                                          style={{
                                            display: "inline-block",
                                            background: "#ffffff",
                                            color: "#9bbb2d",
                                            padding: "12px 24px",
                                            borderRadius: 12,
                                            textDecoration: "none",
                                            fontWeight: 700,
                                            fontSize: 14,
                                            border: "2px solid #9bbb2d",
                                          }}
                                        >
                                          <img
                                            src="https://res.cloudinary.com/dux6wfype/image/upload/v1757786879/Lucide_Phone_Icon_d15gt2.png"
                                            alt="Phone"
                                            style={{
                                              display: "inline",
                                              marginRight: 6,
                                              width: 14,
                                              height: 14,
                                              verticalAlign: "middle",
                                            }}
                                          />{" "}
                                          Appeler
                                        </a>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>

                    <tr>
                      <td
                        style={{
                          backgroundColor: "#1a2821",
                          padding: "32px 24px",
                          textAlign: "center",
                        }}
                      >
                        <table role="presentation" width="100%" cellPadding={0} cellSpacing={0}>
                          <tbody>
                            <tr>
                              <td style={{ textAlign: "center", paddingBottom: "24px" }}>
                                <Img
                                  src="https://res.cloudinary.com/ddpoq8ufw/image/upload/v1734908167/Green%20Expert/u137zv9bapnk6uaeulhq.png"
                                  width={180}
                                  alt="Green Expert"
                                  style={{
                                    display: "block",
                                    margin: "0 auto",
                                    filter: "brightness(0) invert(1)",
                                  }}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <table role="presentation" width="100%" cellPadding={0} cellSpacing={0}>
                                  <tbody>
                                    <tr>
                                      <td style={{ width: "50%", verticalAlign: "top", paddingRight: "12px" }}>
                                        <Text
                                          style={{
                                            color: "#9bbb2d",
                                            fontSize: 14,
                                            fontWeight: 600,
                                            margin: "0 0 8px 0",
                                          }}
                                        >
                                          Contact
                                        </Text>
                                        <Text
                                          style={{ color: "#ffffff", fontSize: 12, margin: "4px 0", lineHeight: 1.4 }}
                                        >
                                          <img
                                            src="https://res.cloudinary.com/dux6wfype/image/upload/v1757786879/Lucide_Phone_Icon_d15gt2.png"
                                            alt="Phone"
                                            style={{
                                              display: "inline",
                                              marginRight: 4,
                                              width: 12,
                                              height: 12,
                                              verticalAlign: "middle",
                                            }}
                                          />{" "}
                                          +212 661-967903
                                        </Text>
                                        <Text
                                          style={{ color: "#ffffff", fontSize: 12, margin: "4px 0", lineHeight: 1.4 }}
                                        >
                                          <img
                                            src="https://res.cloudinary.com/dux6wfype/image/upload/v1757786879/Lucide_Phone_Icon_d15gt2.png"
                                            alt="Phone"
                                            style={{
                                              display: "inline",
                                              marginRight: 4,
                                              width: 12,
                                              height: 12,
                                              verticalAlign: "middle",
                                            }}
                                          />{" "}
                                          +212 530-312466
                                        </Text>
                                        <Text
                                          style={{ color: "#ffffff", fontSize: 12, margin: "4px 0", lineHeight: 1.4 }}
                                        >
                                          <img
                                            src="https://res.cloudinary.com/dux6wfype/image/upload/v1757786878/mail_y1jgtu.png"
                                            alt="Mail"
                                            style={{
                                              display: "inline",
                                              marginRight: 4,
                                              width: 12,
                                              height: 12,
                                              verticalAlign: "middle",
                                            }}
                                          />{" "}
                                          contact@greenexpert.ma
                                        </Text>
                                      </td>
                                      <td style={{ width: "50%", verticalAlign: "top", paddingLeft: "12px" }}>
                                        <Text
                                          style={{
                                            color: "#9bbb2d",
                                            fontSize: 14,
                                            fontWeight: 600,
                                            margin: "0 0 8px 0",
                                          }}
                                        >
                                          Suivez-nous
                                        </Text>
                                        <Text
                                          style={{ color: "#ffffff", fontSize: 12, margin: "4px 0", lineHeight: 1.4 }}
                                        >
                                          <Link
                                            href="https://www.instagram.com/greenexpertmaroc"
                                            style={{ color: "#ffffff", textDecoration: "none" }}
                                          >
                                            <img
                                              src="https://res.cloudinary.com/dux6wfype/image/upload/v1757786879/Instagram_favnvh.png"
                                              alt="Instagram"
                                              style={{
                                                display: "inline",
                                                marginRight: 4,
                                                width: 12,
                                                height: 12,
                                                verticalAlign: "middle",
                                              }}
                                            />{" "}
                                            @greenexpertmaroc
                                          </Link>
                                        </Text>
                                        <Text
                                          style={{ color: "#ffffff", fontSize: 12, margin: "4px 0", lineHeight: 1.4 }}
                                        >
                                          <Link
                                            href="https://www.linkedin.com/company/greenexpert"
                                            style={{ color: "#ffffff", textDecoration: "none" }}
                                          >
                                            <img
                                              src="https://res.cloudinary.com/dux6wfype/image/upload/v1757786878/linkedin_whs3uj.png"
                                              alt="LinkedIn"
                                              style={{
                                                display: "inline",
                                                marginRight: 4,
                                                width: 12,
                                                height: 12,
                                                verticalAlign: "middle",
                                              }}
                                            />{" "}
                                            Green Expert
                                          </Link>
                                        </Text>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ paddingTop: "20px", borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}>
                                <Text
                                  style={{
                                    color: "rgba(255, 255, 255, 0.6)",
                                    fontSize: 11,
                                    margin: 0,
                                    textAlign: "center",
                                  }}
                                >
                                  © {new Date().getFullYear()} Green Expert. Tous droits réservés.
                                </Text>
                                <Text
                                  style={{
                                    color: "rgba(255, 255, 255, 0.5)",
                                    fontSize: 10,
                                    margin: "4px 0 0 0",
                                    textAlign: "center",
                                  }}
                                >
                                  Résidence Assafae 05 Imm 41 Appt 12, Al Quods, Laayayda - Salé
                                </Text>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </Body>
    </Html>
  )
}

interface ClientEmailProps {
  name: string
  projectType?: string
  message: string
  baseUrl: string
}

export function ClientEmailTemplate({ name, projectType, message, baseUrl }: ClientEmailProps) {
  const ctaUrl = `${baseUrl}/#projets`
  return (
    <Html>
      <Head />
      <Body
        style={{
          backgroundColor: "#f8faf9",
          margin: 0,
          fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
        }}
      >
        <table
          role="presentation"
          width="100%"
          cellPadding={0}
          cellSpacing={0}
          style={{ backgroundColor: "#f8faf9", borderCollapse: "collapse", padding: "40px 16px" }}
        >
          <tr>
            <td align="center">
              <table
                role="presentation"
                width={600}
                cellPadding={0}
                cellSpacing={0}
                style={{
                  width: "100%",
                  maxWidth: 600,
                  backgroundColor: "#ffffff",
                  borderRadius: 20,
                  overflow: "hidden",
                  borderCollapse: "collapse",
                  boxShadow: "0 10px 40px rgba(26, 40, 33, 0.1)",
                }}
              >
                {/* Header */}
                <tr>
                  <td
                    style={{
                      background: "linear-gradient(135deg, #0f1a13 0%, #1a2821 50%, #243529 100%)",
                      padding: "40px 24px",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.95)",
                        borderRadius: 16,
                        padding: "20px 32px",
                        display: "inline-block",
                        marginBottom: 16,
                        border: "1px solid rgba(255, 255, 255, 0.3)",
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <Img
                        src="https://res.cloudinary.com/ddpoq8ufw/image/upload/v1734908167/Green%20Expert/u137zv9bapnk6uaeulhq.png"
                        width={180}
                        alt="Green Expert"
                        style={{
                          display: "block",
                          margin: "0 auto",
                        }}
                      />
                    </div>
                    <Text
                      style={{
                        color: "#ffffff",
                        margin: "0",
                        fontSize: 18,
                        fontWeight: 700,
                        letterSpacing: 0.5,
                        textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                      }}
                    >
                      <img
                        src="https://res.cloudinary.com/dux6wfype/image/upload/v1757786878/circle-check_enmzdj.png"
                        alt="Check"
                        style={{ display: "inline", marginRight: 8, width: 16, height: 16, verticalAlign: "middle" }}
                      />{" "}
                      Merci pour votre confiance
                    </Text>
                  </td>
                </tr>

                {/* Main Content */}
                <tr>
                  <td style={{ padding: "32px 24px" }}>
                    <Text
                      style={{
                        color: "#1a2821",
                        fontSize: 28,
                        fontWeight: 800,
                        marginTop: 0,
                        marginBottom: 8,
                        lineHeight: 1.2,
                      }}
                    >
                      Bonjour {name} ! 👋
                    </Text>
                    <Text style={{ color: "#6b7280", fontSize: 16, margin: "0 0 32px 0", lineHeight: 1.6 }}>
                      Nous avons bien reçu votre demande et nous vous en remercions.
                    </Text>

                    <table
                      role="presentation"
                      width="100%"
                      cellPadding={0}
                      cellSpacing={0}
                      style={{
                        backgroundColor: "#f0f9ff",
                        borderRadius: 20,
                        border: "3px solid #0ea5e9",
                        marginBottom: 32,
                        boxShadow: "0 8px 25px rgba(14, 165, 233, 0.15)",
                      }}
                    >
                      <tr>
                        <td style={{ padding: 32, textAlign: "center" }}>
                          <img
                            src="https://res.cloudinary.com/dux6wfype/image/upload/v1757786878/Leaf_vqmsr6.png"
                            alt="Leaf"
                            style={{ width: 56, height: 56, marginBottom: 16 }}
                          />
                          <Text style={{ margin: "0 0 12px 0", fontSize: 22, fontWeight: 800, color: "#0369a1" }}>
                            Demande Confirmée
                          </Text>
                          <Text style={{ margin: 0, fontSize: 16, color: "#0369a1", lineHeight: 1.7, fontWeight: 500 }}>
                            Notre équipe d&apos;experts va examiner votre projet et vous contactera dans les{" "}
                            <span
                              style={{
                                backgroundColor: "#0ea5e9",
                                color: "#ffffff",
                                padding: "4px 12px",
                                borderRadius: 8,
                                fontWeight: 700,
                              }}
                            >
                              24-48 heures
                            </span>
                            .
                          </Text>
                        </td>
                      </tr>
                    </table>

                    <table
                      role="presentation"
                      width="100%"
                      cellPadding={0}
                      cellSpacing={0}
                      style={{
                        backgroundColor: "#f8faf9",
                        borderRadius: 16,
                        border: "2px solid #e6efe8",
                        marginBottom: 32,
                      }}
                    >
                      <tr>
                        <td style={{ padding: 24 }}>
                          <Text
                            style={{
                              marginTop: 0,
                              color: "#1a2821",
                              fontSize: 18,
                              fontWeight: 700,
                              marginBottom: 16,
                            }}
                          >
                            <img
                              src="https://res.cloudinary.com/dux6wfype/image/upload/v1757786878/message-square_ovn3r4.png"
                              alt="Message"
                              style={{
                                display: "inline",
                                marginRight: 8,
                                width: 18,
                                height: 18,
                                verticalAlign: "middle",
                              }}
                            />{" "}
                            Récapitulatif de votre demande
                          </Text>

                          <Text style={{ margin: "0 0 8px 0", fontSize: 15, lineHeight: 1.6 }}>
                            <span
                              style={{
                                color: "#6b7280",
                                fontWeight: 600,
                                display: "inline-block",
                                width: 120,
                              }}
                            >
                              Type de projet:
                            </span>
                            <span
                              style={{
                                color: "#9bbb2d",
                                fontWeight: 700,
                                backgroundColor: "#9bbb2d20",
                                padding: "4px 8px",
                                borderRadius: 6,
                                fontSize: 13,
                              }}
                            >
                              {projectType || "Consultation générale"}
                            </span>
                          </Text>

                          <Text
                            style={{
                              margin: "16px 0 8px 0",
                              color: "#6b7280",
                              fontWeight: 600,
                              fontSize: 14,
                            }}
                          >
                            Votre message:
                          </Text>
                          <Text
                            style={{
                              margin: 0,
                              lineHeight: 1.6,
                              fontSize: 14,
                              color: "#374151",
                              backgroundColor: "#ffffff",
                              padding: 12,
                              borderRadius: 8,
                              borderLeft: "3px solid #9bbb2d",
                            }}
                          >
                            {message}
                          </Text>
                        </td>
                      </tr>
                    </table>

                    <table
                      role="presentation"
                      width="100%"
                      cellPadding={0}
                      cellSpacing={0}
                      style={{ textAlign: "center", marginBottom: 24 }}
                    >
                      <tr>
                        <td>
                          <Text style={{ margin: "0 0 24px 0", fontSize: 18, color: "#6b7280", fontWeight: 500 }}>
                            En attendant, découvrez nos réalisations
                          </Text>
                          <a
                            href={ctaUrl}
                            style={{
                              display: "inline-block",
                              background: "linear-gradient(135deg, #9bbb2d, #7a9625)",
                              color: "#ffffff",
                              padding: "18px 36px",
                              borderRadius: 50,
                              textDecoration: "none",
                              fontWeight: 700,
                              fontSize: 16,
                              boxShadow: "0 8px 20px rgba(155, 187, 45, 0.3)",
                              textTransform: "uppercase",
                              letterSpacing: 0.5,
                            }}
                          >
                            <img
                              src="https://res.cloudinary.com/dux6wfype/image/upload/v1757786878/Leaf_vqmsr6.png"
                              alt="Leaf"
                              style={{
                                display: "inline",
                                marginRight: 8,
                                width: 16,
                                height: 16,
                                verticalAlign: "middle",
                              }}
                            />{" "}
                            Voir Nos Projets
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                {/* Footer */}
                <tr>
                  <td
                    style={{
                      backgroundColor: "#1a2821",
                      padding: "32px 24px",
                      textAlign: "center",
                    }}
                  >
                    <table role="presentation" width="100%" cellPadding={0} cellSpacing={0}>
                      <tr>
                        <td style={{ textAlign: "center", paddingBottom: "24px" }}>
                          <Img
                            src="https://res.cloudinary.com/ddpoq8ufw/image/upload/v1734908167/Green%20Expert/u137zv9bapnk6uaeulhq.png"
                            width={180}
                            alt="Green Expert"
                            style={{
                              display: "block",
                              margin: "0 auto",
                              filter: "brightness(0) invert(1)",
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <table role="presentation" width="100%" cellPadding={0} cellSpacing={0}>
                            <tr>
                              <td style={{ width: "50%", verticalAlign: "top", paddingRight: "12px" }}>
                                <Text
                                  style={{
                                    color: "#9bbb2d",
                                    fontSize: 14,
                                    fontWeight: 600,
                                    margin: "0 0 8px 0",
                                  }}
                                >
                                  Contact
                                </Text>
                                <Text style={{ color: "#ffffff", fontSize: 12, margin: "4px 0", lineHeight: 1.4 }}>
                                  <img
                                    src="https://res.cloudinary.com/dux6wfype/image/upload/v1757786879/Lucide_Phone_Icon_d15gt2.png"
                                    alt="Phone"
                                    style={{
                                      display: "inline",
                                      marginRight: 4,
                                      width: 12,
                                      height: 12,
                                      verticalAlign: "middle",
                                    }}
                                  />{" "}
                                  +212 661-967903
                                </Text>
                                <Text style={{ color: "#ffffff", fontSize: 12, margin: "4px 0", lineHeight: 1.4 }}>
                                  <img
                                    src="https://res.cloudinary.com/dux6wfype/image/upload/v1757786879/Lucide_Phone_Icon_d15gt2.png"
                                    alt="Phone"
                                    style={{
                                      display: "inline",
                                      marginRight: 4,
                                      width: 12,
                                      height: 12,
                                      verticalAlign: "middle",
                                    }}
                                  />{" "}
                                  +212 530-312466
                                </Text>
                                <Text style={{ color: "#ffffff", fontSize: 12, margin: "4px 0", lineHeight: 1.4 }}>
                                  <img
                                    src="https://res.cloudinary.com/dux6wfype/image/upload/v1757786878/mail_y1jgtu.png"
                                    alt="Mail"
                                    style={{
                                      display: "inline",
                                      marginRight: 4,
                                      width: 12,
                                      height: 12,
                                      verticalAlign: "middle",
                                    }}
                                  />{" "}
                                  contact@greenexpert.ma
                                </Text>
                              </td>
                              <td style={{ width: "50%", verticalAlign: "top", paddingLeft: "12px" }}>
                                <Text
                                  style={{
                                    color: "#9bbb2d",
                                    fontSize: 14,
                                    fontWeight: 600,
                                    margin: "0 0 8px 0",
                                  }}
                                >
                                  Suivez-nous
                                </Text>
                                <Text style={{ color: "#ffffff", fontSize: 12, margin: "4px 0", lineHeight: 1.4 }}>
                                  <Link
                                    href="https://www.instagram.com/greenexpertmaroc"
                                    style={{ color: "#ffffff", textDecoration: "none" }}
                                  >
                                    <img
                                      src="https://res.cloudinary.com/dux6wfype/image/upload/v1757786879/Instagram_favnvh.png"
                                      alt="Instagram"
                                      style={{
                                        display: "inline",
                                        marginRight: 4,
                                        width: 12,
                                        height: 12,
                                        verticalAlign: "middle",
                                      }}
                                    />{" "}
                                    @greenexpertmaroc
                                  </Link>
                                </Text>
                                <Text style={{ color: "#ffffff", fontSize: 12, margin: "4px 0", lineHeight: 1.4 }}>
                                  <Link
                                    href="https://www.linkedin.com/company/greenexpert"
                                    style={{ color: "#ffffff", textDecoration: "none" }}
                                  >
                                    <img
                                      src="https://res.cloudinary.com/dux6wfype/image/upload/v1757786878/linkedin_whs3uj.png"
                                      alt="LinkedIn"
                                      style={{
                                        display: "inline",
                                        marginRight: 4,
                                        width: 12,
                                        height: 12,
                                        verticalAlign: "middle",
                                      }}
                                    />{" "}
                                    Green Expert
                                  </Link>
                                </Text>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ paddingTop: "20px", borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}>
                          <Text
                            style={{
                              color: "rgba(255, 255, 255, 0.6)",
                              fontSize: 11,
                              margin: 0,
                              textAlign: "center",
                            }}
                          >
                            © {new Date().getFullYear()} Green Expert. Tous droits réservés.
                          </Text>
                          <Text
                            style={{
                              color: "rgba(255, 255, 255, 0.5)",
                              fontSize: 10,
                              margin: "4px 0 0 0",
                              textAlign: "center",
                            }}
                          >
                            Résidence Assafae 05 Imm 41 Appt 12, Al Quods, Laayayda - Salé
                          </Text>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </Body>
    </Html>
  )
}
