import { type JSX } from "react";

export default function PageLoader(): JSX.Element {
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/70 backdrop-blur-sm"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      aria-live="polite"
      aria-busy="true"
    >
      <div className="flex flex-col items-center gap-3 rounded-xl bg-white px-6 py-4 shadow">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-slate-300 border-t-slate-700" />
        <div className="text-xs text-slate-600">{"Loading..."}</div>
      </div>
    </div>
  );
}
