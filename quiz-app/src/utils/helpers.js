import { v4 as uuidv4 } from "uuid";

import {
  PERFORMANCE,
  PERFORMANCE_MESSAGE,
  QUESTION_POINTS,
} from "./constants";

// ==========================================================
// GENERATE UNIQUE ID
// ==========================================================

export const generateId = () => uuidv4();

// ==========================================================
// RANDOM INTEGER
// ==========================================================

export const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// ==========================================================
// CLAMP VALUE
// ==========================================================

export const clamp = (value, min, max) =>
  Math.min(Math.max(value, min), max);

// ==========================================================
// CAPITALIZE
// ==========================================================

export const capitalize = (text = "") =>
  text.charAt(0).toUpperCase() + text.slice(1);

// ==========================================================
// TITLE CASE
// ==========================================================

export const toTitleCase = (text = "") =>
  text
    .split(" ")
    .map((word) => capitalize(word))
    .join(" ");

// ==========================================================
// FORMAT PERCENTAGE
// ==========================================================

export const percentage = (value, total) => {
  if (!total) return 0;

  return Math.round((value / total) * 100);
};

// ==========================================================
// FORMAT SCORE
// ==========================================================

export const formatScore = (score, total) =>
  `${score} / ${total}`;

// ==========================================================
// ACCURACY
// ==========================================================

export const calculateAccuracy = (correct, attempted) => {
  if (!attempted) return 0;

  return Math.round((correct / attempted) * 100);
};

// ==========================================================
// PERFORMANCE LEVEL
// ==========================================================

export const getPerformanceLevel = (score) => {
  if (score >= PERFORMANCE.EXCELLENT) return "EXCELLENT";

  if (score >= PERFORMANCE.VERY_GOOD) return "VERY_GOOD";

  if (score >= PERFORMANCE.GOOD) return "GOOD";

  if (score >= PERFORMANCE.AVERAGE) return "AVERAGE";

  return "POOR";
};

// ==========================================================
// PERFORMANCE MESSAGE
// ==========================================================

export const getPerformanceMessage = (score) => {
  const level = getPerformanceLevel(score);

  return PERFORMANCE_MESSAGE[level];
};

// ==========================================================
// POINTS BY DIFFICULTY
// ==========================================================

export const getQuestionPoints = (difficulty) => {
  switch (difficulty) {
    case "Easy":
      return QUESTION_POINTS.EASY;

    case "Medium":
      return QUESTION_POINTS.MEDIUM;

    case "Hard":
      return QUESTION_POINTS.HARD;

    default:
      return QUESTION_POINTS.EASY;
  }
};

// ==========================================================
// SHUFFLE ARRAY
// ==========================================================

export const shuffle = (array = []) => {
  const newArray = [...array];

  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray;
};

// ==========================================================
// DEEP COPY
// ==========================================================

export const deepClone = (value) =>
  structuredClone(value);

// ==========================================================
// FORMAT DATE
// ==========================================================

export const formatDate = (date = new Date()) =>
  new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);

// ==========================================================
// FORMAT TIME
// ==========================================================

export const formatSeconds = (seconds) => {
  const mins = Math.floor(seconds / 60);

  const secs = seconds % 60;

  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
};

// ==========================================================
// XP FORMAT
// ==========================================================

export const formatXP = (xp) => `${xp} XP`;

// ==========================================================
// QUIZ COMPLETED?
// ==========================================================

export const isQuizCompleted = (currentIndex, totalQuestions) =>
  currentIndex >= totalQuestions;

// ==========================================================
// SLEEP
// ==========================================================

export const sleep = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// ==========================================================
// DEBOUNCE
// ==========================================================

export const debounce = (callback, delay = 300) => {
  let timer;

  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};

// ==========================================================
// LEADERBOARD ENTRY
// ==========================================================

export const createLeaderboardEntry = ({
  name,
  score,
  percentage,
  totalQuestions,
  category,
}) => ({
  id: generateId(),

  name,

  score,

  percentage,

  totalQuestions,

  category,

  playedAt: new Date().toISOString(),
});

// ==========================================================
// RANDOM ELEMENT
// ==========================================================

export const randomItem = (array = []) =>
  array[Math.floor(Math.random() * array.length)];

// ==========================================================
// AVERAGE
// ==========================================================

export const average = (numbers = []) => {
  if (!numbers.length) return 0;

  return (
    numbers.reduce((sum, number) => sum + number, 0) /
    numbers.length
  );
};

// ==========================================================
// TRUNCATE TEXT
// ==========================================================

export const truncate = (text = "", length = 100) => {
  if (text.length <= length) return text;

  return `${text.slice(0, length)}...`;
};

// ==========================================================
// SORT LEADERBOARD
// ==========================================================

export const sortLeaderboard = (entries = []) =>
  [...entries].sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }

    return b.percentage - a.percentage;
  });

// ==========================================================
// RANDOM USERNAME
// ==========================================================

export const generateGuestName = () =>
  `Guest-${randomNumber(1000, 9999)}`;

// ==========================================================
// EMPTY CHECK
// ==========================================================

export const isEmpty = (value) => {
  if (value === null || value === undefined) return true;

  if (typeof value === "string") {
    return value.trim() === "";
  }

  if (Array.isArray(value)) {
    return value.length === 0;
  }

  if (typeof value === "object") {
    return Object.keys(value).length === 0;
  }

  return false;
};