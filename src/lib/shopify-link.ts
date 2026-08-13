import { SITE } from "@/data/site";

interface BuildShopifyLinkOptions {
  /** Shopify product handle, e.g. "aria-tabletop". Placeholder until real store handles are confirmed. */
  handle: string;
  campaign?: string;
  content?: string;
}

export function buildShopifyLink({
  handle,
  campaign = "site-cta",
  content,
}: BuildShopifyLinkOptions): string {
  const url = new URL(`${SITE.shopifyBaseUrl}/products/${handle}`);
  url.searchParams.set("utm_source", "realbotix-site");
  url.searchParams.set("utm_medium", "referral");
  url.searchParams.set("utm_campaign", campaign);
  if (content) url.searchParams.set("utm_content", content);
  return url.toString();
}
