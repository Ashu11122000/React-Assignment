import {
  Trophy,
  Medal,
  Award,
  Crown,
  Calendar,
  Target,
  Star,
} from "lucide-react";

import Card from "../common/Card";
import Badge from "../common/Badge";

/**
 * ==========================================================
 * LeaderboardCard
 * ==========================================================
 * Displays a single leaderboard player.
 *
 * Features
 * - Rank Icons
 * - Score
 * - Accuracy
 * - XP
 * - Category
 * - Date
 * - Responsive
 * ==========================================================
 */

const rankIcons = {
  1: <Crown className="text-yellow-400" size={28} />,
  2: <Trophy className="text-slate-300" size={26} />,
  3: <Award className="text-amber-600" size={26} />,
};

const rankColors = {
  1: "border-yellow-500 bg-yellow-500/10",
  2: "border-slate-400 bg-slate-400/10",
  3: "border-amber-600 bg-amber-600/10",
};

export default function LeaderboardCard({
  player,
  rank,
}) {
  if (!player) return null;

  const {
    name,
    category,
    score,
    accuracy,
    xp,
    date,
    difficulty,
  } = player;

  return (
    <Card
      hover
      className={`
        ${
          rankColors[rank] ??
          "border-slate-800"
        }
      `}
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        {/* ================= Left ================= */}

        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-800">
            {rankIcons[rank] ?? (
              <Medal
                size={26}
                className="text-slate-400"
              />
            )}
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">
              {name}
            </h3>

            <div className="mt-2 flex flex-wrap gap-2">
              <Badge variant="primary">
                {category}
              </Badge>

              {difficulty && (
                <Badge variant="warning">
                  {difficulty}
                </Badge>
              )}
            </div>

            <div className="mt-3 flex items-center gap-2 text-sm text-slate-400">
              <Calendar size={16} />

              <span>{date}</span>
            </div>
          </div>
        </div>

        {/* ================= Right ================= */}

        <div className="grid grid-cols-3 gap-4 md:gap-8">
          {/* Score */}

          <div className="text-center">
            <div className="flex justify-center">
              <Target
                className="text-green-400"
                size={20}
              />
            </div>

            <p className="mt-2 text-2xl font-bold text-green-400">
              {score}
            </p>

            <p className="text-xs uppercase tracking-wide text-slate-500">
              Score
            </p>
          </div>

          {/* Accuracy */}

          <div className="text-center">
            <div className="flex justify-center">
              <Trophy
                className="text-blue-400"
                size={20}
              />
            </div>

            <p className="mt-2 text-2xl font-bold text-blue-400">
              {accuracy}%
            </p>

            <p className="text-xs uppercase tracking-wide text-slate-500">
              Accuracy
            </p>
          </div>

          {/* XP */}

          <div className="text-center">
            <div className="flex justify-center">
              <Star
                className="text-yellow-400"
                size={20}
              />
            </div>

            <p className="mt-2 text-2xl font-bold text-yellow-400">
              {xp}
            </p>

            <p className="text-xs uppercase tracking-wide text-slate-500">
              XP
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}