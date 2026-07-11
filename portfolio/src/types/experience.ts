/**
 * ==========================================================
 * Experience Type Definitions
 * ==========================================================
 *
 * Centralized TypeScript types for the Experience module.
 *
 * Features
 * ----------
 * ✓ Strongly Typed
 * ✓ Reusable Interfaces
 * ✓ Timeline Ready
 * ✓ Resume Ready
 * ✓ Portfolio Ready
 * ✓ Scalable Architecture
 *
 * Used By
 * ----------
 * data/experience.ts
 * components/experience/*
 * pages/Experience.tsx
 * Resume Module
 * ==========================================================
 */

/**
 * Employment type.
 */
export type EmploymentType =
    | "Full Time"
    | "Part Time"
    | "Internship"
    | "Remote"
    | "Hybrid";

/**
 * Individual achievement.
 */
export interface ExperienceAchievement {
    id: number;
    title: string;
}

/**
 * Technology used during an experience.
 */
export interface ExperienceTechnology {
    id: number;
    name: string;
}

/**
 * Professional experience.
 */
export interface Experience {
    id: number;

    company: string;

    position: string;

    employmentType: EmploymentType;

    location: string;

    startDate: string;

    endDate: string;

    currentlyWorking: boolean;

    website?: string;

    companyLogo?: string;

    description: string;

    achievements: ExperienceAchievement[];

    technologies: ExperienceTechnology[];
}