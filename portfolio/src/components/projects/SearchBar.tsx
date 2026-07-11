/**
 * ==========================================================
 * SearchBar Component
 * ==========================================================
 *
 * Reusable search input for filtering projects.
 *
 * Features
 * ----------
 * ✓ Controlled Component
 * ✓ Strongly Typed
 * ✓ Responsive
 * ✓ Glassmorphism UI
 * ✓ Search Icon
 * ✓ Clear Button
 * ✓ Accessibility Friendly
 * ✓ Dark / Light Theme
 *
 * Used By
 * ----------
 * - Projects.tsx
 * - ProjectGrid.tsx
 *
 * ==========================================================
 */

import type { ChangeEvent, FC } from "react";

import { Search, X } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchBar: FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = "Search projects...",
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const clearSearch = () => {
    onChange("");
  };

  return (
    <div className="relative w-full">
      {/* Search Icon */}

      <Search
        size={20}
        className="
                    pointer-events-none
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-muted-foreground
                "
      />

      {/* Input */}

      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        aria-label="Search Projects"
        className="
                    h-14
                    w-full
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    pl-12
                    pr-12
                    text-base
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    outline-none
                    placeholder:text-muted-foreground
                    focus:border-primary
                    focus:ring-2
                    focus:ring-primary/20
                    dark:bg-white/5
                "
      />

      {/* Clear Button */}

      {value && (
        <button
          type="button"
          onClick={clearSearch}
          aria-label="Clear Search"
          className="
                        absolute
                        right-4
                        top-1/2
                        flex
                        -translate-y-1/2
                        items-center
                        justify-center
                        rounded-full
                        p-1
                        text-muted-foreground
                        transition-colors
                        duration-200
                        hover:text-primary
                    "
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
