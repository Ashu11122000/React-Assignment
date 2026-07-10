import clsx from "clsx";

/**
 * ==========================================================
 * Badge Component
 * ==========================================================
 * Reusable badge component for the Quiz App.
 *
 * Features:
 * - Multiple variants
 * - Multiple sizes
 * - Rounded options
 * - Dot indicator
 * - Icon support
 * - Outline support
 * - Full customization
 * ==========================================================
 */

const variants = {
  primary:
    "bg-blue-100 text-blue-700 border border-blue-200",

  secondary:
    "bg-slate-100 text-slate-700 border border-slate-200",

  success:
    "bg-green-100 text-green-700 border border-green-200",

  danger:
    "bg-red-100 text-red-700 border border-red-200",

  warning:
    "bg-yellow-100 text-yellow-700 border border-yellow-200",

  info:
    "bg-cyan-100 text-cyan-700 border border-cyan-200",

  purple:
    "bg-purple-100 text-purple-700 border border-purple-200",

  pink:
    "bg-pink-100 text-pink-700 border border-pink-200",

  dark:
    "bg-slate-800 text-white border border-slate-700",

  light:
    "bg-white text-slate-700 border border-slate-300",

  outline:
    "bg-transparent border border-slate-400 text-slate-700",
};

const sizes = {
  xs: "px-2 py-0.5 text-xs",

  sm: "px-2.5 py-1 text-sm",

  md: "px-3 py-1.5 text-sm",

  lg: "px-4 py-2 text-base",
};

const dotColors = {
  primary: "bg-blue-500",
  secondary: "bg-slate-500",
  success: "bg-green-500",
  danger: "bg-red-500",
  warning: "bg-yellow-500",
  info: "bg-cyan-500",
  purple: "bg-purple-500",
  pink: "bg-pink-500",
  dark: "bg-white",
  light: "bg-slate-600",
  outline: "bg-slate-600",
};

export default function Badge({
  children,

  variant = "primary",

  size = "md",

  rounded = "full",

  icon,

  showDot = false,

  className = "",
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-2 font-medium transition-colors duration-200",

        variants[variant] || variants.primary,

        sizes[size] || sizes.md,

        rounded === "none"
          ? "rounded-none"
          : rounded === "md"
          ? "rounded-md"
          : rounded === "lg"
          ? "rounded-lg"
          : "rounded-full",

        className
      )}
    >
      {showDot && (
        <span
          className={clsx(
            "h-2 w-2 rounded-full",
            dotColors[variant] || dotColors.primary
          )}
        />
      )}

      {icon && (
        <span className="flex items-center">
          {icon}
        </span>
      )}

      <span>{children}</span>
    </span>
  );
}