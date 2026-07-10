import {
  CheckCircle2,
  XCircle,
  SkipForward,
  HelpCircle,
} from "lucide-react";

import Card from "../common/Card";
import Badge from "../common/Badge";

/**
 * ==========================================================
 * ReviewAnswer Component
 * ==========================================================
 * Displays a reviewed quiz question.
 *
 * Features
 * - Question Details
 * - User Answer
 * - Correct Answer
 * - Explanation
 * - Tags
 * - Status
 * ==========================================================
 */

export default function ReviewAnswer({
  question,
  userAnswer,
  questionNumber,
}) {
  if (!question) return null;

  const isSkipped =
    userAnswer === null ||
    userAnswer === undefined ||
    userAnswer === "";

  const isCorrect =
    !isSkipped &&
    userAnswer === question.correctAnswer;

  const status = isSkipped
    ? {
        label: "Skipped",
        variant: "warning",
        icon: (
          <SkipForward
            size={18}
            className="text-yellow-400"
          />
        ),
      }
    : isCorrect
    ? {
        label: "Correct",
        variant: "success",
        icon: (
          <CheckCircle2
            size={18}
            className="text-green-400"
          />
        ),
      }
    : {
        label: "Incorrect",
        variant: "danger",
        icon: (
          <XCircle
            size={18}
            className="text-red-400"
          />
        ),
      };

  const difficultyVariant = {
    Easy: "success",
    Medium: "warning",
    Hard: "danger",
    Expert: "purple",
  };

  return (
    <Card
      hover
      className="space-y-6"
    >
      {/* ================= Header ================= */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">
            Question {questionNumber}
          </h2>

          <div className="mt-3 flex flex-wrap gap-2">
            <Badge variant="primary">
              {question.category}
            </Badge>

            <Badge
              variant={
                difficultyVariant[
                  question.difficulty
                ] || "secondary"
              }
            >
              {question.difficulty}
            </Badge>

            <Badge variant="info">
              {question.points} Points
            </Badge>

            <Badge variant={status.variant}>
              <span className="flex items-center gap-2">
                {status.icon}
                {status.label}
              </span>
            </Badge>
          </div>
        </div>
      </div>

      {/* ================= Question ================= */}

      <div>
        <h3 className="text-xl font-semibold leading-relaxed text-white">
          {question.question}
        </h3>
      </div>

      {/* ================= Answers ================= */}

      <div className="grid gap-4 lg:grid-cols-2">
        {/* User Answer */}

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-400">
            Your Answer
          </h4>

          <p
            className={`font-medium ${
              isSkipped
                ? "text-yellow-400"
                : isCorrect
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {isSkipped
              ? "Not Answered"
              : userAnswer}
          </p>
        </div>

        {/* Correct Answer */}

        <div className="rounded-xl border border-green-700 bg-green-900/10 p-5">
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-green-300">
            Correct Answer
          </h4>

          <p className="font-medium text-green-400">
            {question.correctAnswer}
          </p>
        </div>
      </div>

      {/* ================= Explanation ================= */}

      <div className="rounded-xl border border-blue-700 bg-blue-900/10 p-5">
        <div className="mb-3 flex items-center gap-2">
          <HelpCircle
            size={20}
            className="text-blue-400"
          />

          <h4 className="text-lg font-semibold text-blue-300">
            Explanation
          </h4>
        </div>

        <p className="leading-7 text-slate-300">
          {question.explanation}
        </p>
      </div>

      {/* ================= Tags ================= */}

      {question.tags?.length > 0 && (
        <div className="flex flex-wrap gap-2 border-t border-slate-800 pt-5">
          {question.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              size="sm"
            >
              #{tag}
            </Badge>
          ))}
        </div>
      )}
    </Card>
  );
}