import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "../../utils/cn";

/**
 * ==========================================================
 * Badge Component
 * ==========================================================
 *
 * A reusable premium badge component.
 *
 * Features
 * ----------
 * ✓ Multiple Variants
 * ✓ Multiple Sizes
 * ✓ Glassmorphism
 * ✓ Rounded Pill Design
 * ✓ Dark / Light Theme
 * ✓ Hover Animation
 * ✓ TypeScript
 * ✓ Reusable Across Entire Portfolio
 *
 * Used In
 * ----------
 * Experience
 * Projects
 * Skills
 * Certifications
 * Services
 * Resume
 * ==========================================================
 */

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;

  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "outline";

  size?: "sm" | "md" | "lg";
}

const variantClasses = {
  default: [
    "bg-slate-100",
    "text-slate-700",
    "border-slate-200",
    "dark:bg-slate-800/60",
    "dark:text-slate-200",
    "dark:border-slate-700",
  ],

  primary: [
    "bg-indigo-500/10",
    "text-indigo-600",
    "border-indigo-500/30",
    "dark:bg-indigo-500/15",
    "dark:text-indigo-300",
    "dark:border-indigo-500/40",
  ],

  secondary: [
    "bg-violet-500/10",
    "text-violet-600",
    "border-violet-500/30",
    "dark:bg-violet-500/15",
    "dark:text-violet-300",
    "dark:border-violet-500/40",
  ],

  success: [
    "bg-emerald-500/10",
    "text-emerald-600",
    "border-emerald-500/30",
    "dark:bg-emerald-500/15",
    "dark:text-emerald-300",
    "dark:border-emerald-500/40",
  ],

  warning: [
    "bg-amber-500/10",
    "text-amber-600",
    "border-amber-500/30",
    "dark:bg-amber-500/15",
    "dark:text-amber-300",
    "dark:border-amber-500/40",
  ],

  danger: [
    "bg-red-500/10",
    "text-red-600",
    "border-red-500/30",
    "dark:bg-red-500/15",
    "dark:text-red-300",
    "dark:border-red-500/40",
  ],

  outline: [
    "bg-transparent",
    "text-slate-700",
    "border-slate-300",
    "dark:text-slate-200",
    "dark:border-slate-600",
  ],
};

const sizeClasses = {
  sm: "px-2.5 py-1 text-xs",

  md: "px-3 py-1.5 text-sm",

  lg: "px-4 py-2 text-base",
};

function Badge({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex",
        "items-center",
        "justify-center",
        "rounded-full",
        "border",
        "font-medium",
        "backdrop-blur-md",
        "transition-all",
        "duration-300",
        "whitespace-nowrap",
        "select-none",
        "hover:-translate-y-0.5",
        "hover:shadow-lg",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export default Badge;
