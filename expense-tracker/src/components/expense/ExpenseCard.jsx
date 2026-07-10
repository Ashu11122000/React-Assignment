import {
  ArrowDownCircle,
  ArrowUpCircle,
  CalendarDays,
  FolderOpen,
  Sparkles,
  TrendingDown,
  TrendingUp,
  Trash2,
  Wallet,
} from "lucide-react";

import Card from "../common/Card";
import Button from "../common/Button";

import formatCurrency from "../../utils/formatCurrency";

/**
 * ==========================================================
 * Ultra Premium Expense Card
 * ==========================================================
 *
 * Features
 * ----------------------------------------------------------
 * ✓ Premium White SaaS Card
 * ✓ Income / Expense Status
 * ✓ Category Chip
 * ✓ Date Chip
 * ✓ Large Amount Display
 * ✓ Premium Hover Animation
 * ✓ Decorative Background
 * ✓ Responsive
 *
 * ==========================================================
 */

const ExpenseCard = ({
  transaction,
  onDelete,
}) => {
  /**
   * ----------------------------------------------------------
   * Transaction
   * ----------------------------------------------------------
   */

  const {
    id,
    title,
    amount,
    type,
    category,
    date,
  } = transaction;

  /**
   * ----------------------------------------------------------
   * Helpers
   * ----------------------------------------------------------
   */

  const isIncome =
    type.toLowerCase() === "income";

  const StatusIcon = isIncome
    ? ArrowUpCircle
    : ArrowDownCircle;

  const TrendIcon = isIncome
    ? TrendingUp
    : TrendingDown;

  const accentColor = isIncome
    ? "emerald"
    : "red";

  const statusClasses = isIncome
    ? {
        iconBg:
          "bg-gradient-to-br from-emerald-500 to-green-600",

        badge:
          "bg-emerald-100 text-emerald-700",

        amount:
          "text-emerald-600",

        glow:
          "bg-emerald-400/10",

        trend:
          "text-emerald-600",

        accent:
          "emerald",
      }
    : {
        iconBg:
          "bg-gradient-to-br from-rose-500 to-red-600",

        badge:
          "bg-red-100 text-red-700",

        amount:
          "text-red-600",

        glow:
          "bg-red-400/10",

        trend:
          "text-red-600",

        accent:
          "red",
      };

  return (
    <Card
      hover
      glass
      padding="lg"
      radius="3xl"
      shadow="lg"
      accent={accentColor}
      className="relative"
    >

      {/* Decorative Glow */}

      <div
        className={`
          absolute
          -right-12
          -top-12
          h-48
          w-48
          rounded-full
          blur-3xl
          ${statusClasses.glow}
        `}
      />

      <div className="relative z-10">

        <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">

          {/* ================================================= */}
          {/* Left */}
          {/* ================================================= */}

          <div className="flex items-start gap-5">

            {/* Transaction Icon */}

            <div
              className={`
                flex
                h-18
                w-18
                items-center
                justify-center
                rounded-3xl
                text-white
                shadow-xl
                ${statusClasses.iconBg}
              `}
            >

              <StatusIcon size={32} />

            </div>

            {/* Transaction Details */}

            <div className="space-y-4">

              {/* Header */}

              <div className="flex flex-wrap items-center gap-3">

                <h3 className="text-2xl font-black tracking-tight text-slate-900">
                  {title}
                </h3>

                <span
                  className={`
                    rounded-full
                    px-4
                    py-1.5
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.20em]
                    ${statusClasses.badge}
                  `}
                >
                  {type}
                </span>

                <div className="flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">

                  <Sparkles size={13} />

                  Premium

                </div>

              </div>

              {/* Meta Information */}

              <div className="flex flex-wrap gap-3">

                <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2">

                  <FolderOpen
                    size={16}
                    className="text-slate-500"
                  />

                  <span className="text-sm font-semibold text-slate-700">
                    {category}
                  </span>

                </div>

                <div className="flex items-center gap-2 rounded-2xl border border-blue-100 bg-blue-50 px-4 py-2">

                  <CalendarDays
                    size={16}
                    className="text-blue-600"
                  />

                  <span className="text-sm font-semibold text-blue-700">
                    {date}
                  </span>

                </div>

                <div className="flex items-center gap-2 rounded-2xl border border-violet-100 bg-violet-50 px-4 py-2">

                  <Wallet
                    size={16}
                    className="text-violet-600"
                  />

                  <span className="text-sm font-semibold text-violet-700">
                    Personal Finance
                  </span>

                </div>

              </div>

                            </div>

            </div>


            {/* ================================================= */}
            {/* Right Section */}
            {/* ================================================= */}

            <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center xl:flex-col xl:items-end">

              {/* Amount Card */}

              <div
                className="
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  px-6
                  py-5
                  text-right
                  shadow-sm
                  transition-all
                  duration-300
                  hover:shadow-lg
                "
              >

                <div className="flex items-center justify-end gap-2">

                  <TrendIcon
                    size={18}
                    className={statusClasses.trend}
                  />

                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
                    Transaction Amount
                  </p>

                </div>


                <h2
                  className={`
                    mt-3
                    text-4xl
                    font-black
                    tracking-tight
                    ${statusClasses.amount}
                  `}
                >

                  {isIncome ? "+" : "-"}

                  {formatCurrency(amount)}

                </h2>


                <p className="mt-2 text-sm text-slate-500">

                  {isIncome
                    ? "Income received successfully"
                    : "Expense recorded successfully"}

                </p>


              </div>


              {/* Delete Button */}

              <Button
                variant="danger"
                size="md"
                iconOnly
                aria-label={`Delete ${title}`}
                onClick={() => onDelete(id)}
                className="
                  shadow-lg
                  hover:shadow-red-500/30
                "
              >

                <Trash2 size={20} />

              </Button>


            </div>

          </div>


          {/* ================================================= */}
          {/* Bottom Summary Strip */}
          {/* ================================================= */}

          <div
            className="
              mt-8
              flex
              flex-col
              gap-4
              rounded-2xl
              border
              border-slate-200
              bg-slate-50
              p-4
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >

            <div className="flex items-center gap-3">

              <div
                className={`
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  ${
                    isIncome
                      ? "bg-emerald-100"
                      : "bg-red-100"
                  }
                `}
              >

                <StatusIcon
                  size={20}
                  className={
                    isIncome
                      ? "text-emerald-600"
                      : "text-red-600"
                  }
                />

              </div>


              <div>

                <p className="text-xs font-bold uppercase tracking-[0.20em] text-slate-400">
                  Status
                </p>

                <p className="text-sm font-semibold text-slate-700">
                  Completed Transaction
                </p>

              </div>

            </div>



            <div className="text-left sm:text-right">

              <p className="text-xs font-bold uppercase tracking-[0.20em] text-slate-400">
                Category
              </p>

              <p className="text-sm font-semibold text-slate-700">
                {category}
              </p>

            </div>


          </div>


        </div>

      </Card>
  );
};


export default ExpenseCard;

