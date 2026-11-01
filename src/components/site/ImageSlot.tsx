import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * A framed space reserved for a genuine image (founder photo, project screen).
 * Pass `src` once a real image exists; until then it shows an honest placeholder.
 */
export function ImageSlot({
  src,
  alt,
  label,
  className,
  children,
}: {
  src?: string | undefined;
  alt: string;
  label: string;
  className?: string;
  children?: React.ReactNode;
}) {
  if (src) {
    return (
      <div className={cn("overflow-hidden rounded-2xl bg-stone", className)}>
        <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover" />
      </div>
    );
  }
  return (
    <div
      className={cn(
        "relative flex overflow-hidden rounded-2xl bg-stone hairline-grid",
        className,
      )}
      role="img"
      aria-label={`${alt} — placeholder`}
    >
      {children}
      <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-ivory/90 px-2.5 py-1 eyebrow text-muted-foreground">
        <ImageIcon className="size-3" /> {label}
      </span>
    </div>
  );
}
