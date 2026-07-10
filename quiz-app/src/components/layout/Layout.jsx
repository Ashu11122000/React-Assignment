import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

/**
 * ==========================================================
 * Layout Component
 * ==========================================================
 * Main Application Layout
 *
 * Structure
 * -----------------------------------------
 * Navbar
 * -----------------------------------------
 * Sidebar | Main Content
 * -----------------------------------------
 * Footer
 *
 * Features
 * - Sticky Navbar
 * - Sticky Sidebar
 * - Responsive Layout
 * - Footer Always at Bottom
 * - React Router Outlet
 * ==========================================================
 */

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-100">
      {/* ================= Navbar ================= */}

      <Navbar />

      {/* ================= Main Section ================= */}

      <div className="mx-auto flex w-full max-w-7xl flex-1">
        {/* Sidebar */}

        <Sidebar />

        {/* Page Content */}

        <main className="flex-1 overflow-x-hidden px-4 py-6 sm:px-6 lg:px-8">
          <Outlet />
        </main>
      </div>

      {/* ================= Footer ================= */}

      <Footer />
    </div>
  );
}