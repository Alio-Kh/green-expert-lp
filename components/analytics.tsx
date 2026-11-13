"use client";

import { useEffect } from "react";
import Script from "next/script";
import { trackContactEvent } from "@/lib/analytics";

export function Analytics({ measurementId }: { measurementId?: string }) {
  const enabled = !!measurementId && /^G-[A-Z0-9]+$/.test(measurementId);
  useEffect(() => {
    if (!enabled) return;
    const onClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const anchor = event.target.closest("a");
      if (!anchor) return;
      const url = new URL(anchor.href, window.location.origin);
      if (url.hostname === "wa.me") trackContactEvent("contact_whatsapp_click");
      else if (url.protocol === "tel:") trackContactEvent("contact_phone_click");
      else if (url.protocol === "mailto:") trackContactEvent("contact_email_click");
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [enabled]);

  if (!enabled) return null;
  return <>
    <Script id="green-expert-analytics" strategy="afterInteractive">{`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${measurementId}', {
        allow_google_signals: false,
        allow_ad_personalization_signals: false
      });
    `}</Script>
    <Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />
  </>;
}
