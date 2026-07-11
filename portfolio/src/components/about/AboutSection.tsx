import Container from "../common/Container";

import PersonalInfo from "./PersonalInfo";
import EducationCard from "./EducationCard";

/**
 * ==========================================================
 * About Section Component
 * ==========================================================
 *
 * Main About section of the portfolio.
 *
 * Responsibilities
 * ----------------
 * ✓ Combines Personal Information
 * ✓ Displays Education Timeline
 * ✓ Responsive Two-Column Layout
 * ✓ Premium Spacing
 * ✓ Glassmorphism Ready
 *
 * Layout
 * ------
 *
 * ------------------------------
 * Personal Info | Education
 * ------------------------------
 *
 * Mobile
 * -------
 * Personal Info
 * Education
 *
 * ==========================================================
 */

function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden py-24 lg:py-32">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            left-0
            top-20
            h-72
            w-72
            rounded-full
            bg-indigo-500/10
            blur-3xl
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-0
            h-80
            w-80
            rounded-full
            bg-cyan-500/10
            blur-3xl
          "
        />
      </div>

      <Container>
        <div
          className="
            grid
            gap-12
            lg:grid-cols-2
            lg:items-start
          "
        >
          {/* Left Column */}
          <PersonalInfo />

          {/* Right Column */}
          <EducationCard />
        </div>
      </Container>
    </section>
  );
}

export default AboutSection;
