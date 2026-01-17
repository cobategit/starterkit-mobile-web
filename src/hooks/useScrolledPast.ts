import { useEffect, useState } from "react";

type UseScrolledPastOptions = {
    offset?: number; // px
};

export function useScrolledPast(options: UseScrolledPastOptions = {}): boolean {
    const { offset = 12 } = options;
    const [scrolled, setScrolled] = useState<boolean>(false);

    useEffect(() => {
        let rafId: number | null = null;

        const update = () => {
            rafId = null;
            setScrolled(window.scrollY > offset);
        };

        const onScroll = () => {
            if (rafId !== null) return;
            rafId = window.requestAnimationFrame(update);
        };

        update();
        window.addEventListener("scroll", onScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", onScroll);
            if (rafId !== null) window.cancelAnimationFrame(rafId);
        };
    }, [offset]);

    return scrolled;
}
