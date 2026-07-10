/**
 * ==========================================================
 * Router Exports
 * ==========================================================
 *
 * Centralized exports for all routing modules.
 *
 * This allows imports like:
 *
 * import {
 *   AppRouter,
 *   ProtectedRoute,
 *   GuestRoute,
 * } from "../router";
 *
 * instead of importing each file individually.
 *
 * ==========================================================
 */

export { default as AppRouter } from "./AppRouter";
export { default as ProtectedRoute } from "./ProtectedRoute";
export { default as GuestRoute } from "./GuestRoute";