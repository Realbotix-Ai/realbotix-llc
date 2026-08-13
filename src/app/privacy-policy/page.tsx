import type { Metadata } from "next";
import { Section } from "@/components/shared/section";
import { Eyebrow } from "@/components/shared/eyebrow";
import { Reveal } from "@/components/shared/reveal";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy — Realbotix",
  description: "Realbotix privacy policy.",
};

export default function PrivacyPolicyPage() {
  return (
    <Section size="content">
      <Reveal className="flex flex-col gap-6">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="font-display text-heading-lg font-medium text-fg-heading">
          Privacy Policy
        </h1>
        <p className="text-fg-secondary">Not published here yet.</p>
        <p className="text-sm text-fg-tertiary">
          Questions about data or privacy? Contact{" "}
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
