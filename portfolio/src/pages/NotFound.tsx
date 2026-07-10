import { Link } from "react-router-dom";

/**
 * 404 Page
 */

function NotFound() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center gap-6 px-6 text-center">
            <h1 className="text-7xl font-extrabold">404</h1>

            <h2 className="text-3xl font-semibold">Page Not Found</h2>

            <p className="max-w-md text-slate-500 dark:text-slate-400">
                The page you're looking for doesn't exist or has been moved.
            </p>

            <Link
                to="/"
                className="rounded-lg bg-indigo-600 px-6 py-3 text-white transition hover:bg-indigo-700"
            >
                Back to Home
            </Link>
        </main>
    );
}

export default NotFound;
