import { CalendarDays, CheckCircle2, MapPin } from "lucide-react";

import AboutCard from "./AboutCard";
import SectionTitle from "../common/SectionTitle";

import education from "../../data/education";

/**
 * ==========================================================
 * Education Card Component
 * ==========================================================
 *
 * Displays education history using reusable
 * glassmorphism cards.
 *
 * Features
 * ----------
 * ✓ Responsive
 * ✓ Timeline Ready
 * ✓ Theme Aware
 * ✓ Reusable
 * ✓ Data Driven
 *
 * ==========================================================
 */

function EducationCard() {
  return (
    <section className="space-y-8">
      <SectionTitle
        title="Education"
        highlight="Journey"
        subtitle="My academic background and learning path."
      />

      <div className="space-y-6">
        {education.map((item) => {
          const Icon = item.icon;

          return (
            <AboutCard
              key={item.id}
              title={item.degree}
              icon={<Icon size={24} />}
            >
              <div className="space-y-5">
                {/* Institution */}
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {item.institution}
                  </h4>

                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {item.level}
                  </p>
                </div>

                {/* Information */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <InfoRow
                    icon={<MapPin size={18} />}
                    label="Location"
                    value={item.location}
                  />

                  <InfoRow
                    icon={<CalendarDays size={18} />}
                    label="Duration"
                    value={item.duration}
                  />
                </div>

                {/* Footer */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-4 dark:border-slate-700">
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Academic Result
                    </p>

                    <p className="font-medium text-slate-900 dark:text-white">
                      {item.score}
                    </p>
                  </div>

                  <span
                    className={`
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      px-4
                      py-2
                      text-sm
                      font-medium
                      ${
                        item.status === "Completed"
                          ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                          : "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
                      }
                    `}
                  >
                    <CheckCircle2 size={16} />

                    {item.status}
                  </span>
                </div>
              </div>
            </AboutCard>
          );
        })}
      </div>
    </section>
  );
}

/**
 * ==========================================================
 * Info Row
 * ==========================================================
 */

interface InfoRowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function InfoRow({ icon, label, value }: InfoRowProps) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white/60 p-3 dark:border-slate-700 dark:bg-slate-900/50">
      <div className="text-indigo-500">{icon}</div>

      <div>
        <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
          {label}
        </p>

        <p className="font-medium text-slate-900 dark:text-white">{value}</p>
      </div>
    </div>
  );
}

export default EducationCard;
