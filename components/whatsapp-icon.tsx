import type { SVGProps } from "react";

export function WhatsAppIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path
        d="M20.5 11.65a8.5 8.5 0 0 1-12.58 7.46L3.5 20.5l1.42-4.25A8.5 8.5 0 1 1 20.5 11.65Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.35 7.7c.2-.45.42-.46.65-.47h.55c.18 0 .4.07.5.36l.75 1.82c.08.2.04.42-.08.59l-.56.71a.42.42 0 0 0-.04.48 7.34 7.34 0 0 0 2.91 2.55c.2.1.43.05.57-.12l.73-.89c.17-.21.45-.27.7-.17l1.74.82c.26.12.42.39.38.67-.1.77-.5 1.47-1.12 1.93-.59.44-1.38.6-2.08.38-1.44-.45-3.51-1.4-5.15-3.23-1.28-1.43-2.06-3.03-2.24-4.08-.09-.53.02-.98.29-1.35Z"
        fill="currentColor"
      />
    </svg>
  );
}
