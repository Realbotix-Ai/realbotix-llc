import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { AnimatedArrow } from "@/components/shared/animated-arrow";
import { ROBOTS } from "@/data/robots";

// Approximate positions over each bust in /robots/echo-lineup-1.png —
// recalibrate if the source photo changes.
const HOTSPOTS = [
  { persona: ROBOTS[1], top: "40%", left: "16%" },
  { persona: ROBOTS[0], top: "64%", left: "39%" },
  { persona: ROBOTS[2], top: "65%", left: "61%" },
  { persona: ROBOTS[3], top: "46%", left: "84%" },
];

export function LineupHotspots() {
  return (
    <Section
      id="lineup-hotspots"
      variant="surface"
      paddingTop="clamp(4rem, 3rem + 3vw, 7rem)"
      paddingBottom="clamp(4rem, 3rem + 3vw, 7rem)"
    >
      <Reveal className="flex flex-col items-center gap-4 text-center">
        <h2 className="max-w-2xl font-display text-heading-lg font-medium text-fg-heading">
          Introducing <span className="text-primary">Echo Generation</span>,
          where every robot has its own personality.
        </h2>
      </Reveal>

      <Reveal
        delay={0.1}
        className="relative mt-18 aspect-[16/9] w-full overflow-hidden rounded-[16px] bg-bg-surface-2"
      >
        <Image
          src="/robots/echo-lineup-1.png"
          alt="The Echo Gen 1 persona lineup"
          fill
          className="object-cover"
          sizes="100vw"
        />

        {HOTSPOTS.map(({ persona, top, left }) => (
          <Link
            key={persona.slug}
            href="/product"
            className="group absolute z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
            style={{ top, left }}
          >
            <span className="sr-only">View {persona.name}</span>
            <span
              aria-hidden
              className="absolute top-1/2 left-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/50 blur-md"
            />
            <span
              aria-hidden
              className="absolute top-1/2 left-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-white opacity-75"
            />
            <span
              aria-hidden
              className="relative h-3 w-3 rounded-full bg-white transition-transform duration-200 group-hover:scale-110"
            />

            <div className="group/box pointer-events-none absolute top-full left-1/2 z-20 mt-3 w-56 -translate-x-1/2 rounded-lg bg-bg-base p-4 text-left opacity-0 shadow-xl transition-opacity duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
              <p className="font-display text-base font-medium text-fg-primary">
                {persona.name}
              </p>
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {persona.configs.map((config) => (
                  <span
                    key={config.id}
                    className={
                      config.id === "tabletop"
                        ? "rounded-full bg-yellow-100 px-2 py-0.5 text-[10px] font-medium text-yellow-700"
                        : "rounded-full bg-bg-surface-2 px-2 py-0.5 text-[10px] font-medium text-fg-secondary"
                    }
                  >
                    {config.label}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between gap-2">
                <p className="text-xs font-medium text-fg-secondary">
                  From ${persona.configs[0].startingPrice.toLocaleString()}
                </p>
                <AnimatedArrow
                  className="h-3 w-3 text-fg-primary"
                  groupName="box"
                />
              </div>
            </div>
          </Link>
        ))}
      </Reveal>
    </Section>
  );
}
