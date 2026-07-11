import { BriefcaseBusiness } from "lucide-react";

import ExperienceCard from "./ExperienceCard";

import type { Experience } from "../../types/experience";

/**
 * ==========================================================
 * Timeline Item
 * ==========================================================
 *
 * Reusable timeline item used by ExperienceTimeline.
 *
 * Responsibilities
 * ----------------
 * ✓ Timeline Dot
 * ✓ Connecting Line
 * ✓ Responsive Layout
 * ✓ Renders ExperienceCard
 * ✓ Dark / Light Theme
 *
 * ==========================================================
 */

interface TimelineItemProps {
  experience: Experience;
  isLast: boolean;
}

function TimelineItem({ experience, isLast }: TimelineItemProps) {
  return (
    <div
      className="
                relative
                grid
                gap-8
                md:grid-cols-[72px_1fr]
            "
    >
      {/* ====================================== */}
      {/* Timeline Column */}
      {/* ====================================== */}

      <div
        className="
                    relative
                    hidden
                    md:flex
                    justify-center
                "
      >
        {/* Vertical Line */}

        {!isLast && (
          <div
            className="
                            absolute
                            top-16
                            bottom-0
                            w-px
                            bg-linear-to-b
                            from-indigo-500/50
                            via-violet-500/30
                            to-transparent
                        "
          />
        )}

        {/* Timeline Dot */}

        <div
          className="
                        relative
                        z-10
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-indigo-500/30
                        bg-white
                        shadow-lg
                        dark:border-indigo-500/40
                        dark:bg-slate-900
                    "
        >
          {/* Pulse */}

          <span
            className="
                            absolute
                            inset-0
                            animate-ping
                            rounded-full
                            bg-indigo-500/20
                        "
          />

          <BriefcaseBusiness
            className="
                            relative
                            h-6
                            w-6
                            text-indigo-500
                        "
          />
        </div>
      </div>

      {/* ====================================== */}
      {/* Mobile Timeline */}
      {/* ====================================== */}

      <div
        className="
                    flex
                    items-center
                    gap-4
                    md:hidden
                "
      >
        <div
          className="
                        relative
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-indigo-500/30
                        bg-white
                        shadow-md
                        dark:border-indigo-500/40
                        dark:bg-slate-900
                    "
        >
          <BriefcaseBusiness
            className="
                            h-5
                            w-5
                            text-indigo-500
                        "
          />
        </div>

        <div
          className="
                        h-px
                        flex-1
                        bg-linear-to-r
                        from-indigo-500/40
                        to-transparent
                    "
        />
      </div>

      {/* ====================================== */}
      {/* Experience Card */}
      {/* ====================================== */}

      <ExperienceCard experience={experience} />
    </div>
  );
}

export default TimelineItem;
