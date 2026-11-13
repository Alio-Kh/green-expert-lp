export type ContactEvent = "contact_whatsapp_click" | "contact_phone_click" | "contact_email_click" | "generate_lead";

type AnalyticsWindow = Window & {
  gtag?: (...args: unknown[]) => void;
};

// Track actions, never names, email addresses, phone numbers or form text.
export function trackContactEvent(name: ContactEvent) {
  if (typeof window === "undefined") return;
  (window as AnalyticsWindow).gtag?.("event", name, {
    page_path: window.location.pathname,
    page_location: `${window.location.origin}${window.location.pathname}`,
    ...(name === "generate_lead" ? { method: "contact_form" } : {}),
  });
}
