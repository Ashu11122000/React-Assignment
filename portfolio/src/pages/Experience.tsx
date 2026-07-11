import Container from "../components/common/Container";
import SectionTitle from "../components/common/SectionTitle";

import ExperienceTimeline from "../components/experience/ExperienceTimeline";

/**
 * ==========================================================
 * Experience Page
 * ==========================================================
 *
 * Displays professional work experience.
 *
 * Responsibilities
 * ----------------
 * ✓ Page Layout
 * ✓ Section Title
 * ✓ Experience Timeline
 * ✓ Responsive Design
 * ✓ Dark / Light Theme
 * ✓ Reusable Components Only
 *
 * ==========================================================
 */

function Experience() {
  return (
    <main className="min-h-screen py-24">
      <Container>
        <section className="space-y-16">
          <SectionTitle
            title="Professional"
            highlight="Experience"
            subtitle="My professional journey, internships, and hands-on experience building scalable applications, collaborating with teams, and working with modern web technologies."
            center
          />

          <ExperienceTimeline />
        </section>
      </Container>
    </main>
  );
}

export default Experience;
