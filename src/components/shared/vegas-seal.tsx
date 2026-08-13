import { cn } from "@/lib/utils";

const RING_TEXT = "BUILT AND ASSEMBLED IN LAS VEGAS, USA  •  ";

interface VegasSealProps {
  className?: string;
}

// A static engraved-seal mark — circular text with a five-point star at
// center (a nod to Nevada's flag and to "USA" in the ring copy).
export function VegasSeal({ className }: VegasSealProps) {
  return (
    <div className={cn("relative h-24 w-24 sm:h-32 sm:w-32", className)}>
      <svg viewBox="0 0 300 300" className="h-full w-full">
        <defs>
          <path id="vegas-seal-ring" d="M150,28 A122,122 0 1 1 149.9,28" fill="none" />
        </defs>
        <circle cx="150" cy="150" r="142" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
        <circle
          cx="150"
          cy="150"
          r="98"
          fill="none"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1"
          strokeDasharray="1 7"
        />
        <text fill="#ffffff" fontSize="29" letterSpacing="1.2" className="font-mono uppercase">
          <textPath href="#vegas-seal-ring" xlinkHref="#vegas-seal-ring">
            {RING_TEXT}
          </textPath>
        </text>
        <path
          d="M150,116 L157.64,139.48 L182.34,139.49 L162.36,154.02 L169.99,177.51 L150,163 L130.01,177.51 L137.64,154.02 L117.66,139.49 L142.36,139.48 Z"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
