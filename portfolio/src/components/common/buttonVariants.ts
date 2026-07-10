import { cva } from "class-variance-authority";

export const buttonVariants = cva(
    [
        "inline-flex items-center justify-center gap-2",
        "rounded-xl font-medium",
        "transition-all duration-300",
        "focus:outline-none",
        "focus:ring-2",
        "focus:ring-indigo-500",
        "focus:ring-offset-2",
        "disabled:pointer-events-none",
        "disabled:opacity-60",
        "select-none",
    ],
    {
        variants: {
            variant: {
                primary:
                "bg-indigo-600 text-white hover:bg-indigo-700 active:scale-[0.98]",

                secondary:
                    "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700",

                outline:
                "border border-slate-300 bg-transparent hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800",

                ghost: "bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800",

                danger: "bg-red-600 text-white hover:bg-red-700",
            },

            size: {
                sm: "h-9 px-4 text-sm",

                md: "h-11 px-6 text-sm",

                lg: "h-12 px-8 text-base",

                xl: "h-14 px-10 text-lg",

                icon: "h-11 w-11 p-0",
            },

            fullWidth: {
                true: "w-full",
                false: "",
            },
        },

        defaultVariants: {
            variant: "primary",
            size: "md",
            fullWidth: false,
        },
    },
);
