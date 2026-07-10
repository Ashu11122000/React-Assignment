import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "../../utils/cn";

/**
 * ==========================================================
 * GlassCard Component
 * ==========================================================
 *
 * A reusable premium glassmorphism card.
 *
 * Features
 * ----------
 * ✓ Glass Effect
 * ✓ Dark Mode
 * ✓ Hover Animation
 * ✓ Optional Hover
 * ✓ Optional Padding
 * ✓ Rounded Corners
 * ✓ Reusable
 * ✓ TypeScript
 *
 * ==========================================================
 */

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;

  hover?: boolean;

  padding?: "none" | "sm" | "md" | "lg";
}

const paddingClasses = {
  none: "",

  sm: "p-4",

  md: "p-6",

  lg: "p-8",
};

function GlassCard({
  children,

  className,

  hover = true,

  padding = "md",

  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        // Base
        "relative overflow-hidden",

        // Radius
        "rounded-3xl",

        // Glass Effect
        "border border-white/10",
        "bg-white/5",
        "backdrop-blur-2xl",

        // Shadow
        "shadow-xl shadow-black/10",

        // Dark Mode
        "dark:border-slate-700/40",
        "dark:bg-slate-900/40",

        // Transition
        "transition-all duration-300",

        hover && [
          "hover:-translate-y-1",
          "hover:border-indigo-500/40",
          "hover:shadow-2xl",
          "hover:shadow-indigo-500/10",
        ],

        paddingClasses[padding],

        className,
      )}
      {...props}
    >
      {/* Glass Highlight */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-3xl
          bg-linear-to-br
          from-white/10
          via-transparent
          to-transparent
        "
      />

      {/* Content */}

      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default GlassCard;
