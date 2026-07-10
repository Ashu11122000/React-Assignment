import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { useQuizContext } from "../context/useQuizContext";

import ResultCard from "../components/quiz/ResultCard";
import ScoreBoard from "../components/quiz/ScoreBoard";

import Button from "../components/common/Button";
import Card from "../components/common/Card";
import Loader from "../components/common/Loader";

const Result = () => {
  const navigate = useNavigate();

  const {
    loading,
    error,

    quiz,

    score,

    statistics,

    analytics,

    achievements,

    resultSummary,

    timer,

    restartQuiz,

    resetQuiz,

    exportQuizResult,
  } = useQuizContext();

  /**
   * ==========================================================
   * Derived State
   * ==========================================================
   */

  const hasCompletedQuiz = useMemo(() => {
    return quiz?.completed;
  }, [quiz]);

  const answeredQuestions = useMemo(() => {
    return Object.keys(quiz?.answers ?? {}).length;
  }, [quiz]);

  const xpEarned = useMemo(() => {
    return score?.xp ?? 0;
  }, [score]);

  const accuracy = useMemo(() => {
    if (!statistics?.answeredQuestions) return 0;

    return Math.round(
      (statistics.correctAnswers /
        statistics.answeredQuestions) *
        100
    );
  }, [statistics]);

  /**
   * ==========================================================
   * Guards
   * ==========================================================
   */

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto max-w-3xl p-8">
        <Card className="space-y-6 border border-red-500">
          <h2 className="text-2xl font-bold text-red-500">
            Something went wrong
          </h2>

          <p>{error}</p>

          <Button onClick={() => navigate("/")}>
            Go Home
          </Button>
        </Card>
      </div>
    );
  }

  if (!hasCompletedQuiz) {
    return (
      <div className="mx-auto max-w-3xl p-8">
        <Card className="space-y-6">
          <h2 className="text-2xl font-bold">
            No Quiz Result Found
          </h2>

          <p className="text-slate-400">
            Complete a quiz first to view your
            results.
          </p>

          <Button onClick={() => navigate("/")}>
            Start Quiz
          </Button>
        </Card>
      </div>
    );
  }

  /**
   * ==========================================================
   * Event Handlers
   * ==========================================================
   */

  const handleReview = () => {
    navigate("/review");
  };

  const handleRetry = () => {
    restartQuiz();
    navigate("/quiz");
  };

  const handleHome = () => {
    resetQuiz();
    navigate("/");
  };

  const handleExport = () => {
    const data = exportQuizResult();

    console.log(data);
  };

  /**
   * ==========================================================
   * Page
   * ==========================================================
   */

  return (
    <div className="mx-auto w-full max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
      {/* ======================================================
          Header
      ====================================================== */}

      <header className="space-y-2">
        <h1 className="text-4xl font-bold">
          Quiz Results
        </h1>

        <p className="text-slate-400">
          Review your final performance,
          statistics, achievements and overall
          quiz summary.
        </p>
      </header>

      {/* ======================================================
          Main Grid
      ====================================================== */}

      <div className="grid gap-8 lg:grid-cols-3">

        {/* ====================================================
            Left Content
        ==================================================== */}

        <div className="space-y-8 lg:col-span-2">
                    {/* ==================================================
              Live Score Board
          ================================================== */}

          <ScoreBoard
            score={statistics.score}
            maxScore={statistics.maxScore}
            correctAnswers={statistics.correctAnswers}
            wrongAnswers={statistics.wrongAnswers}
            skippedQuestions={statistics.skippedQuestions}
            answeredQuestions={statistics.answeredQuestions}
            totalQuestions={statistics.totalQuestions}
            accuracy={accuracy}
            xp={xpEarned}
          />

          {/* ==================================================
              Final Result Card
          ================================================== */}

          <ResultCard
            score={statistics.score}
            maxScore={statistics.maxScore}
            percentage={statistics.percentage}
            grade={score.grade}
            correctAnswers={statistics.correctAnswers}
            wrongAnswers={statistics.wrongAnswers}
            skippedQuestions={statistics.skippedQuestions}
            totalQuestions={statistics.totalQuestions}
            xpEarned={xpEarned}
            timeTaken={timer.formattedTime}
            onRetry={handleRetry}
            onReview={handleReview}
          />

          {/* ==================================================
              Quiz Summary
          ================================================== */}

          <Card
            title="Quiz Summary"
            subtitle="Overview of the completed quiz"
            className="space-y-6"
          >
            <div className="grid gap-5 sm:grid-cols-2">

              <div>
                <p className="text-sm text-slate-400">
                  Category
                </p>

                <p className="mt-1 font-semibold">
                  {quiz.category}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-400">
                  Difficulty
                </p>

                <p className="mt-1 font-semibold">
                  {quiz.difficulty}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-400">
                  Questions
                </p>

                <p className="mt-1 font-semibold">
                  {statistics.totalQuestions}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-400">
                  Answered
                </p>

                <p className="mt-1 font-semibold">
                  {answeredQuestions}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-400">
                  Started
                </p>

                <p className="mt-1 font-semibold">
                  {quiz.startedAt
                    ? new Date(
                        quiz.startedAt
                      ).toLocaleString()
                    : "-"}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-400">
                  Completed
                </p>

                <p className="mt-1 font-semibold">
                  {quiz.completedAt
                    ? new Date(
                        quiz.completedAt
                      ).toLocaleString()
                    : "-"}
                </p>
              </div>

            </div>
          </Card>

          {/* ==================================================
              Performance Analytics
          ================================================== */}

          <Card
            title="Performance Analytics"
            subtitle="Detailed quiz insights"
            className="space-y-6"
          >
            <div className="grid gap-5 md:grid-cols-2">

              <div>
                <p className="text-sm text-slate-400">
                  Average Time / Question
                </p>

                <p className="mt-1 text-xl font-semibold">
                  {analytics.averageTimePerQuestion.toFixed(1)} sec
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-400">
                  Completion Rate
                </p>

                <p className="mt-1 text-xl font-semibold">
                  {Math.round(
                    analytics.completionRate
                  )}
                  %
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-400">
                  Accuracy Rate
                </p>

                <p className="mt-1 text-xl font-semibold">
                  {Math.round(
                    analytics.accuracy * 100
                  )}
                  %
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-400">
                  Score / Question
                </p>

                <p className="mt-1 text-xl font-semibold">
                  {analytics.scorePerQuestion.toFixed(
                    1
                  )}
                </p>
              </div>

            </div>
          </Card>

        </div>

        {/* ==============================================
            Right Sidebar Starts Here
        ============================================== */}

        <aside className="space-y-6">
                    {/* ==================================================
              Result Summary
          ================================================== */}

          <Card
            title="Result Summary"
            subtitle="Overall quiz performance"
            className="space-y-4"
          >
            <div className="space-y-3">

              <div className="flex items-center justify-between">
                <span className="text-slate-400">
                  Final Score
                </span>

                <span className="font-semibold">
                  {statistics.score} / {statistics.maxScore}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-400">
                  Percentage
                </span>

                <span className="font-semibold">
                  {statistics.percentage}%
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-400">
                  Grade
                </span>

                <span className="font-semibold">
                  {score.grade}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-400">
                  XP Earned
                </span>

                <span className="font-semibold">
                  {xpEarned}
                </span>
              </div>

            </div>
          </Card>

          {/* ==================================================
              Achievements
          ================================================== */}

          <Card
            title="Achievements"
            subtitle="Unlocked during this quiz"
            className="space-y-4"
          >
            {Array.isArray(achievements) &&
            achievements.length > 0 ? (
              <div className="space-y-3">
                {achievements.map(
                  (achievement, index) => (
                    <div
                      key={
                        achievement.id ??
                        achievement.name ??
                        index
                      }
                      className="rounded-lg border border-slate-700 p-3"
                    >
                      <h4 className="font-semibold">
                        {achievement.title ??
                          achievement.name}
                      </h4>

                      {(achievement.description ||
                        achievement.message) && (
                        <p className="mt-1 text-sm text-slate-400">
                          {achievement.description ??
                            achievement.message}
                        </p>
                      )}
                    </div>
                  )
                )}
              </div>
            ) : (
              <p className="text-sm text-slate-400">
                No achievements unlocked.
              </p>
            )}
          </Card>

          {/* ==================================================
              Actions
          ================================================== */}

          <Card
            title="Quick Actions"
            className="space-y-4"
          >
            <Button
              fullWidth
              variant="primary"
              onClick={handleReview}
            >
              Review Answers
            </Button>

            <Button
              fullWidth
              variant="success"
              onClick={handleRetry}
            >
              Play Again
            </Button>

            <Button
              fullWidth
              variant="secondary"
              onClick={handleExport}
            >
              Export Result
            </Button>

            <Button
              fullWidth
              variant="outline"
              onClick={handleHome}
            >
              Back To Home
            </Button>
          </Card>

          {/* ==================================================
              Generated Summary
          ================================================== */}

          {resultSummary && (
            <Card
              title="Performance Summary"
              className="space-y-4"
            >
              {typeof resultSummary ===
              "string" ? (
                <p className="leading-7 text-slate-300">
                  {resultSummary}
                </p>
              ) : (
                <pre className="overflow-auto rounded-lg bg-slate-900 p-4 text-sm">
                  {JSON.stringify(
                    resultSummary,
                    null,
                    2
                  )}
                </pre>
              )}
            </Card>
          )}
        </aside>
      </div>
    </div>
  );
};

export default Result;