/**
 * ==========================================================
 * FeaturedProjects Component
 * ==========================================================
 *
 * Displays the featured projects section.
 *
 * Features
 * ----------
 * ✓ Responsive Layout
 * ✓ Glassmorphism Design
 * ✓ Reusable
 * ✓ Strongly Typed
 * ✓ Centralized Data
 * ✓ Premium Section Layout
 *
 * Used By
 * ----------
 * - Home.tsx
 * - Projects.tsx (Optional)
 *
 * ==========================================================
 */

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import ProjectGrid from "./ProjectGrid";

import projects from "../../data/projects";

const FeaturedProjects = () => {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .sort((a, b) => a.order - b.order);

  return (
    <section id="featured-projects" className="py-24">
      <Container>
        <SectionTitle
          title="Featured Projects"
          subtitle="A selection of projects that best represent my experience in building scalable frontend, backend, and full-stack applications using modern technologies."
        />

        <div className="mt-14">
          <ProjectGrid projects={featuredProjects} />
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProjects;
