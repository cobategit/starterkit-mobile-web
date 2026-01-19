import React from "react";
import { useNavigateWithLoading } from "../../../shared";

type StickySearchHeaderProps = {
  solid: boolean;
  value?: string;
  placeholder?: string;
  to?: string;
  query?: string;
};

function SearchIcon(): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M21 21l-4.3-4.3" />
      <circle cx="11" cy="11" r="7" />
    </svg>
  );
}

export default function DirectToSearchPage({
  solid,
  value,
  placeholder = "",
  to = "/search",
  query,
}: StickySearchHeaderProps): React.JSX.Element {
  const navigate = useNavigateWithLoading();

  const displayText = value && value.trim().length > 0 ? value : placeholder;

  const handleClick = () => {
    const q = (query ?? value)?.trim();
    if (q && q.length > 0) {
      navigate(`${to}?q=${encodeURIComponent(q)}`, {
        loading: { message: "Membuka Search..." },
      });
      return;
    }
    navigate(to, { loading: { message: "Membuka Search..." } });
  };

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50",
        "transition-colors duration-200",
        solid ? "bg-[#12A7E2]" : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-[430px] items-center justify-center px-4 py-3">
        <button
          type="button"
          onClick={handleClick}
          className={[
            "flex w-full h-7 items-center justify-between rounded-full",
            "border border-white/40 bg-white/90 px-4 mx-7 text-sm",
            "backdrop-blur",
            solid ? "shadow-md" : "shadow-sm",
            "hover:bg-white focus:outline-none focus:ring-2 focus:ring-white/70",
          ].join(" ")}
          aria-label="Buka halaman pencarian"
        >
          <span className="truncate text-slate-600">{displayText}</span>
          <span className="ml-3 grid h-9 w-9 place-items-center rounded-full text-slate-700 hover:bg-slate-100">
            <SearchIcon />
          </span>
        </button>
      </div>
    </header>
  );
}
