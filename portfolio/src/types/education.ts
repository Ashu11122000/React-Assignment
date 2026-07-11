/**
 * ==========================================================
 * Education Types
 * ==========================================================
 *
 * Centralized type definitions for education-related data.
 *
 * Features
 * ----------
 * ✓ Strict TypeScript Types
 * ✓ Reusable Interfaces
 * ✓ Timeline Ready
 * ✓ Future Extensible
 *
 * ==========================================================
 */

import type { LucideIcon } from "lucide-react";

/**
 * Education Level
 */
export type EducationLevel =
  | "Master"
  | "Bachelor"
  | "Senior Secondary"
  | "Secondary";

/**
 * Education Status
 */
export type EducationStatus = "Completed" | "Pursuing";

/**
 * Individual Education Record
 */
export interface Education {
  /**
   * Unique identifier.
   */
  id: number;

  /**
   * Degree or qualification.
   */
  degree: string;

  /**
   * Education level.
   */
  level: EducationLevel;

  /**
   * Institution name.
   */
  institution: string;

  /**
   * Location.
   */
  location: string;

  /**
   * Study duration.
   * Example:
   * 2021 - 2023
   */
  duration: string;

  /**
   * Academic score.
   * Example:
   * CGPA: 8.6/10
   * Percentage: 92%
   */
  score: string;

  /**
   * Completion status.
   */
  status: EducationStatus;

  /**
   * Timeline icon.
   */
  icon: LucideIcon;
}
