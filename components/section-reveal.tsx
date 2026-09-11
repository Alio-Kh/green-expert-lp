interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
}

// Essential content is visible in server HTML and when JavaScript is unavailable.
export function SectionReveal({ children, className }: SectionRevealProps) {
  return <div className={className}>{children}</div>;
}
