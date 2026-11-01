import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type Props = {
  index?: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  className?: string;
  align?: "split" | "stack";
};

export function SectionHeader({ index, label, title, intro, className, align = "split" }: Props) {
  return (
    <Reveal
      className={cn(
        "grid gap-6 border-t pt-6",
        align === "split" ? "md:grid-cols-12 md:gap-10" : "",
        className,
      )}
    >
      <div className={cn("flex items-baseline gap-3", align === "split" && "md:col-span-3")}>
        {index && <span className="eyebrow text-taupe">{index}</span>}
        <span className="eyebrow text-muted-foreground">{label}</span>
      </div>
      <div className={cn(align === "split" && "md:col-span-9")}>
        <h2 className="display-lg max-w-4xl text-balance">{title}</h2>
        {intro && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{intro}</p>
        )}
      </div>
    </Reveal>
  );
}
