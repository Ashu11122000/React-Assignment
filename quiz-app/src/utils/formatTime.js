/**
 * ==========================================================
 * Time Utilities
 * ==========================================================
 * Responsibilities:
 * - Format seconds into MM:SS / HH:MM:SS
 * - Convert between minutes and seconds
 * - Calculate elapsed and remaining time
 * - Determine timer status
 * ==========================================================
 */

import { TIMER_STATUS } from "./constants";

/**
 * Convert seconds into MM:SS or HH:MM:SS.
 */
export const formatTime = (totalSeconds = 0) => {
  const seconds = Math.max(0, Math.floor(totalSeconds));

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  if (hours > 0) {
    return [
      String(hours).padStart(2, "0"),
      String(minutes).padStart(2, "0"),
      String(remainingSeconds).padStart(2, "0"),
    ].join(":");
  }

  return [
    String(minutes).padStart(2, "0"),
    String(remainingSeconds).padStart(2, "0"),
  ].join(":");
};

/**
 * Convert seconds to minutes.
 */
export const secondsToMinutes = (seconds = 0) =>
  seconds / 60;

/**
 * Convert minutes to seconds.
 */
export const minutesToSeconds = (minutes = 0) =>
  minutes * 60;

/**
 * Format duration in a human-readable form.
 * Example:
 * 3675 -> "1h 1m 15s"
 */
export const formatDuration = (seconds = 0) => {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  const parts = [];

  if (hrs) parts.push(`${hrs}h`);
  if (mins) parts.push(`${mins}m`);
  if (secs || parts.length === 0) parts.push(`${secs}s`);

  return parts.join(" ");
};

/**
 * Calculate elapsed time.
 */
export const calculateElapsedTime = (
  totalTime,
  remainingTime
) => Math.max(0, totalTime - remainingTime);

/**
 * Remaining time percentage.
 */
export const getRemainingPercentage = (
  remainingTime,
  totalTime
) => {
  if (!totalTime) return 0;

  return Math.round((remainingTime / totalTime) * 100);
};

/**
 * Used time percentage.
 */
export const getElapsedPercentage = (
  remainingTime,
  totalTime
) => {
  if (!totalTime) return 0;

  return Math.round(
    ((totalTime - remainingTime) / totalTime) * 100
  );
};

/**
 * Timer expired?
 */
export const isTimeExpired = (remainingTime) =>
  remainingTime <= 0;

/**
 * Timer status.
 */
export const getTimerStatus = (
  remainingTime,
  totalTime
) => {
  const percentage = getRemainingPercentage(
    remainingTime,
    totalTime
  );

  if (percentage > 50) {
    return "SAFE";
  }

  if (percentage > 20) {
    return "WARNING";
  }

  return "DANGER";
};

/**
 * Timer color.
 */
export const getTimerColor = (
  remainingTime,
  totalTime
) => {
  const status = getTimerStatus(
    remainingTime,
    totalTime
  );

  return TIMER_STATUS[status];
};

/**
 * Format milliseconds.
 */
export const formatMilliseconds = (milliseconds = 0) =>
  (milliseconds / 1000).toFixed(2);

/**
 * Current timestamp.
 */
export const getCurrentTimestamp = () =>
  Date.now();

/**
 * Difference between two timestamps in seconds.
 */
export const getTimeDifference = (
  startTimestamp,
  endTimestamp
) => {
  return Math.floor(
    (endTimestamp - startTimestamp) / 1000
  );
};

/**
 * Add seconds to a timestamp.
 */
export const addSeconds = (
  timestamp,
  seconds
) => timestamp + seconds * 1000;

/**
 * Clamp remaining time.
 */
export const normalizeTime = (remainingTime) =>
  Math.max(0, remainingTime);

/**
 * Convert seconds into a progress ratio (0–1).
 */
export const getProgressRatio = (
  remainingTime,
  totalTime
) => {
  if (!totalTime) return 0;

  return remainingTime / totalTime;
};

export default formatTime;