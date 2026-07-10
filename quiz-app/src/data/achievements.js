/**
 * ==========================================================
 * Achievements Configuration
 * ==========================================================
 * Powers the XP system, badges, streaks and rewards.
 * ==========================================================
 */

import { ACHIEVEMENTS } from "../utils/constants";

export const achievements = [
  {
    id: ACHIEVEMENTS.FIRST_QUIZ,
    title: "First Step",
    description: "Complete your first quiz.",
    icon: "🎯",
    badgeColor: "bg-blue-500",
    rarity: "Common",
    category: "Progress",
    xpReward: 50,
    hidden: false,
    targetValue: 1,
    unlocked: false,
  },

  {
    id: ACHIEVEMENTS.PERFECT_SCORE,
    title: "Perfectionist",
    description: "Score 100% in any quiz.",
    icon: "🏆",
    badgeColor: "bg-yellow-500",
    rarity: "Legendary",
    category: "Performance",
    xpReward: 200,
    hidden: false,
    targetValue: 100,
    unlocked: false,
  },

  {
    id: ACHIEVEMENTS.FIVE_STREAK,
    title: "On Fire",
    description: "Maintain a 5 quiz winning streak.",
    icon: "🔥",
    badgeColor: "bg-orange-500",
    rarity: "Rare",
    category: "Streak",
    xpReward: 150,
    hidden: false,
    targetValue: 5,
    unlocked: false,
  },

  {
    id: ACHIEVEMENTS.TEN_STREAK,
    title: "Unstoppable",
    description: "Maintain a 10 quiz winning streak.",
    icon: "⚡",
    badgeColor: "bg-red-500",
    rarity: "Epic",
    category: "Streak",
    xpReward: 300,
    hidden: false,
    targetValue: 10,
    unlocked: false,
  },

  {
    id: ACHIEVEMENTS.HUNDRED_XP,
    title: "Level Up",
    description: "Earn 100 XP.",
    icon: "⭐",
    badgeColor: "bg-green-500",
    rarity: "Common",
    category: "XP",
    xpReward: 50,
    hidden: false,
    targetValue: 100,
    unlocked: false,
  },

  {
    id: ACHIEVEMENTS.THOUSAND_XP,
    title: "Quiz Champion",
    description: "Earn 1000 XP.",
    icon: "👑",
    badgeColor: "bg-purple-600",
    rarity: "Legendary",
    category: "XP",
    xpReward: 500,
    hidden: false,
    targetValue: 1000,
    unlocked: false,
  },
];

/* ==========================================================
   Lookup Helpers
========================================================== */

export const getAchievementById = (id) =>
  achievements.find((achievement) => achievement.id === id);

export const getAchievementsByCategory = (category) =>
  achievements.filter(
    (achievement) => achievement.category === category
  );

export const getAchievementsByRarity = (rarity) =>
  achievements.filter(
    (achievement) => achievement.rarity === rarity
  );

export const getVisibleAchievements = () =>
  achievements.filter((achievement) => !achievement.hidden);

export const getHiddenAchievements = () =>
  achievements.filter((achievement) => achievement.hidden);

/* ==========================================================
   XP Helpers
========================================================== */

export const getTotalAchievementXP = () =>
  achievements.reduce(
    (total, achievement) => total + achievement.xpReward,
    0
  );

/* ==========================================================
   Progress
========================================================== */

export const getCompletionPercentage = (
  unlockedAchievements = []
) => {
  if (!achievements.length) return 0;

  return Math.round(
    (unlockedAchievements.length / achievements.length) *
      100
  );
};

/* ==========================================================
   Unlock Checker
========================================================== */

export const checkUnlockedAchievements = ({
  quizzesCompleted = 0,
  percentage = 0,
  streak = 0,
  totalXP = 0,
}) => {
  const unlocked = [];

  achievements.forEach((achievement) => {
    switch (achievement.id) {
      case ACHIEVEMENTS.FIRST_QUIZ:
        if (quizzesCompleted >= 1) {
          unlocked.push(achievement);
        }
        break;

      case ACHIEVEMENTS.PERFECT_SCORE:
        if (percentage === 100) {
          unlocked.push(achievement);
        }
        break;

      case ACHIEVEMENTS.FIVE_STREAK:
        if (streak >= 5) {
          unlocked.push(achievement);
        }
        break;

      case ACHIEVEMENTS.TEN_STREAK:
        if (streak >= 10) {
          unlocked.push(achievement);
        }
        break;

      case ACHIEVEMENTS.HUNDRED_XP:
        if (totalXP >= 100) {
          unlocked.push(achievement);
        }
        break;

      case ACHIEVEMENTS.THOUSAND_XP:
        if (totalXP >= 1000) {
          unlocked.push(achievement);
        }
        break;

      default:
        break;
    }
  });

  return unlocked;
};

/* ==========================================================
   Statistics
========================================================== */

export const getAchievementStats = (
  unlockedAchievements = []
) => ({
  total: achievements.length,

  unlocked: unlockedAchievements.length,

  locked:
    achievements.length - unlockedAchievements.length,

  completionPercentage:
    getCompletionPercentage(unlockedAchievements),

  totalXP: unlockedAchievements.reduce(
    (total, achievement) =>
      total + achievement.xpReward,
    0
  ),
});

export default achievements;