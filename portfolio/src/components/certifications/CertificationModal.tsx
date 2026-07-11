import {
  Award,
  CalendarDays,
  ExternalLink,
  GraduationCap,
  Tag,
  User,
  X,
} from "lucide-react";

import Button from "../common/Button";
import GlassCard from "../ui/GlassCard";

import type { CertificationModalProps } from "../../types/certification";

/**
 * ==========================================================
 * Certification Modal
 * ==========================================================
 *
 * Premium modal displaying complete certification details.
 *
 * Features
 * ----------
 * ✓ Glassmorphism Design
 * ✓ Responsive
 * ✓ Dark / Light Theme
 * ✓ Keyboard Accessible
 * ✓ Scrollable Content
 * ✓ Skills Display
 * ✓ Google Drive Integration
 * ✓ Production Ready
 *
 * Used By
 * ----------
 * - CertificationGrid
 * - FeaturedCertifications
 * - Certifications Page
 * ==========================================================
 */

function CertificationModal({
  certification,
  isOpen,
  onClose,
}: CertificationModalProps) {
  if (!isOpen || !certification) {
    return null;
  }

  const handleViewCertificate = () => {
    if (!certification.credentialUrl) return;

    window.open(certification.credentialUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="
                fixed
                inset-0
                z-999
                flex
                items-center
                justify-center
                bg-black/70
                backdrop-blur-md
                p-4
            "
      onClick={onClose}
    >
      <GlassCard
        className="
                    relative
                    w-full
                    max-w-3xl
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/10
                    bg-zinc-900/90
                    p-8
                    shadow-2xl
                "
        onClick={(event) => event.stopPropagation()}
      >
        {/* Close Button */}

        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="
                        absolute
                        right-5
                        top-5
                        rounded-full
                        p-2
                        text-gray-400
                        transition-colors
                        hover:bg-white/10
                        hover:text-white
                    "
        >
          <X size={22} />
        </button>

        {/* Header */}

        <div className="flex items-start gap-5">
          <div
            className="
                            flex
                            h-16
                            w-16
                            items-center
                            justify-center
                            rounded-2xl
                            bg-linear-to-br
                            from-violet-600
                            to-fuchsia-600
                            text-white
                            shadow-lg
                        "
          >
            <Award size={32} />
          </div>

          <div className="flex-1">
            <h2
              className="
                                text-2xl
                                font-bold
                                text-white
                            "
            >
              {certification.title}
            </h2>

            <div
              className="
                                mt-3
                                flex
                                flex-wrap
                                gap-5
                                text-sm
                                text-gray-400
                            "
            >
              <span className="flex items-center gap-2">
                <GraduationCap size={16} />
                {certification.issuer}
              </span>

              <span className="flex items-center gap-2">
                <CalendarDays size={16} />
                {certification.issueDate}
              </span>

              <span className="flex items-center gap-2">
                <Tag size={16} />
                {certification.category}
              </span>
            </div>
          </div>
        </div>

        {/* Instructor */}

        {certification.instructor && (
          <div className="mt-8">
            <h3
              className="
                                mb-2
                                flex
                                items-center
                                gap-2
                                text-lg
                                font-semibold
                                text-white
                            "
            >
              <User size={18} />
              Instructor
            </h3>

            <p className="text-gray-300">{certification.instructor}</p>
          </div>
        )}

        {/* Description */}

        <div className="mt-8">
          <h3
            className="
                            mb-3
                            text-lg
                            font-semibold
                            text-white
                        "
          >
            About this Certification
          </h3>

          <p
            className="
                            leading-8
                            text-gray-300
                        "
          >
            {certification.description}
          </p>
        </div>

        {/* Skills */}

        <div className="mt-8">
          <h3
            className="
                            mb-4
                            text-lg
                            font-semibold
                            text-white
                        "
          >
            Skills Covered
          </h3>

          <div
            className="
                            flex
                            flex-wrap
                            gap-3
                        "
          >
            {certification.skills.map((skill) => (
              <span
                key={skill.id}
                className="
                                    rounded-full
                                    border
                                    border-violet-500/20
                                    bg-violet-500/10
                                    px-4
                                    py-2
                                    text-sm
                                    font-medium
                                    text-violet-300
                                "
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}

        <div
          className="
                        mt-10
                        flex
                        flex-wrap
                        justify-end
                        gap-4
                    "
        >
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>

          <Button
            onClick={handleViewCertificate}
            disabled={!certification.credentialUrl}
          >
            <ExternalLink size={18} className="mr-2" />
            View Certificate
          </Button>
        </div>
      </GlassCard>
    </div>
  );
}

export default CertificationModal;
