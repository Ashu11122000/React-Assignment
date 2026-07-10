import { Moon, Sun } from "lucide-react";

import useTheme from "../../hooks/useTheme";
import { cn } from "../../utils/cn";

/**
 * ==========================================================
 * Theme Toggle
 * ==========================================================
 *
 * Toggle between Light and Dark themes.
 *
 * Features
 * ----------
 * ✓ Light/Dark Toggle
 * ✓ Accessible
 * ✓ Animated
 * ✓ Keyboard Friendly
 * ✓ Reusable
 *
 * ==========================================================
 */

interface ThemeToggleProps {
  className?: string;
}

function ThemeToggle({ className }: ThemeToggleProps) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      onClick={toggleTheme}
      className={cn(
        "group",
        "inline-flex h-11 w-11 items-center justify-center",
        "rounded-full",
        "border border-slate-200",
        "bg-white/80",
        "backdrop-blur-xl",
        "transition-all duration-300",
        "hover:scale-105",
        "hover:border-indigo-500",
        "hover:shadow-lg",
        "focus:outline-none",
        "focus:ring-2",
        "focus:ring-indigo-500",
        "dark:border-slate-700",
        "dark:bg-slate-900/80",
        className,
      )}
    >
      {isDark ? (
        <Sun
          size={20}
          className="text-yellow-400 transition-transform duration-300 group-hover:rotate-180"
        />
      ) : (
        <Moon
          size={20}
          className="text-slate-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-slate-200"
        />
      )}
    </button>
  );
}

export default ThemeToggle;
