import type { ReactNode, JSX } from "react";

type MobileShellProps = {
  children: ReactNode;
};

export default function MobileShell({
  children,
}: MobileShellProps): JSX.Element {
  return (
    <div className="mx-auto min-h-screen w-full max-w-[430px] bg-white md:my-6 md:rounded-2xl md:overflow-hidden md:shadow-[0_10px_30px_rgba(0,0,0,0.10)]">
      {children}
    </div>
  );
}
