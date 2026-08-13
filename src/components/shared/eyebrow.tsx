import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-body text-xs font-medium not-italic uppercase tracking-[0.08em]",
        "text-fg-heading",
        className,
      )}
    >
      {children}
    </span>
  );
}
