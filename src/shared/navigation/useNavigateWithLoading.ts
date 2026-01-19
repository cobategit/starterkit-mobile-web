import { useCallback } from "react";
import { type NavigateOptions, type To, useNavigate } from "react-router";
import { type NavLoadingOptions, useNavLoadingStore } from "./navLoadingStore";

export type NavigateWithLoadingOptions = NavigateOptions & {
    loading?: NavLoadingOptions;
};

export function useNavigateWithLoading() {
    const navigate = useNavigate();
    const start = useNavLoadingStore((s) => s.start);

    return useCallback(
        (to: To | number, options?: NavigateWithLoadingOptions) => {
            start(options?.loading);

            const doNavigate = () => {
                if (typeof to === "number") return navigate(to);
                return navigate(to, options);
            };

            const delayMode = options?.loading?.delayMode ?? "raf";
            if (delayMode === "timeout") {
                setTimeout(doNavigate, 0);
                return;
            }

            requestAnimationFrame(() => doNavigate());
        },
        [navigate, start]
    );
}
