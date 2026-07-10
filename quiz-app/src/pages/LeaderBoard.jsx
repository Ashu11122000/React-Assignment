import { useMemo, useState } from "react";
import {
  Trophy,
  Search,
  Trash2,
  RefreshCw,
  Medal,
  Crown,
  Award,
} from "lucide-react";

import LeaderboardCard from "../components/quiz/LeaderboardCard";

import Card from "../components/common/Card";
import Button from "../components/common/Button";
import Badge from "../components/common/Badge";
import Loader from "../components/common/Loader";

import localStorageService from "../services/localStorage";

/**
 * ==========================================================
 * Leaderboard Page
 * ==========================================================
 *
 * Features
 * - Load leaderboard
 * - Search players
 * - Sort leaderboard
 * - Statistics
 * - Top 3 Players
 * - Responsive
 * - Clear Leaderboard
 * ==========================================================
 */

const Leaderboard = () => {
  /**
   * ==========================================================
   * State
   * ==========================================================
   */

  const [leaderboard, setLeaderboard] = useState(() => {
    try {
      return localStorageService.getLeaderboard() || [];
    } catch (error) {
      console.error(error);
      return [];
    }
  });

  const [loading] = useState(false);

  const [search, setSearch] = useState("");

  const [sortBy, setSortBy] = useState("score");

  /**
   * ==========================================================
   * Filter Players
   * ==========================================================
   */

  const filteredLeaderboard = useMemo(() => {
    let players = [...leaderboard];

    if (search.trim()) {
      const keyword = search.toLowerCase();

      players = players.filter((player) => {
        const playerName =
          player.playerName ??
          player.name ??
          "";

        return playerName
          .toLowerCase()
          .includes(keyword);
      });
    }

    switch (sortBy) {
      case "name":
        players.sort((a, b) =>
          (a.playerName ?? a.name ?? "").localeCompare(
            b.playerName ?? b.name ?? ""
          )
        );
        break;

      case "percentage":
        players.sort(
          (a, b) =>
            (b.percentage ?? 0) -
            (a.percentage ?? 0)
        );
        break;

      case "date":
        players.sort(
          (a, b) =>
            new Date(
              b.completedAt ??
                b.date ??
                0
            ) -
            new Date(
              a.completedAt ??
                a.date ??
                0
            )
        );
        break;

      default:
        players.sort(
          (a, b) =>
            (b.score ?? 0) -
            (a.score ?? 0)
        );
    }

    return players;
  }, [leaderboard, search, sortBy]);

  /**
   * ==========================================================
   * Top Players
   * ==========================================================
   */

  const topPlayers = useMemo(() => {
    return filteredLeaderboard.slice(0, 3);
  }, [filteredLeaderboard]);

  /**
   * ==========================================================
   * Statistics
   * ==========================================================
   */

  const statistics = useMemo(() => {
    const totalPlayers =
      filteredLeaderboard.length;

    const highestScore =
      totalPlayers > 0
        ? Math.max(
            ...filteredLeaderboard.map(
              (player) =>
                player.score ?? 0
            )
          )
        : 0;

    const averageScore =
      totalPlayers > 0
        ? Math.round(
            filteredLeaderboard.reduce(
              (total, player) =>
                total +
                (player.score ?? 0),
              0
            ) / totalPlayers
          )
        : 0;

    return {
      totalPlayers,
      highestScore,
      averageScore,
    };
  }, [filteredLeaderboard]);

  /**
   * ==========================================================
   * Actions
   * ==========================================================
   */

  const handleRefresh = () => {
    setLeaderboard(
      localStorageService.getLeaderboard()
    );
  };

  const handleClear = () => {
    const confirmed = window.confirm(
      "Are you sure you want to clear the leaderboard?"
    );

    if (!confirmed) return;

    localStorageService.clearLeaderboard();

    setLeaderboard([]);
  };

  /**
   * ==========================================================
   * Loading
   * ==========================================================
   */

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader />
      </div>
    );
  }

  /**
   * ==========================================================
   * Page
   * ==========================================================
   */

  return (
    <div className="mx-auto w-full max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">

      {/* ======================================================
          Hero
      ====================================================== */}

      <section className="rounded-3xl bg-linear-to-r from-yellow-500 via-amber-500 to-orange-500 p-10 text-white">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <div className="mb-4 flex items-center gap-3">

              <Trophy size={38} />

              <Badge variant="warning">
                Hall of Fame
              </Badge>

            </div>

            <h1 className="text-5xl font-bold">
              Leaderboard
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-yellow-100">
              Explore the highest scoring
              players, compare performance,
              and compete for the top position.
            </p>

          </div>

          <div className="flex gap-3">

            <Button
              variant="secondary"
              onClick={handleRefresh}
            >
              <RefreshCw
                size={18}
                className="mr-2"
              />
              Refresh
            </Button>

            <Button
              variant="danger"
              onClick={handleClear}
            >
              <Trash2
                size={18}
                className="mr-2"
              />
              Clear
            </Button>

          </div>

        </div>

      </section>

            {/* ======================================================
          Statistics
      ====================================================== */}

      <section>

        <div className="grid gap-6 md:grid-cols-3">

          <Card className="text-center">
            <Trophy
              className="mx-auto mb-4 text-yellow-400"
              size={34}
            />

            <h3 className="text-4xl font-bold">
              {statistics.totalPlayers}
            </h3>

            <p className="mt-2 text-slate-400">
              Total Players
            </p>
          </Card>

          <Card className="text-center">
            <Award
              className="mx-auto mb-4 text-green-400"
              size={34}
            />

            <h3 className="text-4xl font-bold">
              {statistics.highestScore}
            </h3>

            <p className="mt-2 text-slate-400">
              Highest Score
            </p>
          </Card>

          <Card className="text-center">
            <Medal
              className="mx-auto mb-4 text-blue-400"
              size={34}
            />

            <h3 className="text-4xl font-bold">
              {statistics.averageScore}
            </h3>

            <p className="mt-2 text-slate-400">
              Average Score
            </p>
          </Card>

        </div>

      </section>

      {/* ======================================================
          Search & Sort
      ====================================================== */}

      <section>

        <Card className="space-y-6">

          <div className="flex flex-col gap-4 lg:flex-row">

            <div className="relative flex-1">

              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                placeholder="Search player..."
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                className="w-full rounded-xl border border-slate-700 bg-slate-900 py-3 pl-12 pr-4 outline-none transition focus:border-blue-500"
              />

            </div>

            <select
              value={sortBy}
              onChange={(event) =>
                setSortBy(event.target.value)
              }
              className="rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 outline-none"
            >
              <option value="score">
                Highest Score
              </option>

              <option value="percentage">
                Highest Percentage
              </option>

              <option value="name">
                Player Name
              </option>

              <option value="date">
                Latest First
              </option>

            </select>

          </div>

        </Card>

      </section>

      {/* ======================================================
          Top 3 Players
      ====================================================== */}

      {topPlayers.length > 0 && (

        <section>

          <div className="mb-8 flex items-center gap-3">

            <Crown
              className="text-yellow-400"
              size={30}
            />

            <h2 className="text-3xl font-bold">
              Top Performers
            </h2>

          </div>

          <div className="grid gap-6 lg:grid-cols-3">

            {topPlayers.map(
              (player, index) => (
                <Card
                  key={
                    player.id ??
                    player.playerName ??
                    index
                  }
                  className={`text-center ${
                    index === 0
                      ? "border-yellow-500"
                      : index === 1
                      ? "border-slate-400"
                      : "border-amber-600"
                  }`}
                >

                  <div className="mb-5 flex justify-center">

                    {index === 0 && (
                      <Crown
                        size={42}
                        className="text-yellow-400"
                      />
                    )}

                    {index === 1 && (
                      <Trophy
                        size={40}
                        className="text-slate-300"
                      />
                    )}

                    {index === 2 && (
                      <Award
                        size={40}
                        className="text-amber-500"
                      />
                    )}

                  </div>

                  <h3 className="text-2xl font-bold">
                    {player.playerName ??
                      player.name}
                  </h3>

                  <p className="mt-3 text-5xl font-bold text-blue-400">
                    {player.score}
                  </p>

                  <p className="mt-2 text-slate-400">
                    Score
                  </p>

                  <div className="mt-6 flex flex-wrap justify-center gap-2">

                    <Badge variant="primary">
                      {player.category}
                    </Badge>

                    {player.difficulty && (
                      <Badge variant="warning">
                        {player.difficulty}
                      </Badge>
                    )}

                  </div>

                </Card>
              )
            )}

          </div>

        </section>

      )}

      {/* ======================================================
          Complete Leaderboard
      ====================================================== */}

      <section>

        <div className="mb-8 flex items-center justify-between">

          <h2 className="text-3xl font-bold">
            Complete Rankings
          </h2>

          <Badge variant="primary">
            {filteredLeaderboard.length} Players
          </Badge>

        </div>

        <div className="space-y-5">
                      {filteredLeaderboard.length === 0 ? (

            <Card className="py-16 text-center">

              <Trophy
                size={60}
                className="mx-auto mb-6 text-slate-500"
              />

              <h3 className="text-2xl font-bold">
                No Leaderboard Data
              </h3>

              <p className="mt-4 text-slate-400">
                Complete quizzes and save your
                score to appear on the leaderboard.
              </p>

            </Card>

          ) : (

            filteredLeaderboard.map(
              (player, index) => (
                <LeaderboardCard
                  key={
                    player.id ??
                    player.playerName ??
                    index
                  }
                  rank={index + 1}
                  player={{
                    ...player,

                    /*
                     * LeaderboardCard expects
                     * these property names.
                     */

                    name:
                      player.playerName ??
                      player.name ??
                      "Anonymous",

                    accuracy:
                      player.accuracy ??
                      player.percentage ??
                      0,

                    xp:
                      player.xp ?? 0,

                    date: player.completedAt
                      ? new Date(
                          player.completedAt
                        ).toLocaleDateString()
                      : player.date ??
                        "-",
                  }}
                />
              )
            )

          )}

        </div>

      </section>

      {/* ======================================================
          Footer Summary
      ====================================================== */}

      {filteredLeaderboard.length > 0 && (

        <section>

          <Card className="space-y-6">

            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

              <div>

                <h2 className="text-2xl font-bold">
                  Leaderboard Summary
                </h2>

                <p className="mt-2 text-slate-400">
                  Showing{" "}
                  <strong>
                    {filteredLeaderboard.length}
                  </strong>{" "}
                  player
                  {filteredLeaderboard.length !== 1
                    ? "s"
                    : ""}
                  .
                </p>

              </div>

              <div className="grid grid-cols-3 gap-5 text-center">

                <div>

                  <p className="text-3xl font-bold text-yellow-400">
                    {statistics.totalPlayers}
                  </p>

                  <p className="mt-1 text-xs uppercase tracking-wide text-slate-500">
                    Players
                  </p>

                </div>

                <div>

                  <p className="text-3xl font-bold text-green-400">
                    {statistics.highestScore}
                  </p>

                  <p className="mt-1 text-xs uppercase tracking-wide text-slate-500">
                    Best
                  </p>

                </div>

                <div>

                  <p className="text-3xl font-bold text-blue-400">
                    {statistics.averageScore}
                  </p>

                  <p className="mt-1 text-xs uppercase tracking-wide text-slate-500">
                    Average
                  </p>

                </div>

              </div>

            </div>

          </Card>

        </section>

      )}

    </div>
  );
};

export default Leaderboard;