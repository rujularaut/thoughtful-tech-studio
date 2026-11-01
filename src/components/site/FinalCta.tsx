import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

export function FinalCta({
  title = "Got a problem worth solving?",
  text = "Tell us what's slowing you down or what you'd like to build. A short message is a perfectly good start.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="container-page py-24 md:py-32">
      <Reveal className="surface-ink grain relative overflow-hidden rounded-[2rem] px-6 py-16 sm:px-12 md:px-16 md:py-24">
        <svg
          aria-hidden="true"
          viewBox="0 0 400 400"
          className="pointer-events-none absolute -right-24 -top-24 size-[28rem] opacity-60"
        >
          <circle cx="200" cy="200" r="160" fill="none" className="stroke-slate/40" strokeDasharray="2 6" />
          <circle cx="200" cy="200" r="110" fill="none" className="stroke-taupe/40" />
          <circle cx="200" cy="200" r="22" className="fill-slate" />
        </svg>
        <div className="relative max-w-3xl">
          <p className="eyebrow text-on-ink-muted">Let's talk</p>
          <h2 className="display-lg mt-6 text-balance">{title}</h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-on-ink-muted">{text}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild variant="light" size="xl">
              <Link to="/contact">
                Let's Solve It <ArrowUpRight />
              </Link>
            </Button>
            <Button asChild variant="line-light" size="xl">
              <Link to="/work">Explore Our Work</Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
