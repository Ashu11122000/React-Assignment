/**
 * ==========================================================
 * Skill Types
 * ==========================================================
 *
 * Centralized type definitions for the Skills module.
 *
 * Features
 * ----------
 * ✓ Strict TypeScript Types
 * ✓ Reusable Interfaces
 * ✓ Category Based Architecture
 * ✓ Progress Tracking
 * ✓ Future Extensible
 *
 * Used By
 * ----------
 * - data/skills.ts
 * - SkillCard.tsx
 * - SkillProgress.tsx
 * - SkillCategory.tsx
 * - SkillGrid.tsx
 * - Skills.tsx
 *
 * ==========================================================
 */

import type { LucideIcon } from "lucide-react";

/**
 * ----------------------------------------------------------
 * Skill Level
 * ----------------------------------------------------------
 */

export type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

/**
 * ----------------------------------------------------------
 * Skill Category
 * ----------------------------------------------------------
 */

export type SkillCategoryType =
  | "Frontend"
  | "Backend"
  | "Databases"
  | "DevOps & Cloud"
  | "Tools & Others"
  | "Languages";

/**
 * ----------------------------------------------------------
 * Individual Technology
 * ----------------------------------------------------------
 */

export interface Skill {
  /**
   * Unique identifier.
   */
  id: number;

  /**
   * Technology name.
   *
   * Example:
   * React.js
   * Next.js
   * TypeScript
   */
  name: string;

  /**
   * Experience level.
   */
  level: SkillLevel;
}

/**
 * ----------------------------------------------------------
 * Skill Category Card
 * ----------------------------------------------------------
 */

export interface SkillCategory {
  /**
   * Unique identifier.
   */
  id: number;

  /**
   * Category title.
   */
  title: SkillCategoryType;

  /**
   * Category icon.
   */
  icon: LucideIcon;

  /**
   * Accent color.
   *
   * Example:
   * violet
   * cyan
   * emerald
   */
  color: string;

  /**
   * Progress percentage.
   */
  percentage: number;

  /**
   * Technologies belonging to this category.
   */
  skills: Skill[];
}

/**
 * ----------------------------------------------------------
 * Progress Bar Props
 * ----------------------------------------------------------
 */

export interface SkillProgressProps {
  /**
   * Progress value.
   */
  value: number;

  /**
   * Optional custom class.
   */
  className?: string;
}

/**
 * ----------------------------------------------------------
 * Skill Card Props
 * ----------------------------------------------------------
 */

export interface SkillCardProps {
  /**
   * Category data.
   */
  category: SkillCategory;
}

/**
 * ----------------------------------------------------------
 * Skill Grid Props
 * ----------------------------------------------------------
 */

export interface SkillGridProps {
  /**
   * Collection of categories.
   */
  categories: SkillCategory[];
}

/**
 * ----------------------------------------------------------
 * Category Header Props
 * ----------------------------------------------------------
 */

export interface SkillCategoryProps {
  /**
   * Category title.
   */
  title: SkillCategoryType;

  /**
   * Category icon.
   */
  icon: LucideIcon;

  /**
   * Accent color.
   */
  color: string;
}
