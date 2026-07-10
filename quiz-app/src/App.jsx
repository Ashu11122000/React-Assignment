import { AppRouter } from "./router";

/**
 * ==========================================================
 * Quiz Application
 * ==========================================================
 *
 * Root application component.
 *
 * Responsibilities:
 * - Render the centralized router
 * - Keep the root component clean
 * - Delegate all routing to AppRouter
 *
 * Architecture
 *
 * main.jsx
 *     │
 *     ▼
 * BrowserRouter
 *     │
 *     ▼
 * QuizProvider
 *     │
 *     ▼
 * App
 *     │
 *     ▼
 * AppRouter
 *     │
 *     ▼
 * Layout
 *     │
 *     ▼
 * Pages
 *
 * ==========================================================
 */

const App = () => {
  return <AppRouter />;
};

export default App;