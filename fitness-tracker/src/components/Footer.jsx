function Footer() {
  const currentYear = new Date().getFullYear();

  return (
        <footer className="bg-linear-to-r from-blue-600 to-purple-700 text-white mt-10 shadow-inner">
            <div className="max-w-7xl mx-auto px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Left Section */}
                <div className="text-center md:text-left">
                    <p className="font-medium">
                        © {currentYear} Fitness Tracker. All rights reserved.
                    </p>

                    <p className="text-sm text-blue-100">
                        Track your fitness journey every day.
                    </p>
                </div>

                {/* Center Section */}
                <div className="flex items-center gap-2 text-lg font-semibold">
                    ❤️
                    <span>Stay Fit • Stay Healthy</span>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-4 text-2xl">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform"
                    >
                        📘
                    </a>

                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform"
                    >
                        🐦
                    </a>

                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform"
                    >
                        📷
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
