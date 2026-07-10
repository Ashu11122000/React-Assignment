import { useEffect, useMemo, useCallback, type ReactNode } from "react";

import useLocalStorage from "../hooks/useLocalStorage";
import { ThemeContext, type Theme } from "./ThemeContext";

interface ThemeProviderProps {
    children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useLocalStorage<Theme>("theme", "dark");

    const toggleTheme = useCallback(() => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    }, [setTheme]);

    useEffect(() => {
        const root = document.documentElement;

        root.classList.remove("light", "dark");
        root.classList.add(theme);
    }, [theme]);

    const value = useMemo(
        () => ({
            theme,
            isDark: theme === "dark",
            setTheme,
            toggleTheme,
        }),
        [theme, setTheme, toggleTheme],
    );

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
}
