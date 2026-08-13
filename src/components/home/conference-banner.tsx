import Image from "next/image";
import { Reveal } from "@/components/shared/reveal";
import { CtaButton } from "@/components/shared/cta-button";

export function ConferenceBanner() {
  return (
    <div
      className="relative w-full"
      style={{ paddingTop: "var(--space-section-y)" }}
    >
      <Reveal className="relative aspect-[4/5] w-full sm:aspect-[16/9]">
        <Image
          src="/sections/rbx-robots-at-conference.jpg"
          alt="Realbotix robots meeting attendees at a live demo event"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent"
        />

        <div className="absolute inset-0 flex flex-col justify-end pt-6 pb-12 sm:pt-10 sm:pb-24">
          <div className="page-container flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-10">
            <h2 className="max-w-md font-display text-heading-lg font-medium text-white">
              One platform, built for the places people expect a human.
            </h2>
            <div className="flex max-w-xs flex-col gap-12 md:mr-12">
              <p className="text-md text-white/80">
                One robot doesn't fit every room. Four do. That's why we have
                different personalities for your needs.
              </p>
              <CtaButton
                href="mailto:hello@realbotix.com"
                variant="primary"
                arrow
                className="w-fit bg-white text-black hover:bg-white/90 hover:text-black"
              >
                Request a demo
              </CtaButton>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
