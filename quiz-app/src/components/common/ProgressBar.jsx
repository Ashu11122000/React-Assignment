import { useEffect } from "react";
import clsx from "clsx";

/**
 * ==========================================================
 * Modal Component
 * ==========================================================
 * Features
 * - Backdrop
 * - Escape key close
 * - Click outside close
 * - Header
 * - Footer
 * - Different sizes
 * - Scrollable content
 * - Accessible
 * ==========================================================
 */

const sizes = {
  sm: "max-w-md",
  md: "max-w-lg",
  lg: "max-w-2xl",
  xl: "max-w-4xl",
  full: "max-w-7xl",
};

export default function Modal({
  isOpen,
  onClose,

  title,
  children,
  footer,

  size = "md",

  closeOnBackdrop = true,
  closeOnEscape = true,
  showCloseButton = true,

  className = "",
}) {
  useEffect(() => {
    if (!isOpen || !closeOnEscape) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );

      document.body.style.overflow = "";
    };
  }, [isOpen, closeOnEscape, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (event) => {
    if (
      event.target === event.currentTarget &&
      closeOnBackdrop
    ) {
      onClose?.();
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className={clsx(
          "w-full rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl",
          "animate-in fade-in zoom-in-95 duration-200",
          sizes[size] || sizes.md,
          className
        )}
      >
        {/* ================= Header ================= */}

        {(title || showCloseButton) && (
          <div className="flex items-center justify-between border-b border-slate-700 px-6 py-4">
            <h2
              id="modal-title"
              className="text-xl font-semibold text-white"
            >
              {title}
            </h2>

            {showCloseButton && (
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white"
                aria-label="Close modal"
              >
                ✕
              </button>
            )}
          </div>
        )}

        {/* ================= Body ================= */}

        <div className="max-h-[70vh] overflow-y-auto px-6 py-5 text-slate-300">
          {children}
        </div>

        {/* ================= Footer ================= */}

        {footer && (
          <div className="flex justify-end gap-3 border-t border-slate-700 px-6 py-4">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}