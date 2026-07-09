function Header() {
    return (
        <header className="bg-linear-to-r from-blue-600 to-purple-700 text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
                {/* Logo + Title */}
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-3xl">
                        🏃
                    </div>

                    <div>
                        <h1 className="text-3xl font-bold">
                            Fitness Tracker
                        </h1>

                        <p className="text-sm text-blue-100">
                            Track • Improve • Stay Healthy
                        </p>
                    </div>
                </div>

                {/* Right Side */}
                <div className="hidden md:flex items-center gap-2 text-lg font-semibold">
                    ❤️
                    <span>Stay Active, Stay Healthy!</span>
                </div>
            </div>
        </header>
    );
}

export default Header;