import type { Metadata } from "next";
import { Section } from "@/components/shared/section";
import { Eyebrow } from "@/components/shared/eyebrow";
import { Reveal } from "@/components/shared/reveal";
import { TABLETOP_CONFIG, FULL_BODY_CONFIG } from "@/data/configs";

export const metadata: Metadata = {
  title: "Technical Specifications — Realbotix",
  description: "Echo Gen 1 hardware specifications: tabletop and full-body configurations.",
};

const CONFIGS = [TABLETOP_CONFIG, FULL_BODY_CONFIG];

export default function TechnicalSpecificationsPage() {
  return (
    <Section>
      <Reveal className="flex max-w-2xl flex-col gap-4">
        <Eyebrow>Technical Specifications</Eyebrow>
        <h1 className="font-display text-heading-lg font-medium text-fg-heading">
          Echo Gen 1 Platform
        </h1>
        <p className="text-fg-secondary">
          Specs are identical across all four personas — Aria, Amar, Mila,
          and Dave. The difference between configurations is degrees of
          freedom, not capability.
        </p>
      </Reveal>

      <Reveal className="mt-12 overflow-x-auto">
        <table className="w-full min-w-[480px] border-collapse text-left">
          <thead>
            <tr className="border-b border-border-subtle text-xs uppercase tracking-wider text-fg-tertiary">
              <th className="py-3 font-normal">Configuration</th>
              <th className="py-3 font-normal">Degrees of freedom</th>
              <th className="py-3 font-normal">Starting price</th>
              <th className="py-3 font-normal">Deposit</th>
            </tr>
          </thead>
          <tbody>
            {CONFIGS.map((config) => (
              <tr key={config.id} className="border-b border-border-subtle">
                <td className="py-4 font-display text-lg font-medium text-fg-primary">
                  {config.label}
                </td>
                <td className="py-4 font-mono text-fg-secondary">
                  {config.degreesOfFreedom} DOF
                </td>
                <td className="py-4 font-mono text-fg-secondary">
                  ${config.startingPrice.toLocaleString()}
                </td>
                <td className="py-4 font-mono text-fg-secondary">
                  ${config.depositAmount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>
    </Section>
  );
}
