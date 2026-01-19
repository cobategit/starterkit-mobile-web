import { type JSX, type ReactNode, useEffect } from "react";
import { useLocation } from "react-router";
import { useNavLoadingStore } from "./navLoadingStore";

type Props = { children: ReactNode };

export function RouteReady({ children }: Props): JSX.Element {
  const location = useLocation();
  const stop = useNavLoadingStore((s) => s.stop);

  useEffect(() => {
    // dipanggil setelah route baru sudah render (termasuk lazy selesai)
    stop();
  }, [location.key, stop]);

  return <>{children}</>;
}
