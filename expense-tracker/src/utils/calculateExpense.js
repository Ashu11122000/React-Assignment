/**
 * ==========================================================
 * calculateExpense Utility
 * ==========================================================
 *
 * Calculates the total expenses from a list of transactions.
 *
 * A transaction is considered an expense when:
 * transaction.type === "expense"
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
 * calculateExpense(transactions);
 * // 2000
 *
 * ==========================================================
 */

const calculateExpense = (transactions = []) => {
  if (!Array.isArray(transactions)) {
    return 0;
  }

  return transactions.reduce((total, transaction) => {
    const isExpense = transaction.type?.toLowerCase() === "expense";

    if (!isExpense) {
      return total;
    }

    const amount = Number(transaction.amount);

    return Number.isNaN(amount) ? total : total + amount;
  }, 0);
};

export default calculateExpense;