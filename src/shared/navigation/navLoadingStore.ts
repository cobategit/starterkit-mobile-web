import { create } from "zustand";

export type NavLoadingOptions = {
    message?: string;
    minDurationMs?: number; // anti flicker
    maxDurationMs?: number; // safety timeout
    delayMode?: "raf" | "timeout";
};

type NavLoadingState = {
    isLoading: boolean;
    message: string | null;
    requestId: number;
    startedAt: number;
    minDurationMs: number;

    start: (opts?: NavLoadingOptions) => number;
    stop: (requestId?: number) => void;
};

let minTimer: ReturnType<typeof setTimeout> | undefined;
let maxTimer: ReturnType<typeof setTimeout> | undefined;

export const useNavLoadingStore = create<NavLoadingState>((set, get) => ({
    isLoading: false,
    message: null,
    requestId: 0,
    startedAt: 0,
    minDurationMs: 0,

    start: (opts) => {
        if (minTimer) clearTimeout(minTimer);
        if (maxTimer) clearTimeout(maxTimer);

        const nextId = get().requestId + 1;
        const now = Date.now();
        const minDurationMs = opts?.minDurationMs ?? 250;
        const maxDurationMs = opts?.maxDurationMs ?? 15000;

        set({
            isLoading: true,
            message: opts?.message ?? null,
            requestId: nextId,
            startedAt: now,
            minDurationMs
        });

        maxTimer = setTimeout(() => {
            get().stop(nextId);
        }, maxDurationMs);

        return nextId;
    },

    stop: (rid) => {
        const state = get();
        if (rid !== undefined && rid !== state.requestId) return;

        const elapsed = Date.now() - state.startedAt;
        const remaining = Math.max(0, state.minDurationMs - elapsed);

        if (minTimer) clearTimeout(minTimer);
        if (maxTimer) clearTimeout(maxTimer);

        if (remaining > 0) {
            minTimer = setTimeout(() => {
                set({ isLoading: false, message: null });
            }, remaining);
            return;
        }

        set({ isLoading: false, message: null });
    }
}));
