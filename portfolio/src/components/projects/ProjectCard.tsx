/**
 * ==========================================================
 * ProjectCard Component
 * ==========================================================
 *
 * Displays a premium project card.
 *
 * Features
 * ----------
 * ✓ Strongly Typed
 * ✓ Responsive
 * ✓ Glassmorphism UI
 * ✓ Featured Badge
 * ✓ Status Badge
 * ✓ Technology Badges
 * ✓ GitHub Button
 * ✓ Optional Live Demo Button
 * ✓ Hover Animation
 * ✓ Accessibility Friendly
 *
 * ==========================================================
 */

import type { FC } from "react";

import {
    ExternalLink,
    Star,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

import Button from "../common/Button";
import GlassCard from "../ui/GlassCard";
import TechBadge from "./TechBadge";

import type { Project } from "../../types/project";

interface ProjectCardProps {
    project: Project;
}

function getStatusClasses(status: Project["status"]) {
    return status === "Completed"
        ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20"
        : "bg-amber-500/15 text-amber-400 border border-amber-500/20";
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
    return (
        <GlassCard
            className="
                group
                flex
                h-full
                flex-col
                rounded-3xl
                border
                border-white/10
                p-6
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-primary/40
                hover:shadow-xl
                hover:shadow-primary/20
            "
        >
            {/* Header */}

            <div className="mb-5 flex items-start justify-between gap-4">
                <div className="flex-1">
                    <h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-primary">
                        {project.name}
                    </h3>

                    <p className="mt-2 text-sm text-muted-foreground">
                        {project.category}
                    </p>
                </div>

                {project.featured && (
                    <span
                        className="
                            inline-flex
                            items-center
                            gap-1
                            rounded-full
                            bg-yellow-500/15
                            px-3
                            py-1
                            text-xs
                            font-semibold
                            text-yellow-400
                        "
                    >
                        <Star size={14} />
                        Featured
                    </span>
                )}
            </div>

            {/* Description */}

            <p className="mb-6 flex-1 leading-7 text-muted-foreground">
                {project.description}
            </p>

            {/* Status */}

            <div className="mb-6">
                <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusClasses(
                        project.status
                    )}`}
                >
                    {project.status}
                </span>
            </div>

            {/* Technologies */}

            <div className="mb-8 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                    <TechBadge
                        key={technology.id}
                        technology={technology}
                    />
                ))}
            </div>

            {/* Actions */}

            <div className="mt-auto flex gap-3">
                <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                    aria-label={`View ${project.name} GitHub repository`}
                >
                    <Button className="w-full">
                        <FaGithub
                            size={18}
                            className="mr-2"
                        />
                        GitHub
                    </Button>
                </a>

                {project.liveUrl && (
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.name} live demo`}
                    >
                        <Button variant="outline">
                            <ExternalLink size={18} />
                        </Button>
                    </a>
                )}
            </div>
        </GlassCard>
    );
};

export default ProjectCard;