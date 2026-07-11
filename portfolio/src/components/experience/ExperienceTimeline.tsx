import TimelineItem from "./TimelineItem";

import { experiences } from "../../data/experience";

/**
 * ==========================================================
 * Experience Timeline
 * ==========================================================
 *
 * Renders the complete professional experience timeline.
 *
 * Responsibilities
 * ----------------
 * ✓ Display all experiences
 * ✓ Connect Timeline Items
 * ✓ Responsive Layout
 * ✓ Centralized Data
 * ✓ Reusable
 * ✓ TypeScript
 *
 * Used By
 * ----------
 * pages/Experience.tsx
 *
 * ==========================================================
 */

function ExperienceTimeline() {
  return (
    <section aria-label="Professional Experience Timeline" className="relative">
      {/* Timeline */}

      <div className="space-y-12 lg:space-y-16">
        {experiences.map((experience, index) => (
          <TimelineItem
            key={experience.id}
            experience={experience}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </section>
  );
}

export default ExperienceTimeline;
