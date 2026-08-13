import Image from "next/image";
import type { Persona } from "@/types/robot";
import { CtaButton } from "@/components/shared/cta-button";

export function PersonaCard({ persona }: { persona: Persona }) {
  const tabletop = persona.configs.find((config) => config.id === "tabletop")!;

  return (
    <div className="flex h-full flex-col gap-6 text-center">
      <div className="relative mx-auto aspect-square w-full max-w-[220px] overflow-hidden rounded-[16px] bg-bg-surface-2">
        <Image
          src={`/robots/${persona.slug}-table-top.jpg`}
          alt={`${persona.name}, a Realbotix Echo Gen 1 tabletop robot`}
          fill
          className="object-cover"
          sizes="220px"
        />
      </div>

      <div className="flex flex-1 flex-col gap-4">
        <div>
          <h3 className="font-display text-2xl font-medium text-fg-heading">
            {persona.name}
          </h3>
          <p className="text-sm font-medium" style={{ color: persona.accentColor }}>
            {persona.tagline}
          </p>
        </div>

        <p className="text-sm leading-relaxed text-fg-secondary">
          {persona.bio}
        </p>

        <p className="text-xs text-fg-tertiary">
          {persona.personalityTraits.join(" · ")} — {persona.voiceAccent}
        </p>

        <CtaButton
          shopifyHandle={tabletop.shopifyHandle}
          campaign={`persona-${persona.slug}`}
          content="card-reserve"
          variant="secondary"
          className="mt-auto w-full"
        >
          Reserve {persona.name}
        </CtaButton>
      </div>
    </div>
  );
}
