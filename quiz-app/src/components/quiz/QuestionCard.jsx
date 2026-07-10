import Card from "../common/Card";
import Badge from "../common/Badge";
import OptionCard from "./OptionCard";

/**
 * ==========================================================
 * QuestionCard Component
 * ==========================================================
 * Displays a quiz question with its options.
 *
 * Features
 * - Question metadata
 * - Dynamic options
 * - Selected answer
 * - Explanation
 * - Tags
 * ==========================================================
 */

export default function QuestionCard({
  question,

  questionNumber = 1,

  totalQuestions = 1,

  selectedAnswer = null,

  showAnswer = false,

  onAnswerSelect,
}) {
  if (!question) return null;

  return (
    <Card
      hover
      className="space-y-6"
    >
      {/* ================= Header ================= */}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">
            Question {questionNumber} of {totalQuestions}
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Read the question carefully before selecting your answer.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge variant="primary">
            {question.category}
          </Badge>

          <Badge
            variant={
              question.difficulty === "Easy"
                ? "success"
                : question.difficulty === "Medium"
                ? "warning"
                : question.difficulty === "Hard"
                ? "danger"
                : "purple"
            }
          >
            {question.difficulty}
          </Badge>

          <Badge variant="info">
            {question.points} Points
          </Badge>

          <Badge variant="secondary">
            {question.timeLimit}s
          </Badge>
        </div>
      </div>

      {/* ================= Question ================= */}

      <div>
        <h3 className="text-2xl font-semibold leading-relaxed text-white">
          {question.question}
        </h3>
      </div>

      {/* ================= Options ================= */}

      <div className="space-y-4">
        {question.options.map((option, index) => (
          <OptionCard
            key={option}
            option={option}
            index={index}
            selected={selectedAnswer === option}
            showAnswer={showAnswer}
            isCorrect={
              option === question.correctAnswer
            }
            isWrong={
              showAnswer &&
              selectedAnswer === option &&
              option !== question.correctAnswer
            }
            disabled={showAnswer}
            onSelect={onAnswerSelect}
          />
        ))}
      </div>

      {/* ================= Explanation ================= */}

      {showAnswer && (
        <div className="rounded-xl border border-blue-700 bg-blue-900/20 p-5">
          <h4 className="mb-2 text-lg font-semibold text-blue-300">
            Explanation
          </h4>

          <p className="leading-7 text-slate-300">
            {question.explanation}
          </p>
        </div>
      )}

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