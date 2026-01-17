import type { ReactNode, JSX } from "react";

type MobileShellProps = {
  children: ReactNode;
};

export default function MobileShell({
  children,
}: MobileShellProps): JSX.Element {
  return (
    <div className="mx-auto min-h-screen w-full max-w-[430px] bg-[#F1F5F9] md:overflow-hidden">
      {children}
    </div>
  );
}
