import Hero from "../components/hero/Hero";
import FeaturedCertifications from "../components/certifications/FeaturedCertifications";

/**
 * ==========================================================
 * Home Page
 * ==========================================================
 *
 * Landing page of the portfolio.
 *
 * Purpose
 * -------
 * Welcome visitors and provide a quick overview
 * of your profile with featured sections.
 *
 * Sections
 * --------
 * ✓ Hero
 * ✓ Services Preview (Coming Soon)
 * ✓ Certifications Preview
 * ✓ Resume Preview (Coming Soon)
 *
 * Dedicated Pages
 * ---------------
 * • About
 * • Skills
 * • Experience
 * • Projects
 * • Certifications
 * • Contact
 *
 * ==========================================================
 */

function Home() {
  return (
    <>
      {/* ======================================================
                Hero Section
            ======================================================= */}

      <Hero />

      {/* ======================================================
                Services Preview
                (Coming in next phase)
            ======================================================= */}

      {/* <ServicesPreview /> */}

      {/* ======================================================
                Certifications Preview
            ======================================================= */}

      <FeaturedCertifications />

      {/* ======================================================
                Resume Preview
                (Coming later)
            ======================================================= */}

      {/* <ResumePreview /> */}
    </>
  );
}

export default Home;
