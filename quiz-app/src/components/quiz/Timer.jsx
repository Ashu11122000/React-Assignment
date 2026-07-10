import { Clock3 } from "lucide-react";

import Badge from "../common/Badge";
import ProgressBar from "../common/ProgressBar";

/**
 * ==========================================================
 * Timer Component
 * ==========================================================
 * Displays quiz timer information.
 *
 * Features
 * - Remaining Time
 * - Progress Bar
 * - Status Colors
 * - Responsive
 * - Accessible
 * ==========================================================
 */

export default function Timer({
  remainingTime = 0,

  totalTime = 30,

  isRunning = false,

  showProgress = true,

  showLabel = true,
}) {
  const percentage =
    totalTime > 0
      ? (remainingTime / totalTime) * 100
      : 0;

  const getVariant = () => {
    if (percentage <= 20) return "danger";

    if (percentage <= 50) return "warning";

    return "success";
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);

    const secs = seconds % 60;

    return `${String(mins).padStart(
      2,
      "0"
    )}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900 p-5">
      {/* ================= Header ================= */}

      <div className="flex items-center justify-between">
        {showLabel && (
          <div className="flex items-center gap-2">
            <Clock3
              className="text-blue-400"
              size={20}
            />

            <h3 className="text-lg font-semibold text-white">
              Timer
            </h3>
          </div>
        )}

        <Badge variant={getVariant()}>
          {isRunning ? "Running" : "Paused"}
        </Badge>
      </div>

      {/* ================= Time ================= */}

      <div className="text-center">
        <h2
          className={`text-5xl font-bold ${
            percentage <= 20
              ? "text-red-400"
              : percentage <= 50
              ? "text-yellow-400"
              : "text-green-400"
          }`}
        >
          {formatTime(remainingTime)}
        </h2>

        <p className="mt-2 text-sm text-slate-400">
          Remaining Time
        </p>
      </div>

      {/* ================= Progress ================= */}

      {showProgress && (
        <ProgressBar
          value={remainingTime}
          max={totalTime}
          variant={getVariant()}
          showPercentage={false}
          showValue
          striped
          animated
        />
      )}
    </div>
  );
}