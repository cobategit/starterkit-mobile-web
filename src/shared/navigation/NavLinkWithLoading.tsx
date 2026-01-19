import { type JSX, type ReactNode, useCallback } from "react";
import { NavLink, type NavLinkProps, type To, useNavigate } from "react-router";
import { type NavLoadingOptions, useNavLoadingStore } from "./navLoadingStore";

export type NavLinkWithLoadingProps = Omit<NavLinkProps, "to"> & {
  to: To;
  children: ReactNode | ((args: { isActive: boolean }) => ReactNode);
  loading?: NavLoadingOptions;
  skipIfSamePath?: boolean;
};

function toPathname(to: To): string {
  if (typeof to === "string") return to.split("?")[0].split("#")[0];
  return to.pathname ?? "/";
}

export function NavLinkWithLoading({
  to,
  onClick,
  loading,
  skipIfSamePath = true,
  ...rest
}: NavLinkWithLoadingProps): JSX.Element {
  const navigate = useNavigate();
  const start = useNavLoadingStore((s) => s.start);

  const handleClick = useCallback<NonNullable<NavLinkProps["onClick"]>>(
    (e) => {
      onClick?.(e);
      if (e.defaultPrevented) return;

      if (e.button !== 0 || e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) {
        return;
      }

      const currentPath = window.location.pathname;
      const targetPath = toPathname(to);

      if (skipIfSamePath && currentPath === targetPath) {
        e.preventDefault();
        return;
      }

      e.preventDefault();
      start(loading);

      const doNavigate = () => navigate(to);

      const delayMode = loading?.delayMode ?? "raf";
      if (delayMode === "timeout") {
        setTimeout(doNavigate, 0);
        return;
      }

      requestAnimationFrame(() => doNavigate());
    },
    [loading, navigate, onClick, skipIfSamePath, start, to],
  );

  return <NavLink to={to} onClick={handleClick} {...rest} />;
}
