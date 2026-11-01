/**
 * Hero composition: a tangled line (the problem) that straightens through
 * questions and an idea into a clean, working outcome.
 * SVG uses a 560×560 viewBox; HTML labels are positioned in matching percentages.
 */
const pct = (v: number) => `${(v / 560) * 100}%`;

export function HeroGraphic() {
  return (
    <div className="relative aspect-square w-full max-w-[560px]">
      <svg
        viewBox="0 0 560 560"
        className="absolute inset-0 h-full w-full"
        role="img"
        aria-label="Illustration: a tangled line representing a problem gradually straightens into a clear, working solution."
      >
        <defs>
          <pattern id="hg-grid" width="28" height="28" patternUnits="userSpaceOnUse">
            <path d="M28 0H0V28" fill="none" className="stroke-ink/[0.07]" strokeWidth="1" />
          </pattern>
        </defs>

        <rect x="0" y="0" width="560" height="560" rx="28" className="fill-stone" />
        <rect x="0" y="0" width="560" height="560" rx="28" fill="url(#hg-grid)" />
        <rect x="300" y="330" width="236" height="206" rx="22" className="fill-sage" />
        <circle cx="148" cy="168" r="96" className="fill-ivory" />

        {/* Geometric details */}
        <g className="stroke-taupe" strokeWidth="1.2" fill="none">
          <circle cx="104" cy="452" r="46" strokeDasharray="3 5" />
          <path d="M52 452h104M104 400v104" />
        </g>
        <rect x="84" y="432" width="40" height="40" rx="9" className="fill-slate animate-float" />

        {/* Tangle → straight path */}
        <path
          pathLength={1}
          strokeDasharray="1"
          d="M84 176 C 92 96, 206 96, 196 166 C 188 226, 92 218, 104 154 C 114 104, 218 124, 206 194
             C 200 236, 132 236, 142 194 C 152 154, 226 172, 214 232
             C 206 262, 200 282, 200 304 L 200 346 Q 200 384 238 384 L 330 384
             Q 370 384 370 424 L 370 438 Q 370 472 404 472 L 472 472"
          fill="none"
          className="stroke-ink animate-draw"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <circle cx="200" cy="304" r="7" className="fill-ivory stroke-ink animate-rise [animation-delay:900ms]" strokeWidth="2" />
        <circle cx="330" cy="384" r="7" className="fill-ivory stroke-ink animate-rise [animation-delay:1400ms]" strokeWidth="2" />
        <g className="animate-rise [animation-delay:2000ms]">
          <circle cx="486" cy="472" r="16" className="fill-ink" />
          <path d="M478 472l6 6 10-11" fill="none" className="stroke-ivory" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>

      <Label x={32} y={30} className="bg-ivory text-ink shadow-frame">Your problem</Label>
      <Label x={218} y={292} className="border border-ink/15 bg-ivory/90 text-muted-foreground animate-rise [animation-delay:1000ms]">
        Questions
      </Label>
      <Label x={290} y={402} className="border border-ink/15 bg-ivory/90 text-muted-foreground animate-rise [animation-delay:1500ms]">
        The idea
      </Label>
      <Label x={330} y={496} className="bg-ink text-on-ink animate-rise [animation-delay:2100ms]">
        Something that works
      </Label>

      <div
        className="absolute w-[34%] min-w-36 rounded-xl bg-ivory p-4 shadow-frame animate-rise [animation-delay:2300ms]"
        style={{ right: pct(28), top: pct(36) }}
      >
        <p className="eyebrow text-muted-foreground">After</p>
        <ul className="mt-3 space-y-2 text-[0.82rem]">
          {["Bookings online", "Replies drafted", "Reminders sent"].map((t) => (
            <li key={t} className="flex items-center gap-2">
              <span className="inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-sage">
                <span className="size-1.5 rounded-full bg-slate-deep animate-pulse-soft" />
              </span>
              {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Label({
  x,
  y,
  className,
  children,
}: {
  x: number;
  y: number;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={`eyebrow absolute whitespace-nowrap rounded-full px-3 py-1.5 text-[0.62rem] sm:text-[0.7rem] ${className ?? ""}`}
      style={{ left: pct(x), top: pct(y) }}
    >
      {children}
    </span>
  );
}
