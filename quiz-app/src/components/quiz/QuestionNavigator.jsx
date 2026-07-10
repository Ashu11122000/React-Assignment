import Badge from "../common/Badge";
import Button from "../common/Button";

/**
 * ==========================================================
 * QuestionNavigator Component
 * ==========================================================
 * Features
 * - Previous / Next
 * - Jump to Question
 * - Answered Indicator
 * - Skipped Indicator
 * - Current Question Highlight
 * - Legend
 * ==========================================================
 */

export default function QuestionNavigator({
  totalQuestions = 0,

  currentQuestionIndex = 0,

  answers = {},

  skippedQuestions = [],

  onPrevious,

  onNext,

  onJump,
}) {
  return (
    <div className="space-y-6 rounded-2xl border border-slate-800 bg-slate-900 p-6">
      {/* ================= Header ================= */}

      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">
          Question Navigator
        </h2>

        <Badge variant="primary">
          {currentQuestionIndex + 1} / {totalQuestions}
        </Badge>
      </div>

      {/* ================= Question Grid ================= */}

      <div className="grid grid-cols-5 gap-3 sm:grid-cols-8 lg:grid-cols-10">
        {Array.from(
          { length: totalQuestions },
          (_, index) => {
            const questionNumber = index + 1;

            const isCurrent =
              index === currentQuestionIndex;

            const isAnswered =
              answers[index] !== undefined;

            const isSkipped =
              skippedQuestions.includes(index);

            let classes =
              "border-slate-700 bg-slate-800 text-slate-300 hover:border-blue-500";

            if (isAnswered) {
              classes =
                "border-green-500 bg-green-600 text-white";
            }

            if (isSkipped) {
              classes =
                "border-yellow-500 bg-yellow-500 text-black";
            }

            if (isCurrent) {
              classes =
                "border-blue-500 bg-blue-600 text-white ring-2 ring-blue-300";
            }

            return (
              <button
                key={questionNumber}
                type="button"
                onClick={() => onJump?.(index)}
                className={`
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  border
                  font-semibold
                  transition-all
                  duration-200
                  ${classes}
                `}
              >
                {questionNumber}
              </button>
            );
          }
        )}
      </div>

      {/* ================= Legend ================= */}

      <div className="flex flex-wrap gap-4">
        <div className="flex items-center gap-2">
          <span className="h-4 w-4 rounded bg-blue-600" />
          <span className="text-sm text-slate-300">
            Current
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-4 w-4 rounded bg-green-600" />
          <span className="text-sm text-slate-300">
            Answered
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-4 w-4 rounded bg-yellow-500" />
          <span className="text-sm text-slate-300">
            Skipped
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-4 w-4 rounded bg-slate-700" />
          <span className="text-sm text-slate-300">
            Unanswered
          </span>
        </div>
      </div>

      {/* ================= Navigation Buttons ================= */}

      <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
        <Button
          variant="secondary"
          onClick={onPrevious}
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </Button>

        <Button
          onClick={onNext}
          disabled={
            currentQuestionIndex ===
            totalQuestions - 1
          }
        >
          Next
        </Button>
      </div>
    </div>
  );
}