import clsx from "clsx";
import { CheckCircle2, XCircle } from "lucide-react";

/**
 * ==========================================================
 * OptionCard Component
 * ==========================================================
 * Displays a single quiz option.
 *
 * Features
 * - Selected state
 * - Correct/Wrong state
 * - Disabled state
 * - Keyboard accessible
 * - Hover effects
 * - Option label (A/B/C/D)
 * ==========================================================
 */

const optionLabels = ["A", "B", "C", "D", "E", "F"];

export default function OptionCard({
  option,
  index,

  selected = false,

  disabled = false,

  showAnswer = false,

  isCorrect = false,

  isWrong = false,

  onSelect,
}) {
  const handleClick = () => {
    if (!disabled) {
      onSelect?.(option);
    }
  };

  const handleKeyDown = (event) => {
    if (
      (event.key === "Enter" || event.key === " ") &&
      !disabled
    ) {
      event.preventDefault();
      onSelect?.(option);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      aria-pressed={selected}
      className={clsx(
        "w-full rounded-2xl border p-4 text-left transition-all duration-200",
        "flex items-center justify-between gap-4",

        // Default
        !selected &&
          !showAnswer &&
          "border-slate-700 bg-slate-900 hover:border-blue-500 hover:bg-slate-800",

        // Selected
        selected &&
          !showAnswer &&
          "border-blue-500 bg-blue-600/15",

        // Correct
        showAnswer &&
          isCorrect &&
          "border-green-500 bg-green-500/15",

        // Wrong
        showAnswer &&
          isWrong &&
          "border-red-500 bg-red-500/15",

        disabled && "cursor-not-allowed opacity-70"
      )}
    >
      {/* ================= Left ================= */}

      <div className="flex items-center gap-4">
        {/* Letter */}

        <div
          className={clsx(
            "flex h-10 w-10 items-center justify-center rounded-full font-bold",

            selected
              ? "bg-blue-600 text-white"
              : "bg-slate-800 text-slate-300"
          )}
        >
          {optionLabels[index] ?? index + 1}
        </div>

        {/* Option Text */}

        <p className="text-base text-slate-100">
          {option}
        </p>
      </div>

      {/* ================= Right ================= */}

      {showAnswer && isCorrect && (
        <CheckCircle2
          size={24}
          className="text-green-400"
        />
      )}

      {showAnswer && isWrong && (
        <XCircle
          size={24}
          className="text-red-400"
        />
      )}
    </button>
  );
}