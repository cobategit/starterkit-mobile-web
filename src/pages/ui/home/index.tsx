import {
  BottomNav,
  UrgentCampaigns,
  QuickActions,
  DownloadCta,
  Hero,
  TopSearch,
  MobileShell,
} from "../../../widgets/ui";
import { type JSX } from "react";

export default function HomePage(): JSX.Element {
  return (
    <>
      <MobileShell>
        <TopSearch />
        <main className="pb-24">
          <Hero />
          <DownloadCta />
          <QuickActions />
          <UrgentCampaigns />
        </main>
      </MobileShell>

      <BottomNav />
    </>
  );
}
