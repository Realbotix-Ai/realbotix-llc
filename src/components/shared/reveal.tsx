"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, staggerContainer } from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li";
}

export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const sharedProps = {
    className,
    initial: "hidden" as const,
    whileInView: "visible" as const,
    viewport: { once: true, margin: "-80px" },
    variants: fadeUp,
    transition: { delay },
  };

  if (as === "li") {
    return <motion.li {...sharedProps}>{children}</motion.li>;
  }

  return <motion.div {...sharedProps}>{children}</motion.div>;
}

interface RevealGroupProps {
  children: ReactNode;
  className?: string;
}

export function RevealGroup({ children, className }: RevealGroupProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className }: RevealProps) {
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  );
}
