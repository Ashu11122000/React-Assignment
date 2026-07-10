import { Link } from "react-router-dom";
import {
  Github,
  Heart,
  Code2,
} from "lucide-react";

/**
 * ==========================================================
 * Footer Component
 * ==========================================================
 * Features
 * - Responsive
 * - Dynamic Year
 * - Navigation Links
 * - Tech Stack
 * - GitHub Link
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
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-8 lg:flex-row lg:items-center lg:justify-between">
        {/* ================= Brand ================= */}

        <div>
          <h2 className="text-xl font-bold text-white">
            Quiz App
          </h2>

          <p className="mt-2 max-w-md text-sm text-slate-400">
            A modern quiz application built with
            React, JavaScript, Tailwind CSS and
            Vite. Practice interview questions,
            improve your knowledge and track your
            progress.
          </p>
        </div>

        {/* ================= Quick Links ================= */}

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-300">
            Quick Links
          </h3>

          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-sm text-slate-400 transition-colors hover:text-blue-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ================= Tech Stack ================= */}

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-300">
            Built With
          </h3>

          <div className="space-y-2 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <Code2 size={16} />
              <span>
                React • JavaScript • Tailwind CSS
                • Vite
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Heart
                size={16}
                className="text-red-500"
              />

              <span>
                Built for learning & interview
                preparation
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= Bottom Bar ================= */}

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-4 text-sm text-slate-500 md:flex-row">
          <p>
            © {currentYear} Quiz App. All rights
            reserved.
          </p>

          <div className="flex items-center gap-5">
            <span>Version 1.0.0</span>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
              aria-label="GitHub Repository"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}