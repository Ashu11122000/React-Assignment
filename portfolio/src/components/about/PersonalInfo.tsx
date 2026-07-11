import type { ReactNode } from "react";

import {
  Download,
  Mail,
  MapPin,
  Phone,
  User,
} from "lucide-react";

import AboutCard from "./AboutCard";

import Button from "../common/Button";
import SectionTitle from "../common/SectionTitle";

import personalInfo from "../../data/personalInfo";
import socialLinks from "../../data/socialLinks";

/**
 * ==========================================================
 * Personal Info Component
 * ==========================================================
 *
 * Displays personal information in a premium
 * glassmorphism card.
 *
 * Features
 * ----------
 * ✓ Responsive
 * ✓ Resume Download
 * ✓ Social Links
 * ✓ Theme Aware
 * ✓ Reusable
 *
 * ==========================================================
 */

function PersonalInfo() {
  return (
    <section className="space-y-8">
      <SectionTitle
        title="About"
        highlight="Me"
        subtitle="A quick introduction about myself, my background, and how you can connect with me."
      />

      <AboutCard
        title="Personal Information"
        icon={<User size={24} />}
      >
        <div className="space-y-8">
          {/* Bio */}
          <p className="leading-8 text-slate-600 dark:text-slate-300">
            {personalInfo.bio}
          </p>

          {/* Details */}
          <div className="grid gap-5 md:grid-cols-2">
            <InfoItem
              icon={<Mail size={20} />}
              label="Email"
              value={personalInfo.email}
            />

            <InfoItem
              icon={<Phone size={20} />}
              label="Phone"
              value={personalInfo.phone}
            />

            <InfoItem
              icon={<MapPin size={20} />}
              label="Location"
              value={personalInfo.location}
            />

            <InfoItem
              icon={<User size={20} />}
              label="Experience"
              value={personalInfo.experience}
            />
          </div>

          {/* Availability */}
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5">
            <h4 className="mb-2 font-semibold text-emerald-600 dark:text-emerald-400">
              Current Status
            </h4>

            <p className="text-sm text-slate-600 dark:text-slate-300">
              {personalInfo.availability}
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
              Connect With Me
            </h4>

            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-slate-200
                      bg-white
                      text-slate-700
                      shadow-sm
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-indigo-500
                      hover:bg-indigo-500
                      hover:text-white
                      dark:border-slate-700
                      dark:bg-slate-900
                      dark:text-slate-300
                    "
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Resume Button */}
          <div>
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg">
                Download Resume
                <Download size={18} />
              </Button>
            </a>
          </div>
        </div>
      </AboutCard>
    </section>
  );
}

/**
 * ==========================================================
 * Info Item
 * ==========================================================
 */

interface InfoItemProps {
  icon: ReactNode;
  label: string;
  value: string;
}

function InfoItem({
  icon,
  label,
  value,
}: InfoItemProps) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-slate-200/70 bg-white/60 p-4 transition-all duration-300 hover:border-indigo-500/40 dark:border-slate-700 dark:bg-slate-900/50">
      <div className="mt-1 text-indigo-500">
        {icon}
      </div>

      <div>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {label}
        </p>

        <p className="font-medium text-slate-900 dark:text-white">
          {value}
        </p>
      </div>
    </div>
  );
}

export default PersonalInfo;