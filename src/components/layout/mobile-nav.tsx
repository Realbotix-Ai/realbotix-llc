"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_LINKS } from "@/data/site";
import { CtaButton } from "@/components/shared/cta-button";
import { AnimatedArrow } from "@/components/shared/animated-arrow";
import { cn } from "@/lib/utils";

export function MobileNav({ overDarkHero = false }: { overDarkHero?: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label="Open menu"
        className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
      >
        <span className={cn("h-px w-5", overDarkHero ? "bg-white" : "bg-fg-primary")} />
        <span className={cn("h-px w-5", overDarkHero ? "bg-white" : "bg-fg-primary")} />
      </SheetTrigger>
      <SheetContent side="right" className="w-full max-w-xs border-border-subtle bg-bg-base">
        <SheetHeader>
          <SheetTitle className="font-mono text-xs uppercase tracking-[0.2em] text-fg-tertiary">
            Menu
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-6 px-6 pt-4">
          {NAV_LINKS.map((link) => {
            const isExternal = link.href.startsWith("http");
            const isInvestors = link.label === "Investors";
            return (
              <Link
                key={link.href}
                href={link.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                onClick={() => setOpen(false)}
                className="group inline-flex items-center gap-1.5 text-2xl font-medium text-fg-primary transition-colors hover:text-accent-technical"
              >
                {link.label}
                {isExternal &&
                  (isInvestors ? (
                    <ArrowUpRight className="h-5 w-5" />
                  ) : (
                    <AnimatedArrow className="h-5 w-5" />
                  ))}
              </Link>
            );
          })}
          <CtaButton
            shopifyHandle="aria-tabletop"
            campaign="mobile-nav"
            className="mt-4 w-full py-3.5 text-base"
          >
            Preserve your robot
          </CtaButton>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
