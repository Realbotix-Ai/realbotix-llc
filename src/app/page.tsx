import { Hero } from "@/components/home/hero";
import { TrustedBy } from "@/components/home/trusted-by";
import { ExploreCollections } from "@/components/home/explore-collections";
import { LineupHotspots } from "@/components/home/lineup-hotspots";
import { ConferenceBanner } from "@/components/home/conference-banner";
import { Versions } from "@/components/home/versions";
import { LaunchOffer } from "@/components/home/launch-offer";
import { NewsScroller } from "@/components/home/news-scroller";
import { CompanyTeaser } from "@/components/home/company-teaser";
import { ClosingCta } from "@/components/home/closing-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <LineupHotspots />
      <Versions />

      {/* <ExploreCollections /> */}
      <ConferenceBanner />
      <NewsScroller />

      <CompanyTeaser />
      <ClosingCta />
      <LaunchOffer />
    </>
  );
}
