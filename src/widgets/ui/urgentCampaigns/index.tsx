import type { Campaign } from "../../../entities/campaign/types";
import { formatRupiah } from "../../../shared/lib/money";
import { Card } from "../../../shared/ui";
import { type JSX } from "react";

const CAMPAIGNS: Campaign[] = [
  {
    id: "c1",
    title: "Contoh Campaign: Bantu biaya pengobatan",
    collectedAmount: 120_000_000,
    progress: 0.66,
  },
  {
    id: "c2",
    title: "Contoh Campaign: Bantuan pendidikan",
    collectedAmount: 45_000_000,
    progress: 0.33,
  },
];

function clamp01(value: number): number {
  return Math.max(0, Math.min(1, value));
}

export default function UrgentCampaigns(): JSX.Element {
  return (
    <section className="mt-8 px-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-slate-800">
          Penggalangan Dana Mendesak
        </h3>
        <a href="#" className="text-xs font-semibold text-sky-700">
          Lihat semua
        </a>
      </div>

      <div className="mt-3 flex gap-3 overflow-x-auto pb-2">
        {CAMPAIGNS.map((c) => {
          const progressPct = Math.round(clamp01(c.progress) * 100);

          return (
            <Card key={c.id} className="w-64 shrink-0 overflow-hidden">
              <div className="h-28 bg-slate-200" />
              <div className="p-3">
                <h4 className="line-clamp-2 text-sm font-semibold text-slate-800">
                  {c.title}
                </h4>

                <p className="mt-1 text-xs text-slate-600">
                  Terkumpul {formatRupiah(c.collectedAmount)}
                </p>

                <div className="mt-2 h-2 w-full rounded-full bg-slate-100">
                  <div
                    className="h-2 rounded-full bg-sky-600"
                    style={{ width: `${progressPct}%` }}
                    role="progressbar"
                    aria-valuenow={progressPct}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`Progress ${progressPct}%`}
                  />
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
