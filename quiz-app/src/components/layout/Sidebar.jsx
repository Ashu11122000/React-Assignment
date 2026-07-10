import { NavLink } from "react-router-dom";
import {
  House,
  PlayCircle,
  Trophy,
  BookOpen,
  Award,
  Settings,
  HelpCircle,
} from "lucide-react";

import Badge from "../common/Badge";

/**
 * ==========================================================
 * Sidebar Component
 * ==========================================================
 * Features
 * - Navigation
 * - Categories
 * - Statistics
 * - Responsive
 * - Sticky
 * ==========================================================
 */

const navigation = [
  {
    label: "Home",
    path: "/",
    icon: House,
  },
  {
    label: "Quiz",
    path: "/quiz",
    icon: PlayCircle,
  },
  {
    label: "Leaderboard",
    path: "/leaderboard",
    icon: Trophy,
  },
  {
    label: "Review",
    path: "/review",
    icon: BookOpen,
  },
  {
    label: "Achievements",
    path: "/achievements",
    icon: Award,
  },
  {
    label: "About",
    path: "/about",
    icon: HelpCircle,
  },
];

export default function Sidebar({
  categories = [],
  selectedCategory,
  onCategorySelect,
  statistics = {},
}) {
  const {
    quizzesPlayed = 0,
    highestScore = 0,
    totalXP = 0,
  } = statistics;

  return (
    <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-72 overflow-y-auto border-r border-slate-800 bg-slate-950 lg:block">
      <div className="space-y-8 p-6">

        {/* ================= Navigation ================= */}

        <section>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
            Navigation
          </h3>

          <nav className="space-y-2">
            {navigation.map(
              ({ label, path, icon: Icon }) => (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    px-4
                    py-3
                    transition-all
                    ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                    }
                  `
                  }
                >
                  <Icon size={20} />

                  <span>{label}</span>
                </NavLink>
              )
            )}
          </nav>
        </section>

        {/* ================= Categories ================= */}

        {categories.length > 0 && (
          <section>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
              Categories
            </h3>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id ?? category.name}
                  onClick={() =>
                    onCategorySelect?.(category)
                  }
                  className="transition-transform hover:scale-105"
                >
                  <Badge
                    variant={
                      selectedCategory ===
                      category.name
                        ? "primary"
                        : "secondary"
                    }
                  >
                    {category.name}
                  </Badge>
                </button>
              ))}
            </div>
          </section>
        )}

        {/* ================= Statistics ================= */}

        <section>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
            Statistics
          </h3>

          <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900 p-4">

            <div className="flex items-center justify-between">
              <span className="text-slate-400">
                Quizzes Played
              </span>

              <Badge variant="primary">
                {quizzesPlayed}
              </Badge>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-400">
                Highest Score
              </span>

              <Badge variant="success">
                {highestScore}%
              </Badge>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-400">
                Total XP
              </span>

              <Badge variant="warning">
                {totalXP}
              </Badge>
            </div>
          </div>
        </section>

        {/* ================= Settings ================= */}

        <section>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `
                flex
                items-center
                gap-3
                rounded-xl
                px-4
                py-3
                transition-all
                ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }
              `
            }
          >
            <Settings size={20} />

            <span>Settings</span>
          </NavLink>
        </section>
      </div>
    </aside>
  );
}