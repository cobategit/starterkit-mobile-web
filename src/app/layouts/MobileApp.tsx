import React from "react";
import { Outlet } from "react-router";
import { MobileShell } from "./../../widgets/ui";

export default function MobileAppLayout(): React.JSX.Element {
  return (
    <>
      <MobileShell>
        <Outlet />
      </MobileShell>

      {/* <BottomNav /> */}
    </>
  );
}
