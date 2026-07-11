import SkillCategory from "./SkillCategory";

import skills from "../../data/skills";

import { cn } from "../../utils/cn";

import type { ComponentProps } from "../../types/common";

/**
 * ==========================================================
 * SkillGrid Component
 * ==========================================================
 *
 * Displays all skill categories in a responsive grid.
 *
 * Features
 * ----------
 * ✓ Responsive Grid Layout
 * ✓ Mobile First
 * ✓ Centralized Data
 * ✓ Reusable
 * ✓ Premium Spacing
 * ✓ Tailwind CSS v4
 * ✓ TypeScript Strict
 *
 * Used By
 * ----------
 * - Skills.tsx
 *
 * ==========================================================
 */

const SkillGrid = ({ className }: ComponentProps) => {
  return (
    <div
      className={cn(
        "grid gap-8",

        /*
        Responsive Columns

        Mobile  : 1
        Tablet  : 2
        Desktop : 3
        */

        "grid-cols-1",
        "md:grid-cols-2",
        "xl:grid-cols-3",

        className,
      )}
    >
      {skills.map((category) => (
        <SkillCategory key={category.id} category={category} />
      ))}
    </div>
  );
};

export default SkillGrid;
