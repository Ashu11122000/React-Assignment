import { forwardRef } from "react";

import { cn } from "../../utils/cn";

import type { HTMLAttributes } from "react";

/**
 * ==========================================================
 * Card Component
 * ==========================================================
 *
 * Premium reusable card component used throughout
 * the portfolio application.
 *
 * Features
 * ----------
 * ✓ Glassmorphism
 * ✓ Hover Animation
 * ✓ Border Glow
 * ✓ Responsive
 * ✓ Dark / Light Theme
 * ✓ Forward Ref Support
 * ✓ Custom className
 * ✓ Tailwind CSS v4
 * ✓ TypeScript Strict
 *
 * Used By
 * ----------
 * - Hero Stats
 * - About Cards
 * - Education Cards
 * - Skill Cards
 * - Experience Cards
 * - Project Cards
 * - Certification Cards
 * - Contact Cards
 *
 * ==========================================================
 */

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  glass?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, hover = true, glass = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base
          "relative overflow-hidden rounded-3xl",

          // Padding
          "p-6",

          // Border
          "border border-slate-200/70 dark:border-slate-700/60",

          // Background
          glass
            ? "bg-white/70 backdrop-blur-xl dark:bg-slate-900/60"
            : "bg-white dark:bg-slate-900",

          // Shadow
          "shadow-lg shadow-slate-200/20",
          "dark:shadow-black/30",

          // Transition
          "transition-all duration-500 ease-out",

          // Hover
          hover && [
            "hover:-translate-y-2",
            "hover:shadow-2xl",
            "hover:shadow-violet-500/10",
            "hover:border-violet-400/40",
          ],

          className,
        )}
        {...props}
      >
        {/* Decorative Glow */}

        <div
          className={cn(
            "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500",

            hover && "group-hover:opacity-100",
          )}
        >
          <div
            className="
              absolute
              -top-20
              right-0
              h-40
              w-40
              rounded-full
              bg-violet-500/10
              blur-3xl
            "
          />

          <div
            className="
              absolute
              -bottom-20
              -left-10
              h-40
              w-40
              rounded-full
              bg-cyan-500/10
              blur-3xl
            "
          />
        </div>

        {/* Content */}

        <div className="relative z-10">{children}</div>
      </div>
    );
  },
);

Card.displayName = "Card";

export default Card;
