"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Eyebrow } from "@/components/shared/eyebrow";
import { CtaButton } from "@/components/shared/cta-button";
import { fadeUp } from "@/lib/motion";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const videoOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <div
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <motion.video
        autoPlay
        muted
        loop
        playsInline
        poster="/robots/aria-table-top.jpg"
        style={{ scale: videoScale, opacity: videoOpacity }}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/video/home-hero.mp4" type="video/mp4" />
      </motion.video>
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/40"
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="page-container relative flex flex-col items-center gap-6 pt-24 text-center md:pt-16"
      >
        <h1 className="mx-auto max-w-6xl font-display text-display font-medium tracking-[-0.05em] text-white">
          Revolutionizing <br />
          Human to Robot Interaction.
        </h1>
        <p className="mx-auto max-w-lg text-base text-white/80 sm:text-lg">
          Meet humanoid robots designed to make service more personal,
          engaging, and real.
        </p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <CtaButton href="#robots" variant="primary" arrow>
            Explore the lineup
          </CtaButton>
        </div>
      </motion.div>
    </div>
  );
}
