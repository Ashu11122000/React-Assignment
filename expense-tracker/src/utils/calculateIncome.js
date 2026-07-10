/**
 * ==========================================================
 * calculateIncome Utility
 * ==========================================================
 *
 * Calculates the total income from a list of transactions.
 *
 * A transaction is considered income when:
 * transaction.type === "income"
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
 *   { amount: 5000, type: "income" },
 *   { amount: 1200, type: "expense" },
 *   { amount: 3000, type: "income" },
 * ];
 *
 * calculateIncome(transactions);
 * // 8000
 *
 * ==========================================================
 */

const calculateIncome = (transactions = []) => {
  if (!Array.isArray(transactions)) {
    return 0;
  }

  return transactions.reduce((total, transaction) => {
    const isIncome = transaction.type?.toLowerCase() === "income";

    if (!isIncome) {
      return total;
    }

    const amount = Number(transaction.amount);

    return Number.isNaN(amount) ? total : total + amount;
  }, 0);
};

export default calculateIncome;