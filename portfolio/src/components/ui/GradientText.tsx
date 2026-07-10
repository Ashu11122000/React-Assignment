import type { ReactNode } from "react";

import { cn } from "../../utils/cn";

/**
 * ==========================================================
 * Gradient Text
 * ==========================================================
 */

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

function GradientText({ children, className }: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-linear-to-r",
        "from-indigo-500",
        "via-violet-500",
        "to-cyan-500",
        "bg-clip-text",
        "text-transparent",
        className,
      )}
    >
      {children}
    </span>
  );
}

export default GradientText;
