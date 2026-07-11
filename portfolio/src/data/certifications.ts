/**
 * ==========================================================
 * Certifications Data
 * ==========================================================
 *
 * Centralized certifications data used throughout the
 * portfolio application.
 *
 * Features
 * ----------
 * ✓ Centralized Business Data
 * ✓ Strongly Typed
 * ✓ Featured Certifications
 * ✓ Google Drive Integration
 * ✓ Search Ready
 * ✓ Filter Ready
 * ✓ Resume Driven
 * ✓ Production Ready
 *
 * Used By
 * ----------
 * - components/certifications/*
 * - pages/Home.tsx
 * - pages/Certifications.tsx
 * - Resume Module
 * ==========================================================
 */

import type { Certification } from "../types/certification";

/**
 * ==========================================================
 * Certifications
 * ==========================================================
 */

export const certifications: Certification[] = [
  {
    id: "namaste-react",

    title: "Namaste React",

    issuer: "Namaste Dev",

    instructor: "Akshay Saini",

    category: "Frontend",

    year: 2024,

    issueDate: "2024",

    status: "Completed",

    featured: true,

    description:
      "Comprehensive React.js program covering modern React fundamentals, component architecture, hooks, state management, routing, performance optimization, and real-world application development.",

    skills: [
      { id: "react", name: "React.js" },
      { id: "javascript", name: "JavaScript" },
      { id: "jsx", name: "JSX" },
      { id: "hooks", name: "React Hooks" },
      { id: "routing", name: "React Router" },
      { id: "performance", name: "Performance Optimization" },
    ],

    credentialUrl: "https://drive.google.com/file/d/1jrkWFxCyom6coNNg_oHcb_E0baFTDDYx/view?usp=drive_link",

    order: 1,
  },

  {
    id: "spring-microservices",

    title: "Master Microservices with Spring Boot and Spring Cloud",

    issuer: "Udemy",

    instructor: "in28Minutes",

    category: "Microservices",

    year: 2025,

    issueDate: "2025",

    status: "Completed",

    featured: true,

    description:
      "Learned enterprise-grade microservices architecture using Spring Boot and Spring Cloud, including service discovery, API gateway, distributed configuration, fault tolerance, and inter-service communication.",

    skills: [
      { id: "java", name: "Java" },
      { id: "springboot", name: "Spring Boot" },
      { id: "springcloud", name: "Spring Cloud" },
      { id: "microservices", name: "Microservices" },
      { id: "rest", name: "REST APIs" },
      { id: "eureka", name: "Eureka Server" },
      { id: "gateway", name: "API Gateway" },
    ],

    credentialUrl:
      "https://drive.google.com/file/d/1IA-U3qQSEmMYPxHWnId8YqWu4WmL9KcC/view?usp=drive_link",

    order: 2,
  },

  {
    id: "docker-kubernetes",

    title: "Docker and Kubernetes: The Complete Guide",

    issuer: "Udemy",

    instructor: "Stephen Grider",

    category: "DevOps",

    year: 2025,

    issueDate: "2025",

    status: "Completed",

    featured: true,

    description:
      "Mastered containerization and orchestration using Docker and Kubernetes, including Docker Compose, Kubernetes deployments, services, networking, scaling, and production-ready DevOps workflows.",

    skills: [
      { id: "docker", name: "Docker" },
      { id: "kubernetes", name: "Kubernetes" },
      { id: "containers", name: "Containers" },
      { id: "dockercompose", name: "Docker Compose" },
      { id: "deployment", name: "Deployment" },
      { id: "devops", name: "DevOps" },
    ],

    credentialUrl:
      "https://drive.google.com/file/d/1eNAoZrlwLvWLlxRi3U1CrIFIcs2aejDp/view?usp=drive_link",

    order: 3,
  },

  {
    id: "react-complete-guide",

    title: "React - The Complete Guide (incl. Next.js & Redux)",

    issuer: "Udemy",

    instructor: "Maximilian Schwarzmüller",

    category: "Frontend",

    year: 2026,

    issueDate: "2026",

    status: "Completed",

    featured: true,

    description:
      "Advanced React development course covering React 19 concepts, Next.js, Redux Toolkit, authentication, routing, animations, state management, and scalable production-ready application architecture.",

    skills: [
      { id: "react", name: "React.js" },
      { id: "nextjs", name: "Next.js" },
      { id: "redux", name: "Redux Toolkit" },
      { id: "typescript", name: "TypeScript" },
      { id: "routing", name: "React Router" },
      { id: "authentication", name: "Authentication" },
    ],

    credentialUrl:
      "https://drive.google.com/file/d/168B0iQi36z8JjTjfpTRP5l8nj48OijMW/view?usp=drive_link",

    order: 4,
  },

  {
    id: "flutter-dart",

    title: "Flutter & Dart - The Complete Guide",

    issuer: "Udemy",

    instructor: "Maximilian Schwarzmüller",

    category: "Mobile Development",

    year: 2026,

    issueDate: "2026",

    status: "Completed",

    featured: true,

    description:
      "Comprehensive Flutter development course covering Dart programming, widget architecture, state management, animations, Firebase integration, REST APIs, and cross-platform mobile application development.",

    skills: [
      { id: "flutter", name: "Flutter" },
      { id: "dart", name: "Dart" },
      { id: "firebase", name: "Firebase" },
      { id: "mobile", name: "Mobile Development" },
      { id: "restapi", name: "REST APIs" },
      { id: "state", name: "State Management" },
    ],

    credentialUrl:
      "https://drive.google.com/file/d/1oYTcFCNzvED7SpkNTmZRv52BhLWkLqlf/view?usp=drive_link",

    order: 5,
  },
];

/**
 * ==========================================================
 * Featured Certifications
 * ==========================================================
 */

export const featuredCertifications = certifications
  .filter((certification) => certification.featured)
  .sort((a, b) => a.order - b.order);

/**
 * ==========================================================
 * Certification Categories
 * ==========================================================
 */

export const certificationCategories = [
  "All",
  "Frontend",
  "Backend",
  "DevOps",
  "Cloud",
  "Mobile Development",
  "Microservices",
] as const;

/**
 * ==========================================================
 * Certification Issuers
 * ==========================================================
 */

export const certificationIssuers = [
  "All",
  "Udemy",
  "Namaste Dev",
  "Google",
  "AWS",
  "Coursera",
  "NPTEL",
  "HackerRank",
] as const;
