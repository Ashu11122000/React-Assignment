import { Link } from "react-router-dom";
import {
  Heart,
  Code2,
} from "lucide-react";

/**
 * ==========================================================
 * Footer Component
 * ==========================================================
 *
 * Features
 * - Responsive
 * - Dynamic Year
 * - Quick Navigation
 * - Tech Stack
 * - Version Information
 *
 * ==========================================================
 */

const currentYear = new Date().getFullYear();

const quickLinks = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Leaderboard",
    path: "/leaderboard",
  },
  {
    label: "About",
    path: "/about",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-8 lg:flex-row lg:items-start lg:justify-between">
        {/* ================= Brand ================= */}

        <div className="max-w-md">
          <h2 className="text-xl font-bold text-white">
            Quiz App
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            A production-ready interview preparation platform
            built with React, JavaScript, Tailwind CSS and Vite.
            Practice technical questions, track your progress,
            improve your knowledge, and prepare for real-world
            interviews.
          </p>
        </div>

        {/* ================= Quick Links ================= */}

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">
            Quick Links
          </h3>

          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-sm text-slate-400 transition-colors duration-200 hover:text-blue-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ================= Tech Stack ================= */}

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">
            Built With
          </h3>

          <div className="space-y-3 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <Code2
                size={16}
                className="text-blue-400"
              />

              <span>
                React • JavaScript • Tailwind CSS •
                Vite
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Heart
                size={16}
                className="text-red-500"
                fill="currentColor"
              />

              <span>
                Built for learning and interview
                preparation
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= Bottom Bar ================= */}

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-4 text-sm text-slate-500 md:flex-row">
          <p>
            © {currentYear} Quiz App. All rights
            reserved.
          </p>

          <div className="flex items-center gap-4">
            <span>Version 1.0.0</span>

            <span className="hidden text-slate-700 md:block">
              |
            </span>

            <span>Made with React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}