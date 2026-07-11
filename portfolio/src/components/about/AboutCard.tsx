import type { ReactNode } from "react";

import GlassCard from "../ui/GlassCard";

import { cn } from "../../utils/cn";

/**
 * ==========================================================
 * About Card Component
 * ==========================================================
 *
 * Reusable glassmorphism card used throughout the
 * About section.
 *
 * Features
 * ----------
 * ✓ Premium Glass UI
 * ✓ Responsive
 * ✓ Hover Animation
 * ✓ Theme Aware
 * ✓ Reusable
 * ✓ Accessible
 *
 * Used By
 * ----------
 * ✓ PersonalInfo
 * ✓ EducationCard
 * ✓ Future Achievement Cards
 * ✓ Contact Cards
 *
 * ==========================================================
 */

interface AboutCardProps {
  /**
   * Card content.
   */
  children: ReactNode;

  /**
   * Optional title.
   */
  title?: string;

  /**
   * Optional icon.
   */
  icon?: ReactNode;

  /**
   * Additional Tailwind classes.
   */
  className?: string;
}

function AboutCard({
  children,
  title,
  icon,
  className,
}: AboutCardProps) {
  return (
    <GlassCard
      className={cn(
        "relative overflow-hidden rounded-3xl p-6 transition-all duration-500",
        "hover:-translate-y-1 hover:shadow-2xl",
        "hover:shadow-indigo-500/10",
        className
      )}
    >
      {/* Decorative Glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-40
          w-40
          rounded-full
          bg-indigo-500/10
          blur-3xl
        "
      />

      {(title || icon) && (
        <header className="relative z-10 mb-6 flex items-center gap-3">
          {icon && (
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                bg-linear-to-br
                from-indigo-500
                via-violet-500
                to-cyan-500
                text-white
                shadow-lg
              "
            >
              {icon}
            </div>
          )}

          {title && (
            <h3
              className="
                text-xl
                font-semibold
                text-slate-900
                dark:text-white
              "
            >
              {title}
            </h3>
          )}
        </header>
      )}

      <div className="relative z-10">
        {children}
      </div>
    </GlassCard>
  );
}

export default AboutCard;