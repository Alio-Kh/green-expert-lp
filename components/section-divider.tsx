interface SectionDividerProps {
  variant: "dark-to-light" | "light-to-dark";
}

export function SectionDivider({ variant }: SectionDividerProps) {
  if (variant === "dark-to-light") {
    return (
      <div
        className="h-16 bg-gradient-to-b from-[#17251e] to-[#fafaf5] md:h-20"
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      className="h-16 bg-gradient-to-b from-[#fafaf5] to-[#17251e] md:h-20"
      aria-hidden="true"
    />
  );
}
