export const PATHS = {
    HOME: "/",
    SEARCH: "/search",
} as const;

export type AppPath = (typeof PATHS)[keyof typeof PATHS];