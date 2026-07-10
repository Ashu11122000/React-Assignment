import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import App from "./App";

import "./index.css";
import "./styles/globals.css";

import { QuizProvider } from "./context/QuizContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <QuizProvider>
        <App />

        <Toaster
          position = "top-right"
          reverseOrder = {false}
          gutter = {10}
          toastOptions = {{
            duration: 3000,

            success: {
              style: {
                background: "#16A34QA",
                color: "#fff",
                borderRadius: "12px",
                padding: "14px 18px",
              },
            },

            error: {
              style: {
                background: "#DC2626",
                color: "#fff",
                borderRadius: "12px",
                padding: "14px 18px",
              },
            },

            style: {
              background: "#1E293B",
              color: "#fff",
              border: "1px solid #334155",
              borderRadius: "12px",
              fontSize: "14px",
              padding: "14px 18px",
            },
          }}
        />
      </QuizProvider>
    </BrowserRouter>
  </React.StrictMode>
);