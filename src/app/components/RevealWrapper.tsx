"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface RevealWrapperProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  className?: string;
}

export default function RevealWrapper({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: RevealWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setRevealed(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  const translateClass = {
    up: revealed ? "translate-y-0" : "translate-y-12",
    left: revealed ? "translate-x-0" : "translate-x-12",
    right: revealed ? "translate-x-0" : "-translate-x-12",
    none: "",
  }[direction];

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        revealed ? "opacity-100" : "opacity-0"
      } ${translateClass} ${className}`}
    >
      {children}
    </div>
  );
}