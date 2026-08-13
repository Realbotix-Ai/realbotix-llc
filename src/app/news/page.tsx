import type { Metadata } from "next";
import { Section } from "@/components/shared/section";
import { Eyebrow } from "@/components/shared/eyebrow";
import { Reveal } from "@/components/shared/reveal";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "News — Realbotix",
  description: "Realbotix news and press.",
};

export default function NewsPage() {
  return (
    <Section>
      <Reveal className="flex max-w-2xl flex-col gap-6">
        <Eyebrow>News</Eyebrow>
        <h1 className="font-display text-heading-lg font-medium text-fg-heading">
          News
        </h1>
        <p className="text-fg-secondary">
          Nothing published yet — check back soon.
        </p>
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
