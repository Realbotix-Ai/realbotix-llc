import Link from "next/link";
import { cn } from "@/lib/utils";
import { buildShopifyLink } from "@/lib/shopify-link";
import { AnimatedArrow } from "@/components/shared/animated-arrow";

interface BaseProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  arrow?: boolean;
}

interface HrefProps extends BaseProps {
  href: string;
  shopifyHandle?: never;
  campaign?: never;
  content?: never;
}

interface ShopifyProps extends BaseProps {
  href?: never;
  shopifyHandle: string;
  campaign?: string;
  content?: string;
}

type CtaButtonProps = HrefProps | ShopifyProps;

const variantClasses = {
  primary: "bg-primary text-primary-foreground",
  secondary:
    "border border-border-strong text-fg-primary hover:border-primary hover:text-primary",
  ghost: "text-fg-secondary hover:text-fg-primary",
};

// Variants with a fill shape get the circle-wipe hover; ghost is text-only.
const circleClasses = {
  primary: "bg-primary-hover",
  secondary: "bg-primary-muted",
};

export function CtaButton({
  children,
  variant = "primary",
  className,
  arrow = false,
  href,
  shopifyHandle,
  campaign,
  content,
}: CtaButtonProps) {
  const resolvedHref = href ?? buildShopifyLink({ handle: shopifyHandle!, campaign, content });
  const isExternal = resolvedHref.startsWith("http");
  const isAnchor = resolvedHref.startsWith("#");
  const hasFill = variant === "primary" || variant === "secondary";

  const classes = cn(
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200",
    hasFill && "overflow-hidden",
    variantClasses[variant],
    className,
  );

  const inner = (
    <>
      {hasFill && (
        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute top-1/2 left-[-5%] z-0 w-[110%] -translate-y-1/2 scale-0 rounded-full pt-[110%] opacity-0 transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-100 group-hover:opacity-100",
            circleClasses[variant as "primary" | "secondary"],
          )}
        />
      )}
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
        {arrow && <AnimatedArrow className="h-3 w-3" />}
      </span>
    </>
  );

  if (isAnchor) {
    return (
      <a href={resolvedHref} className={classes}>
        {inner}
      </a>
    );
  }

  if (isExternal) {
    return (
      <a href={resolvedHref} target="_blank" rel="noopener noreferrer" className={classes}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={resolvedHref} className={classes}>
      {inner}
    </Link>
  );
}
