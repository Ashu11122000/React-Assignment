import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../common/Container";
import Button from "../common/Button";
import SocialIcons from "../common/SocialIcons";

import { NAV_LINKS, SITE_CONFIG } from "../../utils/constants";

/**
 * ==========================================================
 * Footer Component
 * ==========================================================
 *
 * Global application footer.
 *
 * Features
 * ----------
 * ✓ Responsive Layout
 * ✓ Quick Navigation
 * ✓ Social Icons
 * ✓ Back To Top
 * ✓ Copyright
 * ✓ Dark Mode
 *
 * ==========================================================
 */

function Footer() {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <Container>
        <div className="py-16">
          {/* ==========================
              Top Section
          =========================== */}

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {/* Brand */}

            <div>
              <Link to="/" className="inline-flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-600 via-violet-600 to-cyan-500 font-bold text-white shadow-lg">
                  {SITE_CONFIG.logo}
                </div>

                <div>
                  <h3 className="text-xl font-bold">{SITE_CONFIG.name}</h3>

                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Full Stack Developer
                  </p>
                </div>
              </Link>

              <p className="mt-6 max-w-sm leading-7 text-slate-600 dark:text-slate-400">
                Passionate about creating modern, responsive and
                high-performance web applications with exceptional user
                experiences.
              </p>
            </div>

            {/* Quick Links */}

            <div>
              <h4 className="mb-5 text-lg font-semibold">Quick Links</h4>

              <ul className="space-y-3">
                {NAV_LINKS.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      className="text-slate-600 transition-colors duration-300 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}

            <div>
              <h4 className="mb-5 text-lg font-semibold">Connect</h4>

              <p className="mb-6 text-slate-600 dark:text-slate-400">
                Feel free to connect with me through these platforms.
              </p>

              <SocialIcons />

              <div className="mt-8">
                <Button
                  variant="outline"
                  rightIcon={<ArrowUp size={18} />}
                  onClick={handleBackToTop}
                >
                  Back to Top
                </Button>
              </div>
            </div>
          </div>

          {/* ==========================
              Bottom Section
          =========================== */}

          <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-slate-200 pt-8 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400 md:flex-row">
            <p>
              © {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>

            <p>
              Designed & Developed with ❤️ using React, TypeScript & Tailwind
              CSS.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
