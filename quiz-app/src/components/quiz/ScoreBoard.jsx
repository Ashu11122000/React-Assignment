import {
  Award,
  CheckCircle2,
  XCircle,
  SkipForward,
  Target,
  Star,
} from "lucide-react";

import Card from "../common/Card";
import Badge from "../common/Badge";
import ProgressBar from "../common/ProgressBar";

/**
 * ==========================================================
 * ScoreBoard Component
 * ==========================================================
 * Live quiz statistics dashboard.
 *
 * Features
 * - Current Score
 * - Accuracy
 * - Correct Answers
 * - Wrong Answers
 * - Skipped Questions
 * - XP
 * - Progress
 * - Responsive
 * ==========================================================
 */

export default function ScoreBoard({
  score = 0,

  maxScore = 100,

  correctAnswers = 0,

  wrongAnswers = 0,

  skippedQuestions = 0,

  answeredQuestions = 0,

  totalQuestions = 0,

  accuracy = 0,

  xp = 0,
}) {
  const progress =
    totalQuestions > 0
      ? (answeredQuestions / totalQuestions) * 100
      : 0;

  return (
    <Card
      title="Live Scoreboard"
      subtitle="Your current quiz performance"
      className="space-y-6"
    >
      {/* ================= Top ================= */}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Score */}

        <div className="rounded-xl bg-slate-800 p-5 text-center">
          <Award
            className="mx-auto mb-3 text-blue-400"
            size={26}
          />

          <h3 className="text-3xl font-bold text-white">
            {score}
          </h3>

          <p className="text-sm text-slate-400">
            Score
          </p>

          <Badge
            variant="primary"
            className="mt-3"
          >
            / {maxScore}
          </Badge>
        </div>

        {/* Accuracy */}

        <div className="rounded-xl bg-slate-800 p-5 text-center">
          <Target
            className="mx-auto mb-3 text-green-400"
            size={26}
          />

          <h3 className="text-3xl font-bold text-white">
            {accuracy}%
          </h3>

          <p className="text-sm text-slate-400">
            Accuracy
          </p>

          <Badge
            variant="success"
            className="mt-3"
          >
            Live
          </Badge>
        </div>

        {/* XP */}

        <div className="rounded-xl bg-slate-800 p-5 text-center">
          <Star
            className="mx-auto mb-3 text-yellow-400"
            size={26}
          />

          <h3 className="text-3xl font-bold text-white">
            {xp}
          </h3>

          <p className="text-sm text-slate-400">
            XP Earned
          </p>

          <Badge
            variant="warning"
            className="mt-3"
          >
            Total
          </Badge>
        </div>

        {/* Answered */}

        <div className="rounded-xl bg-slate-800 p-5 text-center">
          <CheckCircle2
            className="mx-auto mb-3 text-cyan-400"
            size={26}
          />

          <h3 className="text-3xl font-bold text-white">
            {answeredQuestions}
          </h3>

          <p className="text-sm text-slate-400">
            Answered
          </p>

          <Badge
            variant="info"
            className="mt-3"
          >
            / {totalQuestions}
          </Badge>
        </div>
      </div>

      {/* ================= Progress ================= */}

      <ProgressBar
        label="Quiz Progress"
        value={progress}
        max={100}
        variant="primary"
        showPercentage
      />

      {/* ================= Bottom Statistics ================= */}

      <div className="grid gap-4 md:grid-cols-3">
        {/* Correct */}

        <div className="flex items-center justify-between rounded-xl border border-green-700 bg-green-900/10 p-4">
          <div className="flex items-center gap-3">
            <CheckCircle2
              className="text-green-400"
              size={22}
            />

            <span className="text-white">
              Correct
            </span>
          </div>

          <Badge variant="success">
            {correctAnswers}
          </Badge>
        </div>

        {/* Wrong */}

        <div className="flex items-center justify-between rounded-xl border border-red-700 bg-red-900/10 p-4">
          <div className="flex items-center gap-3">
            <XCircle
              className="text-red-400"
              size={22}
            />

            <span className="text-white">
              Wrong
            </span>
          </div>

          <Badge variant="danger">
            {wrongAnswers}
          </Badge>
        </div>

        {/* Skipped */}

        <div className="flex items-center justify-between rounded-xl border border-yellow-700 bg-yellow-900/10 p-4">
          <div className="flex items-center gap-3">
            <SkipForward
              className="text-yellow-400"
              size={22}
            />

            <span className="text-white">
              Skipped
            </span>
          </div>

          <Badge variant="warning">
            {skippedQuestions}
          </Badge>
        </div>
      </div>
    </Card>
  );
}