import { useScrolledPast } from "../../../hooks/useScrolledPast";
import {
  BottomNav,
  UrgentCampaigns,
  QuickActions,
  DownloadCta,
  Hero,
  // MobileShell,
  DirectToSearchPage,
} from "../../../widgets/ui";
import { type JSX } from "react";

export default function HomePage(): JSX.Element {
  const solidHeader = useScrolledPast({ offset: 15 });

  return (
    <>
      {/* <MobileShell> */}
      <DirectToSearchPage solid={solidHeader} />
      <main className="px-0 mt-0 pb-10">
        <Hero />
        <DownloadCta />
        <QuickActions />
        <UrgentCampaigns />
      </main>
      {/* </MobileShell> */}

      <BottomNav />
    </>
  );
}
