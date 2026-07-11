import { Award, CalendarDays, ExternalLink, GraduationCap } from "lucide-react";

import Badge from "../common/Badge";
import Button from "../common/Button";
import GlassCard from "../ui/GlassCard";

import type { CertificationCardProps } from "../../types/certification";

/**
 * ==========================================================
 * Certification Card
 * ==========================================================
 *
 * Premium reusable certification card.
 *
 * Features
 * ----------
 * ✓ Glassmorphism UI
 * ✓ Responsive
 * ✓ Hover Animation
 * ✓ Category Badge
 * ✓ Issuer Display
 * ✓ Skills Preview
 * ✓ Google Drive Integration
 * ✓ View Certificate Button
 * ✓ Dark / Light Theme
 *
 * Used By
 * ----------
 * - CertificationGrid
 * - FeaturedCertifications
 * - Home Page
 * - Certifications Page
 * ==========================================================
 */

function CertificationCard({ certification, onView }: CertificationCardProps) {
  const {
    title,
    issuer,
    instructor,
    issueDate,
    category,
    description,
    skills,
    credentialUrl,
  } = certification;

  const handleViewCertificate = () => {
    if (!credentialUrl) return;

    window.open(credentialUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <GlassCard
      className="
                group
                relative
                h-full
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-violet-500/40
                hover:shadow-[0_20px_60px_rgba(124,58,237,0.25)]
            "
    >
      {/* Gradient Glow */}

      <div
        className="
                    absolute
                    inset-0
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                    bg-linear-to-br
                    from-violet-500/10
                    via-fuchsia-500/5
                    to-cyan-500/10
                "
      />

      <div className="relative flex h-full flex-col p-6">
        {/* Header */}

        <div className="mb-5 flex items-start justify-between gap-4">
          <div
            className="
                            flex
                            h-14
                            w-14
                            items-center
                            justify-center
                            rounded-2xl
                            bg-linear-to-br
                            from-violet-500
                            to-fuchsia-500
                            text-white
                            shadow-lg
                        "
          >
            <Award size={28} />
          </div>

          <Badge>{category}</Badge>
        </div>

        {/* Title */}

        <h3
          className="
                        text-xl
                        font-bold
                        leading-snug
                        text-white
                    "
        >
          {title}
        </h3>

        {/* Issuer */}

        <div
          className="
                        mt-3
                        flex
                        items-center
                        gap-2
                        text-sm
                        text-gray-400
                    "
        >
          <GraduationCap size={16} />

          <span>{issuer}</span>
        </div>

        {/* Instructor */}

        {instructor && (
          <p
            className="
                            mt-2
                            text-sm
                            text-gray-500
                        "
          >
            Instructor: {instructor}
          </p>
        )}

        {/* Date */}

        <div
          className="
                        mt-3
                        flex
                        items-center
                        gap-2
                        text-sm
                        text-gray-400
                    "
        >
          <CalendarDays size={16} />

          <span>{issueDate}</span>
        </div>

        {/* Description */}

        <p
          className="
                        mt-5
                        flex-1
                        text-sm
                        leading-7
                        text-gray-300
                    "
        >
          {description}
        </p>

        {/* Skills */}

        <div
          className="
                        mt-6
                        flex
                        flex-wrap
                        gap-2
                    "
        >
          {skills.slice(0, 4).map((skill) => (
            <Badge
              key={skill.id}
              className="
                                bg-violet-500/10
                                text-violet-300
                                border-violet-500/20
                            "
            >
              {skill.name}
            </Badge>
          ))}

          {skills.length > 4 && <Badge>+{skills.length - 4}</Badge>}
        </div>

        {/* Footer */}

        <div
          className="
                        mt-8
                        flex
                        items-center
                        justify-between
                        gap-3
                    "
        >
          <Button
            onClick={handleViewCertificate}
            disabled={!credentialUrl}
            className="flex-1"
          >
            <ExternalLink size={18} className="mr-2" />
            View Certificate
          </Button>

          {onView && (
            <Button variant="secondary" onClick={() => onView(certification)}>
              Details
            </Button>
          )}
        </div>
      </div>
    </GlassCard>
  );
}

export default CertificationCard;
