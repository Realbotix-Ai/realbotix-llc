import type { Metadata } from "next";
import { Section } from "@/components/shared/section";
import { Eyebrow } from "@/components/shared/eyebrow";
import { Reveal } from "@/components/shared/reveal";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Company — Realbotix",
  description: SITE.description,
};

export default function CompanyPage() {
  return (
    <Section size="content">
      <Reveal className="flex flex-col gap-6">
        <Eyebrow>Company</Eyebrow>
        <h1 className="font-display text-heading-lg font-medium text-fg-heading">
          About Realbotix
        </h1>
        <p className="text-fg-secondary">
          Realbotix makes humanoid robots powered by conversational AI for
          the service sector. Our Echo Gen 1 platform is built around four
          distinct personas — Aria, Amar, Mila, and Dave — each with their
          own face, personality, and voice, so teams can put a robot forward
          that actually fits the room it&rsquo;s working in.
        </p>
        <p className="text-fg-secondary">
          Every robot ships with the Realbotix app, which powers AI avatar
          conversation with or without a physical robot connected, and can
          be upgraded with Vinci — our patented AI vision and eye-tracking
          system built to help a robot build trust through maintained gaze.
        </p>
        <p className="text-fg-secondary">
          Have a question, a partnership idea, or want to talk deployment?
          Reach us at{" "}
          <a
            href={`mailto:${SITE.contactEmail}`}
            className="text-primary hover:text-primary-hover"
          >
            {SITE.contactEmail}
          </a>
          .
        </p>
      </Reveal>
    </Section>
  );
}
