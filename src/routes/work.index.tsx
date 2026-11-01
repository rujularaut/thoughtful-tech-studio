import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { ProjectVisual } from "@/components/site/ProjectVisual";
import { FinalCta } from "@/components/site/FinalCta";
import { projects } from "@/content/site";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Work — MediBook & TickReply | openframe" },
      {
        name: "description",
        content:
          "Our two client projects in development: MediBook, a hospital appointment platform, and TickReply, a review management SaaS with WhatsApp and AI assistance.",
      },
      { property: "og:title", content: "Work — MediBook & TickReply | openframe" },
      {
        property: "og:description",
        content: "Honest, in-progress case studies of the two client projects we're building right now.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <>
      <section className="container-page pb-16 pt-14 md:pt-24">
        <p className="eyebrow text-muted-foreground animate-rise">Work</p>
        <h1 className="display-xl mt-6 max-w-5xl text-balance animate-rise [animation-delay:100ms]">
          Real projects, <span className="italic-accent">honestly in progress.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground animate-rise [animation-delay:200ms]">
          We're a young studio, so instead of a long list of logos, here are the two client projects
          we're building right now — what problem they address, how we're approaching it, and what's
          still ahead.
        </p>
      </section>

      <section className="container-page space-y-6 pb-12">
        {projects.map((p, i) => (
          <Reveal key={p.slug}>
            <Link
              to="/work/$slug"
              params={{ slug: p.slug }}
              className="group block overflow-hidden rounded-[2rem] border bg-ivory transition-shadow duration-700 hover:shadow-lift"
            >
              <div className="grid gap-0 lg:grid-cols-12">
                <div className="flex flex-col justify-between gap-10 p-8 md:p-12 lg:col-span-5">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="eyebrow text-taupe">{p.number} / 0{projects.length}</span>
                      <span className="eyebrow inline-flex items-center gap-1.5 rounded-full bg-stone px-2.5 py-1 text-muted-foreground">
                        <span className="size-1.5 rounded-full bg-slate-deep animate-pulse-soft" /> {p.status}
                      </span>
                    </div>
                    <h2 className="mt-8 font-display text-6xl md:text-7xl">{p.name}</h2>
                    <p className="eyebrow mt-3 text-muted-foreground">{p.category}</p>
                    <p className="mt-8 font-display text-2xl leading-snug">{p.heading}</p>
                  </div>
                  <div>
                    <ul className="flex flex-wrap gap-2">
                      {p.services.map((s) => (
                        <li key={s} className="rounded-full border px-3 py-1 text-xs text-muted-foreground">
                          {s}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-8 inline-flex items-center gap-2 text-sm">
                      Read the case study
                      <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:rotate-45" />
                    </span>
                  </div>
                </div>
                <div className="p-3 lg:col-span-7">
                  <ProjectVisual
                    slug={p.slug}
                    className={i === 0 ? "h-full" : "h-full"}
                  />
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </section>

      <FinalCta
        title="Your project could be next."
        text="Whether it's a small website or a new platform, we'd love to hear what you're working on."
      />
    </>
  );
}
