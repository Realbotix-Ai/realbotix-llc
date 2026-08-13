import type { Metadata } from "next";
import { Section } from "@/components/shared/section";
import { Eyebrow } from "@/components/shared/eyebrow";
import { Reveal } from "@/components/shared/reveal";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Press Kit — Realbotix",
  description: "Realbotix press kit and brand assets.",
};

export default function PressKitPage() {
  return (
    <Section>
      <Reveal className="flex max-w-2xl flex-col gap-6">
        <Eyebrow>Press Kit</Eyebrow>
        <h1 className="font-display text-heading-lg font-medium text-fg-heading">
          Press Kit
        </h1>
        <p className="text-fg-secondary">Assets aren&rsquo;t published here yet.</p>
        <p className="text-sm text-fg-tertiary">
          For press inquiries, contact{" "}
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
