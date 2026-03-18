import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  glow?: "cyan" | "electric" | "none";
  gradient?: boolean;
}

export default function Card({
  children,
  className = "",
  glow = "none",
  gradient = false,
}: CardProps) {
  const glowClass =
    glow === "cyan"
      ? "glow-cyan"
      : glow === "electric"
      ? "glow-electric"
      : "";

  const wrapperClass = gradient ? "gradient-border" : "";

  return (
    <div className={wrapperClass}>
      <div
        className={`
          bg-[#111820] border border-[#1e2a38] rounded-xl p-6
          ${glowClass}
          ${className}
        `}
      >
        {children}
      </div>
    </div>
  );
}
