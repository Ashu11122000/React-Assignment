import { useState } from "react";

/**
 * ==========================================================
 * useLocalStorage Hook
 * ==========================================================
 *
 * A reusable hook for synchronizing React state with
 * the browser's localStorage.
 *
 * Features
 * ----------
 * ✓ Generic Type Support
 * ✓ Automatic JSON Serialization
 * ✓ Automatic JSON Parsing
 * ✓ Type Safe
 * ✓ Functional Updates
 * ✓ SSR Safe
 *
 * Example
 * ----------
 * const [theme, setTheme] = useLocalStorage("theme", "dark");
 *
 * ==========================================================
 */

function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, React.Dispatch<React.SetStateAction<T>>] {
  /**
   * Read initial value from localStorage
   */
  const readValue = (): T => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);

      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}"`, error);

      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState<T>(readValue);

  /**
   * Update both React state and localStorage
   */
  const setValue: React.Dispatch<React.SetStateAction<T>> = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);

      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(`Error setting localStorage key "${key}"`, error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
