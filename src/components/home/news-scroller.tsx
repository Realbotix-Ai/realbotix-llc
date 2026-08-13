"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { animate, motion, useMotionValue, useSpring } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Section } from "@/components/shared/section";
import { AnimatedArrow } from "@/components/shared/animated-arrow";

interface TextCard {
  type: "text";
  headline: string;
  description: string;
}

interface ImageCard {
  type: "image";
  src: string;
  alt: string;
}

const CARDS: (TextCard | ImageCard)[] = [
  {
    type: "text",
    headline: "Meeting the crowd",
    description:
      "Every appearance draws phones out. Aria and Amar have been demoed live at classrooms and expos across the country.",
  },
  {
    type: "image",
    src: "/sections/rbx-conference-2.jpg",
    alt: "A crowd photographing a Realbotix persona at a live demo",
  },
  {
    type: "text",
    headline: "On the town",
    description:
      "From Times Square to trade show floors, Echo Gen 1 holds up outside the lab too.",
  },
  {
    type: "image",
    src: "/sections/aria-in-newyork.jpg",
    alt: "Aria, a Realbotix persona, standing in Times Square",
  },
  {
    type: "text",
    headline: "Built face-first",
    description:
      "Every persona starts with a face — modeled, lit, and finished before a single line of code runs.",
  },
  {
    type: "image",
    src: "/sections/aria-robot-brain-shot.jpg",
    alt: "Profile view of a Realbotix persona showing the internal electronics beneath the scalp",
  },
];

export function NewsScroller() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [maxDrag, setMaxDrag] = useState(0);
  const [thumb, setThumb] = useState({ width: 100, left: 0 });
  const [hovering, setHovering] = useState(false);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const cursorSpringX = useSpring(cursorX, { damping: 30, stiffness: 240 });
  const cursorSpringY = useSpring(cursorY, { damping: 30, stiffness: 240 });

  const handleMouseMove = (event: React.MouseEvent) => {
    cursorX.set(event.clientX);
    cursorY.set(event.clientY);
  };

  useEffect(() => {
    const measure = () => {
      const container = containerRef.current;
      const track = trackRef.current;
      if (!container || !track) return;
      setMaxDrag(Math.max(0, track.scrollWidth - container.offsetWidth));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    const updateThumb = (latest: number) => {
      const container = containerRef.current;
      const track = trackRef.current;
      if (!container || !track) return;
      const widthPercent = Math.min(100, (container.offsetWidth / track.scrollWidth) * 100);
      const progress = maxDrag > 0 ? Math.min(1, Math.max(0, -latest / maxDrag)) : 0;
      setThumb({ width: widthPercent, left: progress * (100 - widthPercent) });
    };
    updateThumb(x.get());
    return x.on("change", updateThumb);
  }, [x, maxDrag]);

  const handleWheel = (event: React.WheelEvent) => {
    const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
    if (delta === 0 || maxDrag === 0) return;
    event.preventDefault();
    const target = Math.min(0, Math.max(-maxDrag, x.get() - delta));
    animate(x, target, { type: "spring", stiffness: 200, damping: 40 });
  };

  return (
    <Section paddingTop="clamp(4rem, 3rem + 3vw, 7rem)">
      <div
        ref={containerRef}
        onWheel={handleWheel}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        onMouseMove={handleMouseMove}
        className="cursor-none overflow-hidden"
      >
        <motion.div
          ref={trackRef}
          drag="x"
          dragConstraints={{ left: -maxDrag, right: 0 }}
          dragElastic={0.12}
          dragTransition={{ power: 0.3, timeConstant: 260 }}
          style={{ x }}
          className="flex w-max gap-6 pb-4"
        >
          {CARDS.map((card, index) =>
            card.type === "text" ? (
              <div
                key={index}
                className="flex h-[480px] w-[340px] shrink-0 select-none flex-col justify-between rounded-[16px] bg-bg-surface-2 p-8 sm:w-[420px]"
              >
                <h3 className="font-display text-heading-lg font-medium text-fg-heading">
                  {card.headline}
                </h3>
                <div className="flex flex-col gap-4">
                  <p className="text-sm text-fg-secondary">{card.description}</p>
                  <Link
                    href="/news"
                    draggable={false}
                    className="group inline-flex w-fit cursor-none items-center gap-2 rounded-full bg-fg-primary px-5 py-2.5 text-sm font-medium text-bg-base"
                  >
                    See more
                    <AnimatedArrow className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ) : (
              <div
                key={index}
                className="relative h-[480px] w-[340px] shrink-0 select-none overflow-hidden rounded-[16px] sm:w-[420px]"
              >
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  draggable={false}
                  className="object-cover"
                  sizes="420px"
                />
              </div>
            ),
          )}
        </motion.div>
      </div>

      <motion.div
        style={{ x: cursorSpringX, y: cursorSpringY }}
        animate={{ opacity: hovering ? 1 : 0, scale: hovering ? 1 : 0.85 }}
        transition={{ duration: 0.2 }}
        className="pointer-events-none fixed left-0 top-0 z-50 -translate-x-1/2 -translate-y-1/2"
      >
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-medium text-black shadow-lg">
          <ChevronLeft className="h-3.5 w-3.5" />
          Drag
          <ChevronRight className="h-3.5 w-3.5" />
        </span>
      </motion.div>

      <div className="relative mt-12 h-1 w-full overflow-hidden rounded-full bg-border-subtle">
        <div
          className="absolute h-full rounded-full bg-fg-primary"
          style={{ width: `${thumb.width}%`, left: `${thumb.left}%` }}
        />
      </div>
    </Section>
  );
}
