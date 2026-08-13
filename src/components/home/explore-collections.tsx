import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/shared/section";
import { Eyebrow } from "@/components/shared/eyebrow";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  { label: "Tabletop Robot", count: "04", href: "/product" },
  { label: "Full Body Robot", count: "04", href: "/#subscriptions" },
];

export function ExploreCollections() {
  return (
    <Section id="explore-collections">
      <Reveal className="flex flex-col items-center gap-4 text-center">
        <Eyebrow>Collections</Eyebrow>
        <h2 className="max-w-xl font-display text-heading-lg font-medium text-fg-heading">
          Find the right way to bring Echo Gen 1 to your team
        </h2>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <Reveal
          delay={0.1}
          className="relative aspect-[16/9] w-full overflow-hidden rounded-[16px] bg-bg-surface-2"
        >
          <Image
            src="/sections/rbx-robots-at-conference.jpg"
            alt="Realbotix humanoid robots on display"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </Reveal>

        <Reveal delay={0.15} className="flex flex-col">
          {CATEGORIES.map(({ label, count, href }, index) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "group flex items-baseline justify-between gap-4 border-b border-border-subtle py-4 transition-colors first:pt-0 last:border-b-0",
                index === 0
                  ? "text-fg-primary"
                  : "text-fg-tertiary hover:text-fg-primary",
              )}
            >
              <span className="font-display text-heading-lg font-medium tracking-tight">
                {label}
              </span>
              <span className="font-mono text-xs text-fg-tertiary transition-colors group-hover:text-fg-secondary">
                ({count})
              </span>
            </Link>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
