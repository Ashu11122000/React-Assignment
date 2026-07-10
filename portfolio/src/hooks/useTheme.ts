import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

/**
 * UseTheme Hook: A Custom hook for accessing the global Theme Context.
 * 
 * Features:
 * - Access Current Theme
 * - Toggle dark/light theme mode
 * - Type-safe
 * - Prevents usage outside ThemeProvider
 */

const useTheme = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider.");
    }

    return context;
};

export default useTheme;