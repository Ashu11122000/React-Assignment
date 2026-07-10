/**
 * ==========================================================
 * formatCurrency Utility
 * ==========================================================
 *
 * Formats a numeric value into a localized currency string.
 *
 * Features:
 * - Handles invalid values safely
 * - Defaults to Indian Rupees (INR)
 * - Supports custom locales and currencies
 *
 * Examples:
 * formatCurrency(1250)
 * => "₹1,250.00"
 *
 * formatCurrency(99999.5)
 * => "₹99,999.50"
 *
 * formatCurrency(1000, "en-US", "USD")
 * => "$1,000.00"
 *
 * ==========================================================
 */

const formatCurrency = (
  amount,
  locale = "en-IN",
  currency = "INR"
) => {
  const value = Number(amount);

  if (Number.isNaN(value)) {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(0);
  }

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

export default formatCurrency;