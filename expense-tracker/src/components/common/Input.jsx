import { forwardRef } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
} from "lucide-react";

/**
 * ==========================================================
 * Ultra Premium Input
 * ==========================================================
 *
 * Features
 * ----------------------------------------------------------
 * ✓ Label
 * ✓ Required Indicator
 * ✓ Error State
 * ✓ Success State
 * ✓ Helper Text
 * ✓ Left / Right Icons
 * ✓ Loading State
 * ✓ Glass Variant
 * ✓ Filled Variant
 * ✓ Multiple Sizes
 * ✓ Forward Ref
 * ✓ Accessible
 *
 * ==========================================================
 */

/* ==========================================================
   Utility
========================================================== */

const cn = (...classes) =>
  classes.filter(Boolean).join(" ");

/* ==========================================================
   Variants
========================================================== */

const variants = {
  default: `
    bg-white

    border
    border-slate-200

    hover:border-slate-300

    focus-within:border-blue-500
    focus-within:ring-4
    focus-within:ring-blue-100
  `,

  glass: `
    bg-white/70

    backdrop-blur-xl

    border
    border-white/70

    focus-within:border-blue-500
    focus-within:ring-4
    focus-within:ring-blue-100
  `,

  filled: `
    bg-slate-100

    border
    border-transparent

    hover:bg-slate-200

    focus-within:bg-white
    focus-within:border-blue-500
    focus-within:ring-4
    focus-within:ring-blue-100
  `,
};

/* ==========================================================
   Sizes
========================================================== */

const sizes = {
  sm: {
    wrapper: "h-10 rounded-xl",
    input: "px-3 text-sm",
    icon: "pl-3 pr-3",
  },

  md: {
    wrapper: "h-12 rounded-xl",
    input: "px-4 text-base",
    icon: "pl-4 pr-4",
  },

  lg: {
    wrapper: "h-14 rounded-2xl",
    input: "px-5 text-lg",
    icon: "pl-5 pr-5",
  },
};

/* ==========================================================
   Component
========================================================== */

const Input = forwardRef(
  (
    {
      id,

      label,

      type = "text",

      value,

      onChange,

      placeholder = "",

      variant = "default",

      size = "md",

      required = false,

      disabled = false,

      loading = false,

      error = "",

      success = false,

      helperText = "",

      leftIcon,

      rightIcon,

      className = "",

      ...props
    },
    ref
  ) => {
    /* ======================================================
       State Classes
    ====================================================== */

    const stateClasses = error
      ? `
          border-red-300

          focus-within:border-red-500
          focus-within:ring-red-100
        `
      : success
      ? `
          border-emerald-300

          focus-within:border-emerald-500
          focus-within:ring-emerald-100
        `
      : "";

    /* ======================================================
       Class Builders
    ====================================================== */

    const wrapperClasses = cn(
      `
        group

        relative

        flex

        items-center

        transition-all

        duration-300

        shadow-sm

        focus-within:-translate-y-[1px]

        focus-within:shadow-lg
      `,

      variants[variant],

      sizes[size].wrapper,

      stateClasses,

      disabled &&
        `
          cursor-not-allowed

          opacity-70
        `
    );

    const inputClasses = cn(
      `
        h-full

        w-full

        bg-transparent

        outline-none

        text-slate-800

        placeholder:text-slate-400

        disabled:cursor-not-allowed
      `,

      sizes[size].input,

      leftIcon && "pl-2",

      (rightIcon ||
        loading ||
        error ||
        success) &&
        "pr-12",

      className
    );

    return (
      <div className="w-full space-y-2">

        {/* Label */}

        {label && (
          <label
            htmlFor={id}
            className="flex items-center gap-1 text-sm font-semibold text-slate-700"
          >
            {label}

            {required && (
              <span className="text-red-500">
                *
              </span>
            )}
          </label>
        )}

        {/* Wrapper */}

        <div className={wrapperClasses}>

          {/* Left Icon */}

          {leftIcon && (
            <div
              className={cn(
                "text-slate-400",
                sizes[size].icon
              )}
            >
              {leftIcon}
            </div>
          )}

                    {/* Input */}

          <input
            ref={ref}
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            aria-invalid={Boolean(error)}
            aria-describedby={
              error
                ? `${id}-error`
                : helperText
                ? `${id}-helper`
                : undefined
            }
            className={inputClasses}
            {...props}
          />

          {/* Right Side */}

          <div
            className={cn(
              "absolute right-4 flex items-center gap-2",
              sizes[size].icon
            )}
          >
            {loading ? (
              <Loader2
                size={18}
                className="animate-spin text-blue-600"
              />
            ) : error ? (
              <AlertCircle
                size={18}
                className="text-red-500"
              />
            ) : success ? (
              <CheckCircle2
                size={18}
                className="text-emerald-500"
              />
            ) : (
              rightIcon
            )}
          </div>

        </div>

        {/* Helper / Error Message */}

        {error ? (
          <p
            id={`${id}-error`}
            className="flex items-center gap-2 text-sm font-medium text-red-500"
          >
            <AlertCircle size={15} />
            <span>{error}</span>
          </p>
        ) : helperText ? (
          <p
            id={`${id}-helper`}
            className="text-sm text-slate-500"
          >
            {helperText}
          </p>
        ) : null}

      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;