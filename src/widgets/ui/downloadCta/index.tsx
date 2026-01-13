import { Button, Card } from "../../../shared/ui";
import { type JSX } from "react";

export default function DownloadCta(): JSX.Element {
  return (
    <section className="px-4 -mt-6">
      <Card className="p-4">
        <h2 className="text-base font-bold text-slate-800">
          Lanjutkan Kebaikanmu Jadi Lebih Rutin
        </h2>

        <p className="mt-1 text-sm text-slate-600">
          Bantu galang dana lebih terukur lewat Donasi Otomatis.
        </p>

        <div className="mt-4">
          <Button fullWidth>
            Download Sekarang <span aria-hidden="true">→</span>
          </Button>
        </div>
      </Card>
    </section>
  );
}
