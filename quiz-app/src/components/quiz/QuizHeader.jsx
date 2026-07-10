import { BookOpen, Target, Clock3, Award } from "lucide-react";

import Badge from "../common/Badge";
import ProgressBar from "../common/ProgressBar";

/**
 * ==========================================================
 * QuizHeader Component
 * ==========================================================
 * Displays quiz information.
 *
 * Features
 * - Quiz Title
 * - Category
 * - Difficulty
 * - Progress
 * - Timer
 * - Score
 * - Remaining Questions
 * ==========================================================
 */

export default function QuizHeader({
  title = "Quiz",

  category = "",

  difficulty = "",

  currentQuestion = 1,

  totalQuestions = 1,

  score = 0,

  timeRemaining = 0,

  progress = 0,
}) {
  const remainingQuestions = Math.max(
    totalQuestions - currentQuestion,
    0
  );

  const difficultyVariant = {
    Easy: "success",
    Medium: "warning",
    Hard: "danger",
    Expert: "purple",
  };

  return (
    <header className="mb-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
      {/* ================= Top ================= */}

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}

        <div>
          <h1 className="text-3xl font-bold text-white">
            {title}
          </h1>

          <p className="mt-2 text-slate-400">
            Answer every question carefully and
            improve your interview skills.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {category && (
              <Badge variant="primary">
                {category}
              </Badge>
            )}

            {difficulty && (
              <Badge
                variant={
                  difficultyVariant[
                    difficulty
                  ] || "secondary"
                }
              >
                {difficulty}
              </Badge>
            )}
          </div>
        </div>

        {/* Right */}

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {/* Question */}

          <div className="rounded-xl bg-slate-800 p-4 text-center">
            <BookOpen
              className="mx-auto mb-2 text-blue-400"
              size={22}
            />

            <p className="text-2xl font-bold text-white">
              {currentQuestion}/{totalQuestions}
            </p>

            <p className="text-xs uppercase tracking-wide text-slate-400">
              Question
            </p>
          </div>

          {/* Score */}

          <div className="rounded-xl bg-slate-800 p-4 text-center">
            <Award
              className="mx-auto mb-2 text-green-400"
              size={22}
            />

            <p className="text-2xl font-bold text-white">
              {score}
            </p>

            <p className="text-xs uppercase tracking-wide text-slate-400">
              Score
            </p>
          </div>

          {/* Time */}

          <div className="rounded-xl bg-slate-800 p-4 text-center">
            <Clock3
              className="mx-auto mb-2 text-yellow-400"
              size={22}
            />

            <p className="text-2xl font-bold text-white">
              {timeRemaining}s
            </p>

            <p className="text-xs uppercase tracking-wide text-slate-400">
              Time
            </p>
          </div>

          {/* Remaining */}

          <div className="rounded-xl bg-slate-800 p-4 text-center">
            <Target
              className="mx-auto mb-2 text-purple-400"
              size={22}
            />

            <p className="text-2xl font-bold text-white">
              {remainingQuestions}
            </p>

            <p className="text-xs uppercase tracking-wide text-slate-400">
              Remaining
            </p>
          </div>
        </div>
      </div>

      {/* ================= Progress ================= */}

      <div className="mt-8">
        <ProgressBar
          label="Quiz Progress"
          value={progress}
          max={100}
          variant="primary"
          showPercentage
        />
      </div>
    </header>
  );
}