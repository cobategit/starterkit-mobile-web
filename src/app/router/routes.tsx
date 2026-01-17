import { type JSX } from "react";
import { lazy, Suspense } from "react";
import type { RouteObject } from "react-router";
import { Navigate } from "react-router";
import { PATHS } from "./paths";
import MobileAppLayout from "../layouts/MobileApp";
import PageLoader from "./pageLoader";

// Lazy pages
const HomePage = lazy(() => import("../../pages/ui/home"));
const SearchPage = lazy(() => import("../../pages/ui/search"));
const NotFoundPage = lazy(() => import("../../pages/ui/notFound"));

function withSuspense(element: JSX.Element): JSX.Element {
  return <Suspense fallback={<PageLoader />}>{element}</Suspense>;
}

export const routes: RouteObject[] = [
  {
    element: <MobileAppLayout />,
    children: [
      { index: true, element: withSuspense(<HomePage />) },
      { path: PATHS.SEARCH, element: withSuspense(<SearchPage />) },
      { path: "/home", element: <Navigate to={PATHS.HOME} replace /> },
    ],
  },
  { path: "*", element: withSuspense(<NotFoundPage />) },
];
