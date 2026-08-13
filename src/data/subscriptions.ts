import type { SubscriptionTier } from "@/types/subscription";

export const SUBSCRIPTION_TIERS: SubscriptionTier[] = [
  {
    id: "standard",
    name: "Standard",
    price: "Included",
    languagesSupported: "Limited library",
    modelAccess: "Core AI models",
    features: [
      "Included with every robot",
      "Access via the Realbotix App",
      "AI avatar chat, with or without a robot connected",
    ],
    isIncluded: true,
  },
  {
    id: "premium",
    name: "Premium",
    price: "Upgrade",
    languagesSupported: "150+ languages",
    modelAccess: "Top third-party models",
    features: [
      "Everything in Standard",
      "150+ languages",
      "Integration with top third-party AI models",
    ],
    isIncluded: false,
  },
];

export const SUBSCRIPTION_SUMMARY = {
  eyebrow: "Subscriptions",
  headline: "One app, every robot, every conversation.",
  description:
    "The Realbotix App is the single controller for your robot — and the same place AI avatars live when there's no robot in the room. Every robot ships with a subscription; Premium unlocks the full range of languages and models.",
};
