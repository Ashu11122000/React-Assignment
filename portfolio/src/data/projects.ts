/**
 * ==========================================================
 * Projects Data
 * ==========================================================
 *
 * Centralized project data used throughout the portfolio.
 *
 * Features
 * ----------
 * ✓ Centralized Business Data
 * ✓ Strongly Typed
 * ✓ Resume Driven
 * ✓ Search Ready
 * ✓ Filter Ready
 * ✓ Featured Projects
 * ✓ GitHub Ready
 *
 * Used By
 * ----------
 * - ProjectGrid.tsx
 * - FeaturedProjects.tsx
 * - SearchBar.tsx
 * - FilterBar.tsx
 * - Projects.tsx
 *
 * ==========================================================
 */

import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: 1,
    name: "Team Productivity System",
    description:
      "A full-stack productivity platform inspired by Notion and Todoist featuring authentication, notes, task management, Kanban boards, notifications, and a scalable microservices-inspired architecture.",
    category: "Full Stack",
    status: "In Progress",
    featured: true,
    technologies: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "React" },
      { id: 3, name: "TypeScript" },
      { id: 4, name: "Tailwind CSS" },
      { id: 5, name: "FastAPI" },
      { id: 6, name: "NestJS" },
      { id: 7, name: "PostgreSQL" },
      { id: 8, name: "Docker" },
    ],
    githubUrl: "https://github.com/Ashu11122000/Team-Productivity-Platform.git",
    order: 1,
  },

  {
    id: 2,
    name: "Mini Blog Management",
    description:
      "A modern blog management platform built with Next.js App Router featuring dynamic routing, admin dashboard, analytics, categories, comments, search, and SEO optimization.",
    category: "Full Stack",
    status: "Completed",
    featured: true,
    technologies: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "React" },
      { id: 3, name: "TypeScript" },
      { id: 4, name: "Tailwind CSS" },
    ],
    githubUrl: "https://github.com/Ashu11122000/Mini-Blog-Management.git",
    completedAt: "June 2026",
    order: 2,
  },

  {
    id: 3,
    name: "Elegant-Context",
    description:
      "A premium fashion e-commerce frontend with authentication, cart, wishlist, checkout, order management, reusable architecture, and responsive UI.",
    category: "Frontend",
    status: "Completed",
    featured: true,
    technologies: [
      { id: 1, name: "React" },
      { id: 2, name: "JavaScript" },
      { id: 3, name: "Vite" },
      { id: 4, name: "Tailwind CSS" },
      { id: 5, name: "Context API" },
      { id: 6, name: "Framer Motion" },
    ],
    githubUrl: "https://github.com/Ashu11122000/Elegant-Context.git",
    completedAt: "June 2026",
    order: 3,
  },

  {
    id: 4,
    name: "Notes Backend System",
    description:
      "Production-ready Notes Management REST API featuring JWT authentication, RBAC, PostgreSQL, SQLAlchemy, Docker, Swagger, and comprehensive testing.",
    category: "Backend",
    status: "Completed",
    featured: false,
    technologies: [
      { id: 1, name: "Python" },
      { id: 2, name: "FastAPI" },
      { id: 3, name: "SQLAlchemy" },
      { id: 4, name: "PostgreSQL" },
      { id: 5, name: "Docker" },
    ],
    githubUrl: "#",
    completedAt: "May 2026",
    order: 4,
  },

  {
    id: 5,
    name: "Expense Tracker Backend System",
    description:
      "Scalable backend application for expense tracking with budgeting, analytics, REST APIs, Docker, CSV persistence, and Pytest integration.",
    category: "Backend",
    status: "Completed",
    featured: false,
    technologies: [
      { id: 1, name: "Python" },
      { id: 2, name: "FastAPI" },
      { id: 3, name: "Pydantic" },
      { id: 4, name: "Docker" },
      { id: 5, name: "Pytest" },
    ],
    githubUrl: "#",
    completedAt: "April 2026",
    order: 5,
  },

  {
    id: 6,
    name: "Task Management Backend System",
    description:
      "Backend platform supporting REST, GraphQL, and gRPC APIs with JWT authentication, PostgreSQL, Docker, and Swagger documentation.",
    category: "Backend",
    status: "Completed",
    featured: false,
    technologies: [
      { id: 1, name: "Node.js" },
      { id: 2, name: "Express.js" },
      { id: 3, name: "GraphQL" },
      { id: 4, name: "gRPC" },
      { id: 5, name: "PostgreSQL" },
    ],
    githubUrl: "#",
    completedAt: "March 2026",
    order: 6,
  },

  {
    id: 7,
    name: "Job Portal",
    description:
      "Full-stack job portal connecting candidates and employers with role-based authentication, application tracking, file uploads, and notifications.",
    category: "Full Stack",
    status: "Completed",
    featured: false,
    technologies: [
      { id: 1, name: "React" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "Express.js" },
      { id: 4, name: "MySQL" },
    ],
    githubUrl: "#",
    completedAt: "January 2026",
    order: 7,
  },

  {
    id: 8,
    name: "HRMS Portal",
    description:
      "Human Resource Management System for employee management, attendance, leave requests, and role-based access with a responsive UI.",
    category: "Full Stack",
    status: "Completed",
    featured: false,
    technologies: [
      { id: 1, name: "React" },
      { id: 2, name: "JavaScript" },
      { id: 3, name: "Vite" },
      { id: 4, name: "REST API" },
    ],
    githubUrl: "#",
    completedAt: "September 2025",
    order: 8,
  },

  {
    id: 9,
    name: "Cervino Ceramics",
    description:
      "Responsive product showcase platform displaying ceramic collections using a scalable React architecture with optimized frontend performance.",
    category: "Frontend",
    status: "Completed",
    featured: false,
    technologies: [
      { id: 1, name: "React" },
      { id: 2, name: "JavaScript" },
      { id: 3, name: "Vite" },
      { id: 4, name: "CSS3" },
    ],
    githubUrl: "#",
    completedAt: "July 2025",
    order: 9,
  },

  {
    id: 10,
    name: "Driving School",
    description:
      "Responsive driving school website providing course information, services, routing, and a modern component-based React interface.",
    category: "Frontend",
    status: "Completed",
    featured: false,
    technologies: [
      { id: 1, name: "React" },
      { id: 2, name: "JavaScript" },
      { id: 3, name: "HTML5" },
      { id: 4, name: "CSS3" },
    ],
    githubUrl: "#",
    completedAt: "April 2025",
    order: 10,
  },
];

export default projects;
