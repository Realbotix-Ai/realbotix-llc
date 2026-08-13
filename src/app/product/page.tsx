import type { Metadata } from "next";
import { Section } from "@/components/shared/section";
import { Eyebrow } from "@/components/shared/eyebrow";
import { Reveal } from "@/components/shared/reveal";
import { PersonaCard } from "@/components/products/persona-card";
import { ROBOTS } from "@/data/robots";
import { TABLETOP_CONFIG, FULL_BODY_CONFIG } from "@/data/configs";

export const metadata: Metadata = {
  title: "Product — Realbotix",
  description:
    "The Echo Gen 1 platform: four conversational-AI personas, available as tabletop or full-body hardware.",
};

export default function ProductPage() {
  return (
    <Section>
      <Reveal className="flex max-w-2xl flex-col gap-4">
        <Eyebrow>Product</Eyebrow>
        <h1 className="font-display text-heading-lg font-medium text-fg-heading">
          Echo Gen 1 Platform
        </h1>
        <p className="text-fg-secondary">
          Four personas — Aria, Amar, Mila, and Dave — built on the same
          hardware platform. Each is general-purpose: any of them can be
          deployed across hospitality, education, wellness, or corporate
          settings.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {ROBOTS.map((persona) => (
          <PersonaCard key={persona.slug} persona={persona} />
        ))}
      </div>

      <Reveal className="mt-20 flex flex-col gap-6 border-t border-border-subtle pt-10">
        <h2 className="font-display text-2xl font-medium text-fg-heading">
          Configurations
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-[16px] bg-bg-surface p-6">
            <h3 className="font-display text-lg font-medium text-fg-heading">
              {TABLETOP_CONFIG.label}
            </h3>
            <p className="mt-1 text-sm text-fg-secondary">
              {TABLETOP_CONFIG.degreesOfFreedom} degrees of freedom
            </p>
            <p className="mt-4 font-mono text-2xl text-fg-primary">
              ${TABLETOP_CONFIG.startingPrice.toLocaleString()}
            </p>
            <p className="text-xs text-fg-tertiary">
              starting price — ${TABLETOP_CONFIG.depositAmount} deposit to reserve
            </p>
          </div>
          <div className="rounded-[16px] bg-bg-surface p-6">
            <h3 className="font-display text-lg font-medium text-fg-heading">
              {FULL_BODY_CONFIG.label}
            </h3>
            <p className="mt-1 text-sm text-fg-secondary">
              {FULL_BODY_CONFIG.degreesOfFreedom} degrees of freedom
            </p>
            <p className="mt-4 font-mono text-2xl text-fg-primary">
              ${FULL_BODY_CONFIG.startingPrice.toLocaleString()}
            </p>
            <p className="text-xs text-fg-tertiary">
              starting price — ${FULL_BODY_CONFIG.depositAmount} deposit to reserve
            </p>
          </div>
        </div>
        <p className="text-sm text-fg-tertiary">
          DoF and starting price are identical across all four personas.
          Purchases are pre-orders.
        </p>
      </Reveal>
    </Section>
  );
}
