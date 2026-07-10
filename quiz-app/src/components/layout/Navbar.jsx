import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  Trophy,
  Info,
  House,
  CirclePlay,
} from "lucide-react";

import Button from "../common/Button";

/**
 * ==========================================================
 * Navbar
 * ==========================================================
 * Main navigation for the Quiz App.
 *
 * Features
 * - Responsive
 * - Sticky
 * - Mobile Menu
 * - Active Route
 * - Resume Quiz Button
 * ==========================================================
 */

const navLinks = [
  {
    label: "Home",
    to: "/",
    icon: House,
  },
  {
    label: "Leaderboard",
    to: "/leaderboard",
    icon: Trophy,
  },
  {
    label: "About",
    to: "/about",
    icon: Info,
  },
];

export default function Navbar({
  onResumeQuiz,
  showResumeButton = false,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* ================= Logo ================= */}

        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white">
            Q
          </div>

          <div>
            <h1 className="text-lg font-bold text-white">
              Quiz App
            </h1>

            <p className="text-xs text-slate-400">
              React + Tailwind
            </p>
          </div>
        </Link>

        {/* ================= Desktop Navigation ================= */}

        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map(({ label, to, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `
                  flex items-center gap-2
                  rounded-xl
                  px-4 py-2
                  text-sm
                  font-medium
                  transition-all
                  ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }
                `
              }
            >
              <Icon size={18} />
              {label}
            </NavLink>
          ))}
        </nav>

        {/* ================= Right Section ================= */}

        <div className="hidden items-center gap-3 md:flex">
          {showResumeButton && (
            <Button
              size="sm"
              leftIcon={<CirclePlay size={18} />}
              onClick={onResumeQuiz}
            >
              Resume Quiz
            </Button>
          )}
        </div>

        {/* ================= Mobile Menu Button ================= */}

        <button
          className="rounded-lg p-2 text-white transition hover:bg-slate-800 md:hidden"
          onClick={() =>
            setIsMenuOpen((prev) => !prev)
          }
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>

      {/* ================= Mobile Navigation ================= */}

      {isMenuOpen && (
        <div className="border-t border-slate-800 bg-slate-900 md:hidden">
          <nav className="flex flex-col p-4">
            {navLinks.map(
              ({ label, to, icon: Icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `
                      mb-2
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
                          : "text-slate-300 hover:bg-slate-800"
                      }
                    `
                  }
                >
                  <Icon size={20} />
                  {label}
                </NavLink>
              )
            )}

            {showResumeButton && (
              <Button
                className="mt-2"
                fullWidth
                leftIcon={
                  <CirclePlay size={18} />
                }
                onClick={() => {
                  closeMenu();
                  onResumeQuiz?.();
                }}
              >
                Resume Quiz
              </Button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}