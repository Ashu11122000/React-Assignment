import clsx from "clsx";

/**
 * ==========================================================
 * Card Component
 * ==========================================================
 * Reusable Card Component
 *
 * Features
 * - Header
 * - Body
 * - Footer
 * - Hover Animation
 * - Glass Effect
 * - Shadow Variants
 * - Clickable
 * - Loading State
 * - Different Padding Sizes
 * ==========================================================
 */

const variants = {
  default: "bg-slate-900 border border-slate-800",

  glass:
    "bg-slate-900/60 backdrop-blur-md border border-slate-700",

  outline:
    "bg-transparent border border-slate-700",

  elevated:
    "bg-slate-900 border border-slate-800 shadow-2xl",

  gradient:
    "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700",
};

const padding = {
  none: "p-0",

  sm: "p-3",

  md: "p-5",

  lg: "p-7",

  xl: "p-10",
};

export default function Card({
  children,

  header,

  footer,

  title,

  subtitle,

  variant = "default",

  paddingSize = "md",

  hover = false,

  clickable = false,

  loading = false,

  className = "",

  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className={clsx(
        "rounded-2xl transition-all duration-300",

        variants[variant] || variants.default,

        padding[paddingSize] || padding.md,

        hover &&
          "hover:-translate-y-1 hover:shadow-xl hover:border-blue-500",

        clickable && "cursor-pointer",

        className
      )}
    >
      {/* Loading */}

      {loading ? (
        <div className="space-y-4 animate-pulse">
          <div className="h-6 w-1/2 rounded bg-slate-700" />

          <div className="h-4 rounded bg-slate-800" />

          <div className="h-4 w-5/6 rounded bg-slate-800" />

          <div className="h-4 w-2/3 rounded bg-slate-800" />
        </div>
      ) : (
        <>
          {/* Custom Header */}

          {header}

          {/* Default Header */}

          {(title || subtitle) && (
            <div className="mb-5">
              {title && (
                <h2 className="text-xl font-bold text-white">
                  {title}
                </h2>
              )}

              {subtitle && (
                <p className="mt-1 text-sm text-slate-400">
                  {subtitle}
                </p>
              )}
            </div>
          )}

          {/* Body */}

          <div>{children}</div>

          {/* Footer */}

          {footer && (
            <div className="mt-6 border-t border-slate-700 pt-4">
              {footer}
            </div>
          )}
        </>
      )}
    </div>
  );
}