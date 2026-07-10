import { useState } from "react";
import {
  CalendarDays,
  CircleDollarSign,
  FolderOpen,
  IndianRupee,
  ReceiptText,
  Sparkles,
} from "lucide-react";

import Button from "../common/Button";
import Card from "../common/Card";
import Input from "../common/Input";

import categories from "../../data/categories";

/**
 * ==========================================================
 * Ultra Premium Expense Form
 * ==========================================================
 *
 * Features
 * ----------------------------------------------------------
 * ✓ Beautiful Dashboard Form
 * ✓ Validation
 * ✓ Premium Income / Expense Toggle
 * ✓ Live Preview
 * ✓ Finance Tips
 * ✓ Responsive
 *
 * ==========================================================
 */

const ExpenseForm = ({
  onAddTransaction,
}) => {
  /* ========================================================
     State
  ======================================================== */

  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    type: "expense",
    category: "food",
    date: new Date()
      .toISOString()
      .split("T")[0],
  });

  const [errors, setErrors] = useState({});

  /* ========================================================
     Handlers
  ======================================================== */

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));
  };

  /* ========================================================
     Validation
  ======================================================== */

  const validateForm = () => {
    const validationErrors = {};

    if (!formData.title.trim()) {
      validationErrors.title =
        "Transaction title is required.";
    }

    if (
      !formData.amount ||
      Number(formData.amount) <= 0
    ) {
      validationErrors.amount =
        "Enter a valid amount.";
    }

    if (!formData.date) {
      validationErrors.date =
        "Please choose a date.";
    }

    setErrors(validationErrors);

    return (
      Object.keys(validationErrors).length === 0
    );
  };

  /* ========================================================
     Submit
  ======================================================== */

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm) return;

    onAddTransaction({
      id: Date.now(),

      title: formData.title.trim(),

      amount: Number(formData.amount),

      type: formData.type,

      category: formData.category,

      date: formData.date,
    });

    setFormData({
      title: "",
      amount: "",
      type: "expense",
      category: "food",
      date: new Date()
        .toISOString()
        .split("T")[0],
    });

    setErrors({});
  };

  return (
    <Card
      glass
      padding="xl"
      radius="3xl"
      shadow="xl"
      className="relative border-slate-200/70"
    >
      {/* Decorative Glow */}

      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl" />

      <div className="relative z-10">

        {/* ================================================= */}
        {/* Header */}
        {/* ================================================= */}

        <div className="mb-10 flex items-start justify-between">

          <div>

            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2">

              <Sparkles
                size={15}
                className="text-blue-600"
              />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-blue-700">
                New Transaction
              </span>

            </div>

            <h2 className="text-3xl font-black tracking-tight text-slate-900">
              Add Transaction
            </h2>

            <p className="mt-3 max-w-lg text-slate-500 leading-7">
              Quickly record your income and
              expenses to maintain an accurate,
              organized and insightful financial
              history.
            </p>

          </div>

          <div className="hidden rounded-3xl bg-linear-to-br from-blue-600 via-indigo-600 to-violet-600 p-5 text-white shadow-xl lg:flex">

            <CircleDollarSign size={34} />

          </div>

        </div>

        {/* ================================================= */}
        {/* Form */}
        {/* ================================================= */}

        <form
          onSubmit={handleSubmit}
          className="space-y-8"
        >

          {/* Title & Amount */}

          <div className="grid gap-6 lg:grid-cols-2">

            <Input
              id="title"
              name="title"
              label="Transaction Title"
              placeholder="Salary, Grocery, Netflix..."
              value={formData.title}
              onChange={handleChange}
              leftIcon={
                <ReceiptText size={18} />
              }
              error={errors.title}
              helperText="Choose a meaningful transaction name."
              required
            />

            <Input
              id="amount"
              name="amount"
              type="number"
              label="Amount"
              placeholder="Enter amount"
              value={formData.amount}
              onChange={handleChange}
              leftIcon={
                <IndianRupee size={18} />
              }
              error={errors.amount}
              helperText="Only positive values are allowed."
              required
              min="1"
            />

          </div>

                      {/* ================================================= */}
          {/* Transaction Type + Category */}
          {/* ================================================= */}

          <div className="grid gap-6 lg:grid-cols-2">

            {/* Transaction Type */}

            <div>

              <label className="mb-3 block text-sm font-bold text-slate-700">
                Transaction Type
              </label>


              <div className="grid grid-cols-2 gap-4">

                {/* Expense */}

                <button
                  type="button"
                  onClick={() =>
                    setFormData((previous) => ({
                      ...previous,
                      type: "expense",
                    }))
                  }
                  className={`
                    group
                    rounded-2xl
                    border
                    p-5
                    text-left
                    transition-all
                    duration-300

                    ${
                      formData.type === "expense"
                        ? `
                          border-red-500
                          bg-linear-to-br
                          from-red-500
                          to-rose-600
                          text-white
                          shadow-xl
                          shadow-red-500/20
                        `
                        : `
                          border-slate-200
                          bg-white
                          text-slate-700
                          hover:border-red-300
                          hover:shadow-lg
                        `
                    }
                  `}
                >

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-sm font-bold">
                        Expense
                      </p>

                      <p
                        className={`
                          mt-1
                          text-xs
                          ${
                            formData.type === "expense"
                              ? "text-red-100"
                              : "text-slate-400"
                          }
                        `}
                      >
                        Money spent
                      </p>

                    </div>


                    <CircleDollarSign
                      size={28}
                      className={
                        formData.type === "expense"
                          ? "text-white"
                          : "text-red-500"
                      }
                    />

                  </div>

                </button>


                {/* Income */}

                <button
                  type="button"
                  onClick={() =>
                    setFormData((previous) => ({
                      ...previous,
                      type: "income",
                    }))
                  }
                  className={`
                    group
                    rounded-2xl
                    border
                    p-5
                    text-left
                    transition-all
                    duration-300

                    ${
                      formData.type === "income"
                        ? `
                          border-emerald-500
                          bg-linear-to-br
                          from-emerald-500
                          to-green-600
                          text-white
                          shadow-xl
                          shadow-emerald-500/20
                        `
                        : `
                          border-slate-200
                          bg-white
                          text-slate-700
                          hover:border-emerald-300
                          hover:shadow-lg
                        `
                    }
                  `}
                >

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-sm font-bold">
                        Income
                      </p>

                      <p
                        className={`
                          mt-1
                          text-xs

                          ${
                            formData.type === "income"
                              ? "text-emerald-100"
                              : "text-slate-400"
                          }
                        `}
                      >
                        Money received
                      </p>

                    </div>


                    <CircleDollarSign
                      size={28}
                      className={
                        formData.type === "income"
                          ? "text-white"
                          : "text-emerald-500"
                      }
                    />

                  </div>

                </button>

              </div>

            </div>


            {/* Category */}

            <div>

              <label className="mb-3 flex items-center gap-2 text-sm font-bold text-slate-700">

                <FolderOpen
                  size={17}
                  className="text-blue-600"
                />

                Category

              </label>


              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="
                  h-14
                  w-full
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  px-5
                  text-slate-700
                  shadow-sm
                  transition-all
                  duration-300

                  hover:border-blue-300

                  focus:border-blue-500
                  focus:outline-none
                  focus:ring-4
                  focus:ring-blue-100
                "
              >

                {categories.map((category) => (
                  <option
                    key={category.id}
                    value={category.value}
                  >
                    {category.icon} {category.label}
                  </option>
                ))}

              </select>

            </div>

          </div>


          {/* ================================================= */}
          {/* Date + Finance Tip */}
          {/* ================================================= */}

          <div className="grid gap-6 lg:grid-cols-2">


            {/* Date */}

            <Input
              id="date"
              name="date"
              type="date"
              label="Transaction Date"
              value={formData.date}
              onChange={handleChange}
              leftIcon={
                <CalendarDays size={18} />
              }
              error={errors.date}
              required
            />


            {/* Finance Tip */}

            <div
              className="
                flex
                items-center
                rounded-3xl
                border
                border-blue-100
                bg-linear-to-br
                from-blue-50
                via-indigo-50
                to-violet-50
                p-6
              "
            >

              <div className="flex items-start gap-4">

                <div
                  className="
                    flex
                    h-14
                    w-14
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

                  <Sparkles size={26} />

                </div>


                <div>

                  <h4 className="font-bold text-slate-900">
                    Finance Tip
                  </h4>


                  <p className="mt-2 text-sm leading-6 text-slate-600">

                    Recording transactions daily
                    helps maintain accurate reports
                    and better financial decisions.

                  </p>

                </div>

              </div>

            </div>


          </div>



          {/* ================================================= */}
          {/* Submit */}
          {/* ================================================= */}

          <div className="pt-2">

            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
            >
              Add Transaction
            </Button>

          </div>


        </form>

      </div>

    </Card>
  );
};


export default ExpenseForm;