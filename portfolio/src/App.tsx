import AppRouter from "./router/AppRouter";

/**
 * ==========================================================
 * App Component
 * ==========================================================
 *
 * Root component of the Portfolio application.
 *
 * Responsibilities
 * ----------------
 * ✓ Render application router
 * ✓ Keep App clean
 * ✓ Delegate layouts/pages to the router
 *
 * ==========================================================
 */

function App() {
  return <AppRouter />;
}

export default App;