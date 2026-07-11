import Container from "../components/common/Container";
import SectionTitle from "../components/common/SectionTitle";

import SkillGrid from "../components/skills/SkillGrid";

/**
 * ==========================================================
 * Skills Page
 * ==========================================================
 *
 * Displays all technical skills in categorized,
 * reusable, responsive cards.
 *
 * Features
 * ----------
 * ✓ Premium Layout
 * ✓ Responsive Design
 * ✓ Reusable Components
 * ✓ Glassmorphism Compatible
 * ✓ Dark / Light Theme
 * ✓ Category Based Skills
 * ✓ Animated Progress Bars
 *
 * Route
 * ----------
 * /skills
 *
 * ==========================================================
 */

const Skills = () => {
  return (
    <main className="relative overflow-hidden py-24">
      <Container>
        <section className="space-y-16">
          {/* Section Heading */}

          <SectionTitle
            title="Skills &"
            highlight="Technologies"
            subtitle="A curated collection of the technologies, frameworks, tools, and platforms I use to design, build, and deploy modern full-stack applications."
            center
          />

          {/* Skills Grid */}

          <SkillGrid />
        </section>
      </Container>
    </main>
  );
};

export default Skills;
