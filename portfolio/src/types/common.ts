/**
 * ==========================================================
 * Common Types
 * ==========================================================
 *
 * Shared type definitions used throughout the portfolio.
 *
 * Features
 * ----------
 * ✓ Reusable Component Props
 * ✓ Shared Interfaces
 * ✓ Strict TypeScript
 * ✓ Future Extensible
 *
 * Used By
 * ----------
 * - Common Components
 * - Layout
 * - Hero
 * - About
 * - Skills
 * - Experience
 * - Projects
 * - Contact
 *
 * ==========================================================
 */

import type { HTMLAttributes, ReactNode } from "react";

import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";

/* ==========================================================
   Base Component Props
   ========================================================== */

export interface ChildrenProps {
  children: ReactNode;
}

export interface ClassNameProps {
  className?: string;
}

/**
 * Generic component props.
 */
export interface ComponentProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

/* ==========================================================
   Section Title
   ========================================================== */

export interface SectionTitleProps {
  title: string;
  highlight?: string;
  subtitle?: string;
  center?: boolean;
}

/* ==========================================================
   Social Links
   ========================================================== */

export interface SocialLink {
  id: number;

  name: string;

  url: string;

  /**
   * Supports both
   * Lucide React
   * and React Icons.
   */
  icon: LucideIcon | IconType;
}

/* ==========================================================
   Navigation
   ========================================================== */

export interface NavItem {
  label: string;
  href: string;
}

/* ==========================================================
   Statistics
   ========================================================== */

export interface StatItem {
  id: number;

  value: string;

  label: string;

  icon?: LucideIcon;
}

/* ==========================================================
   Information Card
   ========================================================== */

export interface InfoCard {
  id: number;

  label: string;

  value: string;

  icon: LucideIcon;
}

/* ==========================================================
   Badge
   ========================================================== */

export interface BadgeProps {
  label: string;

  color?: string;
}

/* ==========================================================
   Button
   ========================================================== */

export interface ButtonBaseProps {
  loading?: boolean;

  disabled?: boolean;
}
