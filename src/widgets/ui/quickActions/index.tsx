import type { JSX } from "react";

type QuickAction = {
  id: string;
  label: string;
  bubbleClassName: string;
};

const ACTIONS: QuickAction[] = [
  { id: "donasi", label: "Donasi", bubbleClassName: "bg-sky-100" },
  { id: "zakat", label: "Zakat", bubbleClassName: "bg-emerald-100" },
  { id: "galang", label: "Galang Dana", bubbleClassName: "bg-orange-100" },
  {
    id: "otomatis",
    label: "Donasi Otomatis",
    bubbleClassName: "bg-indigo-100",
  },
  {
    id: "experience",
    label: "Kitabisa Experience",
    bubbleClassName: "bg-pink-100",
  },
  { id: "csr", label: "Kolaborasi CSR", bubbleClassName: "bg-teal-100" },
  { id: "asuransi", label: "Asuransi", bubbleClassName: "bg-yellow-100" },
  { id: "dana", label: "Dana Abadi", bubbleClassName: "bg-lime-100" },
];

export default function QuickActions(): JSX.Element {
  return (
    <section className="mt-6 px-4">
      <h3 className="text-sm font-bold text-slate-800">
        Mau berbuat baik apa hari ini?
      </h3>

      <div className="mt-3 grid grid-cols-4 gap-3 text-center">
        {ACTIONS.map((item) => (
          <button
            key={item.id}
            className="rounded-xl border bg-white p-3 hover:bg-slate-50"
            type="button"
          >
            <div
              className={[
                "mx-auto mb-2 h-9 w-9 rounded-full",
                item.bubbleClassName,
              ].join(" ")}
            />
            <div className="text-[11px] text-slate-700">{item.label}</div>
          </button>
        ))}
      </div>
    </section>
  );
}
