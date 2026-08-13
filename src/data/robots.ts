import { TABLETOP_CONFIG, FULL_BODY_CONFIG } from "@/data/configs";
import type { Persona } from "@/types/robot";

export const ROBOTS: Persona[] = [
  {
    slug: "aria",
    name: "Aria",
    tagline: "The brand ambassador",
    bio: "Aria is built for the front line — quick, articulate, and unflappable under a crowd. She's the face teams put forward when the interaction needs to feel effortless: greeting guests, running a product activation, or fielding the hundredth question of the day with the same warmth as the first.",
    personalityTraits: ["Outgoing", "Quick-witted", "Polished"],
    voiceAccent: "American English",
    accentColor: "#d97757",
    configs: [
      { ...TABLETOP_CONFIG, shopifyHandle: "aria-tabletop" },
      { ...FULL_BODY_CONFIG, shopifyHandle: "aria-full-body" },
    ],
  },
  {
    slug: "amar",
    name: "Amar",
    tagline: "The precise instructor",
    bio: "Amar is methodical and exact — built for contexts where accuracy matters more than charm. He holds technical detail without losing patience, making him a natural fit for training floors, orientation sessions, and any setting where the same explanation needs to land clearly every time.",
    personalityTraits: ["Analytical", "Patient", "Reassuring"],
    voiceAccent: "Indian English",
    accentColor: "#3d7a72",
    configs: [
      { ...TABLETOP_CONFIG, shopifyHandle: "amar-tabletop" },
      { ...FULL_BODY_CONFIG, shopifyHandle: "amar-full-body" },
    ],
  },
  {
    slug: "mila",
    name: "Mila",
    tagline: "The steady companion",
    bio: "Mila reads a room before she speaks in it. Calm, attentive, and unhurried, she's designed for one-on-one settings where trust builds slowly — companionship, wellness check-ins, and conversations that need room to breathe rather than a script to follow.",
    personalityTraits: ["Empathetic", "Attentive", "Composed"],
    voiceAccent: "British English",
    accentColor: "#9c6b8f",
    configs: [
      { ...TABLETOP_CONFIG, shopifyHandle: "mila-tabletop" },
      { ...FULL_BODY_CONFIG, shopifyHandle: "mila-full-body" },
    ],
  },
  {
    slug: "dave",
    name: "Dave",
    tagline: "The easy conversationalist",
    bio: "Dave is low-key by design — approachable, a little dry, easy to talk to. He's the persona teams reach for when the goal is to lower the temperature of a room: casual corporate engagements, informal Q&A, or anywhere a robot greeting someone would otherwise feel like a stunt.",
    personalityTraits: ["Approachable", "Easygoing", "Direct"],
    voiceAccent: "Australian English",
    accentColor: "#c08a3e",
    configs: [
      { ...TABLETOP_CONFIG, shopifyHandle: "dave-tabletop" },
      { ...FULL_BODY_CONFIG, shopifyHandle: "dave-full-body" },
    ],
  },
];

export function getPersonaBySlug(slug: string) {
  return ROBOTS.find((robot) => robot.slug === slug);
}
