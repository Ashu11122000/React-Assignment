import type { HTMLAttributes } from "react";

import { cn } from "../../utils/cn";

/**
 * ==========================================================
 * Divider Component
 * ==========================================================
 *
 * A reusable divider for separating sections and content.
 *
 * Features
 * ----------
 * ✓ Horizontal Divider
 * ✓ Vertical Divider
 * ✓ Gradient Variants
 * ✓ Configurable Spacing
 * ✓ Dark / Light Theme
 * ✓ Responsive
 * ✓ TypeScript
 * ✓ Reusable
 *
 * Used In
 * ----------
 * Experience
 * Projects
 * Resume
 * Contact
 * About
 * Services
 * ==========================================================
 */

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";

  variant?: "default" | "gradient" | "subtle";

  spacing?: "none" | "sm" | "md" | "lg";
}

const spacingClasses = {
  none: "",

  sm: "my-3",

  md: "my-6",

  lg: "my-10",
};

function Divider({
  className,

  orientation = "horizontal",

  variant = "gradient",

  spacing = "md",

  ...props
}: DividerProps) {
  const isHorizontal = orientation === "horizontal";

  return (
    <div
      className={cn(
        "shrink-0",

        spacingClasses[spacing],

        isHorizontal ? "w-full h-px" : "h-full w-px",

        variant === "default" && ["bg-slate-200", "dark:bg-slate-700"],

        variant === "subtle" && ["bg-slate-100", "dark:bg-slate-800"],

        variant === "gradient" &&
          (isHorizontal
            ? "bg-linear-to-r from-transparent via-indigo-500/40 to-transparent"
            : "bg-linear-to-b from-transparent via-indigo-500/40 to-transparent"),

        className,
      )}
      aria-hidden="true"
      {...props}
    />
  );
}

export default Divider;
