/**
 * ==========================================================
 * Expense Categories
 * ==========================================================
 *
 * Centralized list of categories used throughout the app.
 *
 * Each category contains:
 * - id: Unique identifier
 * - label: Display name
 * - value: Internal value
 * - icon: Emoji for better UI
 *
 * ==========================================================
 */

const categories = [
  {
    id: 1,
    label: "Food",
    value: "food",
    icon: "🍔",
  },
  {
    id: 2,
    label: "Travel",
    value: "travel",
    icon: "✈️",
  },
  {
    id: 3,
    label: "Shopping",
    value: "shopping",
    icon: "🛍️",
  },
  {
    id: 4,
    label: "Bills",
    value: "bills",
    icon: "📄",
  },
  {
    id: 5,
    label: "Salary",
    value: "salary",
    icon: "💰",
  },
  {
    id: 6,
    label: "Entertainment",
    value: "entertainment",
    icon: "🎬",
  },
  {
    id: 7,
    label: "Healthcare",
    value: "healthcare",
    icon: "🏥",
  },
  {
    id: 8,
    label: "Education",
    value: "education",
    icon: "📚",
  },
  {
    id: 9,
    label: "Transport",
    value: "transport",
    icon: "🚌",
  },
  {
    id: 10,
    label: "Investment",
    value: "investment",
    icon: "📈",
  },
  {
    id: 11,
    label: "Gift",
    value: "gift",
    icon: "🎁",
  },
  {
    id: 12,
    label: "Other",
    value: "other",
    icon: "📦",
  },
];

export default categories;