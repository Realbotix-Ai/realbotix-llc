import Image from "next/image";
import { Section } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { AnimatedArrow } from "@/components/shared/animated-arrow";

const VERSIONS = [
  {
    headline:
      "Perfect for counters and front desks, bring real conversation to every check-in with the Tabletop model.",
    buttonLabel: "Tabletop model",
    image: "/robots/aria-table-top.jpg",
    alt: "Echo Gen 1 tabletop version",
    degreesOfFreedom: 16,
    basePriceLabel: "$12,000",
  },
  {
    headline:
      "Built for lobbies and open floors, bring a full humanoid presence to any room with the Full-body model.",
    buttonLabel: "Full body model",
    image: "/sections/robot-sitting.jpg",
    alt: "Echo Gen 1 full-body version",
    degreesOfFreedom: 38,
    basePriceLabel: "$55,000",
  },
];

export function Versions() {
  return (
    <Section
      id="versions"
      paddingTop="clamp(3rem, 2rem + 2vw, 5rem)"
    >
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
        {VERSIONS.map(
          (
            { headline, buttonLabel, image, alt, basePriceLabel },
            index,
          ) => (
          <Reveal
            key={headline}
            delay={index * 0.1}
            className="flex flex-col items-center gap-10 text-center"
          >
            <p className="max-w-md pt-12 pb-6 text-base text-fg-secondary">{headline}</p>
            <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-[16px] bg-bg-surface-2">
              <Image
                src={image}
                alt={alt}
                fill
                className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-center pb-10">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black shadow-lg transition-transform duration-200 group-hover:scale-105"
                >
                  {buttonLabel}
                  <AnimatedArrow className="h-3 w-3" />
                </button>
              </div>
            </div>
            <p className="text-sm text-fg-tertiary">
              Starting from {basePriceLabel}. <span className="text-primary">Pre-order Now.</span>
            </p>
          </Reveal>
          ),
        )}
      </div>
    </Section>
  );
}
