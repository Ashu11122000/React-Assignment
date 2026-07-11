/**
 * ==========================================================
 * Projects Page
 * ==========================================================
 *
 * Displays all portfolio projects with search
 * and category filtering.
 *
 * Responsibilities
 * ----------------
 * ✓ Manage Search State
 * ✓ Manage Filter State
 * ✓ Filter Projects
 * ✓ Render Reusable Components
 *
 * No UI business logic exists inside child components.
 *
 * ==========================================================
 */

import { useMemo, useState } from "react";

import Container from "../components/common/Container";
import SectionTitle from "../components/common/SectionTitle";

import FilterBar, {
  type ProjectFilter,
} from "../components/projects/FilterBar";
import ProjectGrid from "../components/projects/ProjectGrid";
import SearchBar from "../components/projects/SearchBar";

import projects from "../data/projects";

function Projects() {
  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState<ProjectFilter>("All");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = filter === "All" || project.category === filter;

      const keyword = search.trim().toLowerCase();

      const matchesSearch =
        keyword.length === 0 ||
        project.name.toLowerCase().includes(keyword) ||
        project.description.toLowerCase().includes(keyword) ||
        project.technologies.some((technology) =>
          technology.name.toLowerCase().includes(keyword),
        );

      return matchesCategory && matchesSearch;
    });
  }, [search, filter]);

  return (
    <main className="min-h-screen py-24">
      <Container>
        <SectionTitle
          title="Projects"
          subtitle="
                        Explore a collection of my frontend,
                        backend, and full-stack applications
                        built with modern technologies,
                        scalable architectures, and
                        production-ready development
                        practices.
                    "
        />

        {/* Search */}

        <div className="mt-14">
          <SearchBar value={search} onChange={setSearch} />
        </div>

        {/* Filter */}

        <div className="mt-8">
          <FilterBar activeFilter={filter} onFilterChange={setFilter} />
        </div>

        {/* Grid */}

        <div className="mt-14">
          <ProjectGrid projects={filteredProjects} />
        </div>
      </Container>
    </main>
  );
}

export default Projects;
