import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * ==========================================================
 * cn Utility
 * ==========================================================
 *
 * A utility function for conditionally joining class names
 * and intelligently merging Tailwind CSS classes.
 *
 * Features
 * ----------
 * ✓ Conditional Classes
 * ✓ Tailwind Conflict Resolution
 * ✓ Type Safe
 * ✓ Reusable Across Entire Project
 *
 * Examples
 * ----------
 * cn("p-4", "bg-white")
 *
 * cn(
 *   "rounded-lg",
 *   isActive && "bg-indigo-600",
 *   className
 * )
 *
 * ==========================================================
 */

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}