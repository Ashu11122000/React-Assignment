/**
 * ==========================================================
 * TechBadge Component
 * ==========================================================
 *
 * Reusable technology badge for project cards and modals.
 *
 * Features
 * ----------
 * ✓ Strongly Typed
 * ✓ Reusable
 * ✓ Responsive
 * ✓ Glassmorphism Styling
 * ✓ Hover Animation
 * ✓ Dark / Light Theme
 * ✓ Accessibility Friendly
 *
 * Used By
 * ----------
 * - ProjectCard.tsx
 * - ProjectModal.tsx
 * - FeaturedProjects.tsx
 *
 * ==========================================================
 */

import type { FC } from "react";

import { Code2 } from "lucide-react";

import type { ProjectTechnology } from "../../types/project";

interface TechBadgeProps {
  technology: ProjectTechnology;
  className?: string;
}

const TechBadge: FC<TechBadgeProps> = ({ technology, className = "" }) => {
  return (
    <span
      className={`
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-primary/20
                bg-primary/10
                px-3
                py-1.5
                text-xs
                font-medium
                text-primary
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-primary/40
                hover:bg-primary/15
                hover:shadow-lg
                hover:shadow-primary/10
                dark:border-primary/30
                dark:bg-primary/10
                ${className}
            `}
    >
      <Code2 size={14} strokeWidth={2} className="shrink-0" />

      <span>{technology.name}</span>
    </span>
  );
};

export default TechBadge;
