import clsx from "clsx";

/**
 * ==========================================================
 * Loader Component
 * ==========================================================
 * Reusable loader for the Quiz App.
 *
 * Features
 * - Spinner
 * - Dots
 * - Pulse
 * - Fullscreen Mode
 * - Overlay Mode
 * - Loading Text
 * - Multiple Sizes
 * - Accessible
 * ==========================================================
 */

const sizeClasses = {
  sm: "h-6 w-6",
  md: "h-10 w-10",
  lg: "h-16 w-16",
};

export default function Loader({
  variant = "spinner",

  size = "md",

  text = "Loading...",

  fullscreen = false,

  overlay = false,

  className = "",
}) {
  const wrapperClass = clsx(
    "flex flex-col items-center justify-center gap-4",

    fullscreen && "fixed inset-0 bg-slate-950 z-50",

    overlay &&
      "absolute inset-0 bg-slate-950/70 backdrop-blur-sm z-40",

    !fullscreen && !overlay && "py-10",

    className
  );

  return (
    <div
      className={wrapperClass}
      role="status"
      aria-live="polite"
    >
      {/* ================= Spinner ================= */}

      {variant === "spinner" && (
        <div
          className={clsx(
            "animate-spin rounded-full border-4 border-slate-700 border-t-blue-500",
            sizeClasses[size]
          )}
        />
      )}

      {/* ================= Dots ================= */}

      {variant === "dots" && (
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 animate-bounce rounded-full bg-blue-500 [animation-delay:-0.3s]" />

          <span className="h-3 w-3 animate-bounce rounded-full bg-blue-500 [animation-delay:-0.15s]" />

          <span className="h-3 w-3 animate-bounce rounded-full bg-blue-500" />
        </div>
      )}

      {/* ================= Pulse ================= */}

      {variant === "pulse" && (
        <div
          className={clsx(
            "rounded-full bg-blue-500 animate-pulse",
            sizeClasses[size]
          )}
        />
      )}

      {/* ================= Text ================= */}

      {text && (
        <p className="text-sm font-medium text-slate-300">
          {text}
        </p>
      )}
    </div>
  );
}