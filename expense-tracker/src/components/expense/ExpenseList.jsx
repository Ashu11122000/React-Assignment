import {
  ArrowDownCircle,
  ArrowUpCircle,
  ReceiptText,
  Sparkles,
  TrendingDown,
  TrendingUp,
  Wallet,
} from "lucide-react";

import Card from "../common/Card";
import ExpenseCard from "./ExpenseCard";

/**
 * ==========================================================
 * Ultra Premium Expense List
 * ==========================================================
 *
 * Features
 * ----------------------------------------------------------
 * ✓ Dashboard Hero
 * ✓ Premium Statistics
 * ✓ Beautiful Empty State
 * ✓ Responsive Layout
 * ✓ White SaaS Design
 *
 * ==========================================================
 */

const ExpenseList = ({
  transactions = [],
  onDeleteTransaction,
}) => {
  /* ========================================================
     Statistics
  ======================================================== */

  const totalTransactions =
    transactions.length;

  const totalIncome = transactions.filter(
    (transaction) =>
      transaction.type.toLowerCase() ===
      "income"
  ).length;

  const totalExpense =
    transactions.filter(
      (transaction) =>
        transaction.type.toLowerCase() ===
        "expense"
    ).length;

  /* ========================================================
     Header
  ======================================================== */

  return (
    <section className="space-y-8">

      <Card
        glass
        padding="xl"
        radius="3xl"
        shadow="xl"
        className="relative border-slate-200/70"
      >

        {/* Decorative Glow */}

        <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-blue-500/5 blur-[120px]" />

        <div className="pointer-events-none absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-violet-500/5 blur-[120px]" />

        <div className="relative z-10">

          <div className="flex flex-col gap-10 xl:flex-row xl:items-center xl:justify-between">

            {/* ============================================= */}
            {/* Left */}
            {/* ============================================= */}

            <div>

              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2">

                <Sparkles
                  size={15}
                  className="text-blue-600"
                />

                <span className="text-xs font-bold uppercase tracking-[0.22em] text-blue-700">
                  Financial Activity
                </span>

              </div>

              <div className="flex items-center gap-5">

                <div
                  className="
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-3xl
                    bg-linear-to-br
                    from-blue-600
                    via-indigo-600
                    to-violet-600
                    text-white
                    shadow-xl
                  "
                >

                  <Wallet size={36} />

                </div>

                <div>

                  <h2 className="text-4xl font-black tracking-tight text-slate-900">
                    Recent Transactions
                  </h2>

                  <p className="mt-3 max-w-xl text-slate-500 leading-7">

                    Track, review and manage every
                    income and expense through one
                    beautiful financial dashboard.

                  </p>

                </div>

              </div>

            </div>

            {/* ============================================= */}
            {/* Statistics */}
            {/* ============================================= */}

            <div className="grid gap-4 sm:grid-cols-3">

              {/* Total */}

              <div
                className="
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-6
                  text-center
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >

                <ReceiptText
                  size={28}
                  className="mx-auto text-blue-600"
                />

                <p className="mt-3 text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
                  Total
                </p>

                <h3 className="mt-2 text-4xl font-black text-blue-600">
                  {totalTransactions}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Transactions
                </p>

              </div>

              {/* Income */}

              <div
                className="
                  rounded-3xl
                  border
                  border-emerald-100
                  bg-linear-to-br
                  from-emerald-50
                  to-white
                  p-6
                  text-center
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >

                <TrendingUp
                  size={28}
                  className="mx-auto text-emerald-600"
                />

                <p className="mt-3 text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
                  Income
                </p>

                <h3 className="mt-2 text-4xl font-black text-emerald-600">
                  {totalIncome}
                </h3>

                <div className="mt-2 flex items-center justify-center gap-1 text-sm font-semibold text-emerald-600">

                  <ArrowUpCircle size={16} />

                  Received

                </div>

              </div>

              {/* Expense */}

              <div
                className="
                  rounded-3xl
                  border
                  border-red-100
                  bg-linear-to-br
                  from-red-50
                  to-white
                  p-6
                  text-center
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >

                <TrendingDown
                  size={28}
                  className="mx-auto text-red-600"
                />

                <p className="mt-3 text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
                  Expense
                </p>

                <h3 className="mt-2 text-4xl font-black text-red-600">
                  {totalExpense}
                </h3>

                <div className="mt-2 flex items-center justify-center gap-1 text-sm font-semibold text-red-600">

                  <ArrowDownCircle size={16} />

                  Spent

                </div>

              </div>

            </div>

                      </div>

        </div>

      </Card>

      {/* ================================================= */}
      {/* Empty State */}
      {/* ================================================= */}

      {totalTransactions === 0 ? (

        <Card
          glass
          padding="xl"
          radius="3xl"
          shadow="xl"
          className="border-2 border-dashed border-slate-200"
        >

          <div className="flex flex-col items-center py-14 text-center">

            <div
              className="
                mb-8
                flex
                h-32
                w-32
                items-center
                justify-center
                rounded-full
                bg-linear-to-br
                from-blue-600
                via-indigo-600
                to-violet-600
                shadow-2xl
              "
            >

              <Wallet
                size={56}
                className="text-white"
              />

            </div>

            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2">

              <Sparkles
                size={15}
                className="text-blue-600"
              />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-blue-700">
                Dashboard Ready
              </span>

            </div>

            <h2 className="text-4xl font-black tracking-tight text-slate-900">
              No Transactions Yet
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-500">

              Your finance dashboard is waiting for
              its first transaction.

              <br />

              Add an income or expense to unlock
              beautiful financial summaries,
              balance tracking and spending insights.

            </p>

          </div>

        </Card>

      ) : (

        <>
          {/* ============================================= */}
          {/* Transaction Cards */}
          {/* ============================================= */}

          <div className="space-y-5">

            {transactions.map((transaction) => (

              <ExpenseCard
                key={transaction.id}
                transaction={transaction}
                onDelete={onDeleteTransaction}
              />

            ))}

          </div>


          {/* ============================================= */}
          {/* Bottom Summary */}
          {/* ============================================= */}

          <Card
            glass
            padding="lg"
            radius="3xl"
            shadow="lg"
            className="border-slate-200/70"
          >

            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
                  Dashboard Summary
                </p>

                <h3 className="mt-2 text-2xl font-black text-slate-900">
                  Financial Activity Overview
                </h3>

                <p className="mt-2 text-slate-500">
                  Your recent financial activity is
                  displayed above with premium
                  transaction cards.
                </p>

              </div>


              <div className="flex flex-wrap gap-3">

                <div className="rounded-2xl bg-blue-50 px-5 py-3">

                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Total
                  </p>

                  <p className="mt-1 text-xl font-black text-blue-600">
                    {totalTransactions}
                  </p>

                </div>

                <div className="rounded-2xl bg-emerald-50 px-5 py-3">

                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Income
                  </p>

                  <p className="mt-1 text-xl font-black text-emerald-600">
                    {totalIncome}
                  </p>

                </div>

                <div className="rounded-2xl bg-red-50 px-5 py-3">

                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Expense
                  </p>

                  <p className="mt-1 text-xl font-black text-red-600">
                    {totalExpense}
                  </p>

                </div>

              </div>

            </div>

          </Card>

        </>

      )}

    </section>
  );
};

export default ExpenseList;