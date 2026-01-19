import React from "react";
import { Outlet } from "react-router";
import { BottomNav, MobileShell } from "./../../widgets/ui";
import { NavigationLoadingOverlay } from "./../../shared";

export default function MobileAppLayout(): React.JSX.Element {
  return (
    <>
      <MobileShell>
        <div
          style={{
            paddingBottom: "var(--bottom-nav-height, 64px)", // fallback aman
          }}
        >
          <Outlet />
        </div>
      </MobileShell>

      <BottomNav />
      <NavigationLoadingOverlay />
    </>
  );
}
