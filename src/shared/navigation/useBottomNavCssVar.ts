import { type RefObject, useLayoutEffect } from "react";

type Options = {
    cssVarName?: string; // default: --bottom-nav-height
};

export function useBottomNavCssVar(
    navRef: RefObject<HTMLElement | null>,
    options?: Options
): void {
    const cssVarName = options?.cssVarName ?? "--bottom-nav-height";

    useLayoutEffect(() => {
        const el = navRef?.current;
        if (!el) return;

        const update = () => {
            const height = Math.ceil(el.getBoundingClientRect().height);
            document.documentElement.style.setProperty(cssVarName, `${height}px`);
        };

        update();

        const ro = new ResizeObserver(() => update());
        ro.observe(el);

        window.addEventListener("resize", update);

        return () => {
            ro.disconnect();
            window.removeEventListener("resize", update);
        };
    }, [navRef, cssVarName]);
}
