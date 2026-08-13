"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/data/site";
import { CtaButton } from "@/components/shared/cta-button";
import { AnimatedArrow } from "@/components/shared/animated-arrow";
import { MobileNav } from "@/components/layout/mobile-nav";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The home hero is a dark, full-bleed video — the nav needs light text
  // while it floats over that, then switches back once scrolled past it.
  const overDarkHero = pathname === "/" && !scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-border-subtle bg-bg-base/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="page-container flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="flex items-center">
          <Image
            src={
              overDarkHero
                ? "/logo/realbotix-logo-white.svg"
                : "/logo/realbotix-logo-black.svg"
            }
            alt="Realbotix"
            width={140}
            height={25}
            priority
            className="h-5 w-auto md:h-6"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const isExternal = link.href.startsWith("http");
            const isInvestors = link.label === "Investors";
            return (
              <Link
                key={link.href}
                href={link.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className={cn(
                  "group inline-flex items-center gap-1 text-sm transition-colors",
                  overDarkHero
                    ? "text-white/80 hover:text-white"
                    : "text-fg-secondary hover:text-fg-primary",
                )}
              >
                {link.label}
                {isExternal &&
                  (isInvestors ? (
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  ) : (
                    <AnimatedArrow className="h-3.5 w-3.5" />
                  ))}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <CtaButton
            shopifyHandle="aria-tabletop"
            campaign="nav"
            variant="secondary"
            className={cn(
              "rounded-full px-5 py-2 text-xs",
              overDarkHero &&
                "border-transparent bg-white text-fg-primary hover:border-transparent hover:text-fg-primary",
            )}
          >
            Reserve Your Robot
          </CtaButton>
        </div>

        <MobileNav overDarkHero={overDarkHero} />
      </div>
    </header>
  );
}
