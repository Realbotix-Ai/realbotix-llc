export type ConfigId = "tabletop" | "full-body";

export interface RobotConfig {
  id: ConfigId;
  label: string;
  degreesOfFreedom: number;
  startingPrice: number;
  depositAmount: number;
  /** Shopify product handle. Placeholder — confirm against the live store before launch. */
  shopifyHandle: string;
}

export type PersonaSlug = "aria" | "amar" | "mila" | "dave";

export interface Persona {
  slug: PersonaSlug;
  name: string;
  tagline: string;
  bio: string;
  personalityTraits: string[];
  voiceAccent: string;
  /** A hex color unique to this persona's personality — used for their orb/avatar accent. */
  accentColor: string;
  configs: RobotConfig[];
}
