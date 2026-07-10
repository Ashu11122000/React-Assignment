import { forwardRef } from "react";
import { Loader2 } from "lucide-react";

/**
 * ==========================================================
 * Ultra Premium Button
 * ==========================================================
 *
 * Features
 * ----------------------------------------------------------
 * ✓ Primary
 * ✓ Secondary
 * ✓ Success
 * ✓ Danger
 * ✓ Outline
 * ✓ Ghost
 * ✓ Glass
 * ✓ Loading State
 * ✓ Icon Support
 * ✓ Full Width
 * ✓ Icon Only
 * ✓ Hover Animation
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
  primary: `
    text-white

    bg-gradient-to-r
    from-blue-600
    via-indigo-600
    to-violet-600

    shadow-lg
    shadow-blue-500/20

    hover:shadow-2xl
    hover:shadow-blue-500/30

    focus-visible:ring-blue-300
  `,

  secondary: `
    bg-white

    border
    border-slate-200

    text-slate-700

    shadow-sm

    hover:bg-slate-50
    hover:border-slate-300
    hover:shadow-lg

    focus-visible:ring-slate-300
  `,

  success: `
    text-white

    bg-gradient-to-r
    from-emerald-500
    to-green-600

    shadow-lg
    shadow-emerald-500/20

    hover:shadow-2xl

    focus-visible:ring-emerald-300
  `,

  danger: `
    text-white

    bg-gradient-to-r
    from-rose-500
    to-red-600

    shadow-lg
    shadow-red-500/20

    hover:shadow-2xl

    focus-visible:ring-red-300
  `,

  outline: `
    bg-white/60

    border
    border-slate-300

    text-slate-700

    hover:border-blue-500
    hover:bg-blue-50
    hover:text-blue-700

    focus-visible:ring-blue-200
  `,

  ghost: `
    bg-transparent

    text-slate-700

    hover:bg-slate-100
    hover:text-slate-900

    focus-visible:ring-slate-200
  `,

  glass: `
    bg-white/70

    backdrop-blur-xl

    border
    border-white/70

    text-slate-800

    shadow-xl

    hover:bg-white/90

    focus-visible:ring-blue-200
  `,
};

/* ==========================================================
   Sizes
========================================================== */

const sizes = {
  xs: {
    normal: "h-9 px-3 text-sm rounded-lg",
    icon: "h-9 w-9 rounded-lg",
  },

  sm: {
    normal: "h-10 px-4 text-sm rounded-xl",
    icon: "h-10 w-10 rounded-xl",
  },

  md: {
    normal: "h-12 px-6 text-base rounded-xl",
    icon: "h-12 w-12 rounded-xl",
  },

  lg: {
    normal: "h-14 px-8 text-lg rounded-2xl",
    icon: "h-14 w-14 rounded-2xl",
  },

  xl: {
    normal: "h-16 px-10 text-xl rounded-2xl",
    icon: "h-16 w-16 rounded-2xl",
  },
};

/* ==========================================================
   Component
========================================================== */

const Button = forwardRef(
  (
    {
      children,

      type = "button",

      variant = "primary",

      size = "md",

      fullWidth = false,

      loading = false,

      disabled = false,

      iconOnly = false,

      leftIcon,

      rightIcon,

      className = "",

      ...props
    },
    ref
  ) => {
    /* ======================================================
       Class Builders
    ====================================================== */

    const baseClasses = `
      relative

      inline-flex

      items-center

      justify-center

      gap-2

      overflow-hidden

      whitespace-nowrap

      font-semibold

      transition-all

      duration-300

      ease-out

      active:scale-[0.97]

      hover:-translate-y-0.5

      focus-visible:outline-none

      focus-visible:ring-4

      disabled:pointer-events-none

      disabled:opacity-60

      disabled:shadow-none

      select-none
    `;

    const widthClasses = fullWidth
      ? "w-full"
      : "";

    const sizeClasses = iconOnly
      ? sizes[size].icon
      : sizes[size].normal;

    const finalClasses = cn(
      baseClasses,

      variants[variant],

      sizeClasses,

      widthClasses,

      className
    );

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || loading}
        className={finalClasses}
        {...props}
      >

                {/* Gradient Shine */}

        <span
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-0
            transition-opacity
            duration-300
            group-hover:opacity-100
          "
        />

        {loading ? (
          <>
            <Loader2
              size={18}
              className="animate-spin"
            />

            {!iconOnly && (
              <span>Loading...</span>
            )}
          </>
        ) : (
          <>
            {leftIcon && (
              <span
                className="
                  flex
                  items-center
                  justify-center
                  transition-transform
                  duration-300
                  group-hover:-translate-x-0.5
                "
              >
                {leftIcon}
              </span>
            )}

            {!iconOnly && (
              <span className="relative z-10">
                {children}
              </span>
            )}

            {rightIcon && (
              <span
                className="
                  flex
                  items-center
                  justify-center
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                "
              >
                {rightIcon}
              </span>
            )}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;