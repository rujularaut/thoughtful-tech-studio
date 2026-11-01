import { Link } from "@tanstack/react-router";
import { studio } from "@/content/site";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" className={cn("group inline-flex items-center gap-2.5", className)} aria-label={`${studio.name} home`}>
      <svg viewBox="0 0 32 32" className="size-8" aria-hidden="true">
        <rect x="1" y="1" width="30" height="30" rx="8" className="fill-current opacity-100" />
        <path
          d="M10 23V9h11"
          className="stroke-background transition-all duration-500 group-hover:stroke-slate"
          strokeWidth="2.4"
          fill="none"
          strokeLinecap="round"
        />
        <path d="M10 16h7" className="stroke-background" strokeWidth="2.4" strokeLinecap="round" />
        <circle cx="22.5" cy="21.5" r="2.6" className="fill-slate" />
      </svg>
      <span className="font-display text-[1.35rem] leading-none tracking-tight">
        Forma<span className="italic-accent"> Digital</span>
      </span>
    </Link>
  );
}
