import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { projects, services, studio } from "@/content/site";
import { Logo } from "./Logo";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="surface-ink grain overflow-hidden">
      <div className="container-page relative pt-20 pb-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo tone="light" />
            <p className="mt-6 max-w-sm font-display text-3xl leading-tight">
              {studio.tagline.split(". ")[0]}.{" "}
              <span className="italic text-slate">{studio.tagline.split(". ")[1]}</span>
            </p>
            <a
              href={`mailto:${studio.email}`}
              className="link-underline mt-8 inline-flex items-center gap-2 text-lg"
            >
              {studio.email} <ArrowUpRight className="size-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-10 md:col-span-7 md:grid-cols-3">
            <div>
              <h3 className="eyebrow text-on-ink-muted">Studio</h3>
              <ul className="mt-5 space-y-3 text-sm">
                <li><Link to="/" className="link-underline">Home</Link></li>
                <li><Link to="/services" className="link-underline">Services</Link></li>
                <li><Link to="/work" className="link-underline">Work</Link></li>
                <li><Link to="/about" className="link-underline">About</Link></li>
                <li><Link to="/contact" className="link-underline">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="eyebrow text-on-ink-muted">Projects</h3>
              <ul className="mt-5 space-y-3 text-sm">
                {projects.map((p) => (
                  <li key={p.slug}>
                    <Link to="/work/$slug" params={{ slug: p.slug }} className="link-underline">
                      {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <h3 className="eyebrow mt-10 text-on-ink-muted">Elsewhere</h3>
              <ul className="mt-5 space-y-3 text-sm">
                {studio.socials.map((s) =>
                  s.href ? (
                    <li key={s.label}>
                      <a href={s.href} target="_blank" rel="noreferrer" className="link-underline">
                        {s.label}
                      </a>
                    </li>
                  ) : (
                    <li key={s.label} className="text-on-ink-muted">
                      {s.label} <span className="text-xs">· soon</span>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h3 className="eyebrow text-on-ink-muted">What we do</h3>
              <ul className="mt-5 space-y-3 text-sm">
                {services.map((s) => (
                  <li key={s.id}>
                    <Link to="/services" hash={s.id} className="link-underline">
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none mt-20 select-none font-display text-[19vw] leading-[0.8] tracking-[-0.05em] text-on-ink/[0.07] md:text-[15vw]"
        >
          openframe
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t pt-6 text-xs text-on-ink-muted md:flex-row md:justify-between">
          <p>© {year} {studio.name}. Founded by Rujula Raut & Ritisha Bobde.</p>
          <p>{studio.philosophy}</p>
        </div>
      </div>
    </footer>
  );
}
