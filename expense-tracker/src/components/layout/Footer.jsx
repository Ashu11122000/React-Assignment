import {
  CalendarDays,
  Code2,
  Heart,
  Layers3,
  ShieldCheck,
  Sparkles,
  Wallet,
} from "lucide-react";

import Card from "../common/Card";

/**
 * ==========================================================
 * Ultra Premium Footer
 * ==========================================================
 *
 * Part 1
 * ----------------------------------------------------------
 * ✓ Imports
 * ✓ Component Setup
 * ✓ Current Date / Year
 * ✓ Hero Brand Section
 * ✓ Dashboard Information
 *
 * ==========================================================
 */

const Footer = () => {
  /**
   * ----------------------------------------------------------
   * Current Date
   * ----------------------------------------------------------
   */

  const currentYear = new Date().getFullYear();

  const currentDate =
    new Date().toLocaleDateString("en-IN", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  return (
    <footer className="mt-16">

      <Card
        glass
        gradient
        radius="3xl"
        padding="none"
        shadow="xl"
        overflowVisible
        className="
          relative
          border-slate-200/70
        "
      >

        {/* ================================================= */}
        {/* Background Decorations */}
        {/* ================================================= */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">

          <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-blue-500/5 blur-[120px]" />

          <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-violet-500/5 blur-[140px]" />

          <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-[120px]" />

        </div>

        {/* Top Gradient */}

        <div className="h-1.5 w-full bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600" />

        <div className="relative z-10 p-8 lg:p-10">

          <div className="grid gap-12 lg:grid-cols-3">

            {/* ================================================= */}
            {/* Brand */}
            {/* ================================================= */}

            <section>

              <div className="flex items-center gap-5">

                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-3xl
                    bg-linear-to-br
                    from-blue-600
                    via-indigo-600
                    to-violet-600
                    shadow-xl
                  "
                >
                  <Wallet
                    size={30}
                    className="text-white"
                  />
                </div>

                <div>

                  <h2 className="bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-3xl font-black tracking-tight text-transparent">
                    Expense Tracker
                  </h2>

                  <p className="mt-1 text-sm font-medium text-slate-500">
                    Smart Personal Finance Dashboard
                  </p>

                </div>

              </div>

              <p className="mt-6 max-w-md text-[15px] leading-8 text-slate-600">

                Track your income, manage expenses,
                analyse spending patterns and build
                healthier financial habits through a
                beautifully crafted dashboard experience
                designed for everyday money management.

              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-700">
                  Premium UI
                </span>

                <span className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-emerald-700">
                  Responsive
                </span>

                <span className="rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-violet-700">
                  Modern Design
                </span>

              </div>

            </section>

            {/* ================================================= */}
            {/* Dashboard Information */}
            {/* ================================================= */}

            <section>

              <div className="mb-8">

                <p className="text-xs font-bold uppercase tracking-[0.30em] text-slate-400">
                  Dashboard Information
                </p>

                <h3 className="mt-2 text-2xl font-bold text-slate-900">
                  System Details
                </h3>

              </div>

              <div className="space-y-5">

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                  <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100">

                      <CalendarDays
                        size={22}
                        className="text-blue-600"
                      />

                    </div>

                    <div>

                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                        Current Date
                      </p>

                      <p className="mt-1 font-semibold text-slate-800">
                        {currentDate}
                      </p>

                    </div>

                  </div>

                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                  <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100">

                      <Layers3
                        size={22}
                        className="text-violet-600"
                      />

                    </div>

                    <div>

                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                        Dashboard Version
                      </p>

                      <p className="mt-1 font-semibold text-slate-800">
                        Version 2.0.0
                      </p>

                    </div>

                  </div>

                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                  <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100">

                      <ShieldCheck
                        size={22}
                        className="text-emerald-600"
                      />

                    </div>

                    <div>

                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                        Security Status
                      </p>

                      <p className="mt-1 font-semibold text-emerald-600">
                        Secure & Protected
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </section>

                        {/* ================================================= */}
            {/* Technology Stack */}
            {/* ================================================= */}

            <section>

              <div className="mb-8">

                <p className="text-xs font-bold uppercase tracking-[0.30em] text-slate-400">
                  Technology Stack
                </p>

                <h3 className="mt-2 text-2xl font-bold text-slate-900">
                  Built With Modern Tools
                </h3>

              </div>


              <div className="grid gap-4 sm:grid-cols-2">

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                  <p className="text-xs font-semibold uppercase tracking-[0.20em] text-blue-500">
                    Frontend
                  </p>

                  <h4 className="mt-2 text-xl font-black text-slate-900">
                    React.js
                  </h4>

                  <p className="mt-2 text-sm text-slate-500">
                    Component-based modern UI architecture.
                  </p>

                </div>


                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                  <p className="text-xs font-semibold uppercase tracking-[0.20em] text-indigo-500">
                    Build Tool
                  </p>

                  <h4 className="mt-2 text-xl font-black text-slate-900">
                    Vite
                  </h4>

                  <p className="mt-2 text-sm text-slate-500">
                    Fast development and optimized builds.
                  </p>

                </div>


                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                  <p className="text-xs font-semibold uppercase tracking-[0.20em] text-cyan-500">
                    Styling
                  </p>

                  <h4 className="mt-2 text-xl font-black text-slate-900">
                    Tailwind CSS
                  </h4>

                  <p className="mt-2 text-sm text-slate-500">
                    Utility-first premium responsive design.
                  </p>

                </div>


                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                  <p className="text-xs font-semibold uppercase tracking-[0.20em] text-emerald-500">
                    Language
                  </p>

                  <h4 className="mt-2 text-xl font-black text-slate-900">
                    JavaScript
                  </h4>

                  <p className="mt-2 text-sm text-slate-500">
                    Clean and scalable application logic.
                  </p>

                </div>

              </div>


              <div className="mt-6 flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100">

                  <Code2
                    size={20}
                    className="text-blue-600"
                  />

                </div>


                <p className="text-sm font-medium text-slate-600">
                  Built using modern frontend engineering practices.
                </p>

              </div>

            </section>


          </div>


          {/* ================================================= */}
          {/* Divider */}
          {/* ================================================= */}

          <div className="my-10 h-px bg-linear-to-r from-transparent via-slate-300 to-transparent" />


          {/* ================================================= */}
          {/* Bottom Footer */}
          {/* ================================================= */}

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">


            {/* Copyright */}

            <div>

              <p className="text-sm font-medium text-slate-500">

                © {currentYear} Expense Tracker.

              </p>

              <p className="mt-1 text-xs text-slate-400">

                All rights reserved.

              </p>

            </div>



            {/* Crafted Badge */}

            <div
              className="
                flex
                items-center
                gap-3
                rounded-full
                border
                border-red-100
                bg-linear-to-r
                from-pink-50
                to-red-50
                px-5
                py-3
              "
            >

              <Heart
                size={17}
                className="fill-red-500 text-red-500"
              />

              <span className="text-sm font-semibold text-slate-600">
                Crafted with passion using React
              </span>

            </div>



            {/* Premium Badge */}

            <div
              className="
                flex
                items-center
                gap-2
                rounded-full
                border
                border-amber-200
                bg-amber-50
                px-5
                py-3
              "
            >

              <Sparkles
                size={17}
                className="text-amber-500"
              />

              <span className="text-sm font-semibold text-amber-700">
                Ultra Premium UI
              </span>

            </div>


          </div>


        </div>


      </Card>

    </footer>
  );
};


export default Footer;