import { useEffect, useState } from "react";

/**
 * ==========================================================
 * useDebounce Hook
 * ==========================================================
 *
 * Delays updating a value until after the specified delay.
 *
 * Common Use Cases:
 * - Search inputs
 * - API requests
 * - Filtering
 * - Expensive calculations
 *
 * Parameters:
 * - value: The value to debounce
 * - delay: Delay in milliseconds
 *
 * Returns:
 * - Debounced value
 *
 * Example:
 *
 * const [search, setSearch] = useState("");
 *
 * const debouncedSearch = useDebounce(search, 500);
 *
 * ==========================================================
 */

const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Start a timer whenever the value changes
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Clear the previous timer if the value changes
    // before the delay completes or when the component unmounts
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;