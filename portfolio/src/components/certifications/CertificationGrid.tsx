import { useMemo, useState } from "react";

import CertificationCard from "./CertificationCard";
import CertificationModal from "./CertificationModal";

import type {
  Certification,
  CertificationGridProps,
} from "../../types/certification";

/**
 * ==========================================================
 * Certification Grid
 * ==========================================================
 *
 * Displays certifications in a responsive grid.
 *
 * Features
 * ----------
 * ✓ Responsive Grid
 * ✓ Modal Integration
 * ✓ Centralized State
 * ✓ Reusable
 * ✓ Home Ready
 * ✓ Certifications Page Ready
 * ✓ Dark / Light Theme
 * ✓ Production Ready
 *
 * Used By
 * ----------
 * - FeaturedCertifications
 * - Home.tsx
 * - Certifications.tsx
 * ==========================================================
 */

function CertificationGrid({ certifications }: CertificationGridProps) {
  const [selectedCertification, setSelectedCertification] =
    useState<Certification | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const sortedCertifications = useMemo(
    () => [...certifications].sort((a, b) => a.order - b.order),
    [certifications],
  );

  const handleOpenModal = (certification: Certification) => {
    setSelectedCertification(certification);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);

    /**
     * Small delay allows the modal
     * closing animation to finish
     * before clearing data.
     */
    setTimeout(() => {
      setSelectedCertification(null);
    }, 150);
  };

  if (!sortedCertifications.length) {
    return (
      <div
        className="
                    rounded-3xl
                    border
                    border-dashed
                    border-white/10
                    bg-white/5
                    px-8
                    py-20
                    text-center
                "
      >
        <h3
          className="
                        text-2xl
                        font-semibold
                        text-white
                    "
        >
          No certifications found
        </h3>

        <p
          className="
                        mt-4
                        text-gray-400
                    "
        >
          Certifications will appear here once they are added.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Grid */}

      <div
        className="
                    grid
                    gap-8

                    sm:grid-cols-1
                    md:grid-cols-2
                    xl:grid-cols-3
                "
      >
        {sortedCertifications.map((certification) => (
          <CertificationCard
            key={certification.id}
            certification={certification}
            onView={handleOpenModal}
          />
        ))}
      </div>

      {/* Details Modal */}

      <CertificationModal
        certification={selectedCertification}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}

export default CertificationGrid;
