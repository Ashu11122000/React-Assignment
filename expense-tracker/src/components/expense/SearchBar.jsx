import {
  Search,
  Sparkles,
  TrendingUp,
} from "lucide-react";

import Card from "../common/Card";
import Input from "../common/Input";

/**
 * ==========================================================
 * Ultra Premium Search Bar
 * ==========================================================
 *
 * Features
 * ----------------------------------------------------------
 * ✓ Premium White SaaS Design
 * ✓ Live Search Status
 * ✓ Beautiful Search Field
 * ✓ Responsive
 * ✓ Smart Dashboard Widget
 *
 * ==========================================================
 */

const SearchBar = ({
  searchTerm,
  onSearchChange,
}) => {
  /* ========================================================
     Helper Data
  ======================================================== */

  const isSearching =
    searchTerm.trim().length > 0;

  const statusText = isSearching
    ? "Searching..."
    : "Ready";

  const statusClasses = isSearching
    ? "bg-emerald-100 text-emerald-700"
    : "bg-slate-100 text-slate-600";

  return (
    <Card
      glass
      hover
      padding="xl"
      radius="3xl"
      shadow="lg"
      className="relative border-slate-200/70"
    >
      {/* Decorative Glow */}

      <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="relative z-10">

        {/* ================================================= */}
        {/* Header */}
        {/* ================================================= */}

        <div className="mb-8 flex items-start justify-between">

          <div className="flex items-center gap-4">

            <div
              className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-3xl
                bg-linear-to-br
                from-blue-600
                via-indigo-600
                to-violet-600
                text-white
                shadow-xl
              "
            >

              <Search size={30} />

            </div>

            <div>

              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1">

                <Sparkles
                  size={14}
                  className="text-blue-600"
                />

                <span className="text-xs font-bold uppercase tracking-[0.20em] text-blue-700">
                  Smart Search
                </span>

              </div>

              <h3 className="text-2xl font-black tracking-tight text-slate-900">
                Search Transactions
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Instantly search your transactions
                by title or category.
              </p>

            </div>

          </div>

          <div
            className={`
              hidden
              rounded-2xl
              px-5
              py-3
              text-center
              lg:block
              ${statusClasses}
            `}
          >

            <p className="text-xs font-bold uppercase tracking-[0.20em]">
              Status
            </p>

            <h4 className="mt-1 text-lg font-black">
              {statusText}
            </h4>

          </div>

        </div>

        {/* ================================================= */}
        {/* Premium Search Input */}
        {/* ================================================= */}

        <Input
          id="search"
          name="search"
          type="search"
          label="Search Transactions"
          placeholder="Search by title or category..."
          value={searchTerm}
          onChange={(event) =>
            onSearchChange(event.target.value)
          }
          leftIcon={<Search size={18} />}
          rightIcon={
            <TrendingUp
              size={18}
              className="text-blue-500"
            />
          }
          helperText="Search instantly across all recorded transactions."
        />

                {/* ================================================= */}
        {/* Search Summary */}
        {/* ================================================= */}

        <div
          className="
            mt-8
            rounded-3xl
            border
            border-blue-100
            bg-linear-to-r
            from-blue-50
            via-indigo-50
            to-violet-50
            p-5
          "
        >

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
                Search Status
              </p>

              <h4 className="mt-2 text-lg font-black text-slate-900">

                {isSearching
                  ? "Live Search Active"
                  : "Waiting for Input"}

              </h4>

            </div>

            <div
              className={`
                rounded-full
                px-5
                py-2
                text-sm
                font-semibold
                ${statusClasses}
              `}
            >

              {statusText}

            </div>

          </div>


          <p className="mt-5 text-sm leading-7 text-slate-600">

            {isSearching ? (
              <>
                Showing search results for{" "}
                <span className="font-bold text-blue-700">
                  "{searchTerm}"
                </span>.
                Matching transactions update
                automatically as you type.
              </>
            ) : (
              <>
                Start typing to instantly filter
                transactions by title or category.
                Search results update in real time.
              </>
            )}

          </p>

        </div>


        {/* ================================================= */}
        {/* Search Tips */}
        {/* ================================================= */}

        <div className="mt-6 flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5">

          <div
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-2xl
              bg-linear-to-br
              from-blue-600
              via-indigo-600
              to-violet-600
              text-white
              shadow-lg
            "
          >

            <Sparkles size={20} />

          </div>

          <div>

            <h4 className="font-bold text-slate-900">
              Smart Search Tips
            </h4>

            <ul className="mt-2 space-y-1 text-sm leading-6 text-slate-600">

              <li>
                • Search using transaction titles.
              </li>

              <li>
                • Search by category names.
              </li>

              <li>
                • Results update automatically while typing.
              </li>

            </ul>

          </div>

        </div>

      </div>

    </Card>
  );
};

export default SearchBar;