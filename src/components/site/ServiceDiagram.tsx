import { cn } from "@/lib/utils";

/** Small, restrained diagrams that hint at what each service does. */
export function ServiceDiagram({ id, className }: { id: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 480 120"
      className={cn("h-auto w-full", className)}
      aria-hidden="true"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {DIAGRAMS[id] ?? null}
    </svg>
  );
}

const node = "fill-ivory stroke-ink";
const DIAGRAMS: Record<string, React.ReactNode> = {
  websites: (
    <g strokeWidth="1.5">
      <rect x="10" y="12" width="250" height="96" rx="10" className={node} />
      <path d="M10 32h250" className="stroke-ink/30" />
      <rect x="26" y="46" width="110" height="10" rx="3" className="fill-ink" />
      <rect x="26" y="64" width="80" height="6" rx="3" className="fill-taupe" />
      <rect x="26" y="84" width="54" height="14" rx="7" className="fill-slate" />
      <rect x="160" y="46" width="84" height="52" rx="6" className="fill-sage" />
      <rect x="300" y="24" width="56" height="84" rx="10" className={node} />
      <rect x="310" y="40" width="36" height="6" rx="3" className="fill-ink" />
      <rect x="310" y="54" width="28" height="22" rx="4" className="fill-sage" />
      <path d="M380 66h80" className="stroke-taupe" strokeDasharray="3 5" />
      <circle cx="460" cy="66" r="6" className="fill-slate" />
    </g>
  ),
  software: (
    <g strokeWidth="1.5">
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={10 + i * 118} y="20" width="100" height="80" rx="10" className={i === 2 ? "fill-ink" : node} />
      ))}
      {[0, 1, 2, 3].map((i) => (
        <rect key={`b${i}`} x={24 + i * 118} y={70 - i * 10} width="20" height={16 + i * 10} rx="3" className={i === 2 ? "fill-slate" : "fill-taupe"} />
      ))}
      <path d="M24 40h50M142 40h50M378 40h50" className="stroke-ink/40" />
      <path d="M260 40h50" className="stroke-ivory/60" />
    </g>
  ),
  automation: (
    <g strokeWidth="1.5">
      <circle cx="50" cy="60" r="28" className={node} />
      <path d="M78 60h80" className="stroke-ink" strokeDasharray="4 5" />
      <rect x="160" y="34" width="110" height="52" rx="26" className="fill-ink" />
      <path d="M200 60l10 10 20-22" className="stroke-ivory" strokeWidth="2" />
      <path d="M270 60h60" className="stroke-ink" strokeDasharray="4 5" />
      {[0, 1, 2].map((i) => (
        <rect key={i} x="332" y={22 + i * 30} width="130" height="20" rx="10" className={i === 1 ? "fill-slate" : "fill-sage"} />
      ))}
    </g>
  ),
  whatsapp: (
    <g strokeWidth="1.5">
      <rect x="10" y="16" width="160" height="34" rx="17" className="fill-sage" />
      <rect x="60" y="64" width="150" height="34" rx="17" className="fill-ink" />
      <path d="M210 81h70" className="stroke-ink" />
      <circle cx="300" cy="60" r="22" className={node} />
      <path d="M322 60h40M300 38V20h170M300 82v18h170" className="stroke-ink/50" />
      <rect x="370" y="46" width="100" height="28" rx="8" className="fill-slate" />
    </g>
  ),
  data: (
    <g strokeWidth="1.5">
      {Array.from({ length: 18 }).map((_, i) => (
        <circle key={i} cx={20 + (i % 6) * 22 + (i % 2) * 6} cy={30 + Math.floor(i / 6) * 28} r="5" className={i % 4 === 0 ? "fill-taupe" : "fill-ink/30"} />
      ))}
      <path d="M160 60h40" className="stroke-ink" />
      <path d="M200 60l10-6v12z" className="fill-ink" />
      <path d="M230 100V20M230 100h240" className="stroke-ink/40" />
      <path d="M240 90c40-10 60-50 100-40s60-30 120-34" className="stroke-slate-deep" strokeWidth="2" />
      {[260, 300, 340, 380, 420].map((x, i) => (
        <rect key={x} x={x} y={100 - (20 + i * 10)} width="18" height={20 + i * 10} rx="3" className="fill-sage" />
      ))}
    </g>
  ),
  creative: (
    <g strokeWidth="1.5">
      <rect x="10" y="14" width="200" height="92" rx="12" className="fill-ink" />
      <path d="M96 44v32l26-16z" className="fill-ivory" />
      <path d="M230 60h240" className="stroke-ink/30" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} x={240 + i * 38} y={i % 2 ? 46 : 36} width="28" height={i % 2 ? 28 : 48} rx="4" className={i === 3 ? "fill-slate" : "fill-sage"} />
      ))}
      <circle cx="306" cy="60" r="4" className="fill-taupe" />
    </g>
  ),
};
