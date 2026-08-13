import Image from "next/image";
import { Reveal } from "@/components/shared/reveal";
import { CtaButton } from "@/components/shared/cta-button";
import { LocationBadge } from "@/components/shared/location-badge";

export function CompanyTeaser() {
  return (
    <div
      className="relative w-full"
      style={{ paddingTop: "var(--space-section-y)" }}
    >
      <Reveal className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[16/9]">
        <Image
          src="/sections/aria-robot-brain-shot.jpg"
          alt="Underneath a Realbotix persona's scalp, showing the electronics assembled in-house"
          fill
          className="object-cover object-[32%_28%]"
          sizes="100vw"
        />
        <div aria-hidden className="absolute inset-0 bg-black/55" />

        <LocationBadge className="absolute right-5 top-5 sm:right-8 sm:top-8" />

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-6 text-center sm:gap-6">
          <h2 className="max-w-lg font-display text-heading-lg font-medium text-white">
            Every robot begins on a workbench in Las Vegas, USA.
          </h2>
          <p className="max-w-lg text-base text-white/80">
            We build reliable humanoid robots and conversational AI for genuine
            connection and performance, wherever you need them.
          </p>
          <CtaButton
            href="/company"
            variant="primary"
            arrow
            className="w-fit bg-white text-black hover:bg-white/90 hover:text-black"
          >
            About us
          </CtaButton>
        </div>
      </Reveal>
    </div>
  );
}
