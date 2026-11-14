"use client";

import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from "react";

interface RevealProps {
  as?: "div" | "section" | "figure" | "li" | "article" | "header";
  children: ReactNode;
  className?: string;
  /** Stagger, in milliseconds. */
  delay?: number;
}

// Content stays visible in server HTML and without JavaScript: an element is
// only hidden after hydration, and only if it is still below the viewport.
export function Reveal({ as = "div", children, className, delay = 0 }: RevealProps) {
  const Tag = as as ElementType;
  const ref = useRef<HTMLElement>(null);
  const [state, setState] = useState<"pending" | "shown">();

  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (element.getBoundingClientRect().top < window.innerHeight * 0.92) return;
    setState("pending");
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setState("shown");
      observer.disconnect();
    }, { rootMargin: "0px 0px -8% 0px" });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal={state}
      className={className}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
