import { useNavigate } from "react-router-dom";
import {
  Home,
  ArrowLeft,
  Search,
  TriangleAlert,
  Compass,
} from "lucide-react";

import Card from "../components/common/Card";
import Button from "../components/common/Button";
import Badge from "../components/common/Badge";

/**
 * ==========================================================
 * NotFound Page
 * ==========================================================
 *
 * Production-ready 404 Page
 *
 * Features
 * - Modern UI
 * - Responsive
 * - Home Navigation
 * - Back Navigation
 * - Helpful Information
 * - Clean Architecture
 * ==========================================================
 */

const quickLinks = [
  {
    title: "Home",
    description:
      "Start a new quiz and explore categories.",
  },
  {
    title: "Leaderboard",
    description:
      "View top quiz performers.",
  },
  {
    title: "About",
    description:
      "Learn more about this application.",
  },
  {
    title: "Review",
    description:
      "Review your completed quizzes.",
  },
];

const possibleReasons = [
  "The page URL is incorrect.",
  "The page has been moved.",
  "The page no longer exists.",
  "You followed an outdated bookmark.",
];

const NotFound = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="mx-auto flex min-h-[calc(100vh-180px)] w-full max-w-7xl items-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full space-y-10">

        {/* ======================================================
            Hero
        ====================================================== */}

        <section>
          <Card className="overflow-hidden bg-linear-to-r from-indigo-600 via-blue-600 to-cyan-600 p-10 text-center text-white">

            <Badge
              variant="warning"
              className="mb-6"
            >
              Error 404
            </Badge>

            <div className="mb-8 flex justify-center">
              <TriangleAlert size={90} />
            </div>

            <h1 className="text-7xl font-extrabold">
              404
            </h1>

            <h2 className="mt-5 text-3xl font-bold">
              Page Not Found
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
              Sorry, the page you are looking
              for doesn't exist or has been
              moved. Try returning to the home
              page or navigate back to the
              previous page.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">

              <Button
                variant="primary"
                onClick={handleHome}
              >
                <Home
                  size={18}
                  className="mr-2"
                />
                Go Home
              </Button>

              <Button
                variant="secondary"
                onClick={handleBack}
              >
                <ArrowLeft
                  size={18}
                  className="mr-2"
                />
                Go Back
              </Button>

            </div>

          </Card>
        </section>

        {/* ======================================================
            Information
        ====================================================== */}

        <section className="grid gap-8 lg:grid-cols-2">

          {/* Possible Reasons */}

          <Card
            title="Possible Reasons"
            subtitle="Why you're seeing this page"
            className="space-y-6"
          >
            <div className="space-y-4">

              {possibleReasons.map(
                (reason) => (
                  <div
                    key={reason}
                    className="flex items-start gap-4 rounded-xl border border-slate-800 bg-slate-900 p-4"
                  >
                    <Search
                      size={20}
                      className="mt-1 text-blue-400"
                    />

                    <p className="leading-7 text-slate-300">
                      {reason}
                    </p>
                  </div>
                )
              )}

            </div>
          </Card>

          {/* Quick Navigation */}

          <Card
            title="Quick Navigation"
            subtitle="Useful pages"
            className="space-y-6"
          >
            <div className="space-y-4">

              {quickLinks.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-800 bg-slate-900 p-5"
                >
                  <div className="flex items-center gap-3">

                    <Compass
                      size={22}
                      className="text-cyan-400"
                    />

                    <h3 className="text-lg font-semibold">
                      {item.title}
                    </h3>

                  </div>

                  <p className="mt-3 leading-7 text-slate-400">
                    {item.description}
                  </p>
                </div>
              ))}

            </div>
          </Card>

        </section>

        {/* ======================================================
            Footer Card
        ====================================================== */}

        <section>

          <Card className="text-center">

            <h2 className="text-2xl font-bold">
              Lost? Let's Get You Back.
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-400">
              Continue practicing interview
              questions, explore multiple quiz
              categories, improve your
              performance, unlock achievements,
              and climb the leaderboard.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">

              <Button
                variant="primary"
                onClick={handleHome}
              >
                <Home
                  size={18}
                  className="mr-2"
                />
                Return Home
              </Button>

              <Button
                variant="secondary"
                onClick={handleBack}
              >
                <ArrowLeft
                  size={18}
                  className="mr-2"
                />
                Previous Page
              </Button>

            </div>

          </Card>

        </section>

      </div>
    </div>
  );
};

export default NotFound;