import calculateIncome from "./calculateIncome";
import calculateExpense from "./calculateExpense";

/**
 * ==========================================================
 * calculateBalance Utility
 * ==========================================================
 *
 * Calculates the current account balance.
 *
 * Formula:
 * Balance = Total Income - Total Expense
 *
 * This utility reuses:
 * - calculateIncome()
 * - calculateExpense()
 *
 * Parameters:
 * - transactions (Array)
 *
 * Returns:
 * - Number
 *
 * Example:
 *
 * const transactions = [
 *   { amount: 50000, type: "income" },
 *   { amount: 1200, type: "expense" },
 *   { amount: 800, type: "expense" },
 * ];
 *
 * calculateBalance(transactions);
 * // 48000
 *
 * ==========================================================
 */

const calculateBalance = (transactions = []) => {
  if (!Array.isArray(transactions)) {
    return 0;
  }

  const totalIncome = calculateIncome(transactions);
  const totalExpense = calculateExpense(transactions);

  return totalIncome - totalExpense;
};

export default calculateBalance;