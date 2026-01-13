import { useState, type JSX } from "react";

export default function TopSearch(): JSX.Element {
  const [query, setQuery] = useState<string>("");

  return (
    <header className="sticky top-0 z-20 border-b bg-white/90 backdrop-blur">
      <div className="p-4">
        <label className="sr-only" htmlFor="search">
          Cari
        </label>

        <div className="relative">
          <input
            id="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="search"
            placeholder='Coba cari "Tolong menolong"'
            className="w-full rounded-full border px-4 py-2 pr-10 text-sm outline-none focus:ring-2 focus:ring-sky-400"
          />

          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
            aria-label="Cari"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
