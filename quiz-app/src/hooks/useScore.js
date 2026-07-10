import { useCallback, useMemo, useState } from "react";
import quizService from "../services/quizService";

/**
 * ==========================================================
 * useScore
 * ==========================================================
 * Manages:
 * - Score
 * - Percentage
 * - Accuracy
 * - Grade
 * - XP
 * - Pass / Fail
 * - Statistics
 * ==========================================================
 */

const INITIAL_SCORE_STATE = {
  score: 0,
  maximumScore: 0,

  correctAnswers: 0,
  wrongAnswers: 0,
  skippedQuestions: 0,

  percentage: 0,
  accuracy: 0,

  grade: null,
  passed: false,

  xpEarned: 0,

  totalQuestions: 0,

  completed: false,
};

function useScore(initialState = INITIAL_SCORE_STATE) {
  /* ==========================================================
     State
  ========================================================== */

  const [scoreState, setScoreState] =
    useState(initialState);

  /* ==========================================================
     Reset
  ========================================================== */

  const resetScore =
    useCallback(() => {
      setScoreState(
        INITIAL_SCORE_STATE
      );
    }, []);

  /* ==========================================================
     Replace Entire State
  ========================================================== */

  const setResults =
    useCallback((results) => {
      setScoreState({
        ...INITIAL_SCORE_STATE,
        ...results,
      });
    }, []);

  /* ==========================================================
     Merge State
  ========================================================== */

  const updateScore =
    useCallback((updates) => {
      setScoreState((previous) => ({
        ...previous,
        ...updates,
      }));
    }, []);

  /* ==========================================================
     Calculate From Questions
  ========================================================== */

  const calculateResults =
    useCallback((questions) => {
      if (!questions?.length) {
        resetScore();
        return INITIAL_SCORE_STATE;
      }

      const correct =
        quizService.correctQuestionCount(
          questions
        );

      const wrong =
        quizService.wrongQuestionCount(
          questions
        );

      const skipped =
        quizService.skippedQuestionCount(
          questions
        );

      const score =
        quizService.calculateTotalScore(
          questions
        );

      const maximumScore =
        quizService.calculateMaximumScore(
          questions
        );

      const percentage =
        quizService.calculatePercentage(
          score,
          maximumScore
        );

      const accuracy =
        quizService.calculateAccuracy(
          correct,
          questions.length
        );

      const grade =
        quizService.calculateGrade(
          percentage
        );

      const passed =
        quizService.isPassed(
          percentage
        );

      const xp =
        quizService.calculateTotalXP({
          questions,
          accuracy,
          totalTime: questions.reduce(
            (total, question) =>
              total +
              (question.timeSpent ??
                0),
            0
          ),
        });

      const result = {
        score,

        maximumScore,

        correctAnswers:
          correct,

        wrongAnswers:
          wrong,

        skippedQuestions:
          skipped,

        percentage,

        accuracy,

        grade,

        passed,

        xpEarned: xp,

        totalQuestions:
          questions.length,

        completed: true,
      };

      setScoreState(result);

      return result;
    }, [resetScore]);

  /* ==========================================================
     Increment Score
  ========================================================== */

  const addScore =
    useCallback((points) => {
      setScoreState((previous) => ({
        ...previous,
        score:
          previous.score + points,
      }));
    }, []);

  /* ==========================================================
     Increment XP
  ========================================================== */

  const addXP =
    useCallback((xp) => {
      setScoreState((previous) => ({
        ...previous,
        xpEarned:
          previous.xpEarned + xp,
      }));
    }, []);

  /* ==========================================================
     Correct Answer
  ========================================================== */

  const incrementCorrect =
    useCallback(() => {
      setScoreState((previous) => ({
        ...previous,
        correctAnswers:
          previous.correctAnswers +
          1,
      }));
    }, []);

  /* ==========================================================
     Wrong Answer
  ========================================================== */

  const incrementWrong =
    useCallback(() => {
      setScoreState((previous) => ({
        ...previous,
        wrongAnswers:
          previous.wrongAnswers +
          1,
      }));
    }, []);

  /* ==========================================================
     Skipped Question
  ========================================================== */

  const incrementSkipped =
    useCallback(() => {
      setScoreState((previous) => ({
        ...previous,
        skippedQuestions:
          previous.skippedQuestions +
          1,
      }));
    }, []);

  /* ==========================================================
     Completion
  ========================================================== */

  const markCompleted =
    useCallback(() => {
      setScoreState((previous) => ({
        ...previous,
        completed: true,
      }));
    }, []);

  /* ==========================================================
     Derived Values
  ========================================================== */

  const remainingQuestions =
    useMemo(
      () =>
        Math.max(
          scoreState.totalQuestions -
            (scoreState.correctAnswers +
              scoreState.wrongAnswers +
              scoreState.skippedQuestions),
          0
        ),
      [scoreState]
    );

  const answeredQuestions =
    useMemo(
      () =>
        scoreState.correctAnswers +
        scoreState.wrongAnswers,
      [scoreState]
    );

  const completionPercentage =
    useMemo(() => {
      if (
        scoreState.totalQuestions === 0
      )
        return 0;

      return Number(
        (
          ((answeredQuestions +
            scoreState.skippedQuestions) /
            scoreState.totalQuestions) *
          100
        ).toFixed(2)
      );
    }, [
      answeredQuestions,
      scoreState,
    ]);

  /* ==========================================================
     Helper Flags
  ========================================================== */

  const isPerfectScore =
    useMemo(
      () =>
        scoreState.percentage ===
        100,
      [scoreState.percentage]
    );

  const isPassedQuiz =
    useMemo(
      () => scoreState.passed,
      [scoreState.passed]
    );

  const hasCompletedQuiz =
    useMemo(
      () => scoreState.completed,
      [scoreState.completed]
    );

  /* ==========================================================
     Continue in Part 2...
  ========================================================== */
    /* ==========================================================
     Performance Summary
  ========================================================== */

  const performanceSummary = useMemo(() => {
    return {
      score: scoreState.score,
      maximumScore: scoreState.maximumScore,

      percentage: scoreState.percentage,
      accuracy: scoreState.accuracy,

      grade: scoreState.grade,
      passed: scoreState.passed,

      xpEarned: scoreState.xpEarned,

      totalQuestions: scoreState.totalQuestions,

      answeredQuestions,

      remainingQuestions,

      correctAnswers:
        scoreState.correctAnswers,

      wrongAnswers:
        scoreState.wrongAnswers,

      skippedQuestions:
        scoreState.skippedQuestions,

      completionPercentage,
    };
  }, [
    scoreState,
    answeredQuestions,
    remainingQuestions,
    completionPercentage,
  ]);

  /* ==========================================================
     Category Analytics
  ========================================================== */

  const getCategoryAnalytics =
    useCallback((questions = []) => {
      return quizService.categoryAnalytics(
        questions
      );
    }, []);

  /* ==========================================================
     Difficulty Analytics
  ========================================================== */

  const getDifficultyAnalytics =
    useCallback((questions = []) => {
      return quizService.difficultyAnalytics(
        questions
      );
    }, []);

  /* ==========================================================
     Review
  ========================================================== */

  const generateReview =
    useCallback((questions = []) => {
      return quizService.generateReview(
        questions
      );
    }, []);

  /* ==========================================================
     Achievements
  ========================================================== */

  const getAchievements =
    useCallback((quizState) => {
      if (!quizState) return [];

      return quizService.detectAchievements(
        quizState
      );
    }, []);

  /* ==========================================================
     Result Formatter
  ========================================================== */

  const formatResult =
    useCallback((quizState) => {
      if (!quizState) return null;

      return quizService.formatResult(
        quizState
      );
    }, []);

  /* ==========================================================
     Statistics
  ========================================================== */

  const updateStatistics =
    useCallback(
      (statistics, quizState) => {
        return quizService.updateStatistics(
          statistics,
          quizState
        );
      },
      []
    );

  /* ==========================================================
     Clear
  ========================================================== */

  const clearScore =
    useCallback(() => {
      resetScore();
    }, [resetScore]);

  /* ==========================================================
     Return Hook API
  ========================================================== */

  return {
    /* ---------- State ---------- */

    scoreState,

    /* ---------- Values ---------- */

    score: scoreState.score,

    maximumScore:
      scoreState.maximumScore,

    percentage:
      scoreState.percentage,

    accuracy:
      scoreState.accuracy,

    grade:
      scoreState.grade,

    passed:
      scoreState.passed,

    xpEarned:
      scoreState.xpEarned,

    correctAnswers:
      scoreState.correctAnswers,

    wrongAnswers:
      scoreState.wrongAnswers,

    skippedQuestions:
      scoreState.skippedQuestions,

    totalQuestions:
      scoreState.totalQuestions,

    completed:
      scoreState.completed,

    /* ---------- Derived ---------- */

    answeredQuestions,

    remainingQuestions,

    completionPercentage,

    performanceSummary,

    isPerfectScore,

    isPassedQuiz,

    hasCompletedQuiz,

    /* ---------- Actions ---------- */

    calculateResults,

    updateScore,

    setResults,

    resetScore,

    clearScore,

    addScore,

    addXP,

    incrementCorrect,

    incrementWrong,

    incrementSkipped,

    markCompleted,

    /* ---------- Analytics ---------- */

    getCategoryAnalytics,

    getDifficultyAnalytics,

    generateReview,

    getAchievements,

    updateStatistics,

    formatResult,
  };
}

export default useScore;