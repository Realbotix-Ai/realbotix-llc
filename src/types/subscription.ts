export type SubscriptionTierId = "standard" | "premium";

export interface SubscriptionTier {
  id: SubscriptionTierId;
  name: string;
  price: string;
  languagesSupported: string;
  modelAccess: string;
  features: string[];
  isIncluded: boolean;
}
