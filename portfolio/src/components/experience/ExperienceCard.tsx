import {
  Building2,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  MapPin,
} from "lucide-react";

import Badge from "../common/Badge";
import Card from "../common/Card";
import Divider from "../common/Divider";

import GradientText from "../ui/GradientText";

import type { Experience } from "../../types/experience";

/**
 * ==========================================================
 * Experience Card
 * ==========================================================
 *
 * Premium reusable experience card.
 *
 * Features
 * ----------
 * ✓ Glassmorphism
 * ✓ Company Logo Support
 * ✓ Fallback Icon
 * ✓ Responsive Layout
 * ✓ Technology Pills
 * ✓ Achievement List
 * ✓ Dark / Light Theme
 * ✓ Hover Animation
 * ✓ Accessible
 * ✓ TypeScript
 *
 * Used By
 * ----------
 * ExperienceTimeline
 *
 * ==========================================================
 */

interface ExperienceCardProps {
  experience: Experience;
}

function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Card
      hover
      glass
      className="
                group
                relative
                overflow-hidden
                transition-all
                duration-500
            "
    >
      {/* Decorative Gradient */}

      <div
        className="
                    absolute
                    inset-x-0
                    top-0
                    h-1
                    bg-linear-to-r
                    from-indigo-500
                    via-violet-500
                    to-cyan-500
                "
      />

      {/* ========================= */}

      {/* Header */}

      {/* ========================= */}

      <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
        {/* Company Logo */}

        <div
          className="
                        flex
                        h-20
                        w-20
                        shrink-0
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-indigo-500/20
                        bg-linear-to-br
                        from-indigo-500/10
                        via-violet-500/10
                        to-cyan-500/10
                        shadow-lg
                    "
        >
          {experience.companyLogo ? (
            <img
              src={experience.companyLogo}
              alt={experience.company}
              className="
                                h-14
                                w-14
                                object-contain
                            "
            />
          ) : (
            <Building2
              className="
                                h-9
                                w-9
                                text-indigo-500
                            "
            />
          )}
        </div>

        {/* Content */}

        <div className="flex-1 space-y-5">
          {/* Company */}

          <div className="space-y-2">
            <div
              className="
                                flex
                                flex-wrap
                                items-center
                                gap-3
                            "
            >
              <GradientText
                className="
                                    text-3xl
                                    font-bold
                                "
              >
                {experience.company}
              </GradientText>

              <Badge variant="secondary" size="sm">
                {experience.employmentType}
              </Badge>

              {experience.currentlyWorking && (
                <Badge variant="success" size="sm">
                  Current
                </Badge>
              )}
            </div>

            <h3
              className="
                                text-xl
                                font-semibold
                                text-slate-900
                                dark:text-white
                            "
            >
              {experience.position}
            </h3>
          </div>

          {/* Meta Information */}

          <div
            className="
                            grid
                            gap-4
                            sm:grid-cols-3
                        "
          >
            <div
              className="
                                flex
                                items-center
                                gap-2
                                text-slate-600
                                dark:text-slate-400
                            "
            >
              <CalendarDays size={18} className="text-indigo-500" />

              <span className="text-sm font-medium">
                {experience.startDate}
                {" — "}
                {experience.endDate}
              </span>
            </div>

            <div
              className="
                                flex
                                items-center
                                gap-2
                                text-slate-600
                                dark:text-slate-400
                            "
            >
              <MapPin size={18} className="text-violet-500" />

              <span className="text-sm font-medium">{experience.location}</span>
            </div>

            <div
              className="
                                flex
                                items-center
                                gap-2
                                text-slate-600
                                dark:text-slate-400
                            "
            >
              <BriefcaseBusiness size={18} className="text-cyan-500" />

              <span className="text-sm font-medium">
                {experience.employmentType}
              </span>
            </div>
          </div>

          <Divider spacing="sm" />

          {/* Description */}

          <p
            className="
                            leading-8
                            text-slate-600
                            dark:text-slate-300
                        "
          >
            {experience.description}
          </p>

          <Divider />

          {/* ========================= */}

          {/* Achievements */}

          {/* ========================= */}

          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <CheckCircle2 size={22} className="text-emerald-500" />

              <h4
                className="
                                    text-lg
                                    font-semibold
                                    text-slate-900
                                    dark:text-white
                                "
              >
                Key Achievements
              </h4>
            </div>

            <ul className="space-y-4">
              {experience.achievements.map((achievement) => (
                <li
                  key={achievement.id}
                  className="
                                        flex
                                        items-start
                                        gap-3
                                    "
                >
                  <CheckCircle2
                    size={18}
                    className="
                                            mt-1
                                            shrink-0
                                            text-emerald-500
                                        "
                  />

                  <span
                    className="
                                            leading-7
                                            text-slate-600
                                            dark:text-slate-300
                                        "
                  >
                    {achievement.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <Divider />

          {/* ========================= */}

          {/* Technologies */}

          {/* ========================= */}

          <div className="space-y-5">
            <div
              className="
                                flex
                                items-center
                                justify-between
                                gap-4
                                flex-wrap
                            "
            >
              <h4
                className="
                                    text-lg
                                    font-semibold
                                    text-slate-900
                                    dark:text-white
                                "
              >
                Technologies Used
              </h4>

              <Badge variant="primary" size="sm">
                {experience.technologies.length} Technologies
              </Badge>
            </div>

            <div
              className="
                                flex
                                flex-wrap
                                gap-3
                            "
            >
              {experience.technologies.map((technology) => (
                <Badge
                  key={technology.id}
                  variant="outline"
                  size="sm"
                  className="
                                        transition-all
                                        duration-300
                                        hover:border-indigo-500
                                        hover:bg-indigo-500/10
                                        hover:text-indigo-600
                                        dark:hover:text-indigo-300
                                    "
                >
                  {technology.name}
                </Badge>
              ))}
            </div>
          </div>

          {/* ========================= */}

          {/* Company Website */}

          {/* ========================= */}

          {experience.website && (
            <>
              <Divider />

              <div
                className="
                                    flex
                                    items-center
                                    justify-between
                                    flex-wrap
                                    gap-4
                                "
              >
                <div>
                  <p
                    className="
                                            text-sm
                                            text-slate-500
                                            dark:text-slate-400
                                        "
                  >
                    Company Website
                  </p>

                  <a
                    href={experience.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                                            mt-1
                                            inline-flex
                                            items-center
                                            gap-2
                                            font-medium
                                            text-indigo-600
                                            transition-colors
                                            hover:text-indigo-500
                                            dark:text-indigo-400
                                        "
                  >
                    {experience.company}
                  </a>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* ====================================== */}

      {/* Decorative Bottom Glow */}

      {/* ====================================== */}

      <div
        className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    bottom-0
                    h-24
                    bg-linear-to-t
                    from-indigo-500/5
                    via-violet-500/5
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                "
      />
    </Card>
  );
}

export default ExperienceCard;
