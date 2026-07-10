import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import App from "./App";

import { QuizProvider } from "./context/QuizContext";

import "./index.css";
import "./styles/globals.css";

/**
 * ==========================================================
 * Main Entry Point
 * ==========================================================
 *
 * Responsibilities
 * ----------------
 * - Render the React application
 * - Initialize BrowserRouter
 * - Initialize QuizProvider
 * - Configure global toast notifications
 * - Load global styles
 *
 * Application Flow
 *
 * ReactDOM
 *     │
 *     ▼
 * React.StrictMode
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

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <BrowserRouter>
      <QuizProvider>
        <App />

        <Toaster
          position="top-right"
          reverseOrder={false}
          gutter={8}
          containerStyle={{
            top: 20,
            right: 20,
          }}
          toastOptions={{
            duration: 3000,

            success: {
              style: {
                background: "#16A34A",
                color: "#FFFFFF",
                borderRadius: "12px",
                padding: "14px 18px",
                fontSize: "14px",
                fontWeight: "500",
              },
            },

            error: {
              style: {
                background: "#DC2626",
                color: "#FFFFFF",
                borderRadius: "12px",
                padding: "14px 18px",
                fontSize: "14px",
                fontWeight: "500",
              },
            },

            loading: {
              style: {
                background: "#2563EB",
                color: "#FFFFFF",
                borderRadius: "12px",
                padding: "14px 18px",
                fontSize: "14px",
                fontWeight: "500",
              },
            },

            style: {
              background: "#1E293B",
              color: "#F8FAFC",
              border: "1px solid #334155",
              borderRadius: "12px",
              padding: "14px 18px",
              fontSize: "14px",
            },
          }}
        />
      </QuizProvider>
    </BrowserRouter>
  </React.StrictMode>
);