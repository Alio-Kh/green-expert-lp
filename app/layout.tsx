import { siteUrl, business, jsonLd } from "@/lib/site";
import type { Metadata, Viewport } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Analytics } from "@/components/analytics";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl("/")),
  title: {
    default: "Green Expert | Paysagiste au Maroc",
    template: "%s | Green Expert",
  },
  description:
    "Green Expert conçoit, réalise et entretient des jardins et espaces verts durables au Maroc.",
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION || undefined },
  applicationName: "Green Expert",
  authors: [{ name: "Green Expert", url: siteUrl("/") }],
  creator: "Green Expert",
  publisher: "Green Expert",
  category: "Paysagisme",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
    shortcut: "/logo.png",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Green Expert | Paysagiste au Maroc",
    description:
      "Conception, réalisation, irrigation et entretien d’espaces verts adaptés au climat marocain.",
    url: siteUrl("/"),
    siteName: "Green Expert",
    locale: "fr_MA",
    type: "website",
    images: [
      {
        url: "/cover.png",
        width: 1200,
        height: 630,
        alt: "Green Expert, entreprise de paysagisme au Maroc",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Green Expert | Paysagiste au Maroc",
    description:
      "Conception, réalisation et entretien d’espaces verts au Maroc.",
    images: ["/cover.png"],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#17251e" },
    { media: "(prefers-color-scheme: dark)", color: "#101a15" },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr-MA">
      <body
        className={`${geistSans.variable} ${playfair.variable} bg-[#17251e] antialiased`}
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd({ "@context": "https://schema.org", "@graph": [business, { "@type": "WebSite", "@id": siteUrl("/#website"), url: siteUrl(), name: "Green Expert", inLanguage: "fr-MA", publisher: { "@id": business["@id"] } }] }) }} />
        {children}
        <Toaster />
        <Analytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
      </body>
    </html>
  );
}
