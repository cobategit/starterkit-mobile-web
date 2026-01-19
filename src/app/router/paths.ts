export const PATHS = {
    HOME: "/",
    SEARCH: "/search",
    HISTORY: "/riwayat",
    ACCOUNT: "/akun"
} as const;

export type AppPath = (typeof PATHS)[keyof typeof PATHS];