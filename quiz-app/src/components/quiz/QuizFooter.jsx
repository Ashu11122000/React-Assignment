import {
  ArrowLeft,
  ArrowRight,
  SkipForward,
  Save,
  Send,
} from "lucide-react";

import Button from "../common/Button";

/**
 * ==========================================================
 * QuizFooter Component
 * ==========================================================
 * Main action footer for quiz navigation.
 *
 * Features
 * - Previous
 * - Next
 * - Skip
 * - Save Progress
 * - Submit Quiz
 * - Responsive
 * ==========================================================
 */

export default function QuizFooter({
  currentQuestion = 1,
  totalQuestions = 1,

  canGoPrevious = false,
  canGoNext = false,

  isLastQuestion = false,

  saving = false,

  onPrevious,
  onNext,
  onSkip,
  onSave,
  onSubmit,
}) {
  return (
    <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
      {/* ================= Top ================= */}

      <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <h2 className="text-lg font-semibold text-white">
          Quiz Controls
        </h2>

        <p className="text-sm text-slate-400">
          Question{" "}
          <span className="font-semibold text-white">
            {currentQuestion}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-white">
            {totalQuestions}
          </span>
        </p>
      </div>

      {/* ================= Buttons ================= */}

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
        {/* Previous */}

        <Button
          variant="secondary"
          leftIcon={<ArrowLeft size={18} />}
          onClick={onPrevious}
          disabled={!canGoPrevious}
          fullWidth
        >
          Previous
        </Button>

        {/* Skip */}

        <Button
          variant="warning"
          leftIcon={<SkipForward size={18} />}
          onClick={onSkip}
          fullWidth
        >
          Skip
        </Button>

        {/* Save */}

        <Button
          variant="info"
          leftIcon={<Save size={18} />}
          loading={saving}
          onClick={onSave}
          fullWidth
        >
          Save Progress
        </Button>

        {/* Next */}

        <Button
          variant="primary"
          rightIcon={<ArrowRight size={18} />}
          onClick={onNext}
          disabled={!canGoNext || isLastQuestion}
          fullWidth
        >
          Next
        </Button>

        {/* Submit */}

        <Button
          variant="success"
          rightIcon={<Send size={18} />}
          onClick={onSubmit}
          fullWidth
        >
          {isLastQuestion
            ? "Submit Quiz"
            : "Finish Quiz"}
        </Button>
      </div>
    </div>
  );
}