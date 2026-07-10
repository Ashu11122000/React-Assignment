import {
  Award,
  CheckCircle2,
  XCircle,
  Clock3,
 SkipForward,
  Star,
} from "lucide-react";

import Card from "../common/Card";
import Badge from "../common/Badge";
import ProgressBar from "../common/ProgressBar";
import Button from "../common/Button";

/**
 * ==========================================================
 * ResultCard Component
 * ==========================================================
 * Displays the quiz result summary.
 *
 * Features
 * - Final Score
 * - Percentage
 * - Grade
 * - Correct / Wrong / Skipped
 * - XP Earned
 * - Time Taken
 * - Pass / Fail
 * ==========================================================
 */

export default function ResultCard({
  score = 0,
  maxScore = 100,
  percentage = 0,
  grade = "F",

  correctAnswers = 0,
  wrongAnswers = 0,
  skippedQuestions = 0,

  totalQuestions = 0,

  xpEarned = 0,

  timeTaken = "00:00",

  passingPercentage = 40,

  onRetry,
  onReview,
}) {
  const passed = percentage >= passingPercentage;

  return (
    <Card
      className="space-y-8"
      hover
    >
      {/* ================= Header ================= */}

      <div className="text-center">
        <Award
          size={56}
          className={`mx-auto mb-4 ${
            passed
              ? "text-yellow-400"
              : "text-slate-500"
          }`}
        />

        <h2 className="text-3xl font-bold text-white">
          Quiz Completed
        </h2>

        <p className="mt-2 text-slate-400">
          {passed
            ? "Congratulations! You passed the quiz."
            : "Keep practicing. You'll do even better next time."}
        </p>
      </div>

      {/* ================= Score ================= */}

      <div className="text-center">
        <p className="text-6xl font-bold text-blue-400">
          {percentage}%
        </p>

        <div className="mt-4 flex justify-center gap-2">
          <Badge
            variant={
              passed ? "success" : "danger"
            }
          >
            {passed ? "Passed" : "Failed"}
          </Badge>

          <Badge variant="purple">
            Grade {grade}
          </Badge>
        </div>

        <div className="mt-6">
          <ProgressBar
            value={percentage}
            max={100}
            variant={
              passed ? "success" : "danger"
            }
          />
        </div>
      </div>

      {/* ================= Statistics ================= */}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* Correct */}

        <div className="rounded-xl bg-slate-800 p-5 text-center">
          <CheckCircle2
            size={26}
            className="mx-auto mb-3 text-green-400"
          />

          <p className="text-3xl font-bold text-white">
            {correctAnswers}
          </p>

          <p className="text-sm text-slate-400">
            Correct
          </p>
        </div>

        {/* Wrong */}

        <div className="rounded-xl bg-slate-800 p-5 text-center">
          <XCircle
            size={26}
            className="mx-auto mb-3 text-red-400"
          />

          <p className="text-3xl font-bold text-white">
            {wrongAnswers}
          </p>

          <p className="text-sm text-slate-400">
            Wrong
          </p>
        </div>

        {/* Skipped */}

        <div className="rounded-xl bg-slate-800 p-5 text-center">
          <SkipForward
            size={26}
            className="mx-auto mb-3 text-yellow-400"
          />

          <p className="text-3xl font-bold text-white">
            {skippedQuestions}
          </p>

          <p className="text-sm text-slate-400">
            Skipped
          </p>
        </div>

        {/* Score */}

        <div className="rounded-xl bg-slate-800 p-5 text-center">
          <Award
            size={26}
            className="mx-auto mb-3 text-blue-400"
          />

          <p className="text-3xl font-bold text-white">
            {score}/{maxScore}
          </p>

          <p className="text-sm text-slate-400">
            Score
          </p>
        </div>

        {/* XP */}

        <div className="rounded-xl bg-slate-800 p-5 text-center">
          <Star
            size={26}
            className="mx-auto mb-3 text-purple-400"
          />

          <p className="text-3xl font-bold text-white">
            +{xpEarned}
          </p>

          <p className="text-sm text-slate-400">
            XP Earned
          </p>
        </div>

        {/* Time */}

        <div className="rounded-xl bg-slate-800 p-5 text-center">
          <Clock3
            size={26}
            className="mx-auto mb-3 text-cyan-400"
          />

          <p className="text-3xl font-bold text-white">
            {timeTaken}
          </p>

          <p className="text-sm text-slate-400">
            Time Taken
          </p>
        </div>
      </div>

      {/* ================= Footer ================= */}

      <div className="flex flex-col gap-4 sm:flex-row">
        <Button
          variant="primary"
          fullWidth
          onClick={onReview}
        >
          Review Answers
        </Button>

        <Button
          variant="success"
          fullWidth
          onClick={onRetry}
        >
          Play Again
        </Button>
      </div>

      {/* ================= Summary ================= */}

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
        <h3 className="mb-3 text-lg font-semibold text-white">
          Summary
        </h3>

        <p className="leading-7 text-slate-300">
          You answered{" "}
          <strong>{correctAnswers}</strong> out of{" "}
          <strong>{totalQuestions}</strong> questions
          correctly and achieved a score of{" "}
          <strong>{percentage}%</strong>.
          You earned{" "}
          <strong>{xpEarned} XP</strong> during this
          quiz.
        </p>
      </div>
    </Card>
  );
}