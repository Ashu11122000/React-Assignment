/**
 * ==========================================================
 * Skills Data
 * ==========================================================
 *
 * Centralized skills data for the portfolio.
 *
 * Features
 * ----------
 * ✓ Strongly Typed
 * ✓ Reusable
 * ✓ Category Based
 * ✓ Premium Portfolio Ready
 * ✓ Easy to Maintain
 *
 * Used By
 * ----------
 * - Skills.tsx
 * - SkillGrid.tsx
 * - SkillCard.tsx
 *
 * ==========================================================
 */

import {
  Code2,
  Database,
  Globe,
  Server,
  Wrench,
  Cloud,
} from "lucide-react";

import type { SkillCategory } from "../types/skill";

export const skills: SkillCategory[] = [
  {
    id: 1,
    title: "Frontend",
    icon: Globe,
    color: "from-cyan-500 to-sky-500",
    percentage: 90,

    skills: [
      {
        id: 1,
        name: "React.js",
        level: "Expert",
      },
      {
        id: 2,
        name: "Next.js",
        level: "Advanced",
      },
      {
        id: 3,
        name: "Tailwind CSS",
        level: "Expert",
      },
      {
        id: 4,
        name: "HTML5",
        level: "Expert",
      },
      {
        id: 5,
        name: "CSS3",
        level: "Expert",
      },
      {
        id: 6,
        name: "JavaScript",
        level: "Expert",
      },
      {
        id: 7,
        name: "TypeScript",
        level: "Advanced",
      },
    ],
  },

  {
    id: 2,
    title: "Backend",
    icon: Server,
    color: "from-emerald-500 to-green-500",
    percentage: 85,

    skills: [
      {
        id: 1,
        name: "Node.js",
        level: "Advanced",
      },
      {
        id: 2,
        name: "Express.js",
        level: "Advanced",
      },
      {
        id: 3,
        name: "FastAPI",
        level: "Advanced",
      },
      {
        id: 4,
        name: "NestJS",
        level: "Advanced",
      },
      {
        id: 5,
        name: "GraphQL",
        level: "Intermediate",
      },
      {
        id: 6,
        name: "gRPC",
        level: "Intermediate",
      },
      {
        id: 7,
        name: "REST APIs",
        level: "Expert",
      },
    ],
  },

  {
    id: 3,
    title: "Databases",
    icon: Database,
    color: "from-amber-500 to-yellow-500",
    percentage: 80,

    skills: [
      {
        id: 1,
        name: "PostgreSQL",
        level: "Advanced",
      },
      {
        id: 2,
        name: "MySQL",
        level: "Advanced",
      },
      {
        id: 3,
        name: "MongoDB",
        level: "Advanced",
      },
      {
        id: 4,
        name: "Firebase",
        level: "Intermediate",
      },
    ],
  },

  {
    id: 4,
    title: "DevOps & Cloud",
    icon: Cloud,
    color: "from-violet-500 to-fuchsia-500",
    percentage: 75,

    skills: [
      {
        id: 1,
        name: "Docker",
        level: "Advanced",
      },
      {
        id: 2,
        name: "Docker Compose",
        level: "Advanced",
      },
      {
        id: 3,
        name: "AWS",
        level: "Intermediate",
      },
      {
        id: 4,
        name: "Azure",
        level: "Intermediate",
      },
      {
        id: 5,
        name: "Google Cloud",
        level: "Intermediate",
      },
      {
        id: 6,
        name: "Kubernetes",
        level: "Intermediate",
      },
    ],
  },

  {
    id: 5,
    title: "Tools & Others",
    icon: Wrench,
    color: "from-pink-500 to-rose-500",
    percentage: 90,

    skills: [
      {
        id: 1,
        name: "Git",
        level: "Expert",
      },
      {
        id: 2,
        name: "GitHub",
        level: "Expert",
      },
      {
        id: 3,
        name: "Linux",
        level: "Advanced",
      },
      {
        id: 4,
        name: "Postman",
        level: "Expert",
      },
      {
        id: 5,
        name: "Swagger",
        level: "Advanced",
      },
      {
        id: 6,
        name: "Pytest",
        level: "Intermediate",
      },
      {
        id: 7,
        name: "VS Code",
        level: "Expert",
      },
    ],
  },

  {
    id: 6,
    title: "Languages",
    icon: Code2,
    color: "from-indigo-500 to-purple-500",
    percentage: 85,

    skills: [
      {
        id: 1,
        name: "JavaScript",
        level: "Expert",
      },
      {
        id: 2,
        name: "TypeScript",
        level: "Advanced",
      },
      {
        id: 3,
        name: "Python",
        level: "Advanced",
      },
      {
        id: 4,
        name: "SQL",
        level: "Advanced",
      },
      {
        id: 5,
        name: "Dart",
        level: "Intermediate",
      },
    ],
  },
];

export default skills;