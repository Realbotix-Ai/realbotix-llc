"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { CtaButton } from "@/components/shared/cta-button";

// First Echo Gen 1 production run — adjust as the real cutoff firms up.
const TARGET_DATE = new Date("2026-09-10T00:00:00");

const IMAGES = [
  {
    src: "/sections/lineup-small.jpg",
    alt: "Echo Gen 1 lineup",
  },
  {
    src: "/sections/discover-1.jpg",
    alt: "Team members interacting with a robotic arm",
  },
  {
    src: "/sections/discover-2.jpg",
    alt: "A small robot",
  },
];

interface Remaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getRemaining(): Remaining {
  const diff = Math.max(0, TARGET_DATE.getTime() - Date.now());
  const totalSeconds = Math.floor(diff / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

function useCountdown(): Remaining | null {
  const [remaining, setRemaining] = useState<Remaining | null>(null);

  useEffect(() => {
    setRemaining(getRemaining());
    const interval = setInterval(() => setRemaining(getRemaining()), 1000);
    return () => clearInterval(interval);
  }, []);

  return remaining;
}

function CountdownUnit({
  value,
  label,
}: {
  value: number | null;
  label: string;
}) {
  return (
    <div className="flex min-w-[3.75rem] flex-col items-center justify-center gap-1 rounded-[0.75rem] bg-white/10 px-3 py-3 sm:min-w-[4.5rem] sm:px-4 sm:py-4">
      <span className="font-mono text-2xl font-medium tabular-nums text-white sm:text-3xl">
        {value === null ? "--" : String(value).padStart(2, "0")}
      </span>
      <span className="text-[11px] uppercase tracking-wider text-white/60">
        {label}
      </span>
    </div>
  );
}

export function LaunchOffer() {
  const remaining = useCountdown();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const cursorSpringX = useSpring(cursorX, { damping: 25, stiffness: 300 });
  const cursorSpringY = useSpring(cursorY, { damping: 25, stiffness: 300 });

  const handleMouseMove = (event: React.MouseEvent) => {
    cursorX.set(event.clientX);
    cursorY.set(event.clientY);
  };

  return (
    <div className="relative w-full">
      <div
        className="page-container grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6"
        style={{ paddingTop: "var(--space-section-y)" }}
      >
        <Reveal className="relative flex aspect-[6/5] flex-col items-center justify-center gap-6 rounded-[16px] bg-primary p-6 text-center sm:p-8">
          <div className="flex justify-center gap-2 sm:gap-3">
            <CountdownUnit value={remaining?.days ?? null} label="Days" />
            <CountdownUnit value={remaining?.hours ?? null} label="Hours" />
            <CountdownUnit value={remaining?.minutes ?? null} label="Minutes" />
            <CountdownUnit value={remaining?.seconds ?? null} label="Seconds" />
          </div>

          <div className="flex flex-col mt-4 items-center gap-3">
            <h2 className="font-display text-heading-md font-medium text-white">
              Launch Offer
            </h2>
            <p className="max-w-sm text-sm text-white/80">
              Reserve your Echo Gen 1 before the first production run closes — a
              $250 deposit holds your place.
            </p>
            <CtaButton
              shopifyHandle="aria-tabletop"
              campaign="founding-reserve"
              variant="primary"
              arrow
              className="mt-4 w-fit bg-white text-black hover:bg-white/90 hover:text-black"
            >
              Reserve now
            </CtaButton>
          </div>
        </Reveal>

        {IMAGES.map((image, index) => (
          <Reveal
            key={image.src}
            delay={(index + 1) * 0.1}
            className="relative aspect-[6/5] w-full cursor-none overflow-hidden rounded-[16px] bg-bg-surface-2"
          >
            <div
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onMouseMove={handleMouseMove}
              className="group absolute inset-0"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                sizes="(min-width: 640px) 50vw, 100vw"
              />
            </div>
          </Reveal>
        ))}
      </div>

      <motion.div
        style={{ x: cursorSpringX, y: cursorSpringY }}
        animate={{
          opacity: hoveredIndex !== null ? 1 : 0,
          scale: hoveredIndex !== null ? 1 : 0.85,
        }}
        transition={{ duration: 0.2 }}
        className="pointer-events-none fixed left-0 top-0 z-50 -translate-x-1/2 -translate-y-1/2"
      >
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-medium text-black shadow-lg">
          Discover
          <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </motion.div>
    </div>
  );
}
