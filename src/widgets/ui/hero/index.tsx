import { Button } from "../../../shared/ui";
import { type JSX } from "react";

export default function Hero(): JSX.Element {
  return (
    <section className="bg-sky-500 pt-10">
      <div className="px-4 pt-6 pb-4 text-center">
        <h1 className="text-xl font-extrabold text-sky-700">
          Asisten Kebaikan di Aplikasi
          <span className="block">ContohKita</span>
        </h1>

        <p className="mt-2 text-sm text-slate-600">
          Siap bantu siapa pun melanjutkan kebaikannya jadi lebih berdampak.
        </p>

        <div className="mt-4 flex items-center justify-center gap-2">
          <Button variant="dark" className="px-3 py-2 text-xs">
            <span className="text-[10px] opacity-80">Download di</span>
            <span className="font-semibold">App Store</span>
          </Button>

          <Button variant="dark" className="px-3 py-2 text-xs">
            <span className="text-[10px] opacity-80">Dapatkan di</span>
            <span className="font-semibold">Google Play</span>
          </Button>
        </div>

        <div className="mt-5 rounded-2xl bg-gradient-to-r from-sky-200 to-cyan-100 p-4">
          <div className="h-28 w-full rounded-xl bg-white/60" />
          <p className="mt-2 text-xs text-slate-600">(Ilustrasi placeholder)</p>
        </div>
      </div>
    </section>
  );
}
