import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  variant?: "base" | "surface";
  /** "default" is the full 1440px container; "content" is the narrower
   * prose measure for text-heavy pages (legal copy, bios). */
  size?: "default" | "content";
  className?: string;
  containerClassName?: string;
  /** Override the default --space-section-y top padding — for the rare
   * section that needs to sit closer to its predecessor. Sections only
   * carry padding-top; the gap below comes from the next section's own
   * padding-top, not a padding-bottom here. */
  paddingTop?: string;
  /** Add bottom padding — only for the rare section (e.g. one immediately
   * followed by a full-bleed `surface` section) that needs its own
   * breathing room, since the surface fill starts right at the section
   * boundary with no gap of its own to lean on. */
  paddingBottom?: string;
  children: ReactNode;
}

export function Section({
  id,
  variant = "base",
  size = "default",
  className,
  containerClassName,
  paddingTop,
  paddingBottom,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full scroll-mt-20",
        variant === "surface" && "bg-bg-surface",
        className,
      )}
    >
      <div
        className={cn(
          size === "content" ? "container-content" : "page-container",
          containerClassName,
        )}
        style={{
          paddingTop: paddingTop ?? "var(--space-section-y)",
          paddingBottom,
        }}
      >
        {children}
      </div>
    </section>
  );
}
