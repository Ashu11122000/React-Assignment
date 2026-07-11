/**
 * ==========================================================
 * Project Type Definitions
 * ==========================================================
 *
 * Centralized TypeScript models for the Projects module.
 *
 * Features
 * ----------
 * ✓ Strongly Typed
 * ✓ Centralized Models
 * ✓ Search Ready
 * ✓ Filter Ready
 * ✓ Featured Projects Support
 * ✓ GitHub Integration
 * ✓ Live Demo Support
 * ✓ Resume Ready
 * ✓ Future Extensible
 *
 * Used By
 * ----------
 * - data/projects.ts
 * - components/projects/*
 * - pages/Projects.tsx
 *
 * ==========================================================
 */

/**
 * ----------------------------------------------------------
 * Project Category
 * ----------------------------------------------------------
 */

export type ProjectCategory = "Frontend" | "Backend" | "Full Stack";

/**
 * ----------------------------------------------------------
 * Project Status
 * ----------------------------------------------------------
 */

export type ProjectStatus = "Completed" | "In Progress";

/**
 * ----------------------------------------------------------
 * Individual Technology
 * ----------------------------------------------------------
 */

export interface ProjectTechnology {
  /**
   * Unique identifier.
   */
  id: number;

  /**
   * Technology name.
   *
   * Examples:
   * React
   * Next.js
   * FastAPI
   * PostgreSQL
   */
  name: string;
}

/**
 * ----------------------------------------------------------
 * Project
 * ----------------------------------------------------------
 */

export interface Project {
  /**
   * Unique identifier.
   */
  id: number;

  /**
   * Project name.
   */
  name: string;

  /**
   * Short description displayed on cards.
   */
  description: string;

  /**
   * Project category.
   */
  category: ProjectCategory;

  /**
   * Current project status.
   */
  status: ProjectStatus;

  /**
   * Whether the project is featured.
   */
  featured: boolean;

  /**
   * Technologies used in the project.
   */
  technologies: ProjectTechnology[];

  /**
   * GitHub repository URL.
   */
  githubUrl: string;

  /**
   * Optional live demo URL.
   * Many backend projects will not have one.
   */
  liveUrl?: string;

  /**
   * Optional completion date.
   *
   * Example:
   * "June 2026"
   */
  completedAt?: string;

  /**
   * Controls display order.
   */
  order: number;
}
