import { cn } from "@/lib/utils";

/**
 * Concept sketches of the two projects. These are illustrative wireframes,
 * not screenshots of the real products — they are labelled as such.
 */
export function ProjectVisual({
  slug,
  className,
  showLabel = true,
}: {
  slug: "medibook" | "tickreply";
  className?: string;
  showLabel?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.75rem] p-5 sm:p-8",
        slug === "medibook" ? "bg-sage" : "bg-stone",
        className,
      )}
    >
      <div className="absolute inset-0 hairline-grid opacity-60" aria-hidden="true" />
      <div className="relative">{slug === "medibook" ? <MediBookSketch /> : <TickReplySketch />}</div>
      {showLabel && (
        <span className="absolute right-4 top-4 eyebrow rounded-full bg-ivory/90 px-2.5 py-1 text-muted-foreground">
          Concept sketch
        </span>
      )}
    </div>
  );
}

function Window({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("rounded-xl bg-ivory shadow-frame", className)}>
      <div className="flex items-center gap-1.5 border-b px-4 py-3">
        <span className="size-2 rounded-full bg-taupe/70" />
        <span className="size-2 rounded-full bg-taupe/50" />
        <span className="size-2 rounded-full bg-taupe/30" />
      </div>
      {children}
    </div>
  );
}

function MediBookSketch() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const slots = [
    [1, 0, 1, 2, 0],
    [0, 1, 1, 0, 1],
    [2, 0, 0, 1, 1],
    [1, 1, 0, 0, 2],
  ];
  return (
    <div className="grid gap-4 pt-8 sm:grid-cols-5" aria-hidden="true">
      <Window className="sm:col-span-3">
        <div className="p-4 sm:p-5">
          <p className="eyebrow text-muted-foreground">Choose a slot</p>
          <p className="mt-1 font-display text-xl">General Medicine</p>
          <div className="mt-4 grid grid-cols-5 gap-1.5 text-center">
            {days.map((d) => (
              <span key={d} className="eyebrow text-[0.6rem] text-muted-foreground">
                {d}
              </span>
            ))}
            {slots.flat().map((s, i) => (
              <span
                key={i}
                className={cn(
                  "h-7 rounded-md",
                  s === 0 && "bg-stone",
                  s === 1 && "border border-slate/60 bg-ivory",
                  s === 2 && "bg-ink",
                )}
              />
            ))}
          </div>
          <div className="mt-4 flex items-center gap-3 text-[0.7rem] text-muted-foreground">
            <span className="inline-flex items-center gap-1"><span className="size-2 rounded-sm border border-slate" /> Open</span>
            <span className="inline-flex items-center gap-1"><span className="size-2 rounded-sm bg-ink" /> Selected</span>
            <span className="inline-flex items-center gap-1"><span className="size-2 rounded-sm bg-stone" /> Full</span>
          </div>
        </div>
      </Window>
      <div className="flex flex-col gap-4 sm:col-span-2">
        <Window>
          <div className="p-4">
            <p className="eyebrow text-muted-foreground">Booking</p>
            <div className="mt-3 space-y-2">
              <div className="h-2 w-4/5 rounded-full bg-stone" />
              <div className="h-2 w-3/5 rounded-full bg-stone" />
            </div>
            <div className="mt-4 h-8 rounded-full bg-ink" />
          </div>
        </Window>
        <div className="rounded-xl bg-ink p-4 text-on-ink shadow-frame">
          <p className="eyebrow text-on-ink-muted">Reminder</p>
          <p className="mt-2 text-sm leading-snug">Your appointment is tomorrow at 10:30.</p>
        </div>
      </div>
    </div>
  );
}

function TickReplySketch() {
  return (
    <div className="grid gap-4 pt-8 sm:grid-cols-5" aria-hidden="true">
      <Window className="sm:col-span-3">
        <div className="space-y-3 p-4 sm:p-5">
          <p className="eyebrow text-muted-foreground">New reviews</p>
          {[5, 3, 4].map((stars, i) => (
            <div key={i} className={cn("rounded-lg border p-3", i === 1 && "border-slate bg-sage/40")}>
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <span key={s} className={cn("size-2.5 rounded-[2px]", s < stars ? "bg-taupe" : "bg-stone")} />
                  ))}
                </div>
                <span className="eyebrow text-[0.6rem] text-muted-foreground">{i === 1 ? "Needs reply" : "Replied"}</span>
              </div>
              <div className="mt-2.5 h-2 w-11/12 rounded-full bg-stone" />
              <div className="mt-1.5 h-2 w-2/3 rounded-full bg-stone" />
            </div>
          ))}
        </div>
      </Window>
      <div className="flex flex-col gap-4 sm:col-span-2">
        <Window>
          <div className="p-4">
            <p className="eyebrow text-slate-deep">Suggested draft</p>
            <p className="mt-2 font-display text-[0.95rem] italic leading-snug">
              “Thank you for the honest feedback — we'd love to make this right…”
            </p>
            <div className="mt-3 flex gap-2">
              <span className="h-6 flex-1 rounded-full bg-ink" />
              <span className="h-6 w-14 rounded-full border" />
            </div>
          </div>
        </Window>
        <div className="ml-auto max-w-[90%] rounded-2xl rounded-br-sm bg-ink p-3.5 text-sm text-on-ink shadow-frame">
          New 3★ review received. Reply now?
        </div>
      </div>
    </div>
  );
}
