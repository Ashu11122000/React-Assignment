import {
  ChevronDown,
  Filter,
  FolderOpen,
  Sparkles,
} from "lucide-react";

import Card from "../common/Card";

import categories from "../../data/categories";

/**
 * ==========================================================
 * Ultra Premium Filter Bar
 * ==========================================================
 *
 * Features
 * ----------------------------------------------------------
 * ✓ Premium White SaaS Design
 * ✓ Beautiful Category Selector
 * ✓ Dynamic Status
 * ✓ Responsive
 * ✓ Glass Card
 *
 * ==========================================================
 */

const FilterBar = ({
  selectedCategory,
  onCategoryChange,
}) => {
  /* ========================================================
     Helper Data
  ======================================================== */

  const totalCategories =
    categories.length;

  const selectedCategoryLabel =
    selectedCategory === "all"
      ? "All Categories"
      : categories.find(
          (category) =>
            category.value === selectedCategory
        )?.label || selectedCategory;

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

      <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-violet-500/5 blur-3xl" />

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
                from-violet-600
                via-indigo-600
                to-blue-600
                text-white
                shadow-xl
              "
            >

              <Filter size={30} />

            </div>

            <div>

              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-violet-50 px-3 py-1">

                <Sparkles
                  size={14}
                  className="text-violet-600"
                />

                <span className="text-xs font-bold uppercase tracking-[0.20em] text-violet-700">
                  Smart Filter
                </span>

              </div>

              <h3 className="text-2xl font-black tracking-tight text-slate-900">
                Filter Transactions
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Quickly organize your financial
                records by transaction category.
              </p>

            </div>

          </div>

          <div className="hidden rounded-2xl border border-violet-100 bg-violet-50 px-5 py-3 text-center lg:block">

            <p className="text-xs font-bold uppercase tracking-[0.20em] text-slate-400">
              Categories
            </p>

            <h4 className="mt-1 text-2xl font-black text-violet-600">
              {totalCategories}
            </h4>

          </div>

        </div>

        {/* ================================================= */}
        {/* Premium Select */}
        {/* ================================================= */}

        <div>

          <label
            htmlFor="category-filter"
            className="mb-3 flex items-center gap-2 text-sm font-bold text-slate-700"
          >

            <FolderOpen
              size={17}
              className="text-violet-600"
            />

            Choose Category

          </label>

          <div className="relative">

            <select
              id="category-filter"
              value={selectedCategory}
              onChange={(event) =>
                onCategoryChange(
                  event.target.value
                )
              }
              className="
                h-14
                w-full
                appearance-none
                rounded-2xl
                border
                border-slate-200
                bg-white
                px-5
                pr-14
                text-base
                font-medium
                text-slate-700
                shadow-sm
                transition-all
                duration-300

                hover:border-violet-300

                focus:border-violet-500
                focus:outline-none
                focus:ring-4
                focus:ring-violet-100
              "
            >
              <option value="all">
                📋 All Categories
              </option>

              {categories.map((category) => (
                <option
                  key={category.id}
                  value={category.value}
                >
                  {category.icon}{" "}
                  {category.label}
                </option>
              ))}
            </select>

            <ChevronDown
              size={20}
              className="
                pointer-events-none
                absolute
                right-5
                top-1/2
                -translate-y-1/2
                text-slate-400
              "
            />


          </div>

        </div>


        {/* ================================================= */}
        {/* Active Filter Summary */}
        {/* ================================================= */}

        <div
          className="
            mt-8
            rounded-3xl
            border
            border-violet-100
            bg-linear-to-r
            from-violet-50
            via-indigo-50
            to-blue-50
            p-5
          "
        >

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
                Current Filter
              </p>

              <h4 className="mt-2 text-lg font-black text-slate-900">
                {selectedCategoryLabel}
              </h4>

            </div>


            <div className="rounded-full border border-violet-200 bg-white px-5 py-2 shadow-sm">

              <span className="text-sm font-semibold text-violet-700">

                {selectedCategory === "all"
                  ? "Showing everything"
                  : "Filtered view active"}

              </span>

            </div>


          </div>

        </div>



        {/* ================================================= */}
        {/* Footer Information */}
        {/* ================================================= */}

        <div className="mt-6 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4">

          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-blue-100
            "
          >

            <Filter
              size={18}
              className="text-blue-600"
            />

          </div>


          <p className="text-sm leading-6 text-slate-600">

            Use categories to quickly find
            specific financial activities and
            maintain better spending insights.

          </p>


        </div>


      </div>

    </Card>
  );
};


export default FilterBar;