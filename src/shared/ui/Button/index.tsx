import type { ButtonHTMLAttributes, ReactNode, JSX } from "react";

type ButtonVariant = "primary" | "dark" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  fullWidth?: boolean;
  children: ReactNode;
};

const variantClass: Record<ButtonVariant, string> = {
  primary: "bg-sky-600 text-white hover:bg-sky-700",
  dark: "bg-black text-white hover:bg-slate-900",
  ghost: "bg-transparent text-slate-700 hover:bg-slate-100",
};

export default function Button({
  variant = "primary",
  fullWidth = false,
  className = "",
  children,
  ...rest
}: ButtonProps): JSX.Element {
  return (
    <button
      {...rest}
      className={[
        "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold",
        "transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400",
        fullWidth ? "w-full" : "",
        variantClass[variant],
        className,
      ].join(" ")}
    >
      {children}
    </button>
  );
}
