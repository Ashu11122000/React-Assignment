import Hero from "../components/hero/Hero";

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
 * ✓ Services Preview
 * ✓ Certifications Preview
 * ✓ Resume Preview
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
      {/* Hero Section */}
      <Hero />

      {/* ======================================================
          Services Preview
          (Coming in next phase)
      ======================================================= */}

      {/* <ServicesPreview /> */}

      {/* ======================================================
          Certifications Preview
      ======================================================= */}

      {/* <CertificationsPreview /> */}

      {/* ======================================================
          Resume Preview
      ======================================================= */}

      {/* <ResumePreview /> */}
    </>
  );
}

export default Home;
