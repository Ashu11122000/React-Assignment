/**
 * ==========================================================
 * FilterBar Component
 * ==========================================================
 *
 * Reusable category filter for the Projects module.
 *
 * Features
 * ----------
 * ✓ Strongly Typed
 * ✓ Responsive
 * ✓ Reusable
 * ✓ Glassmorphism UI
 * ✓ Active Filter State
 * ✓ Hover Animations
 * ✓ Dark / Light Theme
 * ✓ Accessibility Friendly
 *
 * Used By
 * ----------
 * - Projects.tsx
 * - ProjectGrid.tsx
 *
 * ==========================================================
 */

import type { FC } from "react";

import Button from "../common/Button";

import type { ProjectCategory } from "../../types/project";

export type ProjectFilter = "All" | ProjectCategory;

interface FilterBarProps {
  activeFilter: ProjectFilter;
  onFilterChange: (filter: ProjectFilter) => void;
}

const filters: ProjectFilter[] = ["All", "Frontend", "Backend", "Full Stack"];

const FilterBar: FC<FilterBarProps> = ({ activeFilter, onFilterChange }) => {
  return (
    <div
      className="
                flex
                flex-wrap
                items-center
                justify-center
                gap-3
            "
    >
      {filters.map((filter) => {
        const isActive = activeFilter === filter;

        return (
          <Button
            key={filter}
            type="button"
            onClick={() => onFilterChange(filter)}
            className={`
                            rounded-full
                            px-5
                            py-2
                            transition-all
                            duration-300
                            ${
                              isActive
                                ? `
                                        border
                                        border-primary/40
                                        bg-primary
                                        text-white
                                        shadow-lg
                                        shadow-primary/20
                                      `
                                : `
                                        border
                                        border-white/10
                                        bg-white/5
                                        text-muted-foreground
                                        hover:border-primary/30
                                        hover:bg-primary/10
                                        hover:text-primary
                                      `
                            }
                        `}
            aria-pressed={isActive}
          >
            {filter}
          </Button>
        );
      })}
    </div>
  );
};

export default FilterBar;
