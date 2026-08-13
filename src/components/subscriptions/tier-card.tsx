import { cn } from "@/lib/utils";
import type { SubscriptionTier } from "@/types/subscription";

export function TierCard({ tier }: { tier: SubscriptionTier }) {
  const isPremium = tier.id === "premium";

  return (
    <div
      className={cn(
        "flex flex-col gap-6 rounded-[16px] bg-bg-surface p-8",
        isPremium ? "border-2 border-primary" : "border border-border-subtle",
      )}
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-display text-xl font-medium text-fg-heading">
            {tier.name}
          </h3>
          <p
            className={cn(
              "mt-1 text-xs uppercase tracking-widest",
              isPremium ? "text-primary" : "text-fg-tertiary",
            )}
          >
            {tier.price}
          </p>
        </div>
        {isPremium && (
          <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
            Upgrade
          </span>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4 rounded-xl bg-bg-surface-2 p-4">
        <div>
          <p className="font-mono text-sm text-fg-primary">
            {tier.languagesSupported}
          </p>
          <p className="text-xs text-fg-tertiary">Languages</p>
        </div>
        <div>
          <p className="font-mono text-sm text-fg-primary">{tier.modelAccess}</p>
          <p className="text-xs text-fg-tertiary">Model access</p>
        </div>
      </div>

      <ul className="flex flex-col gap-3">
        {tier.features.map((feature) => (
          <li key={feature} className="flex gap-3 text-sm text-fg-secondary">
            <span className="text-primary">—</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
