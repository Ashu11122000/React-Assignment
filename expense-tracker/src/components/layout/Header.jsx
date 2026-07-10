import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Bell,
  CalendarDays,
  Clock3,
  MonitorSmartphone,
  ShieldCheck,
  Sparkles,
  Wallet,
} from "lucide-react";

import Card from "../common/Card";

/**
 * ==========================================================
 * Header
 * ==========================================================
 *
 * Ultra Premium Finance Dashboard Hero
 *
 * Features
 * ----------------------------------------------------------
 * ✓ Dynamic Greeting
 * ✓ Live Date
 * ✓ Live Time
 * ✓ Hero Banner
 * ✓ Quick Action
 * ✓ Status Overview
 * ✓ Premium White Dashboard
 * ✓ Responsive
 *
 * ==========================================================
 */

const Header = () => {
  /**
   * ----------------------------------------------------------
   * Current Date & Time
   * ----------------------------------------------------------
   */

  const [currentTime, setCurrentTime] = useState(
    new Date()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  /**
   * ----------------------------------------------------------
   * Greeting
   * ----------------------------------------------------------
   */

  const greeting = useMemo(() => {
    const hour = currentTime.getHours();

    if (hour < 12) {
      return "Good Morning";
    }

    if (hour < 17) {
      return "Good Afternoon";
    }

    return "Good Evening";
  }, [currentTime]);

  /**
   * ----------------------------------------------------------
   * Date & Time
   * ----------------------------------------------------------
   */

  const formattedDate =
    currentTime.toLocaleDateString("en-IN", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  const formattedTime =
    currentTime.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

  /**
   * ----------------------------------------------------------
   * Header Statistics
   * ----------------------------------------------------------
   */

  const highlights = [
    {
      title: "Security",
      value: "Protected",
      icon: ShieldCheck,
      iconColor: "text-emerald-600",
      bg: "bg-emerald-100",
    },
    {
      title: "Platform",
      value: "React + Vite",
      icon: MonitorSmartphone,
      iconColor: "text-sky-600",
      bg: "bg-sky-100",
    },
    {
      title: "Version",
      value: "v2.0",
      icon: Sparkles,
      iconColor: "text-violet-600",
      bg: "bg-violet-100",
    },
    {
      title: "Status",
      value: "Online",
      icon: Bell,
      iconColor: "text-amber-600",
      bg: "bg-amber-100",
    },
  ];

  return (
    <header className="relative">

      {/* Background Blur Decorations */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-violet-500/10 blur-[140px]" />

        <div className="absolute bottom-0 left-1/2 h-64 w-64 rounded-full bg-cyan-400/10 blur-[120px]" />

      </div>

      <Card
        radius="3xl"
        padding="none"
        className="
          relative
          overflow-hidden
          border
          border-slate-200/70
          bg-white/90
          shadow-2xl
          backdrop-blur-xl
        "
      >

        {/* Top Gradient Strip */}

        <div className="h-2 w-full bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600" />

        <div className="relative p-8 lg:p-10">

          {/* Hero */}

          <div className="grid gap-10 xl:grid-cols-[1.6fr_.8fr]">

            {/* ================================================= */}
            {/* LEFT */}
            {/* ================================================= */}

            <div>

              {/* Badge */}

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2">

                <Sparkles
                  size={16}
                  className="text-blue-600"
                />

                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-700">
                  Personal Finance Dashboard
                </span>

              </div>

              {/* Hero Heading */}

              <div className="space-y-4">

                <h2 className="text-lg font-semibold text-slate-500">
                  {greeting} 👋
                </h2>

                <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight text-slate-900 lg:text-6xl">

                  Manage Your
                  <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                    {" "}
                    Money
                  </span>

                  <br />

                  Like a Professional

                </h1>

                <p className="max-w-2xl text-lg leading-8 text-slate-600">

                  Keep track of your income, expenses,
                  savings and financial goals through an
                  elegant dashboard designed for everyday
                  personal finance management.

                </p>

              </div>

              {/* Action Buttons */}

              <div className="mt-10 flex flex-wrap items-center gap-4">

                <button
                  type="button"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-2xl
                    bg-linear-to-r
                    from-blue-600
                    via-indigo-600
                    to-violet-600
                    px-7
                    py-4
                    font-semibold
                    text-white
                    shadow-xl
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-2xl
                  "
                >
                  Add Transaction

                  <ArrowRight size={18} />
                </button>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4">

                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                    Dashboard
                  </p>

                  <p className="mt-1 font-semibold text-slate-800">
                    Smart Finance Overview
                  </p>

                </div>

              </div>

            </div>

            {/* ================================================= */}
            {/* RIGHT */}
            {/* ================================================= */}

            <div className="relative">

              <div className="rounded-4xl border border-slate-200 bg-linear-to-br from-slate-50 via-white to-blue-50 p-8 shadow-xl">

                <div className="mb-8 flex items-center justify-between">

                  <div>

                    <p className="text-xs font-bold uppercase tracking-[0.30em] text-slate-400">
                      LIVE DASHBOARD
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-slate-900">
                      Today
                    </h3>

                  </div>

                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-linear-to-br from-blue-600 via-indigo-600 to-violet-600 shadow-xl">

                    <Wallet
                      size={30}
                      className="text-white"
                    />

                  </div>

                </div>

                {/* Date */}

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

                  <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100">

                      <CalendarDays
                        className="text-blue-600"
                        size={22}
                      />

                    </div>

                    <div>

                      <p className="text-xs font-semibold uppercase tracking-[0.20em] text-slate-400">
                        Today's Date
                      </p>

                      <p className="mt-1 font-semibold text-slate-800">
                        {formattedDate}
                      </p>

                    </div>

                  </div>

                </div>

                {/* Time */}

                <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

                  <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100">

                      <Clock3
                        className="text-violet-600"
                        size={22}
                      />

                    </div>

                    <div>

                      <p className="text-xs font-semibold uppercase tracking-[0.20em] text-slate-400">
                        Live Time
                      </p>

                      <p className="mt-1 text-xl font-bold text-slate-900">
                        {formattedTime}
                      </p>

                    </div>

                  </div>

                </div>

                                {/* Quick Overview */}

                <div className="mt-8">

                  <div className="mb-4 flex items-center justify-between">

                    <h4 className="text-sm font-bold uppercase tracking-[0.22em] text-slate-400">
                      Quick Overview
                    </h4>

                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                      Live
                    </span>

                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">

                    {highlights.map((item) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.title}
                          className="
                            group
                            rounded-2xl
                            border
                            border-slate-200
                            bg-white
                            p-4
                            shadow-sm
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-blue-200
                            hover:shadow-xl
                          "
                        >
                          <div className="flex items-center gap-4">

                            <div
                              className={`
                                flex
                                h-12
                                w-12
                                items-center
                                justify-center
                                rounded-2xl
                                ${item.bg}
                                transition-transform
                                duration-300
                                group-hover:scale-110
                              `}
                            >
                              <Icon
                                size={22}
                                className={item.iconColor}
                              />
                            </div>

                            <div>

                              <p className="text-xs font-semibold uppercase tracking-[0.20em] text-slate-400">
                                {item.title}
                              </p>

                              <p className="mt-1 font-bold text-slate-800">
                                {item.value}
                              </p>

                            </div>

                          </div>
                        </div>
                      );
                    })}

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* ================================================= */}
          {/* Bottom Information Strip */}
          {/* ================================================= */}

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-3xl border border-slate-200 bg-linear-to-br from-blue-50 to-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-500">
                Dashboard
              </p>

              <h3 className="mt-2 text-2xl font-black text-slate-900">
                Smart Finance
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Monitor your complete financial activity
                from one beautifully designed dashboard.
              </p>

            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100">

                  <ShieldCheck
                    size={26}
                    className="text-emerald-600"
                  />

                </div>

                <div>

                  <p className="text-xs font-semibold uppercase tracking-[0.20em] text-slate-400">
                    Security
                  </p>

                  <h3 className="mt-1 text-lg font-bold text-slate-900">
                    Bank-Level Protection
                  </h3>

                </div>

              </div>

            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100">

                  <MonitorSmartphone
                    size={26}
                    className="text-sky-600"
                  />

                </div>

                <div>

                  <p className="text-xs font-semibold uppercase tracking-[0.20em] text-slate-400">
                    Technology
                  </p>

                  <h3 className="mt-1 text-lg font-bold text-slate-900">
                    React • Vite • Tailwind
                  </h3>

                </div>

              </div>

            </div>

            <div className="rounded-3xl border border-slate-200 bg-linear-to-br from-violet-50 via-white to-blue-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-xs font-semibold uppercase tracking-[0.20em] text-slate-400">
                    Experience
                  </p>

                  <h3 className="mt-2 text-2xl font-black bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                    Ultra Premium
                  </h3>

                </div>

                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-linear-to-br from-blue-600 via-indigo-600 to-violet-600 shadow-xl">

                  <Sparkles
                    size={28}
                    className="text-white"
                  />

                </div>

              </div>

            </div>

          </div>

        </div>

      </Card>

    </header>
  );
};

export default Header;