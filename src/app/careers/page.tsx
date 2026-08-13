import type { Metadata } from "next";
import { Section } from "@/components/shared/section";
import { Eyebrow } from "@/components/shared/eyebrow";
import { Reveal } from "@/components/shared/reveal";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Careers — Realbotix",
  description: "Careers at Realbotix.",
};

export default function CareersPage() {
  return (
    <Section size="content">
      <Reveal className="flex flex-col gap-6">
        <Eyebrow>Careers</Eyebrow>
        <h1 className="font-display text-heading-lg font-medium text-fg-heading">
          Careers
        </h1>
        <p className="text-fg-secondary">No open roles listed yet — check back soon.</p>
        <p className="text-sm text-fg-tertiary">
          Interested in working with us? Reach out at{" "}
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
