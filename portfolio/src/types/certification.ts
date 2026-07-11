/**
 * ==========================================================
 * Certification Type Definitions
 * ==========================================================
 *
 * Centralized TypeScript types for the Certifications module.
 *
 * Features
 * ----------
 * ✓ Strongly Typed
 * ✓ Reusable Interfaces
 * ✓ Centralized Models
 * ✓ Portfolio Ready
 * ✓ Resume Ready
 * ✓ Modal Ready
 * ✓ Featured Ready
 * ✓ Search & Filter Ready
 * ✓ Verification Ready
 * ✓ Future Extensible
 *
 * Used By
 * ----------
 * - data/certifications.ts
 * - components/certifications/*
 * - pages/Home.tsx
 * - pages/Certifications.tsx
 * - Resume Module
 * ==========================================================
 */

/**
 * Certification category.
 */
export type CertificationCategory =
  | "Frontend"
  | "Backend"
  | "DevOps"
  | "Cloud"
  | "Mobile Development"
  | "Microservices"
  | "Programming"
  | "Database"
  | "AI"
  | "Other";

/**
 * Learning platform / issuer.
 */
export type CertificationIssuer =
  | "Udemy"
  | "Coursera"
  | "Google"
  | "AWS"
  | "Microsoft"
  | "NPTEL"
  | "HackerRank"
  | "Namaste Dev"
  | "Other";

/**
 * Certification status.
 */
export type CertificationStatus = "Completed" | "In Progress" | "Expired";

/**
 * Technology / skill associated with a certification.
 */
export interface CertificationSkill {
  id: string;
  name: string;
}

/**
 * Main certification model.
 */
export interface Certification {
  /**
   * Unique identifier.
   */
  id: string;

  /**
   * Certification title.
   */
  title: string;

  /**
   * Certification issuer/platform.
   */
  issuer: CertificationIssuer;

  /**
   * Course instructor (optional).
   */
  instructor?: string;

  /**
   * Category.
   */
  category: CertificationCategory;

  /**
   * Completion year.
   */
  year: number;

  /**
   * Human readable issue date.
   * Example:
   * "May 2026"
   */
  issueDate: string;

  /**
   * Expiry date if applicable.
   */
  expiryDate?: string;

  /**
   * Current certification status.
   */
  status: CertificationStatus;

  /**
   * Whether to display on Home page.
   */
  featured: boolean;

  /**
   * Small description.
   */
  description: string;

  /**
   * Skills learned.
   */
  skills: CertificationSkill[];

  /**
   * External certificate URL.
   * Google Drive / Verification Link.
   */
  credentialUrl: string;

  /**
   * Optional credential ID.
   */
  credentialId?: string;

  /**
   * Issuer logo/icon.
   * Can be:
   * - Local asset
   * - SVG
   * - React icon name
   */
  logo?: string;

  /**
   * Display order.
   */
  order: number;
}

/**
 * Component props.
 */

export interface CertificationCardProps {
  certification: Certification;
  onView?: (certification: Certification) => void;
}

export interface CertificationGridProps {
  certifications: Certification[];
}

export interface FeaturedCertificationsProps {
  certifications: Certification[];
}

export interface CertificationModalProps {
  certification: Certification | null;
  isOpen: boolean;
  onClose: () => void;
}
