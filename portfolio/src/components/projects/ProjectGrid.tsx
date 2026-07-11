/**
 * ==========================================================
 * ProjectGrid Component
 * ==========================================================
 *
 * Displays a responsive grid of project cards.
 *
 * Features
 * ----------
 * ✓ Strongly Typed
 * ✓ Responsive Grid
 * ✓ Empty State
 * ✓ Reusable
 * ✓ Accessible
 * ✓ Premium Layout
 *
 * Used By
 * ----------
 * - Projects.tsx
 * - FeaturedProjects.tsx
 *
 * ==========================================================
 */

import type { FC } from "react";

import { FolderOpen } from "lucide-react";

import ProjectCard from "./ProjectCard";

import type { Project } from "../../types/project";

interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid: FC<ProjectGridProps> = ({ projects }) => {
  if (projects.length === 0) {
    return (
      <div
        className="
                    flex
                    min-h-70
                    flex-col
                    items-center
                    justify-center
                    rounded-3xl
                    border
                    border-dashed
                    border-primary/20
                    bg-white/5
                    px-8
                    py-16
                    text-center
                    backdrop-blur-xl
                "
      >
        <FolderOpen size={64} className="mb-5 text-primary/70" />

        <h3 className="text-2xl font-semibold">No Projects Found</h3>

        <p className="mt-3 max-w-md text-muted-foreground">
          No projects match your current search or selected category. Try
          changing the search term or selecting another filter.
        </p>
      </div>
    );
  }

  return (
    <div
      className="
                grid
                grid-cols-1
                gap-8
                md:grid-cols-2
                xl:grid-cols-3
            "
    >
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectGrid;
