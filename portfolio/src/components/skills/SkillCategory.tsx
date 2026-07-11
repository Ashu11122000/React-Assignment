import SkillCard from "./SkillCard";

import { cn } from "../../utils/cn";

import type { SkillCategory as SkillCategoryType } from "../../types/skill";

/**
 * ==========================================================
 * SkillCategory Component
 * ==========================================================
 *
 * Wraps a single skill category and renders
 * its corresponding SkillCard.
 *
 * Responsibilities
 * ----------------
 * ✓ Category Section Wrapper
 * ✓ Category Header
 * ✓ Optional Description
 * ✓ Decorative Divider
 * ✓ Renders SkillCard
 * ✓ Responsive
 * ✓ Reusable
 *
 * Used By
 * ----------
 * - SkillGrid.tsx
 *
 * ==========================================================
 */

interface SkillCategoryProps {
  category: SkillCategoryType;
  className?: string;
}

const SkillCategory = ({
  category,
  className,
}: SkillCategoryProps) => {
  const Icon = category.icon;

  return (
    <section
      className={cn(
        "space-y-5",
        className
      )}
    >
      {/* Category Header */}

      <header className="flex items-center gap-4">
        <div
          className={cn(
            "flex h-12 w-12 items-center justify-center",
            "rounded-2xl",
            "bg-linear-to-br",
            category.color,
            "shadow-lg"
          )}
        >
          <Icon
            size={22}
            className="text-white"
          />
        </div>

        <div className="flex-1">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            {category.title}
          </h2>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {category.skills.length} Technologies
          </p>
        </div>
      </header>

      {/* Decorative Divider */}

      <div
        className="
          h-px
          w-full
          bg-linear-to-r
          from-transparent
          via-violet-500/30
          to-transparent
        "
      />

      {/* Card */}

      <SkillCard category={category} />
    </section>
  );
};

export default SkillCategory;