import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Layout from "../components/layout/Layout";

import Home from "../pages/Home";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Experience from "../pages/Experience";
import Projects from "../pages/Projects";
// import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

/**
 * ==========================================================
 * App Router
 * ==========================================================
 *
 * Handles all application routes.
 *
 * Features
 * ----------
 * ✓ Browser Router
 * ✓ Shared Layout
 * ✓ Individual Pages
 * ✓ 404 Page
 * ✓ Easily Extendable
 *
 * ==========================================================
 */

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
            {/* Shared Layout */}
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />

                    <Route path="/about" element={<About />} />

                    <Route path="/skills" element={<Skills />} />

                    <Route path="/experience" element={<Experience />} />

                    <Route path="/projects" element={<Projects />} />

                    { /*<Route path="/contact" element={<Contact />} />*/ }

                    {/* Redirect Example */}
                    <Route path="/home" element={<Navigate to="/" replace />} />
                </Route>

                {/* 404 */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
