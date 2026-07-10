/**
 * ==========================================================
 * Quiz Service
 * ==========================================================
 * Core business logic for the Quiz Application.
 *
 * Responsibilities
 * ----------------------------------------------------------
 * • Quiz Generation
 * • Question Filtering
 * • Category Handling
 * • Difficulty Handling
 * • Question Randomization
 * • Quiz Initialization
 * • Quiz Metadata
 * • Helper Utilities
 *
 * NOTE:
 * Part 1 contains the foundation only.
 * Part 2 and Part 3 will extend this file.
 * ==========================================================
 */

import categories from "../data/categories";
import difficulties from "../data/difficulties";

import javascriptQuestions from "../data/quizData/javascript";
import htmlQuestions from "../data/quizData/html";
import cssQuestions from "../data/quizData/css";
import reactQuestions from "../data/quizData/react";
import tailwindQuestions from "../data/quizData/tailwind";
import gitQuestions from "../data/quizData/git";
import nodeQuestions from "../data/quizData/node";
import nextjsQuestions from "../data/quizData/next";
import nestjsQuestions from "../data/quizData/nest";
import typescriptQuestions from "../data/quizData/typescript";
import zodQuestions from "../data/quizData/zod";

/* ==========================================================
   Master Question Bank
========================================================== */

const QUESTION_BANK = {
  JavaScript: javascriptQuestions,
  HTML: htmlQuestions,
  CSS: cssQuestions,
  React: reactQuestions,
  Tailwind: tailwindQuestions,
  Git: gitQuestions,
  Node: nodeQuestions,
  "Next.js": nextjsQuestions,
  NestJS: nestjsQuestions,
  TypeScript: typescriptQuestions,
  Zod: zodQuestions,
};

/* ==========================================================
   Quiz Defaults
========================================================== */

const DEFAULT_QUIZ_OPTIONS = {
  category: "JavaScript",
  difficulty: "All",
  questionCount: 10,
  shuffleQuestions: true,
  shuffleOptions: true,
  timerEnabled: true,
};

/* ==========================================================
   Random Number
========================================================== */

const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

/* ==========================================================
   Clone Object / Array
========================================================== */

const clone = (value) => structuredClone(value);

/* ==========================================================
   Fisher-Yates Shuffle
========================================================== */

const shuffleArray = (array = []) => {
  const copied = [...array];

  for (let i = copied.length - 1; i > 0; i--) {
    const j = randomNumber(0, i);

    [copied[i], copied[j]] = [copied[j], copied[i]];
  }

  return copied;
};

/* ==========================================================
   Shuffle Options
========================================================== */

const shuffleQuestionOptions = (question) => ({
  ...question,
  options: shuffleArray(question.options),
});

/* ==========================================================
   Categories
========================================================== */

const getCategories = () => categories;

const getCategoryNames = () =>
  categories.map((category) => category.name);

/* ==========================================================
   Difficulties
========================================================== */

const getDifficulties = () => difficulties;

const getDifficultyNames = () =>
  difficulties.map((difficulty) => difficulty.name);

/* ==========================================================
   Question Bank
========================================================== */

const getQuestionBank = () => QUESTION_BANK;

/* ==========================================================
   Get Questions By Category
========================================================== */

const getQuestionsByCategory = (category) => {
  if (!category) return [];

  return clone(QUESTION_BANK[category] ?? []);
};

/* ==========================================================
   Get All Questions
========================================================== */

const getAllQuestions = () =>
  Object.values(QUESTION_BANK).flatMap((questions) => clone(questions));

/* ==========================================================
   Total Questions
========================================================== */

const getTotalQuestionCount = () =>
  getAllQuestions().length;

/* ==========================================================
   Filter By Difficulty
========================================================== */

const filterQuestionsByDifficulty = (
  questions,
  difficulty
) => {
  if (!difficulty || difficulty === "All")
    return [...questions];

  return questions.filter(
    (question) =>
      question.difficulty.toLowerCase() ===
      difficulty.toLowerCase()
  );
};

/* ==========================================================
   Limit Question Count
========================================================== */

const limitQuestions = (
  questions,
  count
) => {
  if (!count) return [...questions];

  return questions.slice(0, count);
};

/* ==========================================================
   Prepare Questions
========================================================== */

const prepareQuestions = ({
  category,
  difficulty,
  questionCount,
  shuffleQuestions = true,
  shuffleOptions = true,
}) => {
  let questions = getQuestionsByCategory(category);

  questions = filterQuestionsByDifficulty(
    questions,
    difficulty
  );

  if (shuffleQuestions)
    questions = shuffleArray(questions);

  if (shuffleOptions)
    questions = questions.map(
      shuffleQuestionOptions
    );

  questions = limitQuestions(
    questions,
    questionCount
  );

  return questions.map((question, index) => ({
    ...question,
    questionNumber: index + 1,
    userAnswer: null,
    isAnswered: false,
    isCorrect: false,
    skipped: false,
    earnedPoints: 0,
    timeSpent: 0,
  }));
};

/* ==========================================================
   Quiz Metadata
========================================================== */

const createQuizMetadata = (
  questions,
  options
) => ({
  id: crypto.randomUUID(),

  title: `${options.category} Quiz`,

  category: options.category,

  difficulty: options.difficulty,

  totalQuestions: questions.length,

  totalPoints: questions.reduce(
    (total, question) => total + question.points,
    0
  ),

  createdAt: new Date().toISOString(),

  timerEnabled: options.timerEnabled,

  shuffleQuestions:
    options.shuffleQuestions,

  shuffleOptions:
    options.shuffleOptions,
});

/* ==========================================================
   Create Quiz
========================================================== */

const createQuiz = (
  quizOptions = {}
) => {
  const options = {
    ...DEFAULT_QUIZ_OPTIONS,
    ...quizOptions,
  };

  const questions =
    prepareQuestions(options);

  const metadata =
    createQuizMetadata(
      questions,
      options
    );

  return {
    metadata,
    questions,
  };
};

/* ==========================================================
   Initialize Quiz State
========================================================== */

const initializeQuizState = (
  quizOptions = {}
) => {
  const quiz = createQuiz(
    quizOptions
  );

  return {
    ...quiz,

    currentQuestionIndex: 0,

    currentQuestion:
      quiz.questions[0] ?? null,

    answers: [],

    score: 0,

    correctAnswers: 0,

    wrongAnswers: 0,

    skippedQuestions: 0,

    completed: false,

    startedAt:
      new Date().toISOString(),

    finishedAt: null,

    totalTimeSpent: 0,

    percentage: 0,

    grade: null,

    xpEarned: 0,

    streak: 0,
  };
};

/* ==========================================================
   Get Random Question
========================================================== */

const getRandomQuestion = (
  category
) => {
  const questions =
    getQuestionsByCategory(category);

  if (!questions.length)
    return null;

  return questions[
    randomNumber(
      0,
      questions.length - 1
    )
  ];
};

/* ==========================================================
   Get Question By ID
========================================================== */

const getQuestionById = (
  category,
  id
) => {
  return getQuestionsByCategory(
    category
  ).find(
    (question) => question.id === id
  );
};

/* ==========================================================
   Validate Quiz Options
========================================================== */

const validateQuizOptions = (
  options = {}
) => {
  const errors = [];

  if (!options.category)
    errors.push(
      "Category is required."
    );

  if (
    options.questionCount <= 0
  )
    errors.push(
      "Question count must be greater than zero."
    );

  return {
    valid: errors.length === 0,
    errors,
  };
};

/* ==========================================================
   Helper Methods
========================================================== */

const quizHelpers = {
  randomNumber,
  shuffleArray,
  shuffleQuestionOptions,
  limitQuestions,
  filterQuestionsByDifficulty,
  prepareQuestions,
};

/* ==========================================================
   Navigation Helpers
========================================================== */

const hasNextQuestion = (state) =>
  state.currentQuestionIndex < state.questions.length - 1;

const hasPreviousQuestion = (state) =>
  state.currentQuestionIndex > 0;

const getCurrentQuestion = (state) =>
  state.questions[state.currentQuestionIndex] ?? null;

const goToNextQuestion = (state) => {
  if (!hasNextQuestion(state)) return state;

  const index = state.currentQuestionIndex + 1;

  return {
    ...state,
    currentQuestionIndex: index,
    currentQuestion: state.questions[index],
  };
};

const goToPreviousQuestion = (state) => {
  if (!hasPreviousQuestion(state)) return state;

  const index = state.currentQuestionIndex - 1;

  return {
    ...state,
    currentQuestionIndex: index,
    currentQuestion: state.questions[index],
  };
};

const jumpToQuestion = (state, index) => {
  if (index < 0 || index >= state.questions.length) return state;

  return {
    ...state,
    currentQuestionIndex: index,
    currentQuestion: state.questions[index],
  };
};

/* ==========================================================
   Answer Validation
========================================================== */

const isCorrectAnswer = (question, answer) =>
  question.correctAnswer === answer;

const calculateEarnedPoints = (question, answer) =>
  isCorrectAnswer(question, answer) ? question.points : 0;

/* ==========================================================
   Submit Answer
========================================================== */

const submitAnswer = (state, answer) => {
  const questions = [...state.questions];

  const currentQuestion =
    questions[state.currentQuestionIndex];

  const correct = isCorrectAnswer(
    currentQuestion,
    answer
  );

  const earnedPoints =
    calculateEarnedPoints(
      currentQuestion,
      answer
    );

  questions[state.currentQuestionIndex] = {
    ...currentQuestion,
    userAnswer: answer,
    isAnswered: true,
    isCorrect: correct,
    earnedPoints,
    skipped: false,
  };

  return {
    ...state,
    questions,
    currentQuestion:
      questions[state.currentQuestionIndex],
  };
};

/* ==========================================================
   Skip Question
========================================================== */

const skipQuestion = (state) => {
  const questions = [...state.questions];

  questions[state.currentQuestionIndex] = {
    ...questions[state.currentQuestionIndex],
    skipped: true,
  };

  return {
    ...state,
    questions,
    skippedQuestions:
      state.skippedQuestions + 1,
  };
};

/* ==========================================================
   Completion
========================================================== */

const answeredQuestionCount = (questions = []) =>
  questions.filter(
    (question) => question.isAnswered
  ).length;
  
const skippedQuestionCount = (questions = []) =>
  questions.filter(
    (question) => question.skipped
  ).length;


const correctQuestionCount = (questions = []) =>
  questions.filter(
    (question) => question.isCorrect
  ).length;

const wrongQuestionCount = (questions = []) =>
  questions.filter(
    (question) =>
      question.isAnswered &&
      !question.isCorrect
  ).length;

const isQuizCompleted = (
  questions
) =>
  questions.every(
    (question) =>
      question.isAnswered ||
      question.skipped
  );

/* ==========================================================
   Score
========================================================== */

const calculateTotalScore = (
  questions
) =>
  questions.reduce(
    (total, question) =>
      total + question.earnedPoints,
    0
  );

const calculateMaximumScore = (
  questions
) =>
  questions.reduce(
    (total, question) =>
      total + question.points,
    0
  );

const calculatePercentage = (
  score,
  maximum
) => {
  if (!maximum) return 0;

  return Number(
    ((score / maximum) * 100).toFixed(2)
  );
};

const calculateAccuracy = (
  correct,
  total
) => {
  if (!total) return 0;

  return Number(
    ((correct / total) * 100).toFixed(2)
  );
};

/* ==========================================================
   Grade
========================================================== */

const calculateGrade = (
  percentage
) => {
  if (percentage >= 95) return "A+";
  if (percentage >= 90) return "A";
  if (percentage >= 80) return "B";
  if (percentage >= 70) return "C";
  if (percentage >= 60) return "D";

  return "F";
};

const isPassed = (
  percentage,
  passingScore = 60
) =>
  percentage >= passingScore;

/* ==========================================================
   XP
========================================================== */

const calculateBaseXP = (
  questions
) =>
  questions.reduce(
    (total, question) =>
      total + question.earnedPoints,
    0
  );

const calculateAccuracyBonus = (
  accuracy
) => {
  if (accuracy === 100) return 100;
  if (accuracy >= 90) return 50;
  if (accuracy >= 80) return 30;
  if (accuracy >= 70) return 20;

  return 0;
};

const calculateCompletionBonus = (
  questions
) =>
  skippedQuestionCount(
    questions
  ) === 0
    ? 25
    : 0;

const calculateSpeedBonus = (
  totalTime,
  questionCount
) => {
  if (!questionCount) return 0;

  const average =
    totalTime / questionCount;

  if (average <= 15) return 50;
  if (average <= 25) return 30;
  if (average <= 35) return 20;

  return 0;
};

const calculateTotalXP = ({
  questions,
  accuracy,
  totalTime,
}) =>
  calculateBaseXP(
    questions
  ) +
  calculateAccuracyBonus(
    accuracy
  ) +
  calculateCompletionBonus(
    questions
  ) +
  calculateSpeedBonus(
    totalTime,
    questions.length
  );

/* ==========================================================
   Analytics
========================================================== */

const calculateAnalytics = (
  state
) => {
  const correct =
    correctQuestionCount(
      state.questions
    );

  const wrong =
    wrongQuestionCount(
      state.questions
    );

  const skipped =
    skippedQuestionCount(
      state.questions
    );

  const score =
    calculateTotalScore(
      state.questions
    );

  const maximum =
    calculateMaximumScore(
      state.questions
    );

  const percentage =
    calculatePercentage(
      score,
      maximum
    );

  const accuracy =
    calculateAccuracy(
      correct,
      state.questions.length
    );

  const xp =
    calculateTotalXP({
      questions: state.questions,
      accuracy,
      totalTime:
        state.totalTimeSpent,
    });

  return {
    score,
    maximumScore: maximum,

    percentage,

    accuracy,

    correctAnswers: correct,

    wrongAnswers: wrong,

    skippedQuestions: skipped,

    grade:
      calculateGrade(
        percentage
      ),

    passed:
      isPassed(
        percentage
      ),

    xpEarned: xp,
  };
};

/* ==========================================================
   Finalize Quiz
========================================================== */

const finalizeQuiz = (
  state
) => {
  const analytics =
    calculateAnalytics(
      state
    );

  return {
    ...state,

    ...analytics,

    completed: true,

    finishedAt:
      new Date().toISOString(),
  };
};

/* ==========================================================
   Shared Engine
========================================================== */

const answerEngine = {
  hasNextQuestion,
  hasPreviousQuestion,
  getCurrentQuestion,

  goToNextQuestion,
  goToPreviousQuestion,
  jumpToQuestion,

  submitAnswer,
  skipQuestion,

  answeredQuestionCount,
  skippedQuestionCount,
  correctQuestionCount,
  wrongQuestionCount,

  isQuizCompleted,

  calculateTotalScore,
  calculateMaximumScore,
  calculatePercentage,
  calculateAccuracy,

  calculateGrade,
  isPassed,

  calculateBaseXP,
  calculateAccuracyBonus,
  calculateCompletionBonus,
  calculateSpeedBonus,
  calculateTotalXP,

  calculateAnalytics,

  finalizeQuiz,
};

/* ==========================================================
   Review Generation
========================================================== */

const generateReview = (questions = []) =>
  questions.map((question) => ({
    id: question.id,
    questionNumber: question.questionNumber,
    category: question.category,
    difficulty: question.difficulty,
    question: question.question,
    options: question.options,
    selectedAnswer: question.userAnswer,
    correctAnswer: question.correctAnswer,
    isCorrect: question.isCorrect,
    explanation: question.explanation,
    earnedPoints: question.earnedPoints,
    maximumPoints: question.points,
    skipped: question.skipped,
    timeSpent: question.timeSpent,
  }));

/* ==========================================================
   Category Analytics
========================================================== */

const categoryAnalytics = (questions = []) => {
  const analytics = {};

  questions.forEach((question) => {
    const category = question.category;

    if (!analytics[category]) {
      analytics[category] = {
        category,
        total: 0,
        correct: 0,
        wrong: 0,
        skipped: 0,
        score: 0,
        maximumScore: 0,
      };
    }

    analytics[category].total += 1;
    analytics[category].maximumScore += question.points;
    analytics[category].score += question.earnedPoints;

    if (question.skipped)
      analytics[category].skipped += 1;
    else if (question.isCorrect)
      analytics[category].correct += 1;
    else analytics[category].wrong += 1;
  });

  Object.values(analytics).forEach((item) => {
    item.percentage = calculatePercentage(
      item.score,
      item.maximumScore
    );

    item.accuracy = calculateAccuracy(
      item.correct,
      item.total
    );
  });

  return Object.values(analytics);
};

/* ==========================================================
   Difficulty Analytics
========================================================== */

const difficultyAnalytics = (questions = []) => {
  const analytics = {};

  questions.forEach((question) => {
    const difficulty = question.difficulty;

    if (!analytics[difficulty]) {
      analytics[difficulty] = {
        difficulty,
        total: 0,
        correct: 0,
        wrong: 0,
        skipped: 0,
        score: 0,
        maximumScore: 0,
      };
    }

    analytics[difficulty].total++;
    analytics[difficulty].score +=
      question.earnedPoints;

    analytics[difficulty].maximumScore +=
      question.points;

    if (question.skipped)
      analytics[difficulty].skipped++;
    else if (question.isCorrect)
      analytics[difficulty].correct++;
    else analytics[difficulty].wrong++;
  });

  Object.values(analytics).forEach((item) => {
    item.percentage = calculatePercentage(
      item.score,
      item.maximumScore
    );

    item.accuracy = calculateAccuracy(
      item.correct,
      item.total
    );
  });

  return Object.values(analytics);
};

/* ==========================================================
   Performance Summary
========================================================== */

const generatePerformanceSummary = (
  state
) => {
  const analytics =
    calculateAnalytics(state);

  return {
    ...analytics,

    totalQuestions:
      state.questions.length,

    completedQuestions:
      answeredQuestionCount(
        state.questions
      ),

    averageTimePerQuestion:
      state.questions.length === 0
        ? 0
        : Number(
            (
              state.totalTimeSpent /
              state.questions.length
            ).toFixed(2)
          ),

    categories:
      categoryAnalytics(
        state.questions
      ),

    difficulties:
      difficultyAnalytics(
        state.questions
      ),
  };
};

/* ==========================================================
   Leaderboard
========================================================== */

const createLeaderboardEntry = ({
  playerName = "Anonymous",
  state,
}) => {
  const analytics =
    calculateAnalytics(state);

  return {
    id: crypto.randomUUID(),

    playerName,

    score: analytics.score,

    percentage:
      analytics.percentage,

    grade: analytics.grade,

    xp: analytics.xpEarned,

    correctAnswers:
      analytics.correctAnswers,

    totalQuestions:
      state.questions.length,

    completedAt:
      new Date().toISOString(),
  };
};

const sortLeaderboard = (
  leaderboard = []
) =>
  [...leaderboard].sort(
    (a, b) =>
      b.score - a.score ||
      b.percentage - a.percentage
  );

/* ==========================================================
   Statistics
========================================================== */

const updateStatistics = (
  statistics,
  state
) => {
  const analytics =
    calculateAnalytics(state);

  const quizzesPlayed =
    (statistics.quizzesPlayed ?? 0) + 1;

  const totalScore =
    (statistics.totalScore ?? 0) +
    analytics.score;

  return {
    ...statistics,

    quizzesPlayed,

    quizzesCompleted:
      (statistics.quizzesCompleted ??
        0) + 1,

    totalQuestions:
      (statistics.totalQuestions ??
        0) + state.questions.length,

    correctAnswers:
      (statistics.correctAnswers ??
        0) +
      analytics.correctAnswers,

    wrongAnswers:
      (statistics.wrongAnswers ??
        0) +
      analytics.wrongAnswers,

    totalScore,

    highestScore: Math.max(
      statistics.highestScore ?? 0,
      analytics.score
    ),

    averageScore: Number(
      (
        totalScore / quizzesPlayed
      ).toFixed(2)
    ),

    totalXP:
      (statistics.totalXP ?? 0) +
      analytics.xpEarned,
  };
};

/**
 * ==========================================================
 * Generate Result Summary
 * ==========================================================
 */

const generateResultSummary = ({
  score = 0,
  totalQuestions = 0,
  correctAnswers = 0,
  wrongAnswers = 0,
  skippedQuestions = 0,
  percentage = 0,
  accuracy = 0,
  xp = 0,
  grade = "F",
  elapsedTime = 0,
} = {}) => {
  return {
    score,
    totalQuestions,

    correctAnswers,
    wrongAnswers,
    skippedQuestions,

    percentage,
    accuracy,

    xp,
    grade,

    elapsedTime,

    passed: percentage >= 60,

    completedAt: new Date().toISOString(),
  };
};

/* ==========================================================
   Achievements
========================================================== */

const detectAchievements = (
  state
) => {
  const analytics =
    calculateAnalytics(state);

  const achievements = [];

  if (analytics.percentage === 100)
    achievements.push(
      "Perfect Score"
    );

  if (analytics.accuracy >= 90)
    achievements.push(
      "Quiz Master"
    );

  if (
    analytics.skippedQuestions === 0
  )
    achievements.push(
      "No Skips"
    );

  if (analytics.xpEarned >= 200)
    achievements.push(
      "XP Collector"
    );

  if (
    state.totalTimeSpent <
    state.questions.length * 20
  )
    achievements.push(
      "Speed Runner"
    );

  return achievements;
};

/**
 * ==========================================================
 * Calculate Achievements
 * ==========================================================
 * Alias for compatibility with useQuiz.js
 * ==========================================================
 */

const calculateAchievements = (state) => {
  return detectAchievements(state);
};

/* ==========================================================
   Result Formatter
========================================================== */

const formatResult = (state) => ({
  metadata: state.metadata,

  summary:
    generatePerformanceSummary(
      state
    ),

  review: generateReview(
    state.questions
  ),

  achievements:
    detectAchievements(
      state
    ),
});

/* ==========================================================
   Quiz Service
========================================================== */

const quizService = {
  /* ==========================================================
     Foundation
  ========================================================== */

  getCategories,
  getCategoryNames,

  getDifficulties,
  getDifficultyNames,

  getQuestionBank,

  getQuestionsByCategory,

  getAllQuestions,

  getTotalQuestionCount,

  createQuiz,

  initializeQuizState,

  getRandomQuestion,

  getQuestionById,

  validateQuizOptions,

  ...quizHelpers,

  /* ==========================================================
     Answer Engine
  ========================================================== */

  ...answerEngine,

  /* ==========================================================
     Review
  ========================================================== */

  generateReview,

  /* ==========================================================
     Analytics
  ========================================================== */

  categoryAnalytics,

  difficultyAnalytics,

  generatePerformanceSummary,

  calculateAnalytics,

  /* ==========================================================
     Result
  ========================================================== */

  generateResultSummary,

  finalizeQuiz,

  /* ==========================================================
     Leaderboard
  ========================================================== */

  createLeaderboardEntry,

  sortLeaderboard,

  /* ==========================================================
     Statistics
  ========================================================== */

  updateStatistics,

  /* ==========================================================
     Achievements
  ========================================================== */

  detectAchievements,
  calculateAchievements,

  /* ==========================================================
     Formatter
  ========================================================== */

  formatResult,
};

export default quizService;
