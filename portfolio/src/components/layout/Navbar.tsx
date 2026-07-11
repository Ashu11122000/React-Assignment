import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { Menu, X } from "lucide-react";

import Container from "../common/Container";
import ThemeToggle from "../common/ThemeToggle";

import { cn } from "../../utils/cn";
import { NAV_LINKS, SITE_CONFIG } from "../../utils/constants";

/**
 * ==========================================================
 * Navbar Component
 * ==========================================================
 *
 * Premium responsive navigation bar.
 *
 * Features
 * ----------
 * ✓ Sticky Navigation
 * ✓ Glassmorphism
 * ✓ Scroll Detection
 * ✓ Active Route Highlight
 * ✓ Responsive
 * ✓ Theme Toggle
 * ✓ Resume Button
 * ✓ Mobile Menu
 *
 * ==========================================================
 */

function Navbar() {
  /**
   * Navbar shadow / blur after scrolling.
   */
  const [isScrolled, setIsScrolled] = useState(false);

  /**
   * Mobile menu visibility.
   */
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  /**
   * Listen to page scrolling.
   */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * Prevent body scrolling while
   * mobile menu is open.
   */
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      {/* ==========================
          Navbar
      =========================== */}

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50",
          "transition-all duration-300",

          isScrolled
            ? "border-b border-slate-200/60 bg-white/80 shadow-lg backdrop-blur-2xl dark:border-slate-800 dark:bg-slate-950/75"
            : "bg-transparent",
        )}
      >
        <Container>
          <div className="flex h-20 items-center justify-between">
            {/* ==========================
                Logo
            =========================== */}

            <Link to="/" className="group flex items-center gap-3">
              <div
                className={cn(
                  "flex h-12 w-12 items-center justify-center",
                  "rounded-2xl",
                  "bg-linear-to-br",
                  "from-indigo-600",
                  "via-violet-600",
                  "to-cyan-500",
                  "font-bold",
                  "text-white",
                  "shadow-lg",
                  "transition-transform duration-300",
                  "group-hover:scale-110",
                )}
              >
                {SITE_CONFIG.logo}
              </div>

              <div className="hidden sm:block">
                <h2 className="text-lg font-bold">{SITE_CONFIG.name}</h2>

                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Software Engineer
                </p>
              </div>
            </Link>

            {/* ==========================
                Desktop Navigation
            =========================== */}

            <nav className="hidden lg:block">
              <ul className="flex items-center gap-2">
                {NAV_LINKS.map((item) => (
                  <li key={item.label}>
                    <NavLink
                      to={item.href}
                      className={({ isActive }) =>
                        cn(
                          "rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300",

                          isActive
                            ? "bg-indigo-600 text-white shadow-md"
                            : "text-slate-700 hover:bg-slate-100 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white",
                        )
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            
            {/* ==========================
                Mobile Actions
            =========================== */}

            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />

              <button
                type="button"
                aria-label="Open Menu"
                onClick={() => setIsMobileOpen(true)}
                className={cn(
                  "flex h-11 w-11 items-center justify-center",
                  "rounded-xl",
                  "border border-slate-200",
                  "bg-white/80",
                  "backdrop-blur-xl",
                  "transition-all duration-300",
                  "hover:border-indigo-500",
                  "hover:bg-indigo-600",
                  "hover:text-white",
                  "dark:border-slate-700",
                  "dark:bg-slate-900/80",
                )}
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* ==========================
          Mobile Menu Overlay
      =========================== */}

      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={() => setIsMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ==========================
          Mobile Drawer
      =========================== */}

      <aside
        className={cn(
          "fixed right-0 top-0 z-50",
          "h-screen w-80 max-w-[85vw]",
          "border-l border-slate-200",
          "bg-white/95",
          "backdrop-blur-2xl",
          "transition-transform duration-300 ease-in-out",
          "dark:border-slate-800",
          "dark:bg-slate-950/95",

          isMobileOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex h-full flex-col">
          {/* ==========================
              Drawer Header
          =========================== */}

          <div className="flex items-center justify-between border-b border-slate-200 p-6 dark:border-slate-800">
            <div>
              <h2 className="text-lg font-bold">{SITE_CONFIG.name}</h2>

              <p className="text-sm text-slate-500 dark:text-slate-400">
                Navigation
              </p>
            </div>

            <button
              type="button"
              aria-label="Close Menu"
              onClick={() => setIsMobileOpen(false)}
              className={cn(
                "flex h-10 w-10 items-center justify-center",
                "rounded-xl",
                "transition-colors",
                "hover:bg-slate-100",
                "dark:hover:bg-slate-800",
              )}
            >
              <X size={22} />
            </button>
          </div>

          {/* ==========================
              Mobile Navigation
          =========================== */}

          <nav className="flex-1 px-6 py-8">
            <ul className="space-y-2">
              {NAV_LINKS.map((item) => (
                <li key={item.label}>
                  <NavLink
                    to={item.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        "block rounded-xl px-4 py-3",
                        "font-medium transition-all duration-300",

                        isActive
                          ? "bg-indigo-600 text-white shadow-md"
                          : "text-slate-700 hover:bg-slate-100 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white",
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* ==========================
              Drawer Footer
          =========================== */}
        </div>
      </aside>
    </>
  );
}

export default Navbar;
