import { Section } from "@/components/shared/section";
import { Eyebrow } from "@/components/shared/eyebrow";
import { Reveal } from "@/components/shared/reveal";
import { CtaButton } from "@/components/shared/cta-button";

export function ClosingCta() {
  return (
    <Section variant="base" className="relative overflow-hidden">
      <Reveal className="relative mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
        {/* <Eyebrow tone="signature">Get Started</Eyebrow> */}
        <h2 className="font-display text-heading-lg font-medium text-fg-heading">
          Put a robot on the front line.
        </h2>
        <p className="text-fg-secondary">
          Reserve a robot with a $250 deposit, or talk to the team about
          deploying Realbotix across your locations.
        </p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <CtaButton href="#robots" variant="primary">
            Explore the robots
          </CtaButton>
          <CtaButton href="mailto:hello@realbotix.com" variant="secondary">
            Talk to sales
          </CtaButton>
        </div>
      </Reveal>
    </Section>
  );
}
