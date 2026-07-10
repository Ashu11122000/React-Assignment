import { useCallback, useEffect, useMemo, useState } from "react";
import { useBeforeUnload, useNavigate } from "react-router-dom";
import {
  AlertTriangle,
  BookOpen,
  Brain,
  Home,
} from "lucide-react";

import { useQuizContext } from "../context/useQuizContext";

import Button from "../components/common/Button";
import Card from "../components/common/Card";
import Loader from "../components/common/Loader";
import Modal from "../components/common/Modal";

import QuizHeader from "../components/quiz/QuizHeader";
import Timer from "../components/quiz/Timer";
import QuestionCard from "../components/quiz/QuestionCard";
import QuestionNavigator from "../components/quiz/QuestionNavigator";
import QuizFooter from "../components/quiz/QuizFooter";
import ScoreBoard from "../components/quiz/ScoreBoard";

/**
 * ==========================================================
 * Quiz Page
 * ==========================================================
 *
 * Responsibilities
 *
 * • Display active quiz
 * • Render current question
 * • Handle quiz navigation
 * • Connect QuizContext
 * • Display timer
 * • Display scoreboard
 * • Finish quiz
 *
 * ==========================================================
 */

const Quiz = () => {
  const navigate = useNavigate();

  /**
   * ==========================================================
   * Quiz Context
   * ==========================================================
   */

  const {
    /*
     * Core State
     */
    loading,
    error,
    quiz,
    currentQuestion,
    progress,

    /*
     * Statistics
     */
    statistics,
    analytics,

    /*
     * Helpers
     */
    timer,
    score,

    /*
     * Status
     */
    hasQuiz,
    isCompleted,
    hasNextQuestion,
    hasPreviousQuestion,
    canFinish,

    /*
     * Actions
     */
    answerQuestion,
    nextQuestion,
    previousQuestion,
    skipQuestion,
    jumpToQuestion,
    finishQuiz,
    saveLeaderboard,
  } = useQuizContext();

  /**
   * ==========================================================
   * Local State
   * ==========================================================
   */

  const [showFinishModal, setShowFinishModal] =
    useState(false);

  /**
   * ==========================================================
   * Page Title
   * ==========================================================
   */

  useEffect(() => {
    document.title = "Quiz";
  }, []);

  /**
   * ==========================================================
   * Navigation Guards
   * ==========================================================
   */

  useEffect(() => {
    if (!loading && !hasQuiz) {
      navigate("/", { replace: true });
    }
  }, [loading, hasQuiz, navigate]);

  useEffect(() => {
    if (isCompleted) {
      navigate("/result", { replace: true });
    }
  }, [isCompleted, navigate]);

  /**
   * ==========================================================
   * Prevent Refresh
   * ==========================================================
   */

  useBeforeUnload(
    !isCompleted
      ? (event) => {
          event.preventDefault();
        }
      : undefined,
  );

  /**
   * ==========================================================
   * Current Question Number
   * ==========================================================
   */

  const currentQuestionNumber = useMemo(() => {
    return quiz.currentQuestionIndex + 1;
  }, [quiz.currentQuestionIndex]);

  /**
   * ==========================================================
   * Progress Label
   * ==========================================================
   */

  const progressLabel = useMemo(() => {
    return `${currentQuestionNumber} / ${quiz.totalQuestions}`;
  }, [
    currentQuestionNumber,
    quiz.totalQuestions,
  ]);

  /**
   * ==========================================================
   * Finish Handler
   * ==========================================================
   */

  const handleFinishQuiz = useCallback(() => {
    finishQuiz();

    saveLeaderboard();

    navigate("/result");
  }, [
    finishQuiz,
    saveLeaderboard,
    navigate,
  ]);

  /**
   * ==========================================================
   * Loading
   * ==========================================================
   */

  if (loading) {
    return (
      <Loader
        fullscreen
        text="Preparing your quiz..."
      />
    );
  }

  /**
   * ==========================================================
   * Error
   * ==========================================================
   */

  if (error) {
    return (
      <div className="mx-auto flex min-h-[70vh] max-w-xl items-center justify-center px-4">

        <Card
          elevated
          className="w-full text-center"
        >
          <div className="space-y-6">

            <AlertTriangle
              size={64}
              className="mx-auto text-red-500"
            />

            <div>

              <h2 className="text-2xl font-bold">
                Something went wrong
              </h2>

              <p className="mt-3 text-gray-500">
                {error}
              </p>

            </div>

            <Button
              icon={<Home size={18} />}
              onClick={() => navigate("/")}
            >
              Return Home
            </Button>

          </div>
        </Card>

      </div>
    );
  }

  /**
   * ==========================================================
   * Missing Question
   * ==========================================================
   */

  if (!currentQuestion) {
    return (
      <div className="mx-auto flex min-h-[70vh] max-w-xl items-center justify-center px-4">

        <Card
          elevated
          className="w-full text-center"
        >

          <Brain
            size={64}
            className="mx-auto text-primary"
          />

          <h2 className="mt-6 text-2xl font-bold">
            Question Not Available
          </h2>

          <p className="mt-3 text-gray-500">
            Unable to load the current question.
          </p>

          <Button
            className="mt-8"
            icon={<Home size={18} />}
            onClick={() => navigate("/")}
          >
            Back Home
          </Button>

        </Card>

      </div>
    );
  }

  /**
   * ==========================================================
   * Main Layout
   * ==========================================================
   */

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8">
              {/* ==========================================================
          Quiz Header
      ========================================================== */}

      <QuizHeader
        category={quiz.category}
        difficulty={quiz.difficulty}
        progress={progress}
        currentQuestion={currentQuestionNumber}
        totalQuestions={quiz.totalQuestions}
        score={score.score}
        remainingQuestions={statistics.remainingQuestions}
      />

      {/* ==========================================================
          Main Content
      ========================================================== */}

      <div className="grid gap-8 xl:grid-cols-4">

        {/* ======================================================
            Left Section
        ====================================================== */}

        <section className="space-y-6 xl:col-span-3">

          {/* ==================================================
              Timer
          ================================================== */}

          <Timer
            timeLeft={timer.timeLeft}
            duration={timer.duration}
            isRunning={timer.isRunning}
            progress={timer.progress}
          />

          {/* ==================================================
              Current Question
          ================================================== */}

          <QuestionCard
            question={currentQuestion}
            questionNumber={currentQuestionNumber}
            totalQuestions={quiz.totalQuestions}
            selectedAnswer={
              quiz.answers[currentQuestion.id]?.selectedAnswer
            }
            onAnswer={answerQuestion}
          />

          {/* ==================================================
              Question Navigator
          ================================================== */}

          <QuestionNavigator
            currentQuestion={quiz.currentQuestionIndex}
            totalQuestions={quiz.totalQuestions}
            answers={quiz.answers}
            skippedQuestions={quiz.skippedQuestions}
            onJump={jumpToQuestion}
          />

        </section>

        {/* ======================================================
            Right Sidebar
        ====================================================== */}

        <aside className="space-y-6">

          {/* ==================================================
              Live Score
          ================================================== */}

          <ScoreBoard
            score={score.score}
            statistics={statistics}
            progress={progress}
          />

          {/* ==================================================
              Current Question
          ================================================== */}

          <Card
            elevated
            glass
          >

            <div className="flex items-center gap-3">

              <BookOpen
                size={22}
                className="text-primary"
              />

              <div>

                <h3 className="font-semibold">
                  Current Question
                </h3>

                <p className="text-sm text-gray-500">

                  {progressLabel}

                </p>

              </div>

            </div>

          </Card>

          {/* ==================================================
              Live Analytics
          ================================================== */}

          <Card
            elevated
            glass
          >

            <h3 className="mb-5 text-lg font-semibold">
              Live Analytics
            </h3>

            <div className="space-y-5">

              <div className="flex items-center justify-between">

                <span className="text-sm">
                  Accuracy
                </span>

                <span className="font-semibold">

                  {(analytics.accuracy * 100).toFixed(0)}%

                </span>

              </div>

              <div className="flex items-center justify-between">

                <span className="text-sm">
                  Average Time
                </span>

                <span className="font-semibold">

                  {analytics.averageTimePerQuestion.toFixed(1)} s

                </span>

              </div>

              <div className="flex items-center justify-between">

                <span className="text-sm">
                  Score / Question
                </span>

                <span className="font-semibold">

                  {analytics.scorePerQuestion.toFixed(1)}

                </span>

              </div>

            </div>

          </Card>

          {/* ==================================================
              Quiz Progress
          ================================================== */}

          <Card
            elevated
            glass
          >

            <h3 className="mb-5 text-lg font-semibold">
              Progress Summary
            </h3>

            <div className="space-y-4">

              <div className="flex items-center justify-between">

                <span>Answered</span>

                <span className="font-semibold">

                  {statistics.answeredQuestions}

                </span>

              </div>

              <div className="flex items-center justify-between">

                <span>Correct</span>

                <span className="font-semibold text-green-600">

                  {statistics.correctAnswers}

                </span>

              </div>

              <div className="flex items-center justify-between">

                <span>Wrong</span>

                <span className="font-semibold text-red-600">

                  {statistics.wrongAnswers}

                </span>

              </div>

              <div className="flex items-center justify-between">

                <span>Skipped</span>

                <span className="font-semibold text-yellow-500">

                  {statistics.skippedQuestions}

                </span>

              </div>

            </div>

          </Card>

        </aside>

      </div>

            {/* ==========================================================
          Desktop Footer
      ========================================================== */}

      <div className="hidden xl:block">

        <QuizFooter
          hasPrevious={hasPreviousQuestion}
          hasNext={hasNextQuestion}
          canFinish={canFinish}
          onPrevious={previousQuestion}
          onNext={nextQuestion}
          onSkip={skipQuestion}
          onFinish={() => setShowFinishModal(true)}
        />

      </div>

      {/* ==========================================================
          Mobile Sticky Footer
      ========================================================== */}

      <div className="sticky bottom-0 z-40 bg-white/95 py-4 backdrop-blur dark:bg-gray-900/95 xl:hidden">

        <QuizFooter
          hasPrevious={hasPreviousQuestion}
          hasNext={hasNextQuestion}
          canFinish={canFinish}
          onPrevious={previousQuestion}
          onNext={nextQuestion}
          onSkip={skipQuestion}
          onFinish={() => setShowFinishModal(true)}
        />

      </div>

      {/* ==========================================================
          Finish Quiz Modal
      ========================================================== */}

      <Modal
        isOpen={showFinishModal}
        onClose={() => setShowFinishModal(false)}
        title="Finish Quiz"
        size="md"
      >

        <div className="space-y-6">

          <p className="text-gray-500">

            Are you sure you want to finish this quiz?

            <br />

            You can review all answers after submitting.

          </p>

          <div className="rounded-xl bg-gray-50 p-5 dark:bg-gray-800">

            <div className="space-y-3">

              <div className="flex items-center justify-between">

                <span>Answered</span>

                <strong>
                  {statistics.answeredQuestions}
                </strong>

              </div>

              <div className="flex items-center justify-between">

                <span>Remaining</span>

                <strong>
                  {statistics.totalQuestions -
                    statistics.answeredQuestions}
                </strong>

              </div>

              <div className="flex items-center justify-between">

                <span>Current Score</span>

                <strong>
                  {score.score}
                </strong>

              </div>

            </div>

          </div>

          <div className="flex justify-end gap-3">

            <Button
              variant="secondary"
              onClick={() =>
                setShowFinishModal(false)
              }
            >
              Continue Quiz
            </Button>

            <Button
              variant="danger"
              onClick={handleFinishQuiz}
            >
              Finish Quiz
            </Button>

          </div>

        </div>

      </Modal>

    </div>
  );
};

export default Quiz;