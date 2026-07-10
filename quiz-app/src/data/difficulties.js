/**
 * ==========================================================
 * Difficulty Configuration
 * ==========================================================
 * Central configuration for all quiz difficulty levels.
 * ==========================================================
 */

import { QUESTION_POINTS } from "../utils/constants";

export const difficulties = [
  {
    id: 1,

    name: "Easy",

    slug: "easy",

    icon: "🟢",

    badge: "Beginner",

    color: "#22C55E",

    gradient: "from-green-500 to-emerald-600",

    description:
      "Perfect for beginners. Covers basic concepts and straightforward questions.",

    pointsPerQuestion: QUESTION_POINTS.EASY,

    defaultTimePerQuestion: 30,

    recommendedQuestionCount: 10,

    estimatedCompletionTime: "5–10 mins",

    xpMultiplier: 1,

    passingPercentage: 40,

    enabled: true,
  },

  {
    id: 2,

    name: "Medium",

    slug: "medium",

    icon: "🟡",

    badge: "Intermediate",

    color: "#F59E0B",

    gradient: "from-yellow-400 to-orange-500",

    description:
      "Balanced difficulty with practical and conceptual questions.",

    pointsPerQuestion: QUESTION_POINTS.MEDIUM,

    defaultTimePerQuestion: 45,

    recommendedQuestionCount: 15,

    estimatedCompletionTime: "10–15 mins",

    xpMultiplier: 1.5,

    passingPercentage: 45,

    enabled: true,
  },

  {
    id: 3,

    name: "Hard",

    slug: "hard",

    icon: "🔴",

    badge: "Advanced",

    color: "#EF4444",

    gradient: "from-red-500 to-rose-600",

    description:
      "Advanced questions requiring strong understanding, analysis, and problem-solving skills.",

    pointsPerQuestion: QUESTION_POINTS.HARD,

    defaultTimePerQuestion: 60,

    recommendedQuestionCount: 20,

    estimatedCompletionTime: "15–20 mins",

    xpMultiplier: 2,

    passingPercentage: 50,

    enabled: true,
  },
];

/* ==========================================================
   Helper Functions
========================================================== */

export const getDifficultyById = (id) =>
  difficulties.find((difficulty) => difficulty.id === id);

export const getDifficultyByName = (name) =>
  difficulties.find((difficulty) => difficulty.name === name);

export const getDifficultyBySlug = (slug) =>
  difficulties.find((difficulty) => difficulty.slug === slug);

export const getEnabledDifficulties = () =>
  difficulties.filter((difficulty) => difficulty.enabled);

export const getDifficultyNames = () =>
  difficulties.map((difficulty) => difficulty.name);

export const getDifficultyOptions = () =>
  difficulties.map((difficulty) => ({
    label: difficulty.name,
    value: difficulty.slug,
  }));

export const getPointsForDifficulty = (name) => {
  const difficulty = getDifficultyByName(name);

  return difficulty
    ? difficulty.pointsPerQuestion
    : QUESTION_POINTS.EASY;
};

export const getTimeForDifficulty = (name) => {
  const difficulty = getDifficultyByName(name);

  return difficulty
    ? difficulty.defaultTimePerQuestion
    : 30;
};

export const getXPMultiplier = (name) => {
  const difficulty = getDifficultyByName(name);

  return difficulty
    ? difficulty.xpMultiplier
    : 1;
};

export default difficulties;