import type { ReactNode, JSX } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({
  children,
  className = "",
}: CardProps): JSX.Element {
  return (
    <div
      className={["rounded-2xl border bg-white shadow-sm", className].join(" ")}
    >
      {children}
    </div>
  );
}
