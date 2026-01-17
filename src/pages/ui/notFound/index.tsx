import React from "react";
import { Link } from "react-router";
import { PATHS } from "../../../app/router/paths";

export default function NotFoundPage(): React.JSX.Element {
  return (
    <div className="p-6">
      <h1 className="text-lg font-bold">Halaman tidak ditemukan</h1>
      <p className="mt-2 text-sm text-slate-600">
        URL yang kamu buka tidak tersedia.
      </p>

      <Link
        to={PATHS.HOME}
        className="mt-4 inline-flex rounded-xl bg-sky-600 px-4 py-2 text-sm font-semibold text-white"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
