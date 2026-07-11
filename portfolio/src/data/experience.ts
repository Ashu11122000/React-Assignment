import type { Experience } from "../types/experience";

/**
 * ==========================================================
 * Experience Data
 * ==========================================================
 *
 * Centralized professional experience data.
 *
 * Responsibilities
 * ----------------
 * ✓ Strongly Typed
 * ✓ Reusable
 * ✓ Resume Ready
 * ✓ Timeline Ready
 * ✓ Portfolio Ready
 * ==========================================================
 */

export const experiences: Experience[] = [
  {
    id: 1,

    company: "Revel Labs",

    position: "Software Analyst Intern",

    employmentType: "Internship",

    location: "Remote",

    startDate: "Feb 2026",

    endDate: "Present",

    currentlyWorking: true,

    website: "",

    companyLogo: "",

    description:
      "Working as a Software Analyst Intern, contributing to backend development, API engineering, database management, containerization, and modern software engineering practices while collaborating in a remote development environment.",

    achievements: [
      {
        id: 1,
        title:
          "Developing and testing RESTful APIs using Node.js, Express.js, FastAPI, and SQLAlchemy following backend development best practices.",
      },
      {
        id: 2,
        title:
          "Writing, optimizing, and validating PostgreSQL queries for efficient data retrieval and database operations.",
      },
      {
        id: 3,
        title:
          "Implementing API testing workflows using Postman to verify endpoint functionality, reliability, and API contract compliance.",
      },
      {
        id: 4,
        title:
          "Applying Pydantic for request and response validation and structured data modeling in Python-based backend services.",
      },
      {
        id: 5,
        title:
          "Building and managing Docker and Docker Compose based development environments for consistent application deployment.",
      },
      {
        id: 6,
        title:
          "Managing development environments using Python virtual environments (venv), UV, dotenv, and environment variables.",
      },
      {
        id: 7,
        title:
          "Collaborating using Git and GitHub with branching, merging, pull requests, and version control best practices.",
      },
      {
        id: 8,
        title:
          "Developing and consuming REST APIs while exploring GraphQL and gRPC communication for modern backend architectures.",
      },
      {
        id: 9,
        title:
          "Working in Linux-based development environments using command-line tools for development, debugging, and deployment.",
      },
      {
        id: 10,
        title:
          "Strengthening software engineering fundamentals through API design, authentication, CORS, unit testing, debugging, and backend architecture.",
      },
      {
        id: 11,
        title:
          "Expanding full-stack development knowledge with React, Next.js, TypeScript, Tailwind CSS, and NestJS.",
      },
    ],

    technologies: [
      { id: 1, name: "Python" },
      { id: 2, name: "FastAPI" },
      { id: 3, name: "Express.js" },
      { id: 4, name: "Node.js" },
      { id: 5, name: "SQLAlchemy" },
      { id: 6, name: "Pydantic" },
      { id: 7, name: "PostgreSQL" },
      { id: 8, name: "REST API" },
      { id: 9, name: "Postman" },
      { id: 10, name: "Docker" },
      { id: 11, name: "Docker Compose" },
      { id: 12, name: "Git" },
      { id: 13, name: "GitHub" },
      { id: 14, name: "Linux" },
      { id: 15, name: "GraphQL" },
      { id: 16, name: "gRPC" },
      { id: 17, name: "Virtual Environment" },
      { id: 18, name: "UV" },
      { id: 19, name: "dotenv" },
      { id: 20, name: "React" },
      { id: 21, name: "Next.js" },
      { id: 22, name: "TypeScript" },
      { id: 23, name: "Tailwind CSS" },
      { id: 24, name: "NestJS" },
    ],
  },

  {
    id: 2,

    company: "Devnexus Solutions",

    position: "Frontend Developer",

    employmentType: "Internship",

    location: "Gurugram, Haryana",

    startDate: "May 2025",

    endDate: "Aug 2025",

    currentlyWorking: false,

    website: "",

    companyLogo: "",

    description:
      "Worked as a Frontend Developer contributing to enterprise web applications, HRMS development, frontend integration, deployment workflows, and client-facing activities while collaborating with cross-functional development teams.",

    achievements: [
      {
        id: 1,
        title:
          "Developed and maintained frontend modules using modern JavaScript, HTML, CSS, and responsive web development practices.",
      },
      {
        id: 2,
        title:
          "Contributed to the HRMS Portal by implementing reusable user interface components and integrating frontend functionality with backend APIs.",
      },
      {
        id: 3,
        title:
          "Supported CI/CD and deployment workflows for the Cervino Ceramics project, assisting with testing and local development environments.",
      },
      {
        id: 4,
        title:
          "Collaborated with development teams to improve application usability, performance, maintainability, and code quality.",
      },
      {
        id: 5,
        title:
          "Participated in client meetings, requirement gathering, technical discussions, and solution demonstrations.",
      },
      {
        id: 6,
        title:
          "Generated business leads and maintained client communication, supporting customer relationship management and project acquisition.",
      },
    ],

    technologies: [
      { id: 1, name: "JavaScript" },
      { id: 2, name: "HTML5" },
      { id: 3, name: "CSS3" },
      { id: 4, name: "Responsive Design" },
      { id: 5, name: "REST API" },
      { id: 6, name: "Git" },
      { id: 7, name: "GitHub" },
      { id: 8, name: "CI/CD" },
      { id: 9, name: "Frontend Development" },
    ],
  },
];

export default experiences;
