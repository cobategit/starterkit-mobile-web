import { type JSX } from "react";

type NavItem = {
  id: string;
  label: string;
  bubbleClassName: string;
};

const NAV: NavItem[] = [
  { id: "donasi", label: "Donasi", bubbleClassName: "bg-sky-100" },
  { id: "galang", label: "Galang Dana", bubbleClassName: "bg-slate-100" },
  { id: "saya", label: "Donasi Saya", bubbleClassName: "bg-slate-100" },
  { id: "inbox", label: "Inbox", bubbleClassName: "bg-slate-100" },
  { id: "akun", label: "Akun", bubbleClassName: "bg-slate-100" },
];

export default function BottomNav(): JSX.Element {
  return (
    <nav
      className="fixed bottom-0 left-1/2 z-30 w-full max-w-107.5 -translate-x-1/2 border-t bg-white"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-5 py-2 text-center text-[10px] text-slate-600">
        {NAV.map((item) => (
          <a
            key={item.id}
            href="#"
            className="flex flex-col items-center gap-1"
          >
            <div
              className={["h-6 w-6 rounded-full", item.bubbleClassName].join(
                " "
              )}
            />
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
