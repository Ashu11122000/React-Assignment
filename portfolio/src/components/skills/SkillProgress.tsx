import { cn } from "../../utils/cn";

import type { SkillProgressProps } from "../../types/skill";

/**
 * ==========================================================
 * SkillProgress Component
 * ==========================================================
 *
 * Reusable animated progress bar used throughout
 * the Skills module.
 *
 * Features
 * ----------
 * ✓ Animated Width
 * ✓ Gradient Progress Bar
 * ✓ Percentage Label
 * ✓ Glassmorphism Compatible
 * ✓ Responsive
 * ✓ Accessible
 * ✓ Tailwind CSS v4
 * ✓ TypeScript Strict
 *
 * Used By
 * ----------
 * - SkillCard.tsx
 *
 * ==========================================================
 */

const SkillProgress = ({ value, className }: SkillProgressProps) => {
  /**
   * Clamp progress value
   * between 0 and 100.
   */
  const progress = Math.min(Math.max(value, 0), 100);

  return (
    <div className={cn("space-y-2", className)}>
      {/* Header */}

      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
          Proficiency
        </span>

        <span className="text-sm font-semibold text-violet-600 dark:text-violet-400">
          {progress}%
        </span>
      </div>

      {/* Progress Track */}

      <div
        className="relative h-3 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800"
        role="progressbar"
        aria-label="Skill proficiency"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progress}
      >
        {/* Animated Fill */}

        <div
          className="
            h-full
            rounded-full
            bg-linear-to-r
            from-violet-500
            via-fuchsia-500
            to-cyan-500
            transition-all
            duration-700
            ease-out
          "
          style={{
            width: `${progress}%`,
          }}
        />

        {/* Glow */}

        <div
          className="
            absolute
            inset-y-0
            rounded-full
            bg-white/20
            blur-sm
          "
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </div>
  );
};

export default SkillProgress;
