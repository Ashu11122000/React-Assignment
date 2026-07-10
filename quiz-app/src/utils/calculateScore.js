/**
 * ==========================================================
 * Score & Analytics Utilities
 * ==========================================================
 * Responsibilities:
 * - Calculate score
 * - Correct / Wrong / Skipped
 * - Accuracy
 * - Percentage
 * - Grade
 * - Pass / Fail
 * - Category analytics
 * - Difficulty analytics
 * ==========================================================
 */

import {
  // PERFORMANCE,
  QUESTION_POINTS,
  QUIZ_CONFIG,
  RESULT_STATUS,
  XP,
} from "./constants";

import {
  getPerformanceLevel,
  getPerformanceMessage,
} from "./helpers";

/* ==========================================================
   Grade
========================================================== */

export const getGrade = (percentage) => {
  if (percentage >= 95) return "A+";
  if (percentage >= 90) return "A";
  if (percentage >= 80) return "B+";
  if (percentage >= 70) return "B";
  if (percentage >= 60) return "C";
  if (percentage >= 50) return "D";

  return "F";
};

/* ==========================================================
   Pass / Fail
========================================================== */

export const getResultStatus = (percentage) => {
  return percentage >= QUIZ_CONFIG.PASS_PERCENTAGE
    ? RESULT_STATUS.PASS
    : RESULT_STATUS.FAIL;
};

/* ==========================================================
   Accuracy
========================================================== */

export const calculateAccuracy = (
  correct,
  attempted
) => {
  if (!attempted) return 0;

  return Math.round((correct / attempted) * 100);
};

/* ==========================================================
   Category Analytics
========================================================== */

export const calculateCategoryPerformance = (
  questions,
  answers
) => {
  const categories = {};

  questions.forEach((question) => {
    const category = question.category;

    if (!categories[category]) {
      categories[category] = {
        total: 0,
        correct: 0,
        wrong: 0,
        skipped: 0,
      };
    }

    categories[category].total++;

    const selected = answers[question.id];

    if (selected === undefined) {
      categories[category].skipped++;
    } else if (selected === question.correctAnswer) {
      categories[category].correct++;
    } else {
      categories[category].wrong++;
    }
  });

  return categories;
};

/* ==========================================================
   Difficulty Analytics
========================================================== */

export const calculateDifficultyPerformance = (
  questions,
  answers
) => {
  const difficulties = {};

  questions.forEach((question) => {
    const difficulty = question.difficulty;

    if (!difficulties[difficulty]) {
      difficulties[difficulty] = {
        total: 0,
        correct: 0,
        wrong: 0,
        skipped: 0,
      };
    }

    difficulties[difficulty].total++;

    const selected = answers[question.id];

    if (selected === undefined) {
      difficulties[difficulty].skipped++;
    } else if (selected === question.correctAnswer) {
      difficulties[difficulty].correct++;
    } else {
      difficulties[difficulty].wrong++;
    }
  });

  return difficulties;
};

/* ==========================================================
   Main Calculation
========================================================== */

export const calculateQuizResult = ({
  questions = [],
  answers = {},
  timeTaken = 0,
}) => {
  let score = 0;

  let correct = 0;
  let wrong = 0;
  let skipped = 0;

  let totalPossibleScore = 0;

  questions.forEach((question) => {
    const points =
      question.points ??
      QUESTION_POINTS[
        question.difficulty?.toUpperCase()
      ] ??
      QUESTION_POINTS.EASY;

    totalPossibleScore += points;

    const selectedAnswer = answers[question.id];

    if (selectedAnswer === undefined) {
      skipped++;
      return;
    }

    if (selectedAnswer === question.correctAnswer) {
      correct++;
      score += points;
    } else {
      wrong++;
    }
  });

  const attempted = correct + wrong;

  const percentage =
    totalPossibleScore === 0
      ? 0
      : Math.round(
          (score / totalPossibleScore) * 100
        );

  const accuracy = calculateAccuracy(
    correct,
    attempted
  );

  const grade = getGrade(percentage);

  const result = getResultStatus(percentage);

  const performance =
    getPerformanceLevel(percentage);

  const performanceMessage =
    getPerformanceMessage(percentage);

  const xpEarned =
    correct * XP.CORRECT +
    (result === RESULT_STATUS.PASS
      ? XP.QUIZ_COMPLETED
      : 0) +
    (percentage === 100
      ? XP.PERFECT_SCORE
      : 0);

  const averageTime =
    questions.length === 0
      ? 0
      : Math.round(timeTaken / questions.length);

  return {
    totalQuestions: questions.length,

    attempted,

    correct,

    wrong,

    skipped,

    score,

    totalPossibleScore,

    percentage,

    accuracy,

    grade,

    result,

    performance,

    performanceMessage,

    xpEarned,

    totalTime: timeTaken,

    averageTimePerQuestion: averageTime,

    categoryPerformance:
      calculateCategoryPerformance(
        questions,
        answers
      ),

    difficultyPerformance:
      calculateDifficultyPerformance(
        questions,
        answers
      ),

    completedAt: new Date().toISOString(),
  };
};

/* ==========================================================
   Best Score
========================================================== */

export const getBestScore = (
  leaderboard = []
) => {
  if (!leaderboard.length) return null;

  return leaderboard.reduce((best, current) =>
    current.score > best.score ? current : best
  );
};

/* ==========================================================
   Average Score
========================================================== */

export const getAverageScore = (
  leaderboard = []
) => {
  if (!leaderboard.length) return 0;

  const total = leaderboard.reduce(
    (sum, entry) => sum + entry.score,
    0
  );

  return Math.round(total / leaderboard.length);
};

/* ==========================================================
   Completion Rate
========================================================== */

export const getCompletionRate = (
  completed,
  total
) => {
  if (!total) return 0;

  return Math.round(
    (completed / total) * 100
  );
};

export default calculateQuizResult;