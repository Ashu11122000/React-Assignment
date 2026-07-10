import { useMemo, useState } from "react";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import SummaryCards from "./components/expense/SummaryCards";
import ExpenseForm from "./components/expense/ExpenseForm";
import SearchBar from "./components/expense/SearchBar";
import FilterBar from "./components/expense/FilterBar";
import ExpenseList from "./components/expense/ExpenseList";

import useDebounce from "./hooks/useDebounce";

/**
 * ==========================================================
 * App Component
 * ==========================================================
 *
 * Premium Expense Tracker Dashboard
 *
 * Responsibilities
 * - Store transactions
 * - Add/Delete transactions
 * - Search
 * - Filter
 * - Dashboard Layout
 * - Responsive UI
 *
 * ==========================================================
 */

function App() {
  /**
   * ----------------------------------------------------------
   * State
   * ----------------------------------------------------------
   */

  const [transactions, setTransactions] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("all");

  /**
   * ----------------------------------------------------------
   * Debounced Search
   * ----------------------------------------------------------
   */

  const debouncedSearch = useDebounce(searchTerm, 500);

  /**
   * ----------------------------------------------------------
   * Add Transaction
   * ----------------------------------------------------------
   */

  const handleAddTransaction = (transaction) => {
    setTransactions((previousTransactions) => [
      transaction,
      ...previousTransactions,
    ]);
  };

  /**
   * ----------------------------------------------------------
   * Delete Transaction
   * ----------------------------------------------------------
   */

  const handleDeleteTransaction = (id) => {
    setTransactions((previousTransactions) =>
      previousTransactions.filter(
        (transaction) => transaction.id !== id
      )
    );
  };

  /**
   * ----------------------------------------------------------
   * Filter Transactions
   * ----------------------------------------------------------
   */

  const filteredTransactions = useMemo(() => {
    return transactions.filter((transaction) => {
      const matchesSearch =
        transaction.title
          .toLowerCase()
          .includes(debouncedSearch.toLowerCase()) ||
        transaction.category
          .toLowerCase()
          .includes(debouncedSearch.toLowerCase());

      const matchesCategory =
        selectedCategory === "all" ||
        transaction.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [
    transactions,
    debouncedSearch,
    selectedCategory,
  ]);

  /**
   * ----------------------------------------------------------
   * Render
   * ----------------------------------------------------------
   */

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-100">

      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />

        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />

        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />
      </div>

      <main className="mx-auto w-full max-w-[1800px] px-4 py-6 sm:px-6 lg:px-8 xl:px-10">

        {/* Header */}
        <Header />

        {/* Dashboard */}
        <section className="mt-8 space-y-8">

          {/* Summary */}
          <SummaryCards
            transactions={filteredTransactions}
          />

          {/* Dashboard Grid */}
          <div className="grid gap-8 xl:grid-cols-12">

            {/* Left Side */}
            <div className="xl:col-span-5">

              <div className="rounded-3xl border border-white/60 bg-white/70 p-6 shadow-xl backdrop-blur-xl">

                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-slate-800">
                    Add New Transaction
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Quickly record your income and
                    expenses.
                  </p>
                </div>

                <ExpenseForm
                  onAddTransaction={
                    handleAddTransaction
                  }
                />
              </div>
            </div>

            {/* Right Side */}
            <div className="space-y-6 xl:col-span-7">

              {/* Search + Filter */}
              <div className="rounded-3xl border border-white/60 bg-white/70 p-6 shadow-xl backdrop-blur-xl">

                <div className="mb-5">
                  <h2 className="text-xl font-bold text-slate-800">
                    Search & Filters
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Find transactions instantly.
                  </p>
                </div>

                <div className="grid gap-5 lg:grid-cols-2">

                  <SearchBar
                    searchTerm={searchTerm}
                    onSearchChange={
                      setSearchTerm
                    }
                  />

                  <FilterBar
                    selectedCategory={
                      selectedCategory
                    }
                    onCategoryChange={
                      setSelectedCategory
                    }
                  />

                </div>
              </div>

              {/* Future Analytics */}
              <div className="rounded-3xl border border-dashed border-slate-300 bg-linear-to-br from-white/70 to-blue-50/70 p-8 shadow-lg backdrop-blur-xl">

                <div className="flex items-center justify-between">

                  <div>

                    <h2 className="text-xl font-bold text-slate-800">
                      Analytics Dashboard
                    </h2>

                    <p className="mt-2 text-sm text-slate-500">
                      Charts, trends, spending
                      insights, monthly reports and
                      category analytics will appear
                      here.
                    </p>

                  </div>

                  <div className="hidden rounded-2xl bg-linear-to-r from-blue-600 to-indigo-600 px-6 py-4 text-center text-white shadow-lg md:block">

                    <p className="text-xs uppercase tracking-wider opacity-80">
                      Coming Soon
                    </p>

                    <p className="mt-1 text-3xl font-bold">
                      📊
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Transactions */}
          <section className="rounded-3xl border border-white/60 bg-white/70 p-6 shadow-xl backdrop-blur-xl">

            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

              <div>

                <h2 className="text-2xl font-bold text-slate-800">
                  Recent Transactions
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  {filteredTransactions.length}{" "}
                  transaction
                  {filteredTransactions.length !== 1
                    ? "s"
                    : ""}{" "}
                  found
                </p>

              </div>

            </div>

            <ExpenseList
              transactions={filteredTransactions}
              onDeleteTransaction={
                handleDeleteTransaction
              }
            />

          </section>

        </section>

        {/* Footer */}
        <div className="mt-10">
          <Footer />
        </div>

      </main>
    </div>
  );
}

export default App;