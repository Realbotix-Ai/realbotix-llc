import Image from "next/image";
import { Section } from "@/components/shared/section";
import { Eyebrow } from "@/components/shared/eyebrow";
import { Reveal } from "@/components/shared/reveal";

// All source files share the same 498x280 canvas with the mark
// centered on matching padding — so one fixed aspect-ratio box (rather
// than per-logo sizing) is what keeps them visually consistent.
const LOGOS = [
  { name: "Bloomberg", src: "/brands/bloomberg-logo.png" },
  { name: "Nvidia", src: "/brands/nvidia-logo.png" },
  { name: "Ericsson", src: "/brands/ericsson-logo.png" },
  { name: "Tix4", src: "/brands/tix4-logo.png" },
  { name: "Netflix", src: "/brands/netflix-logo.png" },
];

export function TrustedBy() {
  return (
    <Section
      paddingTop="clamp(2rem, 1.5rem + 2vw, 3.5rem)"
      paddingBottom="clamp(2rem, 1.5rem + 2vw, 3.5rem)"
      containerClassName="flex flex-col items-center gap-4"
    >
      <Reveal>
        <Eyebrow>Trusted by</Eyebrow>
      </Reveal>

      {/* Static row for now — only 5 brands. Once there are enough to
          loop convincingly, wrap this in the overflow-hidden/edge-fade
          treatment and render [...LOGOS, ...LOGOS] with the
          `animate-marquee` utility (still defined in globals.css). */}
      <Reveal
        delay={0.1}
        className="flex w-full flex-wrap items-center justify-center gap-x-16 gap-y-6 sm:gap-x-24"
      >
        {LOGOS.map((logo) => (
          <div
            key={logo.src}
            className="relative aspect-[498/280] h-24 shrink-0 transition duration-300 hover:opacity-100 hover:grayscale-0 sm:h-20"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              fill
              className="object-contain"
              sizes="180px"
            />
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
