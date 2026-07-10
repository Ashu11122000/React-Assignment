import { forwardRef } from "react";

/**
 * ==========================================================
 * Ultra Premium Card Component
 * ==========================================================
 *
 * Features
 * ----------------------------------------------------------
 * ✓ White SaaS Design
 * ✓ Glassmorphism
 * ✓ Hover Animation
 * ✓ Gradient Support
 * ✓ Accent Bar
 * ✓ Multiple Radius Sizes
 * ✓ Multiple Padding Sizes
 * ✓ Shadow Variants
 * ✓ Clickable
 * ✓ Forward Ref
 * ✓ Responsive
 * ✓ Future Dark Mode Ready
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

const paddingVariants = {
  none: "",
  xs: "p-3",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
  xl: "p-10",
};

const radiusVariants = {
  none: "rounded-none",
  sm: "rounded-lg",
  md: "rounded-xl",
  lg: "rounded-2xl",
  xl: "rounded-3xl",
  "2xl": "rounded-[30px]",
  "3xl": "rounded-[36px]",
};

const shadowVariants = {
  none: "",

  sm: `
    shadow-sm
    shadow-slate-200/40
  `,

  md: `
    shadow-lg
    shadow-slate-200/50
  `,

  lg: `
    shadow-xl
    shadow-slate-200/60
  `,

  xl: `
    shadow-2xl
    shadow-blue-200/30
  `,
};

const accentVariants = {
  blue: "bg-blue-600",

  emerald: "bg-emerald-500",

  green: "bg-emerald-500",

  red: "bg-rose-500",

  amber: "bg-amber-500",

  orange: "bg-orange-500",

  violet: "bg-violet-500",

  purple: "bg-violet-500",

  cyan: "bg-cyan-500",

  pink: "bg-pink-500",
};

/* ==========================================================
   Component
========================================================== */

const Card = forwardRef(
  (
    {
      as: Component = "div",

      children,

      className = "",

      hover = false,

      glass = false,

      gradient = false,

      clickable = false,

      borderless = false,

      overflowVisible = false,

      accent,

      padding = "md",

      radius = "lg",

      shadow = "md",

      onClick,

      ...props
    },
    ref
  ) => {
    /* ======================================================
       Base Classes
    ====================================================== */

    const baseClasses = `
      relative
      isolate
      w-full
      transition-all
      duration-300
      ease-out
      bg-white
    `;

    const borderClasses = borderless
      ? "border-0"
      : `
          border
          border-slate-200/80
        `;

    const overflowClasses = overflowVisible
      ? "overflow-visible"
      : "overflow-hidden";

    const glassClasses = glass
      ? `
          bg-white/75
          backdrop-blur-2xl
          border-white/70
        `
      : "";

    const gradientClasses = gradient
      ? `
          bg-gradient-to-br
          from-white
          via-slate-50
          to-blue-50
        `
      : "";

    const hoverClasses =
      hover || clickable
        ? `
            cursor-pointer

            hover:-translate-y-1

            hover:scale-[1.01]

            hover:border-blue-200

            hover:shadow-2xl

            hover:shadow-blue-200/30
          `
        : "";

    const finalClasses = cn(
      baseClasses,

      borderClasses,

      overflowClasses,

      glassClasses,

      gradientClasses,

      hoverClasses,

      paddingVariants[padding],

      radiusVariants[radius],

      shadowVariants[shadow],

      className
    );

    return (
      <Component
        ref={ref}
        className={finalClasses}
        onClick={onClick}
        {...props}
      >
        {/* Accent Bar */}

        {accent && (
          <div
            className={cn(
              "absolute inset-x-0 top-0 h-1.5",
              accentVariants[accent]
            )}
          />
        )}

        {/* Decorative Glow */}

                <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-blue-500/5 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl" />

        <div className="pointer-events-none absolute right-1/3 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-3xl" />

        {/* Premium Border Highlight */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-[inherit]
            ring-1
            ring-inset
            ring-white/40
          "
        />

        {/* Content */}

        <div className="relative z-10">
          {children}
        </div>

      </Component>
    );
  }
);

Card.displayName = "Card";

export default Card;