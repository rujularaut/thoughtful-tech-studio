/**
 * Hero composition: a tangled line (the problem) that gradually straightens
 * through questions and ideas into a clean, working outcome.
 */
export function HeroGraphic() {
  return (
    <div className="relative aspect-[4/5] w-full max-w-[560px] sm:aspect-square">
      <svg
        viewBox="0 0 560 560"
        className="absolute inset-0 h-full w-full"
        role="img"
        aria-label="Illustration: a tangled line representing a problem gradually straightens into a clear solution."
      >
        <defs>
          <pattern id="hg-grid" width="28" height="28" patternUnits="userSpaceOnUse">
            <path d="M28 0H0V28" fill="none" className="stroke-ink/[0.07]" strokeWidth="1" />
          </pattern>
        </defs>

        {/* Base panels */}
        <rect x="20" y="20" width="520" height="520" rx="28" className="fill-stone" />
        <rect x="20" y="20" width="520" height="520" rx="28" fill="url(#hg-grid)" />
        <rect x="300" y="300" width="220" height="220" rx="22" className="fill-sage" />
        <circle cx="140" cy="150" r="92" className="fill-ivory" />

        {/* Tangle → straight path */}
        <path
          pathLength={1}
          d="M78 168c30-70 120-40 92 10s-110 22-70-30 120-10 108 40-90 70-110 20 60-90 110-60 40 70 6 98
             c-20 18-10 40 30 40h96c20 0 30 10 30 30v60c0 20 10 30 30 30h120"
          fill="none"
          className="stroke-ink animate-draw"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="1"
        />

        {/* Nodes */}
        <g className="animate-rise [animation-delay:600ms]">
          <circle cx="272" cy="316" r="7" className="fill-ivory stroke-ink" strokeWidth="2" />
        </g>
        <g className="animate-rise [animation-delay:1100ms]">
          <circle cx="332" cy="436" r="7" className="fill-ivory stroke-ink" strokeWidth="2" />
        </g>
        <g className="animate-rise [animation-delay:1700ms]">
          <circle cx="482" cy="436" r="14" className="fill-ink" />
          <path d="M475 436l5 5 9-10" fill="none" className="stroke-ivory" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* Fine geometric details */}
        <g className="stroke-taupe" strokeWidth="1.2" fill="none">
          <circle cx="440" cy="120" r="44" strokeDasharray="3 5" />
          <path d="M396 120h88M440 76v88" />
        </g>
        <rect x="420" y="100" width="40" height="40" rx="8" className="fill-slate animate-float" />
        <path d="M60 470h90" className="stroke-ink/40" strokeWidth="1" />
        <path d="M60 480h60" className="stroke-ink/40" strokeWidth="1" />
      </svg>

      {/* Labels (HTML for crisp type) */}
      <span className="absolute left-[8%] top-[7%] eyebrow rounded-full bg-ivory px-3 py-1.5 text-ink shadow-frame">
        Your problem
      </span>
      <span className="absolute left-[50%] top-[50%] eyebrow rounded-full border border-ink/15 bg-ivory/90 px-3 py-1.5 text-muted-foreground animate-rise [animation-delay:700ms]">
        Questions
      </span>
      <span className="absolute left-[44%] top-[82%] eyebrow rounded-full border border-ink/15 bg-ivory/90 px-3 py-1.5 text-muted-foreground animate-rise [animation-delay:1200ms]">
        The idea
      </span>
      <span className="absolute right-[5%] top-[66%] eyebrow rounded-full bg-ink px-3 py-1.5 text-on-ink animate-rise [animation-delay:1800ms]">
        Something that works
      </span>

      {/* Little "it works" card */}
      <div className="absolute right-[6%] top-[30%] w-44 rounded-xl bg-ivory p-4 shadow-frame animate-rise [animation-delay:2000ms]">
        <p className="eyebrow text-muted-foreground">Today</p>
        <ul className="mt-3 space-y-2 text-sm">
          {["Bookings online", "Replies drafted", "Reminders sent"].map((t, i) => (
            <li key={t} className="flex items-center gap-2">
              <span
                className="inline-flex size-4 items-center justify-center rounded-full bg-sage"
                style={{ animationDelay: `${i * 400}ms` }}
              >
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
