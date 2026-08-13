import Link from "next/link";
import {
  FOOTER_ABOUT_LINKS,
  FOOTER_EXPLORE_LINKS,
  FOOTER_LEGAL_LINKS,
  FOOTER_SOCIAL_LINKS,
  SITE,
} from "@/data/site";

function FooterColumn({
  label,
  links,
}: {
  label: string;
  links: { label: string; href?: string }[];
}) {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-sm text-white/60">{label}</span>
      <nav className="flex flex-col gap-3">
        {links.map((link) => {
          if (!link.href) {
            return (
              <span key={link.label} className="text-sm text-white/60">
                {link.label}
              </span>
            );
          }

          const isExternal = link.href.startsWith("http");

          return (
            <Link
              key={link.label}
              href={link.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="text-sm text-white transition-colors hover:text-primary-hover"
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="pb-2 md:pb-4">
      <div
        className="page-container"
        style={{ paddingTop: "var(--space-section-y)" }}
      >
        <div className="rounded-[16px] bg-primary px-6 py-14 mb-6 md:mb-10 md:px-24 md:py-20">
          <div className="grid grid-cols-1 gap-y-16 gap-x-16 md:grid-cols-[1.1fr_1fr]">
            <div className="flex min-w-0 flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h2 className="max-w-md font-display text-heading-lg font-medium text-white">
                  Realbotix, building robots people actually want to talk to.
                </h2>
              </div>

              <p className="text-sm text-white/60">
                Built in
                <br />
                Las Vegas, USA.
              </p>

              <a
                href={`mailto:${SITE.contactEmail}`}
                className="inline-block w-fit border-b border-white text-sm font-medium text-white"
              >
                Contact us
              </a>
            </div>

            <div className="grid min-w-0 grid-cols-2 gap-8 sm:grid-cols-3">
              <FooterColumn label="Explore" links={FOOTER_EXPLORE_LINKS} />
              <FooterColumn label="About" links={FOOTER_ABOUT_LINKS} />
              {FOOTER_SOCIAL_LINKS.length > 0 && (
                <FooterColumn label="Social" links={FOOTER_SOCIAL_LINKS} />
              )}
            </div>

            <span className="self-center text-xs text-white/60">
              &copy; {new Date().getFullYear()} {SITE.legalName}
            </span>
            <div className="grid min-w-0 grid-cols-2 gap-8 text-xs text-white/60 sm:grid-cols-3">
              {FOOTER_LEGAL_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
