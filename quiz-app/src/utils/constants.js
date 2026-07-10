// ==========================================================
// APPLICATION INFORMATION
// ==========================================================

export const APP = {
  NAME: "QuizMaster Pro",
  VERSION: "1.0.0",
  AUTHOR: "Ashish Sharma",
  DESCRIPTION: "Production-grade React Quiz Application",
};

// ==========================================================
// ROUTES
// ==========================================================

export const ROUTES = {
  HOME: "/",
  QUIZ: "/quiz",
  RESULT: "/result",
  REVIEW: "/review",
  LEADERBOARD: "/leaderboard",
  ABOUT: "/about",
};

// ==========================================================
// LOCAL STORAGE KEYS
// ==========================================================

export const STORAGE_KEYS = {
  USER: "quiz_user",
  QUIZ_STATE: "quiz_state",
  LEADERBOARD: "quiz_leaderboard",
  SETTINGS: "quiz_settings",
  ACHIEVEMENTS: "quiz_achievements",
  THEME: "quiz_theme",
};

// ==========================================================
// QUIZ CONFIGURATION
// ==========================================================

export const QUIZ_CONFIG = {
  DEFAULT_QUESTIONS: 10,

  MIN_QUESTIONS: 5,

  MAX_QUESTIONS: 100,

  DEFAULT_TIME: 30,

  MIN_TIME: 10,

  MAX_TIME: 120,

  PASS_PERCENTAGE: 40,

  DEFAULT_CATEGORY: "JavaScript",

  DEFAULT_DIFFICULTY: "Easy",

  SHUFFLE_QUESTIONS: true,

  SHUFFLE_OPTIONS: true,

  NEGATIVE_MARKING: false,
};

// ==========================================================
// QUESTION POINTS
// ==========================================================

export const QUESTION_POINTS = {
  EASY: 5,
  MEDIUM: 10,
  HARD: 15,
};

// ==========================================================
// XP SYSTEM
// ==========================================================

export const XP = {
  CORRECT: 20,
  WRONG: 0,
  QUIZ_COMPLETED: 50,
  PERFECT_SCORE: 100,
  FAST_COMPLETION: 30,
};

// ==========================================================
// TIMER COLORS
// ==========================================================

export const TIMER_STATUS = {
  SAFE: "#22C55E",
  WARNING: "#F59E0B",
  DANGER: "#EF4444",
};

// ==========================================================
// PERFORMANCE LEVELS
// ==========================================================

export const PERFORMANCE = {
  EXCELLENT: 90,
  VERY_GOOD: 75,
  GOOD: 60,
  AVERAGE: 40,
};

// ==========================================================
// PERFORMANCE MESSAGES
// ==========================================================

export const PERFORMANCE_MESSAGE = {
  EXCELLENT: "Outstanding! You're a quiz master!",
  VERY_GOOD: "Excellent work! Keep it up.",
  GOOD: "Nice job! You're improving.",
  AVERAGE: "Good effort! Practice makes perfect.",
  POOR: "Don't give up. Try again!",
};

// ==========================================================
// DIFFICULTY LEVELS
// ==========================================================

export const DIFFICULTY = {
  EASY: "Easy",
  MEDIUM: "Medium",
  HARD: "Hard",
};

// ==========================================================
// QUESTION STATUS
// ==========================================================

export const QUESTION_STATUS = {
  NOT_VISITED: "NOT_VISITED",
  VISITED: "VISITED",
  ANSWERED: "ANSWERED",
  SKIPPED: "SKIPPED",
};

// ==========================================================
// QUIZ STATUS
// ==========================================================

export const QUIZ_STATUS = {
  NOT_STARTED: "NOT_STARTED",
  IN_PROGRESS: "IN_PROGRESS",
  PAUSED: "PAUSED",
  COMPLETED: "COMPLETED",
};

// ==========================================================
// RESULT STATUS
// ==========================================================

export const RESULT_STATUS = {
  PASS: "PASS",
  FAIL: "FAIL",
};

// ==========================================================
// LEADERBOARD
// ==========================================================

export const LEADERBOARD = {
  MAX_ENTRIES: 20,
};

// ==========================================================
// ANIMATION DURATIONS (ms)
// ==========================================================

export const ANIMATION = {
  FAST: 200,
  NORMAL: 300,
  SLOW: 500,
};

// ==========================================================
// DEFAULT USER
// ==========================================================

export const DEFAULT_USER = {
  name: "",
  avatar: "",
  xp: 0,
  streak: 0,
};

// ==========================================================
// CATEGORY COLORS
// ==========================================================

export const CATEGORY_COLORS = {
  JavaScript: "#F7DF1E",
  React: "#61DAFB",
  HTML: "#E34F26",
  CSS: "#1572B6",
  Tailwind: "#38BDF8",
  Git: "#F05032",
  Node: "#3C873A",
  Programming: "#8B5CF6",
};

// ==========================================================
// CATEGORY ICONS
// ==========================================================

export const CATEGORY_ICONS = {
  JavaScript: "🟨",
  React: "⚛️",
  HTML: "🌐",
  CSS: "🎨",
  Tailwind: "💨",
  Git: "🔀",
  Node: "🟢",
  Programming: "💻",
};

// ==========================================================
// ACHIEVEMENT IDS
// ==========================================================

export const ACHIEVEMENTS = {
  FIRST_QUIZ: "FIRST_QUIZ",

  PERFECT_SCORE: "PERFECT_SCORE",

  FIVE_STREAK: "FIVE_STREAK",

  TEN_STREAK: "TEN_STREAK",

  HUNDRED_XP: "HUNDRED_XP",

  THOUSAND_XP: "THOUSAND_XP",
};

// ==========================================================
// QUIZ EVENTS
// ==========================================================

export const EVENTS = {
  START: "START",

  NEXT: "NEXT",

  PREVIOUS: "PREVIOUS",

  SKIP: "SKIP",

  SUBMIT: "SUBMIT",

  FINISH: "FINISH",

  RESTART: "RESTART",
};

// ==========================================================
// TOAST MESSAGES
// ==========================================================

export const TOAST = {
  QUIZ_STARTED: "Quiz Started!",

  ANSWER_SAVED: "Answer Saved",

  QUESTION_SKIPPED: "Question Skipped",

  QUIZ_COMPLETED: "Quiz Completed",

  QUIZ_RESET: "Quiz Reset",

  PROGRESS_RESTORED: "Previous Quiz Restored",
};