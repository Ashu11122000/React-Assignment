import { useMemo, useState } from "react";
import { Search, Filter, BookOpen } from "lucide-react";

import { useQuizContext } from "../context/useQuizContext";

import ReviewAnswer from "../components/quiz/ReviewAnswer";

import Card from "../components/common/Card";
import Button from "../components/common/Button";
import Badge from "../components/common/Badge";
import Loader from "../components/common/Loader";

/**
 * ==========================================================
 * Review Page
 * ==========================================================
 *
 * Features
 * - Review all questions
 * - Search questions
 * - Filter answers
 * - Statistics
 * - Explanation
 * - Responsive
 * ==========================================================
 */

const FILTERS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Correct",
    value: "correct",
  },
  {
    label: "Incorrect",
    value: "incorrect",
  },
  {
    label: "Skipped",
    value: "skipped",
  },
];

const Review = () => {
  /**
   * ==========================================================
   * Context
   * ==========================================================
   */

  const { loading, quiz, reviewAnswers, statistics } = useQuizContext();

  /**
   * ==========================================================
   * Local State
   * ==========================================================
   */

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("all");

  /**
   * ==========================================================
   * Filtered Questions
   * ==========================================================
   */

  const filteredQuestions = useMemo(() => {
    let questions = [...reviewAnswers];

    if (search.trim()) {
      const keyword = search.toLowerCase();

      questions = questions.filter((question) =>
        question.question?.toLowerCase().includes(keyword),
      );
    }

    switch (filter) {
      case "correct":
        questions = questions.filter(
          (question) => question.answer?.isCorrect === true,
        );
        break;

      case "incorrect":
        questions = questions.filter(
          (question) => question.answer && !question.answer.isCorrect,
        );
        break;

      case "skipped":
        questions = questions.filter((question) => question.wasSkipped);
        break;

      default:
        break;
    }

    return questions;
  }, [reviewAnswers, search, filter]);

  /**
   * ==========================================================
   * Statistics
   * ==========================================================
   */

  const reviewStats = useMemo(() => {
    const total = reviewAnswers.length;

    const correct = reviewAnswers.filter(
      (question) => question.answer?.isCorrect,
    ).length;

    const skipped = reviewAnswers.filter(
      (question) => question.wasSkipped,
    ).length;

    const incorrect = total - correct - skipped;

    return {
      total,
      correct,
      incorrect,
      skipped,
    };
  }, [reviewAnswers]);

  /**
   * ==========================================================
   * Loading
   * ==========================================================
   */

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader />
      </div>
    );
  }

  /**
   * ==========================================================
   * Empty Review
   * ==========================================================
   */

  if (!quiz.completed || reviewAnswers.length === 0) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-12">
        <Card className="space-y-6 py-16 text-center">
          <BookOpen size={70} className="mx-auto text-slate-500" />

          <h2 className="text-3xl font-bold">No Review Available</h2>

          <p className="mx-auto max-w-2xl text-slate-400">
            Complete a quiz to review your answers, explanations, and
            performance.
          </p>
        </Card>
      </div>
    );
  }

  /**
   * ==========================================================
   * Page
   * ==========================================================
   */

  return (
    <div className="mx-auto w-full max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
      {/* ======================================================
          Hero
      ====================================================== */}

      <section>
        <Card className="overflow-hidden bg-linear-to-r from-indigo-600 via-blue-600 to-cyan-600 p-10 text-white">
          <Badge variant="warning" className="mb-5">
            Review Mode
          </Badge>

          <h1 className="text-5xl font-bold">Review Your Answers</h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Analyze every question, compare your answers with the correct
            solutions, and learn from detailed explanations.
          </p>
        </Card>
      </section>

      {/* ======================================================
          Review Statistics
      ====================================================== */}

      <section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="text-center">
            <h3 className="text-4xl font-bold text-blue-400">
              {reviewStats.total}
            </h3>

            <p className="mt-2 text-slate-400">Total Questions</p>
          </Card>

          <Card className="text-center">
            <h3 className="text-4xl font-bold text-green-400">
              {reviewStats.correct}
            </h3>

            <p className="mt-2 text-slate-400">Correct</p>
          </Card>

          <Card className="text-center">
            <h3 className="text-4xl font-bold text-red-400">
              {reviewStats.incorrect}
            </h3>

            <p className="mt-2 text-slate-400">Incorrect</p>
          </Card>

          <Card className="text-center">
            <h3 className="text-4xl font-bold text-yellow-400">
              {reviewStats.skipped}
            </h3>

            <p className="mt-2 text-slate-400">Skipped</p>
          </Card>
        </div>
      </section>

      {/* ======================================================
          Search & Filter
      ====================================================== */}

      <section>
        <Card
          title="Find Questions"
          subtitle="Search and filter reviewed questions"
          className="space-y-6"
        >
          <div className="flex flex-col gap-4 lg:flex-row">
            <div className="relative flex-1">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                value={search}
                placeholder="Search question..."
                onChange={(event) => setSearch(event.target.value)}
                className="w-full rounded-xl border border-slate-700 bg-slate-900 py-3 pl-12 pr-4 outline-none transition focus:border-blue-500"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              {FILTERS.map((item) => (
                <Button
                  key={item.value}
                  variant={filter === item.value ? "primary" : "secondary"}
                  onClick={() => setFilter(item.value)}
                >
                  <Filter size={16} className="mr-2" />

                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        </Card>
      </section>

      {/* ======================================================
          Review Summary
      ====================================================== */}

      <section>
        <Card
          title="Quiz Summary"
          subtitle="Overview of your completed quiz"
          className="space-y-6"
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-sm text-slate-500">Category</p>

              <p className="mt-2 text-lg font-semibold">{quiz.category}</p>
            </div>

            <div>
              <p className="text-sm text-slate-500">Difficulty</p>

              <p className="mt-2 text-lg font-semibold">{quiz.difficulty}</p>
            </div>

            <div>
              <p className="text-sm text-slate-500">Score</p>

              <p className="mt-2 text-lg font-semibold">
                {statistics.score} / {statistics.maxScore}
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">Percentage</p>

              <p className="mt-2 text-lg font-semibold">
                {statistics.percentage}%
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* ======================================================
          Review Questions
      ====================================================== */}

      <section>
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold">Question Review</h2>

          <Badge variant="primary">
            {filteredQuestions.length} Question
            {filteredQuestions.length !== 1 ? "s" : ""}
          </Badge>
        </div>

        <div className="space-y-6">
          {filteredQuestions.length === 0 ? (
            <Card className="py-16 text-center">
              <Search size={64} className="mx-auto mb-6 text-slate-500" />

              <h3 className="text-2xl font-bold">No Questions Found</h3>

              <p className="mx-auto mt-4 max-w-2xl text-slate-400">
                No reviewed questions match your current search or filter.
              </p>
            </Card>
          ) : (
            filteredQuestions.map((question, index) => (
              <ReviewAnswer
                key={question.id}
                question={question}
                userAnswer={question.answer?.selectedAnswer}
                questionNumber={index + 1}
              />
            ))
          )}
        </div>
      </section>

      {/* ======================================================
          Footer Actions
      ====================================================== */}

      <section>
        <Card
          title="Review Complete"
          subtitle="Continue your learning journey"
          className="space-y-6"
        >
          <p className="leading-8 text-slate-400">
            Reviewing your answers is one of the best ways to improve your
            understanding. Compare your responses with the explanations,
            identify weak areas, and continue practicing to increase your score
            in future quizzes.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-green-700 bg-green-900/10 p-5 text-center">
              <h3 className="text-3xl font-bold text-green-400">
                {reviewStats.correct}
              </h3>

              <p className="mt-2 text-sm text-slate-400">Correct Answers</p>
            </div>

            <div className="rounded-xl border border-red-700 bg-red-900/10 p-5 text-center">
              <h3 className="text-3xl font-bold text-red-400">
                {reviewStats.incorrect}
              </h3>

              <p className="mt-2 text-sm text-slate-400">Incorrect Answers</p>
            </div>

            <div className="rounded-xl border border-yellow-700 bg-yellow-900/10 p-5 text-center">
              <h3 className="text-3xl font-bold text-yellow-400">
                {reviewStats.skipped}
              </h3>

              <p className="mt-2 text-sm text-slate-400">Skipped Questions</p>
            </div>

            <div className="rounded-xl border border-blue-700 bg-blue-900/10 p-5 text-center">
              <h3 className="text-3xl font-bold text-blue-400">
                {statistics.percentage}%
              </h3>

              <p className="mt-2 text-sm text-slate-400">Final Percentage</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button variant="primary" onClick={() => window.history.back()}>
              Back
            </Button>

            <Button
              variant="success"
              onClick={() => (window.location.href = "/quiz")}
            >
              Play Again
            </Button>

            <Button
              variant="secondary"
              onClick={() => (window.location.href = "/leaderboard")}
            >
              Leaderboard
            </Button>

            <Button
              variant="outline"
              onClick={() => (window.location.href = "/")}
            >
              Home
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Review;
