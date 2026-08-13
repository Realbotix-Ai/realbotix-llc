import { cn } from "@/lib/utils";

interface LocationBadgeProps {
  className?: string;
}

export function LocationBadge({ className }: LocationBadgeProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <span className="font-mono text-[9px] font-medium uppercase tracking-[0.14em] text-white/70">
        Built in
      </span>
      <span className="font-display text-sm font-semibold leading-tight text-white">
        Las Vegas, USA
      </span>
    </div>
  );
}
