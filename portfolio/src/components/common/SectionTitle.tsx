import { cn } from "../../utils/cn";

/**
 * ==========================================================
 * Section Title Component
 * ==========================================================
 *
 * Reusable section heading used throughout the portfolio.
 *
 * Features
 * ----------
 * ✓ Responsive
 * ✓ Gradient Highlight
 * ✓ Subtitle Support
 * ✓ Center / Left Alignment
 * ✓ Dark Mode Compatible
 * ✓ Reusable
 *
 * Used By
 * ----------
 * ✓ About
 * ✓ Skills
 * ✓ Experience
 * ✓ Projects
 * ✓ Contact
 *
 * ==========================================================
 */

interface SectionTitleProps {
  /**
   * Main title.
   */
  title: string;

  /**
   * Gradient highlighted text.
   */
  highlight?: string;

  /**
   * Optional subtitle.
   */
  subtitle?: string;

  /**
   * Center align content.
   *
   * Default: false
   */
  center?: boolean;

  /**
   * Additional classes.
   */
  className?: string;
}

function SectionTitle({
  title,
  highlight,
  subtitle,
  center = false,
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "space-y-4",
        center ? "text-center" : "text-left",
        className,
      )}
    >
      {/* Heading */}
      <h2
        className="
          text-4xl
          font-bold
          tracking-tight
          text-slate-900
          sm:text-5xl
          dark:text-white
        "
      >
        {title}{" "}
        {highlight && (
          <span
            className="
              bg-linear-to-r
              from-indigo-500
              via-violet-500
              to-cyan-500
              bg-clip-text
              text-transparent
            "
          >
            {highlight}
          </span>
        )}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p
          className={cn(
            "text-lg leading-8 text-slate-600 dark:text-slate-400",
            center && "mx-auto max-w-3xl",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;
