import { useMemo, useRef, type JSX } from "react";
import {
  FaHome,
  FaClipboard,
  FaUser,
  FaRegUser,
  FaRegClipboard,
} from "react-icons/fa";
import { NavBadge1, NavLinkWithLoading } from "../../../shared";
import { PATHS, type AppPath } from "../../../app/router/paths";
import { useBottomNavCssVar } from "../../../shared";

type NavItem = {
  id: "home" | "riwayat" | "saya";
  to: AppPath;
  label: string;
  icon: { active: JSX.Element; idle: JSX.Element };
  badge?: { count?: number; dot?: boolean };
};

export default function BottomNav(): JSX.Element {
  const navRef = useRef<HTMLElement | null>(null);
  useBottomNavCssVar(navRef);

  // contoh: nanti kamu bisa ambil dari store/api
  const historyCount = 12; // contoh: unread riwayat
  const accountDot = true; // contoh: ada info baru di akun

  const navItems = useMemo<NavItem[]>(
    () => [
      {
        id: "home",
        to: PATHS.HOME,
        label: "Home",
        icon: { active: <FaHome size={20} />, idle: <FaHome size={20} /> },
      },
      {
        id: "riwayat",
        to: PATHS.HISTORY,
        label: "Riwayat",
        icon: {
          active: <FaClipboard size={20} />,
          idle: <FaRegClipboard size={20} />,
        },
        badge: { count: historyCount },
      },
      {
        id: "saya",
        to: PATHS.ACCOUNT,
        label: "Akun Saya",
        icon: { active: <FaUser size={20} />, idle: <FaRegUser size={20} /> },
        badge: { dot: accountDot },
      },
    ],
    [accountDot, historyCount],
  );

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex justify-center">
      <nav
        ref={navRef}
        className="w-full max-w-107.5 border-t border-blue-100 bg-white"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="grid h-16 grid-flow-col auto-cols-fr">
          {navItems.map((item) => (
            <NavLinkWithLoading
              key={item.id}
              to={item.to}
              end={item.to === PATHS.HOME}
              loading={{
                message: `Membuka ${item.label}...`,
                minDurationMs: 250,
              }}
              className={({ isActive }) =>
                [
                  "relative flex h-full flex-col items-center justify-center gap-1",
                  "text-[10px] transition-colors",
                  isActive ? "text-slate-900" : "text-slate-500",
                ].join(" ")
              }
            >
              {({ isActive }: { isActive: boolean }) => (
                <>
                  <span className="relative">
                    {isActive ? item.icon.active : item.icon.idle}
                    {item.badge?.dot ? (
                      <NavBadge1 dot />
                    ) : (
                      <NavBadge1 count={item.badge?.count ?? 0} />
                    )}
                  </span>

                  <span className={isActive ? "font-medium" : "font-normal"}>
                    {item.label}
                  </span>

                  <span
                    className={[
                      "absolute bottom-1 h-1 w-8 rounded-full transition-opacity",
                      isActive ? "opacity-100" : "opacity-0",
                    ].join(" ")}
                    style={{ backgroundColor: "#0f172a" }}
                  />
                </>
              )}
            </NavLinkWithLoading>
          ))}
        </div>
      </nav>
    </div>
  );
}
