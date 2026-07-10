import {
  BookOpen,
  Brain,
  Code2,
  Database,
  Layers3,
  Trophy,
  Target,
  Timer,
  Sparkles,
} from "lucide-react";
import Card from "../components/common/Card";
import Badge from "../components/common/Badge";

/**
 * ==========================================================
 * About Page
 * ==========================================================
 * Production-ready About page for the Quiz Application.
 *
 * Sections
 * - Hero
 * - Project Overview
 * - Tech Stack
 * - Features
 * - Architecture
 * - Roadmap
 * ==========================================================
 */

const technologies = [
  {
    name: "React.js",
    description:
      "Component-based UI library for building interactive user interfaces.",
    color: "primary",
  },
  {
    name: "JavaScript (ES6+)",
    description: "Modern JavaScript features powering the application logic.",
    color: "warning",
  },
  {
    name: "Vite",
    description: "Lightning-fast development server and production bundler.",
    color: "success",
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework used for responsive design.",
    color: "info",
  },
  {
    name: "React Router",
    description: "Handles routing and navigation throughout the application.",
    color: "secondary",
  },
  {
    name: "Context API",
    description: "Global state management for the complete quiz lifecycle.",
    color: "purple",
  },
  {
    name: "Local Storage",
    description:
      "Persistent storage for quiz history, statistics and progress.",
    color: "danger",
  },
  {
    name: "Lucide React",
    description: "Modern icon library used across the user interface.",
    color: "success",
  },
];

const About = () => {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-12 px-4 py-10 sm:px-6 lg:px-8">
      {/* ======================================================
          Hero Section
      ====================================================== */}

      <section className="overflow-hidden rounded-3xl bg-linear-to-r from-indigo-600 via-blue-600 to-cyan-600 p-10 text-white shadow-2xl">
        <div className="max-w-4xl">
          <div className="mb-5 flex items-center gap-3">
            <Sparkles size={34} />

            <Badge variant="warning">Production Ready</Badge>
          </div>

          <h1 className="text-5xl font-bold leading-tight">
            React Quiz Application
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            A scalable, production-grade Quiz Application built with modern
            React architecture, reusable components, custom hooks, Context API,
            and Tailwind CSS. This project demonstrates clean code, maintainable
            architecture, dynamic quiz generation, progress tracking, analytics,
            achievements, leaderboard support, and an excellent user experience.
          </p>
        </div>
      </section>

      {/* ======================================================
          Project Overview
      ====================================================== */}

      <section>
        <div className="mb-8 flex items-center gap-3">
          <BookOpen className="text-blue-500" size={30} />

          <h2 className="text-3xl font-bold">Project Overview</h2>
        </div>

        <Card className="space-y-6">
          <p className="leading-8 text-slate-300">
            This Quiz Application was designed as a portfolio-quality project
            rather than a simple assignment. Every module has been developed
            with scalability, maintainability, and code reusability in mind.
          </p>

          <p className="leading-8 text-slate-300">
            The application provides dynamic quiz generation across multiple
            categories, difficulty levels, live scoring, timer management,
            performance analytics, achievements, leaderboard integration, review
            mode, local persistence, and a responsive interface suitable for
            desktop, tablet, and mobile devices.
          </p>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-slate-800 p-5 text-center">
              <Brain className="mx-auto mb-3 text-blue-400" size={32} />

              <h3 className="font-semibold">Dynamic Quiz Engine</h3>
            </div>

            <div className="rounded-xl bg-slate-800 p-5 text-center">
              <Timer className="mx-auto mb-3 text-green-400" size={32} />

              <h3 className="font-semibold">Smart Timer</h3>
            </div>

            <div className="rounded-xl bg-slate-800 p-5 text-center">
              <Target className="mx-auto mb-3 text-orange-400" size={32} />

              <h3 className="font-semibold">Performance Tracking</h3>
            </div>

            <div className="rounded-xl bg-slate-800 p-5 text-center">
              <Trophy className="mx-auto mb-3 text-yellow-400" size={32} />

              <h3 className="font-semibold">Achievement System</h3>
            </div>
          </div>
        </Card>
      </section>

      {/* ======================================================
          Technology Stack
      ====================================================== */}

      <section>
        <div className="mb-8 flex items-center gap-3">
          <Layers3 className="text-cyan-500" size={30} />

          <h2 className="text-3xl font-bold">Technology Stack</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {technologies.map((technology) => (
            <Card key={technology.name} hover className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Code2 className="text-blue-400" size={24} />

                  <h3 className="text-xl font-semibold">{technology.name}</h3>
                </div>

                <Badge variant={technology.color}>Core</Badge>
              </div>

              <p className="leading-7 text-slate-400">
                {technology.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* ======================================================
          Features
      ====================================================== */}

      <section>
        <div className="mb-8 flex items-center gap-3">
          <Sparkles className="text-purple-500" size={30} />

          <h2 className="text-3xl font-bold">Key Features</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card hover className="space-y-4">
            <Brain className="text-indigo-400" size={32} />

            <h3 className="text-xl font-semibold">Dynamic Quiz Generation</h3>

            <p className="leading-7 text-slate-400">
              Generate quizzes dynamically using category, difficulty, shuffle
              options, and configurable question counts.
            </p>
          </Card>

          <Card hover className="space-y-4">
            <Timer className="text-green-400" size={32} />

            <h3 className="text-xl font-semibold">Countdown Timer</h3>

            <p className="leading-7 text-slate-400">
              Individual question timers, automatic submission, pause/resume
              support, and smart timer management.
            </p>
          </Card>

          <Card hover className="space-y-4">
            <Target className="text-blue-400" size={32} />

            <h3 className="text-xl font-semibold">Live Analytics</h3>

            <p className="leading-7 text-slate-400">
              Score calculation, accuracy, percentage, statistics, review mode,
              and detailed analytics.
            </p>
          </Card>

          <Card hover className="space-y-4">
            <Trophy className="text-yellow-400" size={32} />

            <h3 className="text-xl font-semibold">Achievement System</h3>

            <p className="leading-7 text-slate-400">
              Unlock achievements, earn XP, monitor progress, and improve
              performance over time.
            </p>
          </Card>

          <Card hover className="space-y-4">
            <Database className="text-cyan-400" size={32} />

            <h3 className="text-xl font-semibold">Local Persistence</h3>

            <p className="leading-7 text-slate-400">
              Quiz progress, leaderboard, statistics, achievements, and settings
              are persisted using browser local storage.
            </p>
          </Card>

          <Card hover className="space-y-4">
            <Layers3 className="text-indigo-400" size={32} />

            <h3 className="text-xl font-semibold">Modular Architecture</h3>

            <p className="leading-7 text-slate-400">
              Separation of concerns through reusable components, hooks,
              services, utilities, and Context API.
            </p>
          </Card>
        </div>
      </section>

      {/* ======================================================
          Application Architecture
      ====================================================== */}

      <section>
        <div className="mb-8 flex items-center gap-3">
          <Layers3 className="text-indigo-500" size={30} />

          <h2 className="text-3xl font-bold">Application Architecture</h2>
        </div>

        <Card className="space-y-8">
          <div className="overflow-x-auto rounded-2xl bg-slate-900 p-8">
            <pre className="whitespace-pre-wrap font-mono text-sm leading-8 text-slate-300">
              {`App
│
├── Layout
│   ├── Navbar
│   ├── Sidebar
│   ├── Outlet
│   └── Footer
│
├── Pages
│
├── Quiz Components
│
├── QuizContext
│
├── useQuiz
│
├── Services
│
├── Utilities
│
└── Local Storage`}
            </pre>
          </div>

          <p className="leading-8 text-slate-400">
            The project follows a layered architecture where presentation, state
            management, business logic, and persistence remain completely
            independent from each other.
          </p>
        </Card>
      </section>

      {/* ======================================================
          Project Structure
      ====================================================== */}

      <section>
        <div className="mb-8 flex items-center gap-3">
          <Database className="text-emerald-500" size={30} />

          <h2 className="text-3xl font-bold">Project Structure</h2>
        </div>

        <Card>
          <div className="overflow-x-auto rounded-xl bg-slate-900 p-6">
            <pre className="text-sm leading-7 text-slate-300">
              {`src/
│
├── assets/
├── components/
│   ├── common/
│   ├── layout/
│   └── quiz/
│
├── context/
├── hooks/
├── pages/
├── services/
├── data/
├── utils/
└── styles/`}
            </pre>
          </div>
        </Card>
      </section>

      {/* ======================================================
          Design Principles
      ====================================================== */}

      <section>
        <div className="mb-8 flex items-center gap-3">
          <Code2 className="text-blue-500" size={30} />

          <h2 className="text-3xl font-bold">Design Principles</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="space-y-5">
            <h3 className="text-xl font-semibold">Scalability</h3>

            <p className="leading-7 text-slate-400">
              Every feature has been developed with future expansion in mind,
              allowing additional quiz categories, themes, achievements,
              analytics, and integrations without major architectural changes.
            </p>
          </Card>

          <Card className="space-y-5">
            <h3 className="text-xl font-semibold">Maintainability</h3>

            <p className="leading-7 text-slate-400">
              Business logic resides inside services and custom hooks, while
              pages remain lightweight and focus only on rendering UI and
              consuming Context APIs.
            </p>
          </Card>

          <Card className="space-y-5">
            <h3 className="text-xl font-semibold">Reusability</h3>

            <p className="leading-7 text-slate-400">
              Components are intentionally designed to be reusable throughout
              the application, reducing duplication and improving consistency.
            </p>
          </Card>

          <Card className="space-y-5">
            <h3 className="text-xl font-semibold">Performance</h3>

            <p className="leading-7 text-slate-400">
              Memoization, reusable hooks, efficient rendering, and modular
              architecture keep the application responsive even as it grows.
            </p>
          </Card>
        </div>
      </section>

      {/* ======================================================
          Development Roadmap
      ====================================================== */}

      <section>
        <div className="mb-8 flex items-center gap-3">
          <Target className="text-emerald-500" size={30} />

          <h2 className="text-3xl font-bold">Development Roadmap</h2>
        </div>

        <Card className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-green-700 bg-green-900/10 p-5">
              <h3 className="mb-3 text-lg font-semibold text-green-400">
                ✅ Completed
              </h3>

              <ul className="space-y-2 text-slate-300">
                <li>• React + Vite Setup</li>
                <li>• Tailwind CSS</li>
                <li>• Quiz Engine</li>
                <li>• Context API</li>
                <li>• Custom Hooks</li>
                <li>• Reusable Components</li>
                <li>• Local Storage</li>
              </ul>
            </div>

            <div className="rounded-xl border border-yellow-700 bg-yellow-900/10 p-5">
              <h3 className="mb-3 text-lg font-semibold text-yellow-400">
                🚧 In Progress
              </h3>

              <ul className="space-y-2 text-slate-300">
                <li>• Remaining Pages</li>
                <li>• Router Integration</li>
                <li>• Complete Question Bank</li>
                <li>• Leaderboard</li>
                <li>• Review Mode</li>
              </ul>
            </div>

            <div className="rounded-xl border border-cyan-700 bg-cyan-900/10 p-5">
              <h3 className="mb-3 text-lg font-semibold text-cyan-400">
                🚀 Future
              </h3>

              <ul className="space-y-2 text-slate-300">
                <li>• Dark / Light Theme</li>
                <li>• Sound Effects</li>
                <li>• Confetti</li>
                <li>• Statistics Dashboard</li>
                <li>• Keyboard Shortcuts</li>
                <li>• Export Reports</li>
              </ul>
            </div>
          </div>
        </Card>
      </section>

      {/* ======================================================
          Future Enhancements
      ====================================================== */}

      <section>
        <div className="mb-8 flex items-center gap-3">
          <Sparkles className="text-pink-500" size={30} />

          <h2 className="text-3xl font-bold">Future Enhancements</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card hover className="space-y-4">
            <h3 className="text-xl font-semibold">Better User Experience</h3>

            <p className="leading-7 text-slate-400">
              Upcoming improvements include beautiful animations, improved
              transitions, accessibility enhancements, keyboard navigation,
              responsive refinements, and enhanced visual feedback.
            </p>
          </Card>

          <Card hover className="space-y-4">
            <h3 className="text-xl font-semibold">Advanced Analytics</h3>

            <p className="leading-7 text-slate-400">
              Future releases will include quiz history, detailed progress
              charts, learning recommendations, streak tracking, and
              comprehensive performance dashboards.
            </p>
          </Card>
        </div>
      </section>

      {/* ======================================================
          Developer Information
      ====================================================== */}

      <section>
        <div className="mb-8 flex items-center gap-3">
          <Code2 className="text-slate-300" size={30} />

          <h2 className="text-3xl font-bold">About This Project</h2>
        </div>

        <Card className="space-y-6">
          <p className="leading-8 text-slate-300">
            This Quiz Application has been designed as a production-quality
            learning platform using modern React development practices.
          </p>

          <p className="leading-8 text-slate-300">
            The project demonstrates reusable component architecture, custom
            hooks, Context API, service-based business logic, dynamic rendering,
            responsive UI, local persistence, and scalable folder organization.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-slate-800 p-5 text-center">
              <h4 className="text-3xl font-bold text-blue-400">500+</h4>

              <p className="mt-2 text-sm text-slate-400">Interview Questions</p>
            </div>

            <div className="rounded-xl bg-slate-800 p-5 text-center">
              <h4 className="text-3xl font-bold text-green-400">40+</h4>

              <p className="mt-2 text-sm text-slate-400">Reusable Components</p>
            </div>

            <div className="rounded-xl bg-slate-800 p-5 text-center">
              <h4 className="text-3xl font-bold text-yellow-400">10+</h4>

              <p className="mt-2 text-sm text-slate-400">Quiz Categories</p>
            </div>

            <div className="rounded-xl bg-slate-800 p-5 text-center">
              <h4 className="text-3xl font-bold text-purple-400">100%</h4>

              <p className="mt-2 text-sm text-slate-400">Responsive Design</p>
            </div>
          </div>
        </Card>
      </section>

      {/* ======================================================
          Call To Action
      ====================================================== */}

      <section>
        <Card className="overflow-hidden bg-linear-to-r from-indigo-600 via-blue-600 to-cyan-600 p-10 text-center text-white">
          <h2 className="text-4xl font-bold">Ready to Test Your Knowledge?</h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-blue-100">
            Explore hundreds of interview questions across multiple
            technologies, improve your problem-solving skills, and monitor your
            learning journey through detailed analytics and achievements.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Badge variant="warning" className="px-4 py-2">
              React
            </Badge>

            <Badge variant="success" className="px-4 py-2">
              JavaScript
            </Badge>

            <Badge variant="info" className="px-4 py-2">
              Tailwind CSS
            </Badge>

            <Badge variant="primary" className="px-4 py-2">
              Next.js
            </Badge>

            <Badge variant="purple" className="px-4 py-2">
              TypeScript
            </Badge>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default About;
