import { useCallback, useEffect, useMemo, useState } from "react";

import useTimer from "./useTimer";
import useScore from "./useScore";
import useLocalStorage from "./useLocalStorage";

import quizService from "../services/quizService";
import localStorageService from "../services/localStorage";

/**
 * ==========================================================
 * useQuiz
 * ==========================================================
 * Main hook that manages the complete quiz lifecycle.
 *
 * Responsibilities:
 * - Quiz initialization
 * - Question navigation
 * - Timer integration
 * - Score calculation
 * - Progress tracking
 * - Resume quiz
 * - Auto save
 * - Finish quiz
 * - Analytics
 * - Leaderboard
 * ==========================================================
 */

const useQuiz = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [quiz, setQuiz] = useState({
    id: null,

    category: null,

    difficulty: null,

    questions: [],

    currentQuestionIndex: 0,

    answers: {},

    skippedQuestions: [],

    reviewAnswers: [],

    completed: false,

    startedAt: null,

    completedAt: null,

    totalQuestions: 0,
  });

  const timer = useTimer();

  const score = useScore();

  const storage = useLocalStorage();

  const currentQuestion = useMemo(() => {
    return quiz.questions[quiz.currentQuestionIndex] ?? null;
  }, [quiz.questions, quiz.currentQuestionIndex]);

  const progress = useMemo(() => {
    if (!quiz.totalQuestions) return 0;

    return Math.round(
      ((quiz.currentQuestionIndex + 1) / quiz.totalQuestions) * 100,
    );
  }, [quiz.currentQuestionIndex, quiz.totalQuestions]);

  const initializeQuiz = useCallback(
    ({
      category,
      difficulty,
      numberOfQuestions = 10,
      shuffleQuestions = true,
      shuffleOptions = true,
    }) => {
      setLoading(true);
      setError(null);

      try {
        const { questions } = quizService.createQuiz({
          category,
          difficulty,
          numberOfQuestions,
          shuffleQuestions,
          shuffleOptions,
        });

        const quizData = {
          id: Date.now(),

          category,

          difficulty,

          questions,

          currentQuestionIndex: 0,

          answers: {},

          skippedQuestions: [],

          reviewAnswers: [],

          completed: false,

          startedAt: new Date().toISOString(),

          completedAt: null,

          totalQuestions: questions.length,
        };

        setQuiz(quizData);

        score.resetScore();

        timer.resetTimer();

        if (questions.length) {
          timer.setDuration(questions[0].timeLimit);
        }

        storage.saveQuizProgress(quizData);

        return quizData;
      } catch (err) {
        console.error(err);

        setError(err.message);

        return null;
      } finally {
        setLoading(false);
      }
    },
    [timer, score, storage],
  );

  const loadSavedQuiz = useCallback(() => {
    const savedQuiz = localStorageService.getQuizProgress();

    if (!savedQuiz) return null;

    setQuiz(savedQuiz);

    return savedQuiz;
  }, []);

  const clearQuiz = useCallback(() => {
    setQuiz({
      id: null,

      category: null,

      difficulty: null,

      questions: [],

      currentQuestionIndex: 0,

      answers: {},

      skippedQuestions: [],

      reviewAnswers: [],

      completed: false,

      startedAt: null,

      completedAt: null,

      totalQuestions: 0,
    });

    score.resetScore();

    timer.resetTimer();

    storage.clearQuizProgress();
  }, [score, timer, storage]);
  /**
   * ==========================================================
   * Start Quiz
   * ==========================================================
   */

  const startQuiz = useCallback(
    (config) => {
      const createdQuiz = initializeQuiz(config);

      if (!createdQuiz) return null;

      timer.startTimer();

      return createdQuiz;
    },
    [initializeQuiz, timer],
  );

  /**
   * ==========================================================
   * Resume Quiz
   * ==========================================================
   */

  const resumeQuiz = useCallback(() => {
    const savedQuiz = loadSavedQuiz();

    if (!savedQuiz) return null;

    const current = savedQuiz.questions[savedQuiz.currentQuestionIndex];

    if (current) {
      timer.setDuration(current.timeLimit);
    }

    timer.startTimer();

    return savedQuiz;
  }, [loadSavedQuiz, timer]);

  /**
   * ==========================================================
   * Restart Quiz
   * ==========================================================
   */

  const restartQuiz = useCallback(() => {
    if (!quiz.questions.length) return;

    const restartedQuiz = {
      ...quiz,

      currentQuestionIndex: 0,

      answers: {},

      skippedQuestions: [],

      reviewAnswers: [],

      completed: false,

      startedAt: new Date().toISOString(),

      completedAt: null,
    };

    setQuiz(restartedQuiz);

    score.resetScore();

    timer.resetTimer();

    timer.setDuration(restartedQuiz.questions[0].timeLimit);

    timer.startTimer();

    storage.saveQuizProgress(restartedQuiz);
  }, [quiz, score, timer, storage]);

  /**
   * ==========================================================
   * Reset Quiz
   * ==========================================================
   */

  const resetQuiz = useCallback(() => {
    clearQuiz();
  }, [clearQuiz]);

  /**
   * ==========================================================
   * Next Question
   * ==========================================================
   */

  const nextQuestion = useCallback(() => {
    setQuiz((previousQuiz) => {
      if (
        previousQuiz.currentQuestionIndex >=
        previousQuiz.questions.length - 1
      ) {
        return previousQuiz;
      }

      const updatedQuiz = {
        ...previousQuiz,

        currentQuestionIndex: previousQuiz.currentQuestionIndex + 1,
      };

      storage.saveQuizProgress(updatedQuiz);

      return updatedQuiz;
    });
  }, [storage]);

  /**
   * ==========================================================
   * Previous Question
   * ==========================================================
   */

  const previousQuestion = useCallback(() => {
    setQuiz((previousQuiz) => {
      if (previousQuiz.currentQuestionIndex <= 0) {
        return previousQuiz;
      }

      const updatedQuiz = {
        ...previousQuiz,

        currentQuestionIndex: previousQuiz.currentQuestionIndex - 1,
      };

      storage.saveQuizProgress(updatedQuiz);

      return updatedQuiz;
    });
  }, [storage]);

  /**
   * ==========================================================
   * Jump To Question
   * ==========================================================
   */

  const jumpToQuestion = useCallback(
    (index) => {
      setQuiz((previousQuiz) => {
        if (index < 0 || index >= previousQuiz.questions.length) {
          return previousQuiz;
        }

        const updatedQuiz = {
          ...previousQuiz,

          currentQuestionIndex: index,
        };

        storage.saveQuizProgress(updatedQuiz);

        return updatedQuiz;
      });
    },
    [storage],
  );

  /**
   * ==========================================================
   * Skip Question
   * ==========================================================
   */

  const skipQuestion = useCallback(() => {
    setQuiz((previousQuiz) => {
      const question =
        previousQuiz.questions[previousQuiz.currentQuestionIndex];

      if (!question) {
        return previousQuiz;
      }

      const alreadySkipped = previousQuiz.skippedQuestions.includes(
        question.id,
      );

      const skippedQuestions = alreadySkipped
        ? previousQuiz.skippedQuestions
        : [...previousQuiz.skippedQuestions, question.id];

      const updatedQuiz = {
        ...previousQuiz,

        skippedQuestions,

        currentQuestionIndex:
          previousQuiz.currentQuestionIndex < previousQuiz.questions.length - 1
            ? previousQuiz.currentQuestionIndex + 1
            : previousQuiz.currentQuestionIndex,
      };

      storage.saveQuizProgress(updatedQuiz);

      return updatedQuiz;
    });
  }, [storage]);

  /**
   * ==========================================================
   * Navigation Helpers
   * ==========================================================
   */

  const hasNextQuestion = useMemo(() => {
    return quiz.currentQuestionIndex < quiz.questions.length - 1;
  }, [quiz.currentQuestionIndex, quiz.questions.length]);

  const hasPreviousQuestion = useMemo(() => {
    return quiz.currentQuestionIndex > 0;
  }, [quiz.currentQuestionIndex]);

  const isFirstQuestion = useMemo(() => {
    return quiz.currentQuestionIndex === 0;
  }, [quiz.currentQuestionIndex]);

  const isLastQuestion = useMemo(() => {
    return quiz.currentQuestionIndex === quiz.questions.length - 1;
  }, [quiz.currentQuestionIndex, quiz.questions.length]);
  /**
   * ==========================================================
   * Answer Question
   * ==========================================================
   */

  const answerQuestion = useCallback(
    (selectedAnswer) => {
      if (!currentQuestion) return;

      const isCorrect = currentQuestion.correctAnswer === selectedAnswer;

      setQuiz((previousQuiz) => {
        const updatedQuiz = {
          ...previousQuiz,

          answers: {
            ...previousQuiz.answers,

            [currentQuestion.id]: {
              questionId: currentQuestion.id,

              selectedAnswer,

              correctAnswer: currentQuestion.correctAnswer,

              isCorrect,

              answeredAt: new Date().toISOString(),
            },
          },
        };

        storage.saveQuizProgress(updatedQuiz);

        return updatedQuiz;
      });

      if (isCorrect) {
        score.addScore(currentQuestion.points);
      } else {
        score.addWrongAnswer();
      }

      score.addAnsweredQuestion();
    },
    [currentQuestion, score, storage],
  );

  /**
   * ==========================================================
   * Validate Current Answer
   * ==========================================================
   */

  const validateCurrentAnswer = useCallback(
    (selectedAnswer) => {
      if (!currentQuestion) return false;

      return currentQuestion.correctAnswer === selectedAnswer;
    },
    [currentQuestion],
  );

  /**
   * ==========================================================
   * Score Helpers
   * ==========================================================
   */

  const totalScore = useMemo(() => {
    return score.score;
  }, [score.score]);

  const answeredQuestions = useMemo(() => {
    return Object.keys(quiz.answers).length;
  }, [quiz.answers]);

  const remainingQuestions = useMemo(() => {
    return quiz.totalQuestions - answeredQuestions;
  }, [quiz.totalQuestions, answeredQuestions]);

  /**
   * ==========================================================
   * Change Timer
   * ==========================================================
   */

  useEffect(() => {
    if (!currentQuestion) return;

    timer.resetTimer();

    timer.setDuration(currentQuestion.timeLimit);

    timer.startTimer();
  }, [currentQuestion, timer]);

  /**
   * ==========================================================
   * Quiz Progress
   * ==========================================================
   */

  const answeredPercentage = useMemo(() => {
    if (!quiz.totalQuestions) return 0;

    return Math.round((answeredQuestions / quiz.totalQuestions) * 100);
  }, [answeredQuestions, quiz.totalQuestions]);

  /**
   * ==========================================================
   * Auto Save
   * ==========================================================
   */

  useEffect(() => {
    if (!quiz.id) return;

    storage.saveQuizProgress(quiz);
  }, [quiz, storage]);

  /**
   * ==========================================================
   * Finish Quiz
   * ==========================================================
   */

  const finishQuiz = useCallback(() => {
    timer.stopTimer();

    const completedQuiz = {
      ...quiz,

      completed: true,

      completedAt: new Date().toISOString(),
    };

    setQuiz(completedQuiz);

    storage.saveQuizProgress(completedQuiz);

    return completedQuiz;
  }, [quiz, timer, storage]);

  /**
   * ==========================================================
   * Auto Submit
   * ==========================================================
   */

  useEffect(() => {
    if (!timer.isFinished) return;

    const timeout = setTimeout(() => {
      if (quiz.currentQuestionIndex < quiz.questions.length - 1) {
        nextQuestion();
      } else {
        finishQuiz();
      }
    }, 0);

    return () => clearTimeout(timeout);
  }, [
    timer.isFinished,
    quiz.currentQuestionIndex,
    quiz.questions.length,
    nextQuestion,
    finishQuiz,
  ]);

  /**
   * ==========================================================
   * Quiz Status
   * ==========================================================
   */

  const isCompleted = useMemo(() => {
    return quiz.completed;
  }, [quiz.completed]);

  const allAnswered = useMemo(() => {
    return answeredQuestions === quiz.totalQuestions;
  }, [answeredQuestions, quiz.totalQuestions]);

  const canFinish = useMemo(() => {
    return allAnswered || isLastQuestion;
  }, [allAnswered, isLastQuestion]);
  /**
   * ==========================================================
   * Quiz Statistics
   * ==========================================================
   */

  const statistics = useMemo(() => {
    const correctAnswers = Object.values(quiz.answers).filter(
      (answer) => answer.isCorrect,
    ).length;

    const wrongAnswers = answeredQuestions - correctAnswers;

    const skippedQuestions = quiz.skippedQuestions.length;

    return {
      totalQuestions: quiz.totalQuestions,

      answeredQuestions,

      correctAnswers,

      wrongAnswers,

      skippedQuestions,

      score: score.score,

      maxScore: quiz.questions.reduce(
        (total, question) => total + question.points,
        0,
      ),

      percentage: quizService.calculatePercentage(
        score.score,
        quiz.questions.reduce((total, question) => total + question.points, 0),
      ),
    };
  }, [quiz, answeredQuestions, score.score]);
  /**
   * ==========================================================
   * Result Summary
   * ==========================================================
   */

  const resultSummary = useMemo(() => {
    return {
      ...statistics,
      completedAt: quiz.completedAt,
      category: quiz.category,
      difficulty: quiz.difficulty,
    };
  }, [statistics, quiz]);

  /**
   * ==========================================================
   * Achievement System
   * ==========================================================
   */

const achievements = useMemo(() => {
  if (!quiz.questions.length) {
    return [];
  }

  return quizService.detectAchievements({
    questions: quiz.questions,
    totalTimeSpent: timer.elapsedTime,
  });
}, [quiz.questions, timer.elapsedTime]);

  /**
   * ==========================================================
   * Save Leaderboard Entry
   * ==========================================================
   */

  const saveLeaderboard = useCallback(
    (playerName = "Anonymous") => {
      const leaderboard = localStorageService.getLeaderboard();

      const newEntry = {
        id: Date.now(),

        playerName,

        category: quiz.category,

        difficulty: quiz.difficulty,

        score: score.score,

        percentage: statistics.percentage,

        completedAt: new Date().toISOString(),
      };

      const updatedLeaderboard = [...leaderboard, newEntry]
        .sort((a, b) => b.score - a.score)
        .slice(0, 20);

      localStorageService.saveLeaderboard(updatedLeaderboard);

      return updatedLeaderboard;
    },
    [quiz, score.score, statistics],
  );

  /**
   * ==========================================================
   * Quiz Analytics
   * ==========================================================
   */

  const analytics = useMemo(() => {
    return {
      averageTimePerQuestion:
        timer.elapsedTime / Math.max(answeredQuestions, 1),

      completionRate: statistics.percentage,

      accuracy: statistics.correctAnswers / Math.max(answeredQuestions, 1),

      skippedRate:
        statistics.skippedQuestions / Math.max(quiz.totalQuestions, 1),

      scorePerQuestion: score.score / Math.max(answeredQuestions, 1),
    };
  }, [
    timer.elapsedTime,
    answeredQuestions,
    statistics,
    quiz.totalQuestions,
    score.score,
  ]);

  /**
   * ==========================================================
   * Review Answers
   * ==========================================================
   */

  const reviewAnswers = useMemo(() => {
    return quiz.questions.map((question) => ({
      ...question,

      answer: quiz.answers[question.id] || null,

      wasSkipped: quiz.skippedQuestions.includes(question.id),
    }));
  }, [quiz]);

  /**
   * ==========================================================
   * Export Helpers
   * ==========================================================
   */

  const exportQuizResult = useCallback(() => {
    return {
      quiz,

      statistics,

      analytics,

      achievements,

      reviewAnswers,

      resultSummary,
    };
  }, [quiz, statistics, analytics, achievements, reviewAnswers, resultSummary]);

  /**
   * ==========================================================
   * Handle Quiz Completion
   * ==========================================================
   */

  useEffect(() => {
    if (!quiz.completed) return;

    localStorageService.saveAchievements(achievements);

    localStorageService.saveStatistics(statistics);
  }, [quiz.completed, achievements, statistics]);

  /**
   * ==========================================================
   * Memoized Values
   * ==========================================================
   */

  const quizState = useMemo(
    () => ({
      loading,
      error,
      quiz,
      currentQuestion,
      progress,
      answeredPercentage,
      answeredQuestions,
      remainingQuestions,
      totalScore,
      statistics,
      analytics,
      achievements,
      reviewAnswers,
      resultSummary,
    }),
    [
      loading,
      error,
      quiz,
      currentQuestion,
      progress,
      answeredPercentage,
      answeredQuestions,
      remainingQuestions,
      totalScore,
      statistics,
      analytics,
      achievements,
      reviewAnswers,
      resultSummary,
    ],
  );

  /**
   * ==========================================================
   * Derived State
   * ==========================================================
   */

  const quizStatus = useMemo(
    () => ({
      isLoading: loading,

      hasError: Boolean(error),

      hasQuiz: quiz.questions.length > 0,

      isCompleted,

      isFirstQuestion,

      isLastQuestion,

      hasNextQuestion,

      hasPreviousQuestion,

      canFinish,

      allAnswered,
    }),
    [
      loading,
      error,
      quiz.questions.length,
      isCompleted,
      isFirstQuestion,
      isLastQuestion,
      hasNextQuestion,
      hasPreviousQuestion,
      canFinish,
      allAnswered,
    ],
  );

  /**
   * ==========================================================
   * Quiz Actions
   * ==========================================================
   */

  const actions = {
    initializeQuiz,

    startQuiz,

    resumeQuiz,

    restartQuiz,

    resetQuiz,

    clearQuiz,

    nextQuestion,

    previousQuestion,

    jumpToQuestion,

    skipQuestion,

    answerQuestion,

    validateCurrentAnswer,

    finishQuiz,

    loadSavedQuiz,

    saveLeaderboard,

    exportQuizResult,
  };

  /**
   * ==========================================================
   * Helper Objects
   * ==========================================================
   */

  const helpers = {
    timer,

    score,

    storage,
  };

  /**
   * ==========================================================
   * Hook Return
   * ==========================================================
   */

  return {
    /*
     * Core State
     */
    ...quizState,

    /*
     * Status
     */
    ...quizStatus,

    /*
     * Helper Objects
     */
    timer,

    score,

    storage,

    /*
     * Actions
     */
    ...actions,

    /*
     * Collections
     */
    statistics,

    analytics,

    achievements,

    reviewAnswers,

    resultSummary,

    /*
     * Helpers
     */
    helpers,
  };
};

export default useQuiz;
