import { CheckCircle2 } from "lucide-react";

import SkillProgress from "./SkillProgress";

import Card from "../common/Card";

import { cn } from "../../utils/cn";

import type { SkillCardProps } from "../../types/skill";

/**
 * ==========================================================
 * SkillCard Component
 * ==========================================================
 *
 * Displays a premium glassmorphism skill category card.
 *
 * Features
 * ----------
 * ✓ Glassmorphism Design
 * ✓ Gradient Icon
 * ✓ Skill Category
 * ✓ Skill Count
 * ✓ Technology List
 * ✓ Animated Progress Bar
 * ✓ Hover Animation
 * ✓ Responsive
 * ✓ Tailwind CSS v4
 * ✓ TypeScript Strict
 *
 * Used By
 * ----------
 * - SkillGrid.tsx
 *
 * ==========================================================
 */

const SkillCard = ({
  category,
}: SkillCardProps) => {
  const Icon = category.icon;

  return (
    <Card
      className={cn(
        "group h-full rounded-3xl border border-slate-200/60",
        "bg-white/70 backdrop-blur-xl",
        "transition-all duration-500",
        "hover:-translate-y-2",
        "hover:border-violet-400/40",
        "hover:shadow-2xl",
        "dark:border-slate-700/60",
        "dark:bg-slate-900/60"
      )}
    >
      {/* Header */}

      <div className="mb-6 flex items-start justify-between">
        <div
          className={cn(
            "flex h-14 w-14 items-center justify-center rounded-2xl",
            "bg-linear-to-br",
            category.color,
            "shadow-lg"
          )}
        >
          <Icon
            size={28}
            className="text-white"
          />
        </div>

        <div className="text-right">
          <p className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">
            Skills
          </p>

          <h3 className="mt-1 text-xl font-bold text-slate-900 dark:text-white">
            {category.title}
          </h3>
        </div>
      </div>

      {/* Technologies */}

      <div className="mb-6">
        <div className="mb-4 flex items-center justify-between">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            Technologies
          </h4>

          <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-600 dark:text-violet-300">
            {category.skills.length}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <div
              key={skill.id}
              className={cn(
                "inline-flex items-center gap-2",
                "rounded-full",
                "border border-slate-200",
                "bg-slate-100/70",
                "px-3 py-2",
                "text-sm",
                "transition-all duration-300",
                "group-hover:border-violet-300",
                "group-hover:bg-violet-500/10",
                "dark:border-slate-700",
                "dark:bg-slate-800/60"
              )}
            >
              <CheckCircle2
                size={15}
                className="text-violet-500"
              />

              <span className="font-medium text-slate-700 dark:text-slate-200">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}

      <div className="mt-auto space-y-4">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium text-slate-500 dark:text-slate-400">
            Overall Proficiency
          </span>

          <span className="font-bold text-violet-600 dark:text-violet-400">
            {category.percentage}%
          </span>
        </div>

        <SkillProgress
          value={category.percentage}
        />
      </div>
    </Card>
  );
};

export default SkillCard;