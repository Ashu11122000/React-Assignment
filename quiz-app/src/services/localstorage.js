/**
 * ==========================================================
 * Quiz App - Local Storage Service
 * ==========================================================
 * Centralized wrapper around browser localStorage.
 * Handles:
 * - Quiz Progress
 * - Leaderboard
 * - Achievements
 * - Settings
 * - Statistics
 * - Theme
 * - Recent Quizzes
 * - Best Scores
 * ==========================================================
 */

const STORAGE_KEYS = {
  QUIZ_PROGRESS: "quiz_app_progress",
  LEADERBOARD: "quiz_app_leaderboard",
  ACHIEVEMENTS: "quiz_app_achievements",
  SETTINGS: "quiz_app_settings",
  STATISTICS: "quiz_app_statistics",
  THEME: "quiz_app_theme",
  RECENT_QUIZZES: "quiz_app_recent_quizzes",
  BEST_SCORES: "quiz_app_best_scores",
};

/* ==========================================================
   Generic Helpers
========================================================== */

const isBrowser = () => typeof window !== "undefined";

const setItem = (key, value) => {
  if (!isBrowser()) return false;

  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Failed to save "${key}"`, error);
    return false;
  }
};

const getItem = (key, defaultValue = null) => {
  if (!isBrowser()) return defaultValue;

  try {
    const value = localStorage.getItem(key);

    if (!value) return defaultValue;

    return JSON.parse(value);
  } catch (error) {
    console.error(`Failed to read "${key}"`, error);
    return defaultValue;
  }
};

const removeItem = (key) => {
  if (!isBrowser()) return;

  localStorage.removeItem(key);
};

const clearStorage = () => {
  if (!isBrowser()) return;

  localStorage.clear();
};

/* ==========================================================
   Quiz Progress
========================================================== */

const saveQuizProgress = (progress) =>
  setItem(STORAGE_KEYS.QUIZ_PROGRESS, progress);

const getQuizProgress = () =>
  getItem(STORAGE_KEYS.QUIZ_PROGRESS, null);

const clearQuizProgress = () =>
  removeItem(STORAGE_KEYS.QUIZ_PROGRESS);

/* ==========================================================
   Leaderboard
========================================================== */

const saveLeaderboard = (leaderboard) =>
  setItem(STORAGE_KEYS.LEADERBOARD, leaderboard);

const getLeaderboard = () =>
  getItem(STORAGE_KEYS.LEADERBOARD, []);

const clearLeaderboard = () =>
  removeItem(STORAGE_KEYS.LEADERBOARD);

/* ==========================================================
   Achievements
========================================================== */

const saveAchievements = (achievements) =>
  setItem(STORAGE_KEYS.ACHIEVEMENTS, achievements);

const getAchievements = () =>
  getItem(STORAGE_KEYS.ACHIEVEMENTS, []);

const clearAchievements = () =>
  removeItem(STORAGE_KEYS.ACHIEVEMENTS);

/* ==========================================================
   User Settings
========================================================== */

const defaultSettings = {
  sound: true,
  animations: true,
  darkMode: true,
  shuffleQuestions: true,
  shuffleOptions: true,
  showExplanation: true,
  autoNextQuestion: false,
};

const saveSettings = (settings) =>
  setItem(STORAGE_KEYS.SETTINGS, settings);

const getSettings = () =>
  getItem(STORAGE_KEYS.SETTINGS, defaultSettings);

const clearSettings = () =>
  removeItem(STORAGE_KEYS.SETTINGS);

/* ==========================================================
   Theme
========================================================== */

const saveTheme = (theme) =>
  setItem(STORAGE_KEYS.THEME, theme);

const getTheme = () =>
  getItem(STORAGE_KEYS.THEME, "dark");

/* ==========================================================
   Statistics
========================================================== */

const defaultStatistics = {
  quizzesPlayed: 0,
  quizzesCompleted: 0,
  totalQuestions: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
  totalScore: 0,
  highestScore: 0,
  averageScore: 0,
  totalXP: 0,
};

const saveStatistics = (stats) =>
  setItem(STORAGE_KEYS.STATISTICS, stats);

const getStatistics = () =>
  getItem(STORAGE_KEYS.STATISTICS, defaultStatistics);

const clearStatistics = () =>
  removeItem(STORAGE_KEYS.STATISTICS);

/* ==========================================================
   Recent Quizzes
========================================================== */

const saveRecentQuizzes = (quizzes) =>
  setItem(STORAGE_KEYS.RECENT_QUIZZES, quizzes);

const getRecentQuizzes = () =>
  getItem(STORAGE_KEYS.RECENT_QUIZZES, []);

const clearRecentQuizzes = () =>
  removeItem(STORAGE_KEYS.RECENT_QUIZZES);

/* ==========================================================
   Best Scores
========================================================== */

const saveBestScores = (scores) =>
  setItem(STORAGE_KEYS.BEST_SCORES, scores);

const getBestScores = () =>
  getItem(STORAGE_KEYS.BEST_SCORES, []);

const clearBestScores = () =>
  removeItem(STORAGE_KEYS.BEST_SCORES);

/* ==========================================================
   Utilities
========================================================== */

const hasProgress = () =>
  !!getQuizProgress();

const resetApplicationData = () => {
  clearQuizProgress();
  clearLeaderboard();
  clearAchievements();
  clearSettings();
  clearStatistics();
  clearRecentQuizzes();
  clearBestScores();
  removeItem(STORAGE_KEYS.THEME);
};

const storageInfo = () => ({
  keys: STORAGE_KEYS,
  progress: hasProgress(),
});

/* ==========================================================
   Exports
========================================================== */

const localStorageService = {
  STORAGE_KEYS,

  setItem,
  getItem,
  removeItem,
  clearStorage,

  saveQuizProgress,
  getQuizProgress,
  clearQuizProgress,

  saveLeaderboard,
  getLeaderboard,
  clearLeaderboard,

  saveAchievements,
  getAchievements,
  clearAchievements,

  saveSettings,
  getSettings,
  clearSettings,

  saveTheme,
  getTheme,

  saveStatistics,
  getStatistics,
  clearStatistics,

  saveRecentQuizzes,
  getRecentQuizzes,
  clearRecentQuizzes,

  saveBestScores,
  getBestScores,
  clearBestScores,

  hasProgress,
  resetApplicationData,
  storageInfo,
};

export default localStorageService;