interface SectionDividerProps {
  variant: "dark-to-light" | "light-to-dark";
}

export function SectionDivider({ variant }: SectionDividerProps) {
  if (variant === "dark-to-light") {
    return (
      <div
        className="h-20 bg-gradient-to-b from-[#1a2821] to-[#fafaf5]"
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      className="h-20 bg-gradient-to-b from-[#fafaf5] to-[#1a2821]"
      aria-hidden="true"
    />
  );
}
