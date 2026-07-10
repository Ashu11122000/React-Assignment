import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Play,
  RotateCcw,
  Trophy,
  Target,
  Brain,
  Clock,
  Award,
  BookOpen,
  Zap,
} from "lucide-react";

import useQuizContext from "../context/useQuizContext";

import Button from "../components/common/Button";
import Card from "../components/common/Card";
import Badge from "../components/common/Badge";
import ProgressBar from "../components/common/ProgressBar";

import categories from "../data/categories";
import difficulties from "../data/difficulties";

/**
 * ==========================================================
 * Home Page
 * ==========================================================
 *
 * Dashboard of the Quiz Application.
 *
 * Features
 * - Hero Section
 * - Start Quiz
 * - Resume Quiz
 * - Quick Statistics
 * - Category Selection
 * - Difficulty Selection
 *
 * Remaining Parts
 * - Quiz Configuration
 * - Achievements
 * - Leaderboard Preview
 * - Recent Quiz
 * - Features
 * ==========================================================
 */

const Home = () => {
  const navigate = useNavigate();

  const {
    quiz,
    statistics,
    achievements,
    hasQuiz,
    isCompleted,
    startQuiz,
    resumeQuiz,
  } = useQuizContext();

  /**
   * ==========================================================
   * Local State
   * ==========================================================
   */

  const [selectedCategory, setSelectedCategory] = useState(
    categories?.[0]?.value ?? "javascript",
  );

  const [selectedDifficulty, setSelectedDifficulty] = useState(
    difficulties?.[0]?.value ?? "easy",
  );

  const [questionCount, setQuestionCount] = useState(10);

  /**
   * ==========================================================
   * Hero Statistics
   * ==========================================================
   */

  const quickStats = useMemo(
    () => [
      {
        id: 1,
        title: "Completed",
        value: statistics?.answeredQuestions ?? 0,
        icon: Target,
      },
      {
        id: 2,
        title: "Score",
        value: statistics?.score ?? 0,
        icon: Trophy,
      },
      {
        id: 3,
        title: "Achievements",
        value: achievements?.length ?? 0,
        icon: Award,
      },
      {
        id: 4,
        title: "Questions",
        value: statistics?.totalQuestions ?? 0,
        icon: BookOpen,
      },
    ],
    [statistics, achievements],
  );

  /**
   * ==========================================================
   * Handlers
   * ==========================================================
   */

  const handleStartQuiz = () => {
    startQuiz({
      category: selectedCategory,
      difficulty: selectedDifficulty,
      numberOfQuestions: questionCount,
      shuffleQuestions: true,
      shuffleOptions: true,
    });

    navigate("/quiz");
  };

  const handleResumeQuiz = () => {
    resumeQuiz();
    navigate("/quiz");
  };

  /**
   * ==========================================================
   * Page Title
   * ==========================================================
   */

  useEffect(() => {
    document.title = "Quiz App";
  }, []);

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8">

      {/* =====================================================
          Hero Section
      ===================================================== */}

      <Card
        gradient
        elevated
        className="overflow-hidden rounded-3xl"
      >
        <div className="grid gap-10 lg:grid-cols-2">

          <div className="space-y-6">

            <Badge
              variant="primary"
              icon={<Brain size={14} />}
            >
              Interactive Quiz Platform
            </Badge>

            <div className="space-y-4">

              <h1 className="text-5xl font-extrabold leading-tight">
                Improve your
                <span className="text-primary">
                  {" "}
                  Programming Skills
                </span>
                {" "}One Quiz at a Time
              </h1>

              <p className="max-w-xl text-lg text-gray-500 dark:text-gray-400">
                Practice JavaScript, React, HTML, CSS,
                Tailwind CSS, Git, Node.js, Express,
                Next.js, NestJS, TypeScript and many more
                with hundreds of interview-focused
                questions.
              </p>

            </div>

            <div className="flex flex-wrap gap-4">

              <Button
                size="lg"
                icon={<Play size={18} />}
                onClick={handleStartQuiz}
              >
                Start Quiz
              </Button>

              {hasQuiz && !isCompleted && (
                <Button
                  variant="secondary"
                  size="lg"
                  icon={<RotateCcw size={18} />}
                  onClick={handleResumeQuiz}
                >
                  Resume Quiz
                </Button>
              )}

            </div>

          </div>

          <div className="grid gap-5 sm:grid-cols-2">

            {quickStats.map((item) => {
              const Icon = item.icon;

              return (
                <Card
                  key={item.id}
                  hover
                  glass
                  className="flex items-center gap-4"
                >
                  <div className="rounded-2xl bg-primary/10 p-4">
                    <Icon
                      size={28}
                      className="text-primary"
                    />
                  </div>

                  <div>

                    <p className="text-sm text-gray-500">
                      {item.title}
                    </p>

                    <h2 className="text-3xl font-bold">
                      {item.value}
                    </h2>

                  </div>
                </Card>
              );
            })}

          </div>

        </div>
      </Card>

      {/* =====================================================
          Category Selection
      ===================================================== */}

      <Card
        header="Choose Category"
        elevated
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {categories.map((category) => (
            <button
              key={category.value}
              type="button"
              onClick={() =>
                setSelectedCategory(category.value)
              }
              className={`rounded-2xl border p-5 text-left transition-all ${
                selectedCategory === category.value
                  ? "border-primary bg-primary/10"
                  : "border-gray-200 hover:border-primary/40"
              }`}
            >
              <h3 className="font-semibold">
                {category.label}
              </h3>

              {category.description && (
                <p className="mt-2 text-sm text-gray-500">
                  {category.description}
                </p>
              )}
            </button>
          ))}

        </div>
      </Card>

      {/* =====================================================
          Difficulty Selection
      ===================================================== */}

      <Card
        header="Choose Difficulty"
        elevated
      >
        <div className="grid gap-4 md:grid-cols-4">

          {difficulties.map((difficulty) => (
            <button
              key={difficulty.value}
              type="button"
              onClick={() =>
                setSelectedDifficulty(
                  difficulty.value,
                )
              }
              className={`rounded-2xl border p-5 transition-all ${
                selectedDifficulty ===
                difficulty.value
                  ? "border-primary bg-primary/10"
                  : "border-gray-200 hover:border-primary/40"
              }`}
            >
              <h3 className="font-semibold">
                {difficulty.label}
              </h3>

              {difficulty.description && (
                <p className="mt-2 text-sm text-gray-500">
                  {difficulty.description}
                </p>
              )}
            </button>
          ))}

        </div>
      </Card>

      {/* =====================================================
          Quick Progress
      ===================================================== */}

      {hasQuiz && (
        <Card
          header="Current Progress"
          elevated
        >
          <div className="space-y-4">

            <div className="flex items-center justify-between">

              <span className="font-medium">
                Quiz Progress
              </span>

              <Badge
                variant="success"
                icon={<Clock size={14} />}
              >
                {statistics?.answeredQuestions ?? 0} /
                {statistics?.totalQuestions ?? 0}
              </Badge>

            </div>

            <ProgressBar
              value={
                statistics?.totalQuestions
                  ? (statistics.answeredQuestions /
                      statistics.totalQuestions) *
                    100
                  : 0
              }
              animated
              striped
              showPercentage
            />

          </div>
        </Card>
      )}

      {/* =====================================================
          Quiz Configuration
      ===================================================== */}

      <Card
        header="Quiz Configuration"
        elevated
      >
        <div className="grid gap-8 lg:grid-cols-2">

          <div className="space-y-6">

            <div>
              <label className="mb-3 block text-sm font-semibold">
                Number of Questions
              </label>

              <input
                type="range"
                min={5}
                max={50}
                step={5}
                value={questionCount}
                onChange={(event) =>
                  setQuestionCount(Number(event.target.value))
                }
                className="w-full"
              />

              <div className="mt-3 flex items-center justify-between text-sm text-gray-500">
                <span>5</span>

                <Badge variant="primary">
                  {questionCount} Questions
                </Badge>

                <span>50</span>
              </div>
            </div>

            <Button
              fullWidth
              size="lg"
              icon={<Play size={18} />}
              onClick={handleStartQuiz}
            >
              Start Configured Quiz
            </Button>

          </div>

          <div className="space-y-5">

            <Card glass>

              <div className="flex items-center justify-between">

                <span className="font-medium">
                  Category
                </span>

                <Badge variant="secondary">
                  {selectedCategory}
                </Badge>

              </div>

            </Card>

            <Card glass>

              <div className="flex items-center justify-between">

                <span className="font-medium">
                  Difficulty
                </span>

                <Badge variant="warning">
                  {selectedDifficulty}
                </Badge>

              </div>

            </Card>

            <Card glass>

              <div className="flex items-center justify-between">

                <span className="font-medium">
                  Total Questions
                </span>

                <Badge variant="success">
                  {questionCount}
                </Badge>

              </div>

            </Card>

          </div>

        </div>
      </Card>

      {/* =====================================================
          Achievements Preview
      ===================================================== */}

      <Card
        header="Achievements"
        elevated
      >

        {achievements?.length ? (

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">

            {achievements.slice(0, 6).map((achievement) => (

              <Card
                key={achievement.id}
                hover
                glass
              >

                <div className="flex items-start gap-4">

                  <div className="rounded-xl bg-yellow-100 p-3 dark:bg-yellow-500/20">
                    <Award
                      size={22}
                      className="text-yellow-500"
                    />
                  </div>

                  <div>

                    <h3 className="font-semibold">
                      {achievement.title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      {achievement.description}
                    </p>

                  </div>

                </div>

              </Card>

            ))}

          </div>

        ) : (

          <Card glass>

            <div className="flex flex-col items-center justify-center gap-4 py-8 text-center">

              <Award
                size={42}
                className="text-yellow-500"
              />

              <div>

                <h3 className="text-xl font-semibold">
                  No Achievements Yet
                </h3>

                <p className="mt-2 text-gray-500">
                  Complete quizzes to unlock achievements.
                </p>

              </div>

            </div>

          </Card>

        )}

      </Card>

      {/* =====================================================
          Recent Quiz
      ===================================================== */}

      <Card
        header="Recent Quiz"
        elevated
      >

        {hasQuiz ? (

          <div className="grid gap-6 md:grid-cols-2">

            <Card glass>

              <div className="space-y-3">

                <h3 className="text-lg font-semibold">
                  {quiz.category}
                </h3>

                <Badge variant="primary">
                  {quiz.difficulty}
                </Badge>

                <ProgressBar
                  value={
                    quiz.totalQuestions
                      ? (statistics.answeredQuestions /
                          quiz.totalQuestions) *
                        100
                      : 0
                  }
                  animated
                  showPercentage
                />

              </div>

            </Card>

            <div className="flex items-center justify-center">

              <Button
                size="lg"
                icon={<RotateCcw size={18} />}
                onClick={handleResumeQuiz}
              >
                Resume Quiz
              </Button>

            </div>

          </div>

        ) : (

          <Card glass>

            <div className="py-10 text-center">

              <Brain
                size={48}
                className="mx-auto mb-4 text-primary"
              />

              <h3 className="text-xl font-semibold">
                No Quiz Started
              </h3>

              <p className="mt-2 text-gray-500">
                Start your first quiz to begin your learning journey.
              </p>

            </div>

          </Card>

        )}

      </Card>

      {/* =====================================================
          Leaderboard Preview
      ===================================================== */}

      <Card
        header="Leaderboard Preview"
        elevated
      >

        <div className="space-y-4">

          {[1, 2, 3].map((rank) => (

            <Card
              key={rank}
              hover
              glass
            >

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">

                  <div className="rounded-full bg-primary/10 p-3">

                    <Trophy
                      size={22}
                      className="text-primary"
                    />

                  </div>

                  <div>

                    <h3 className="font-semibold">
                      Player {rank}
                    </h3>

                    <p className="text-sm text-gray-500">
                      JavaScript Quiz
                    </p>

                  </div>

                </div>

                <Badge variant="success">
                  {1000 - rank * 50} XP
                </Badge>

              </div>

            </Card>

          ))}

        </div>

      </Card>

      {/* =====================================================
          Features
      ===================================================== */}

      <Card
        header="Why Choose This Quiz App?"
        elevated
      >

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {[
            {
              icon: Brain,
              title: "Interview Ready",
              description:
                "Hundreds of carefully crafted interview questions.",
            },
            {
              icon: Zap,
              title: "Fast Learning",
              description:
                "Timed quizzes improve speed and confidence.",
            },
            {
              icon: Trophy,
              title: "Leaderboard",
              description:
                "Compete with yourself and improve every day.",
            },
            {
              icon: Target,
              title: "Track Progress",
              description:
                "Detailed statistics and achievements.",
            },
          ].map((feature, index) => {

            const Icon = feature.icon;

            return (

              <Card
                key={index}
                hover
                glass
              >

                <div className="space-y-4">

                  <div className="w-fit rounded-2xl bg-primary/10 p-4">

                    <Icon
                      size={28}
                      className="text-primary"
                    />

                  </div>

                  <h3 className="text-lg font-semibold">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {feature.description}
                  </p>

                </div>

              </Card>

            );

          })}

        </div>

      </Card>
      {/* =====================================================
          How It Works
      ===================================================== */}

      <Card
        header="How It Works"
        elevated
      >
        <div className="grid gap-6 md:grid-cols-4">

          {[
            {
              step: "01",
              title: "Choose Category",
              description:
                "Select your preferred technology such as JavaScript, React, CSS, Git, Next.js, NestJS and many more.",
            },
            {
              step: "02",
              title: "Configure Quiz",
              description:
                "Choose difficulty level, question count and quiz settings before starting.",
            },
            {
              step: "03",
              title: "Answer Questions",
              description:
                "Complete the quiz within the timer while tracking your score and progress.",
            },
            {
              step: "04",
              title: "Review & Improve",
              description:
                "Review every answer, analyze your mistakes and climb the leaderboard.",
            },
          ].map((item) => (
            <Card
              key={item.step}
              hover
              glass
            >
              <div className="space-y-5">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-2xl font-bold text-white">
                  {item.step}
                </div>

                <div>

                  <h3 className="text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-500 dark:text-gray-400">
                    {item.description}
                  </p>

                </div>

              </div>
            </Card>
          ))}

        </div>
      </Card>

      {/* =====================================================
          Tech Stack
      ===================================================== */}

      <Card
        header="Technology Stack"
        elevated
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {[
            "React.js",
            "JavaScript (ES6+)",
            "Vite",
            "Tailwind CSS",
            "React Router",
            "Context API",
            "Local Storage",
            "Lucide React",
          ].map((tech) => (
            <Card
              key={tech}
              hover
              glass
              className="text-center"
            >
              <div className="space-y-3">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <Zap
                    size={28}
                    className="text-primary"
                  />
                </div>

                <h3 className="font-semibold">
                  {tech}
                </h3>

              </div>
            </Card>
          ))}

        </div>
      </Card>

      {/* =====================================================
          Call To Action
      ===================================================== */}

      <Card
        gradient
        elevated
        className="overflow-hidden rounded-3xl"
      >
        <div className="flex flex-col items-center gap-6 py-8 text-center">

          <Badge
            variant="success"
            icon={<Award size={14} />}
          >
            Ready to Challenge Yourself?
          </Badge>

          <h2 className="max-w-3xl text-4xl font-bold leading-tight">

            Master Modern Web Development
            <br />
            One Question at a Time

          </h2>

          <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-300">

            Practice hundreds of carefully crafted interview
            questions, improve your programming knowledge,
            earn achievements, monitor your progress and
            become interview ready.

          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <Button
              size="lg"
              icon={<Play size={18} />}
              onClick={handleStartQuiz}
            >
              Start Learning
            </Button>

            {hasQuiz && !isCompleted && (
              <Button
                variant="secondary"
                size="lg"
                icon={<RotateCcw size={18} />}
                onClick={handleResumeQuiz}
              >
                Continue Quiz
              </Button>
            )}

          </div>

        </div>
      </Card>

      {/* =====================================================
          Footer Information
      ===================================================== */}

      <Card
        glass
        className="text-center"
      >
        <div className="space-y-5">

          <div className="flex flex-wrap justify-center gap-3">

            <Badge variant="primary">
              500+ Questions
            </Badge>

            <Badge variant="success">
              Multiple Categories
            </Badge>

            <Badge variant="warning">
              Live Score
            </Badge>

            <Badge variant="secondary">
              Leaderboard
            </Badge>

            <Badge variant="danger">
              Achievements
            </Badge>

          </div>

          <p className="text-gray-500 dark:text-gray-400">

            Built with ❤️ using React.js, JavaScript, Vite,
            Tailwind CSS, Context API and Local Storage.

          </p>

          <p className="text-sm text-gray-400">

            © {new Date().getFullYear()} Quiz App.
            All Rights Reserved.

          </p>

        </div>
      </Card>

    </div>
  );
};

export default Home;