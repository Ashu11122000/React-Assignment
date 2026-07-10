/**
 * ==========================================================
 * Quiz Categories
 * ==========================================================
 * Every category contains all metadata required by
 * the application UI.
 * ==========================================================
 */

export const categories = [
  {
    id: 1,
    name: "JavaScript",
    slug: "javascript",

    icon: "🟨",

    color: "#F7DF1E",

    gradient: "from-yellow-300 to-yellow-500",

    description:
      "Master JavaScript fundamentals, ES6+, asynchronous programming, DOM, events, closures, promises, and modern JavaScript concepts.",

    totalQuestions: 100,

    estimatedTime: "30 mins",

    difficultyLevels: [
      "Easy",
      "Medium",
      "Hard",
    ],

    isPopular: true,

    isFeatured: true,
  },

  {
    id: 2,

    name: "React",

    slug: "react",

    icon: "⚛️",

    color: "#61DAFB",

    gradient: "from-cyan-400 to-sky-600",

    description:
      "Learn React fundamentals including JSX, Components, Props, State, Hooks, Context API, Routing, Performance Optimization and Best Practices.",

    totalQuestions: 100,

    estimatedTime: "35 mins",

    difficultyLevels: [
      "Easy",
      "Medium",
      "Hard",
    ],

    isPopular: true,

    isFeatured: true,
  },

  {
    id: 3,

    name: "HTML",

    slug: "html",

    icon: "🌐",

    color: "#E34F26",

    gradient: "from-orange-500 to-red-600",

    description:
      "Practice HTML5 semantic tags, forms, accessibility, multimedia, SEO, tables, and page structure.",

    totalQuestions: 80,

    estimatedTime: "25 mins",

    difficultyLevels: [
      "Easy",
      "Medium",
      "Hard",
    ],

    isPopular: true,

    isFeatured: false,
  },

  {
    id: 4,

    name: "CSS",

    slug: "css",

    icon: "🎨",

    color: "#1572B6",

    gradient: "from-blue-500 to-blue-700",

    description:
      "Test your CSS skills including Flexbox, Grid, Animations, Responsive Design, Variables, Selectors, and Layout.",

    totalQuestions: 90,

    estimatedTime: "30 mins",

    difficultyLevels: [
      "Easy",
      "Medium",
      "Hard",
    ],

    isPopular: true,

    isFeatured: false,
  },

  {
    id: 5,

    name: "Tailwind CSS",

    slug: "tailwind",

    icon: "💨",

    color: "#38BDF8",

    gradient: "from-cyan-400 to-blue-500",

    description:
      "Master Tailwind CSS utilities, responsive layouts, customization, themes, plugins, and component design.",

    totalQuestions: 70,

    estimatedTime: "25 mins",

    difficultyLevels: [
      "Easy",
      "Medium",
      "Hard",
    ],

    isPopular: false,

    isFeatured: true,
  },

  {
    id: 6,

    name: "Git & GitHub",

    slug: "git",

    icon: "🔀",

    color: "#F05032",

    gradient: "from-orange-500 to-red-500",

    description:
      "Learn version control, Git commands, branching, merging, pull requests, rebasing, GitHub workflows and collaboration.",

    totalQuestions: 60,

    estimatedTime: "20 mins",

    difficultyLevels: [
      "Easy",
      "Medium",
      "Hard",
    ],

    isPopular: true,

    isFeatured: false,
  },

  {
    id: 7,

    name: "Node.js",

    slug: "node",

    icon: "🟢",

    color: "#3C873A",

    gradient: "from-green-500 to-emerald-700",

    description:
      "Understand Node.js runtime, modules, Express, npm, asynchronous programming, APIs and backend fundamentals.",

    totalQuestions: 90,

    estimatedTime: "30 mins",

    difficultyLevels: [
      "Easy",
      "Medium",
      "Hard",
    ],

    isPopular: true,

    isFeatured: false,
  },

  {
    id: 8,

    name: "General Programming",

    slug: "programming",

    icon: "💻",

    color: "#8B5CF6",

    gradient: "from-violet-500 to-purple-700",

    description:
      "Improve programming fundamentals including algorithms, data structures, OOP, problem solving, and software engineering concepts.",

    totalQuestions: 120,

    estimatedTime: "40 mins",

    difficultyLevels: [
      "Easy",
      "Medium",
      "Hard",
    ],

    isPopular: true,

    isFeatured: true,
  },
];

/* ==========================================================
   Helper Functions
========================================================== */

export const getCategoryById = (id) =>
  categories.find((category) => category.id === id);

export const getCategoryBySlug = (slug) =>
  categories.find((category) => category.slug === slug);

export const getCategoryByName = (name) =>
  categories.find((category) => category.name === name);

export const getFeaturedCategories = () =>
  categories.filter((category) => category.isFeatured);

export const getPopularCategories = () =>
  categories.filter((category) => category.isPopular);

export const getCategoryNames = () =>
  categories.map((category) => category.name);

export const getTotalQuestionCount = () =>
  categories.reduce(
    (total, category) => total + category.totalQuestions,
    0
  );

export default categories;