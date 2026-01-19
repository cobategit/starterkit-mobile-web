// src/shared/ui/NavBadge.tsx
import { type JSX } from "react";

type Props = {
  count?: number;
  /**
   * Kalau true dan count > 0, tampilkan "9+" untuk count >= 10.
   */
  capAt9?: boolean;
  /**
   * Kalau mau dot-only tanpa angka.
   */
  dot?: boolean;
};

export function NavBadge({
  count = 0,
  capAt9 = true,
  dot = false,
}: Props): JSX.Element | null {
  if (dot) {
    return (
      <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white" />
    );
  }

  if (count <= 0) return null;

  const text = capAt9 && count >= 10 ? "9+" : String(count);

  return (
    <span className="absolute -right-2 -top-2 min-w-4 rounded-full bg-red-500 px-1 text-[10px] leading-4 text-white ring-2 ring-white">
      {text}
    </span>
  );
}
