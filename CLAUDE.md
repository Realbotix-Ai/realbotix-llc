# Realbotix Website Rebuild

Rebuilding the Realbotix marketing site (currently at realbotix-com.webflow.io) with a more premium design and a proper codebase. This file is the source of truth for product facts and design/tech decisions — keep it updated as things change.

## Company & Product

- Realbotix makes humanoid robots powered by conversational AI for the service sector.
- Hardware platform: **Echo Gen 1** — the first generation of Realbotix's Echo humanoid robots.
- Four personas built on the Echo Gen 1 platform: **Aria, Amar, Mila, Dave** — each has a distinct face/appearance, personality, accent/voice, and bio.
- All four personas are general-purpose — any of them can be deployed across any industry/use case (hospitality, education, wellness, corporate). Personas are not locked to a specific vertical.

## Configurations & Pricing

- **Tabletop version**: 16 degrees of freedom, starting at $12,000.
- **Full-body version**: 38 degrees of freedom, starting at $55,000.
- DoF and base pricing are identical across all four personas.
- Purchases are pre-orders — $250 deposit to reserve.

## Vinci Vision System

- Patented AI vision + eye-tracking system — positioned as "An AI Vision System that Meets Your Eyes." Helps the robot build trust/connection via maintained gaze.
- Optional upgrade available for any Echo Gen 1 robot (not bundled by default).
- Four-layer system:
  1. **Identity Layer** — recognizes who is interacting.
  2. **Behavioral Tracking** — reads what the person is doing.
  3. **Emotional Capture** — senses how they feel.
  4. **Engagement Analytics** — clinical-grade research-quality output.
- Practically: the robot "sees" through its eyes/camera and surfaces that recognition/data in the Realbotix app.

## AI Avatars & the Realbotix App

- App name: **Realbotix App**.
- AI avatar chat is part of the subscription and works **with or without** a physical robot connected.
- The app is required to (a) connect to / power on a robot, and (b) chat with an AI avatar standalone when not connected to a robot.

## Subscription Tiers

- **Standard** (included with every robot purchase): limited library of languages and AI models.
- **Premium** (paid upgrade): 150+ languages, integration with top third-party AI models.
- The subscription functions as the single controller / "single pane of glass" for robot operation — meant to feel simple and easy to learn.

## Purchase Flow (v1 — ship fast)

- **No Shopify Storefront API integration for now.** Decided against it to move faster on launch.
- "Buy" / "Reserve" buttons link out directly to the existing Shopify store (plain external links).
- UTM-tag all outbound links to the Shopify store so site → store conversion is trackable in analytics.
- Revisit embedded Storefront API / native cart later post-launch if needed — architecture should not block this (keep product data/config modular).

## Design Direction

- **Superseded direction (for history only):** earlier passes tried a dark, Boston Dynamics/Figure-AI-style engineering-schematic look (grid backgrounds, corner brackets, wireframe diagrams), evolving the existing Webflow site. Explicitly dropped — do not reintroduce without being asked.
- **Current direction:** light, warm, and approachable — not an engineering datasheet.
  - Primary inspiration: **Fauna Robotics** (faunarobotics.com) — punchy, inclusive copy ("Capable, safe, fun."), a single dominant CTA (request-a-demo style, not price-led), light/clean palette, real-world photography over technical diagrams, playful-but-credible tone.
  - Secondary inspiration: **Apple.com** — for restraint and whitespace (generous margins, product speaks for itself, understated copy), not for Apple's own color palette.
  - Palette: warm paper-white base (not clinical white), warm ink text. **The one global brand accent is blue, `#4A64B2`** — consumed via the `--primary`/`--primary-foreground`/`--primary-hover`/`--primary-muted` tokens in `globals.css` (never hardcoded hex in components). This is the footer background color, what any "primary button" renders as (the `primary` variant of `CtaButton`, and shadcn's default `Button`), and also drives links, focus rings, text selection, and chart/sidebar accents. The earlier amber accent (`--accent-signal`) has been fully retired — removed from `globals.css` and from every component. Each of the four personas still carries its own distinct accent color (grounded in their actual personality — e.g. Aria's outgoing energy reads warmer/coral, Amar's analytical calm reads cooler/teal) used on their avatar and card, rather than a single flat brand color everywhere.
  - No engineering-diagram motifs (schematic grids, corner brackets, DOF wireframes, instrument dials). The one signature device is a simple colored "orb + friendly line-drawn face" per persona, standing in for product photography until real photos/video exist.
  - Typography: one coordinated type family (Inter for display/body + IBM Plex Mono for technical/mono accents), friendly rounded corners (not sharp/instrument-like). PT Serif is loaded (`--font-serif` / `font-serif`) as an on-call emphasis face — used only when specifically called out for a word/phrase, not part of the default type system.
  - Workflow preference: **design directly in code**, no Figma-first mockup phase.

## Tech Stack

- **Framework**: Next.js (App Router) + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui component primitives
- **Motion**: Framer Motion (interactions/reveals) + Lenis (smooth scroll)
- **Hosting**: Vercel
- **Content**: no CMS for now — content lives directly in code/MDX, edited via git. Keep content modular so a CMS can be added later without a rebuild.
- **Commerce**: Shopify remains the backend store; site links out to it (see Purchase Flow above).
- **Analytics**: TBD (GA4 or Plausible).

## Priorities

1. Speed to launch — build ASAP, avoid scope that isn't needed for v1 (e.g., Shopify API, CMS).
2. Smooth, high-end feel over feature completeness.
3. Keep architecture extensible — CMS and embedded Shopify checkout are explicitly deferred, not ruled out, so don't paint the codebase into a corner.

## Sitemap (v1)

- Home
- Products — overview grid → per-persona pages (Aria, Amar, Mila, Dave), each showing tabletop vs. full-body specs/pricing, linking out to Shopify
- Vinci Vision System — dedicated page
- Subscriptions — Standard vs. Premium tiers, AI avatars / Realbotix app
- Use Cases — Hospitality, Education, Wellness, Corporate
- About
- Contact / Request a Demo
