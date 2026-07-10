import {
  FaArrowDown,
  FaArrowUp,
  FaBalanceScale,
  FaReceipt,
} from "react-icons/fa";

import Card from "../common/Card";

import calculateIncome from "../../utils/calculateIncome";
import calculateExpense from "../../utils/calculateExpense";
import calculateBalance from "../../utils/calculateBalance";
import formatCurrency from "../../utils/formatCurrency";

/**
 * ==========================================================
 * SummaryCards Component
 * ==========================================================
 *
 * Displays dashboard summary cards.
 *
 * Features:
 * - Total Income
 * - Total Expense
 * - Current Balance
 * - Total Transactions
 *
 * Props:
 * - transactions
 *
 * ==========================================================
 */

const SummaryCards = ({ transactions = [] }) => {
  const totalIncome = calculateIncome(transactions);
  const totalExpense = calculateExpense(transactions);
  const balance = calculateBalance(transactions);

  const summary = [
    {
      id: 1,
      title: "Total Income",
      value: formatCurrency(totalIncome),
      icon: <FaArrowUp />,
      bgColor: "bg-green-100",
      textColor: "text-green-600",
    },
    {
      id: 2,
      title: "Total Expense",
      value: formatCurrency(totalExpense),
      icon: <FaArrowDown />,
      bgColor: "bg-red-100",
      textColor: "text-red-600",
    },
    {
      id: 3,
      title: "Current Balance",
      value: formatCurrency(balance),
      icon: <FaBalanceScale />,
      bgColor: "bg-blue-100",
      textColor:
        balance >= 0 ? "text-blue-600" : "text-red-600",
    },
    {
      id: 4,
      title: "Transactions",
      value: transactions.length,
      icon: <FaReceipt />,
      bgColor: "bg-purple-100",
      textColor: "text-purple-600",
    },
  ];

  return (
    <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {summary.map((item) => (
        <Card
          key={item.id}
          hover
          className="flex items-center justify-between"
        >
          <div>
            <p className="text-sm text-gray-500">
              {item.title}
            </p>

            <h2
              className={`mt-2 text-2xl font-bold ${item.textColor}`}
            >
              {item.value}
            </h2>
          </div>

          <div
            className={`flex h-14 w-14 items-center justify-center rounded-full text-2xl ${item.bgColor} ${item.textColor}`}
          >
            {item.icon}
          </div>
        </Card>
      ))}
    </section>
  );
};

export default SummaryCards;