import { useCallback, useEffect, useState } from "react";
import localStorageService from "../services/localStorage";

/**
 * ==========================================================
 * useLocalStorage
 * ==========================================================
 * A reusable hook for synchronizing React state with
 * browser localStorage.
 *
 * Features:
 * ----------------------------------------------------------
 * • Generic storage
 * • Automatic persistence
 * • Safe initialization
 * • Remove value
 * • Reset value
 * • Reload from storage
 * • Browser-safe
 * • Error handling
 * ==========================================================
 */

const isBrowser =
  typeof window !== "undefined";

function useLocalStorage(
  key,
  initialValue = null
) {
  /**
   * ==========================================================
   * Initialize State
   * ==========================================================
   */

  const [value, setValue] = useState(() => {
    if (!isBrowser) return initialValue;

    try {
      const stored =
        localStorageService.getItem(
          key,
          initialValue
        );

      return stored;
    } catch (error) {
      console.error(error);

      return initialValue;
    }
  });

  /**
   * ==========================================================
   * Persist State
   * ==========================================================
   */

  useEffect(() => {
    if (!isBrowser) return;

    localStorageService.setItem(
      key,
      value
    );
  }, [key, value]);

  /**
   * ==========================================================
   * Update Value
   * ==========================================================
   */

  const updateValue = useCallback(
    (newValue) => {
      setValue((previousValue) => {
        const valueToStore =
          typeof newValue === "function"
            ? newValue(previousValue)
            : newValue;

        localStorageService.setItem(
          key,
          valueToStore
        );

        return valueToStore;
      });
    },
    [key]
  );

  /**
   * ==========================================================
   * Remove Value
   * ==========================================================
   */

  const removeValue =
    useCallback(() => {
      localStorageService.removeItem(
        key
      );

      setValue(initialValue);
    }, [key, initialValue]);

  /**
   * ==========================================================
   * Reset
   * ==========================================================
   */

  const resetValue =
    useCallback(() => {
      localStorageService.setItem(
        key,
        initialValue
      );

      setValue(initialValue);
    }, [key, initialValue]);

  /**
   * ==========================================================
   * Reload
   * ==========================================================
   */

  const reloadValue =
    useCallback(() => {
      const stored =
        localStorageService.getItem(
          key,
          initialValue
        );

      setValue(stored);
    }, [key, initialValue]);

  /**
   * ==========================================================
   * Exists
   * ==========================================================
   */

  const exists =
    useCallback(() => {
      return (
        localStorageService.getItem(
          key
        ) !== null
      );
    }, [key]);

  /**
   * ==========================================================
   * Toggle Boolean
   * ==========================================================
   */

  const toggleValue =
    useCallback(() => {
      if (
        typeof value !== "boolean"
      ) {
        console.warn(
          `"${key}" is not a boolean value.`
        );

        return;
      }

      updateValue(!value);
    }, [
      key,
      value,
      updateValue,
    ]);

  /**
   * ==========================================================
   * Merge Object
   * ==========================================================
   */

  const mergeValue =
    useCallback(
      (object) => {
        if (
          typeof value !== "object" ||
          value === null
        ) {
          console.warn(
            `"${key}" is not an object.`
          );

          return;
        }

        updateValue({
          ...value,
          ...object,
        });
      },
      [
        key,
        value,
        updateValue,
      ]
    );

  /**
   * ==========================================================
   * Push Into Array
   * ==========================================================
   */

  const pushValue =
    useCallback(
      (item) => {
        if (!Array.isArray(value)) {
          console.warn(
            `"${key}" is not an array.`
          );

          return;
        }

        updateValue([
          ...value,
          item,
        ]);
      },
      [
        key,
        value,
        updateValue,
      ]
    );

  /**
   * ==========================================================
   * Remove From Array
   * ==========================================================
   */

  const removeFromArray =
    useCallback(
      (predicate) => {
        if (!Array.isArray(value))
          return;

        updateValue(
          value.filter(
            (item) =>
              !predicate(item)
          )
        );
      },
      [
        value,
        updateValue,
      ]
    );

  /**
   * ==========================================================
   * Clear Array
   * ==========================================================
   */

  const clearArray =
    useCallback(() => {
      if (!Array.isArray(value))
        return;

      updateValue([]);
    }, [
      value,
      updateValue,
    ]);

  /**
   * ==========================================================
   * Sync Between Tabs
   * ==========================================================
   */

  useEffect(() => {
    if (!isBrowser) return;

    const handleStorage = (
      event
    ) => {
      if (event.key !== key)
        return;

      reloadValue();
    };

    window.addEventListener(
      "storage",
      handleStorage
    );

    return () =>
      window.removeEventListener(
        "storage",
        handleStorage
      );
  }, [key, reloadValue]);

  /**
   * ==========================================================
   * Return API
   * ==========================================================
   */

  return {
    value,

    setValue: updateValue,

    removeValue,

    resetValue,

    reloadValue,

    exists,

    toggleValue,

    mergeValue,

    pushValue,

    removeFromArray,

    clearArray,
  };
}

export default useLocalStorage;