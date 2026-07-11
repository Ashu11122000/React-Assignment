import { ArrowRight, Award } from "lucide-react";
import { Link } from "react-router-dom";

import { featuredCertifications } from "../../data/certifications";

import Button from "../common/Button";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import CertificationGrid from "./CertificationGrid";

/**
 * ==========================================================
 * Featured Certifications
 * ==========================================================
 *
 * Home page preview of the Certifications section.
 *
 * Features
 * ----------
 * ✓ Reusable
 * ✓ Responsive
 * ✓ Home Preview
 * ✓ Featured Certifications
 * ✓ Production Ready
 * ==========================================================
 */

function FeaturedCertifications() {
    return (
        <section
            id="certifications"
            className="py-24"
        >
            <Container>
                {/* Section Title */}

                <SectionTitle
                    title="Professional Certifications"
                    subtitle="Continuous learning is one of my core principles. These certifications showcase my commitment to mastering modern frontend, backend, DevOps, microservices, and mobile development technologies."
                />

                {/* Header Actions */}

                <div className="mb-12 flex justify-end">
                    <Link to="/certifications">
                        <Button>
                            <Award
                                size={18}
                                className="mr-2"
                            />

                            View All

                            <ArrowRight
                                size={18}
                                className="ml-2"
                            />
                        </Button>
                    </Link>
                </div>

                {/* Certifications */}

                <CertificationGrid
                    certifications={featuredCertifications}
                />
            </Container>
        </section>
    );
}

export default FeaturedCertifications;