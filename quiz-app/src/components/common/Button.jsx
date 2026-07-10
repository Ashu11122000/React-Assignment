import { forwardRef } from "react";

/**
 * ==========================================================
 * Button Component
 * ==========================================================
 * Reusable button component for the Quiz App.
 *
 * Features:
 * - Variants
 * - Sizes
 * - Loading State
 * - Disabled State
 * - Icons
 * - Full Width
 * - Rounded
 * - Ref Forwarding
 * - Accessible
 * ==========================================================
 */

const variantClasses = {
  primary:
    "bg-blue-600 hover:bg-blue-700 text-white border border-blue-600",

  secondary:
    "bg-slate-700 hover:bg-slate-600 text-white border border-slate-600",

  success:
    "bg-green-600 hover:bg-green-700 text-white border border-green-600",

  danger:
    "bg-red-600 hover:bg-red-700 text-white border border-red-600",

  warning:
    "bg-amber-500 hover:bg-amber-600 text-black border border-amber-500",

  info:
    "bg-cyan-600 hover:bg-cyan-700 text-white border border-cyan-600",

  outline:
    "border border-slate-500 bg-transparent text-slate-200 hover:bg-slate-700",

  ghost:
    "bg-transparent hover:bg-slate-800 text-slate-200",

  light:
    "bg-white hover:bg-slate-100 text-slate-900",

  dark:
    "bg-slate-900 hover:bg-black text-white",
};

const sizeClasses = {
  xs: "px-2 py-1 text-xs",

  sm: "px-3 py-2 text-sm",

  md: "px-5 py-2.5 text-base",

  lg: "px-6 py-3 text-lg",

  xl: "px-8 py-4 text-xl",
};

const Button = forwardRef(
  (
    {
      children,

      type = "button",

      variant = "primary",

      size = "md",

      loading = false,

      disabled = false,

      fullWidth = false,

      rounded = "lg",

      leftIcon,

      rightIcon,

      className = "",

      onClick,

      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    const roundedClass =
      rounded === "full"
        ? "rounded-full"
        : rounded === "none"
        ? "rounded-none"
        : `rounded-${rounded}`;

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        onClick={onClick}
        aria-disabled={isDisabled}
        className={`
          inline-flex
          items-center
          justify-center
          gap-2

          font-medium

          transition-all
          duration-200
          ease-in-out

          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          focus:ring-offset-2
          focus:ring-offset-slate-900

          active:scale-95

          disabled:opacity-60
          disabled:cursor-not-allowed

          ${
            variantClasses[variant] ??
            variantClasses.primary
          }

          ${
            sizeClasses[size] ??
            sizeClasses.md
          }

          ${roundedClass}

          ${fullWidth ? "w-full" : ""}

          ${className}
        `}
        {...props}
      >
        {/* Left Icon */}

        {!loading && leftIcon && (
          <span className="flex items-center">
            {leftIcon}
          </span>
        )}

        {/* Loading */}

        {loading && (
          <svg
            className="h-5 w-5 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-20"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />

            <path
              className="opacity-90"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
        )}

        {/* Label */}

        <span>
          {loading ? "Loading..." : children}
        </span>

        {/* Right Icon */}

        {!loading && rightIcon && (
          <span className="flex items-center">
            {rightIcon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;