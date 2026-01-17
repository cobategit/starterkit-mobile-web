import { useState, type JSX } from "react";
import {
  BottomNav,
  DownloadCta,
  Hero,
  // MobileShell,
  QuickActions,
  SeacrhHeader,
  UrgentCampaigns,
} from "../../../widgets/ui";

export default function SearchPage(): JSX.Element {
  const [q, setQ] = useState<string>("");

  return (
    <>
      {/* <MobileShell> */}
      <SeacrhHeader
        value={q}
        onChange={(e) => setQ(e.target.value)}
        onBack={() => history.back()}
      />
      <main className="px-0 pt-12 pb-10">
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
