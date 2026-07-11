import AboutSection from "../components/about/AboutSection";

/**
 * ==========================================================
 * About Page
 * ==========================================================
 *
 * Dedicated About page.
 *
 * Reuses the AboutSection component from the
 * homepage to avoid duplicated code.
 *
 * ==========================================================
 */

function About() {
  return (
    <main className="pt-24">
      <AboutSection />
    </main>
  );
}

export default About;