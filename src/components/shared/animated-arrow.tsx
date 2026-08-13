import { cn } from "@/lib/utils";

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1.5 10.5011L10.2421 1.75789M2.46394 1.05078H10.9492V9.53606"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="square"
      />
    </svg>
  );
}

// Slides the current arrow out top-right on hover while a second one slides in from the bottom-left.
// Relies on an ancestor with the `group` class to drive the hover state — pass
// groupName="box" when the trigger should be a nested `group/box` ancestor
// instead (e.g. so the arrow only animates on hover of an inner box, not
// whatever outer element merely reveals that box).
export function AnimatedArrow({
  className,
  groupName,
}: {
  className?: string;
  groupName?: "box";
}) {
  const outHover =
    groupName === "box"
      ? "group-hover/box:translate-x-full group-hover/box:-translate-y-full"
      : "group-hover:translate-x-full group-hover:-translate-y-full";
  const inHover =
    groupName === "box"
      ? "group-hover/box:translate-x-0 group-hover/box:translate-y-0"
      : "group-hover:translate-x-0 group-hover:translate-y-0";

  return (
    <span className={cn("relative inline-block overflow-hidden", className)}>
      <ArrowIcon
        className={cn(
          "absolute inset-0 h-full w-full transition-transform duration-300 ease-out",
          outHover,
        )}
      />
      <ArrowIcon
        className={cn(
          "absolute inset-0 h-full w-full -translate-x-full translate-y-full transition-transform duration-300 ease-out",
          inHover,
        )}
      />
    </span>
  );
}
