import type { ChangeEventHandler, JSX } from "react";

type AppHeaderProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBack?: () => void;
  placeholder?: string;
};

export default function AppHeader({
  value,
  onChange,
  onBack,
  placeholder = 'Coba cari "Tolong menolong"',
}: AppHeaderProps): JSX.Element {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-[430px] items-center gap-3 px-4">
        <button
          type="button"
          onClick={onBack}
          aria-label="Back"
          className="grid h-5 w-5 place-items-center rounded-full hover:bg-slate-100"
        >
          {/* arrow left */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="relative flex-1">
          <input
            value={value}
            onChange={onChange}
            type="search"
            placeholder={placeholder}
            className="w-full rounded-full bg-slate-100 px-4 py-2 pr-9 text-sm outline-none focus:outline-none focus:ring-0 focus:border-transparent"
          />
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">
            {/* search icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
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
          </span>
        </div>
      </div>
    </header>
  );
}
