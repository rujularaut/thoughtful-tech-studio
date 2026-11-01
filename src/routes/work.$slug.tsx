import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Circle } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { ProjectVisual } from "@/components/site/ProjectVisual";
import { ImageSlot } from "@/components/site/ImageSlot";
import { FinalCta } from "@/components/site/FinalCta";
import { projects } from "@/content/site";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) return { meta: [{ title: "Project not found — openframe" }, { name: "robots", content: "noindex" }] };
    const title = `${p.name} case study — openframe`;
    return {
      meta: [
        { title },
        { name: "description", content: `${p.oneLiner} ${p.heading}` },
        { property: "og:title", content: title },
        { property: "og:description", content: p.heading },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="container-page py-32">
      <h1 className="display-md">We couldn't find that project.</h1>
      <Link to="/work" className="link-underline mt-6 inline-block">
        See all work
      </Link>
    </div>
  ),
  component: CaseStudy,
});

function CaseStudy() {
  const { project: p } = Route.useLoaderData();
  const other = projects.find((x) => x.slug !== p.slug)!;

  return (
    <>
      <section className="container-page pb-12 pt-10 md:pt-16">
        <Link to="/work" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="size-4" /> All work
        </Link>
        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="flex flex-wrap items-center gap-3 animate-rise">
              <span className="eyebrow text-taupe">Project {p.number}</span>
              <span className="eyebrow inline-flex items-center gap-1.5 rounded-full bg-stone px-2.5 py-1 text-muted-foreground">
                <span className="size-1.5 rounded-full bg-slate-deep animate-pulse-soft" /> {p.status}
              </span>
            </div>
            <h1 className="mt-6 font-display text-7xl tracking-tight md:text-9xl animate-rise [animation-delay:80ms]">
              {p.name}
            </h1>
            <p className="display-md mt-8 max-w-3xl text-balance animate-rise [animation-delay:160ms]">
              {p.heading}
            </p>
          </div>
          <dl className="grid content-end gap-6 border-t pt-6 text-sm lg:col-span-4 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <div>
              <dt className="eyebrow text-muted-foreground">Category</dt>
              <dd className="mt-1">{p.category}</dd>
            </div>
            <div>
              <dt className="eyebrow text-muted-foreground">Status</dt>
              <dd className="mt-1">{p.status} with our client</dd>
            </div>
            <div>
              <dt className="eyebrow text-muted-foreground">Our role</dt>
              <dd className="mt-1">{p.services.join(" · ")}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="container-page">
        <Reveal>
          <ProjectVisual slug={p.slug} className="md:p-14" />
        </Reveal>
        <p className="mt-4 text-xs text-muted-foreground">
          This is an illustrative concept sketch, not a screenshot of the finished product.
        </p>
      </section>

      <section className="container-page grid gap-12 py-24 md:grid-cols-2 md:py-32">
        <Reveal className="rounded-2xl bg-stone p-8 md:p-12">
          <p className="eyebrow text-taupe">The problem</p>
          <p className="mt-6 font-display text-3xl leading-snug">{p.problem}</p>
        </Reveal>
        <Reveal delay={120} className="rounded-2xl bg-ink p-8 text-on-ink md:p-12">
          <p className="eyebrow text-slate">Our approach</p>
          <p className="mt-6 font-display text-3xl leading-snug">{p.solution}</p>
        </Reveal>
      </section>

      <section className="border-y bg-sage py-24 md:py-32">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow text-muted-foreground">Questions we started with</p>
            <ul className="mt-8 space-y-6">
              {p.questions.map((q) => (
                <li key={q} className="border-l-2 border-slate pl-4 font-display text-xl italic leading-snug">
                  {q}
                </li>
              ))}
            </ul>
          </Reveal>
          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal>
              <p className="eyebrow text-muted-foreground">Planned features</p>
              <p className="mt-3 max-w-xl text-muted-foreground">
                The project is still being built. These are features in our plan — not finished or
                launched functionality. We'll update this page as work is completed.
              </p>
            </Reveal>
            <ul className="mt-10 grid gap-px overflow-hidden rounded-2xl bg-line sm:grid-cols-2">
              {p.plannedFeatures.map((f, i) => (
                <Reveal as="li" key={f.title} delay={i * 60} className="bg-ivory p-6 sm:[&:last-child:nth-child(odd)]:col-span-2">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-xl">{f.title}</h3>
                    <span className="eyebrow inline-flex shrink-0 items-center gap-1 text-muted-foreground">
                      <Circle className="size-2.5" /> Planned
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-page py-24 md:py-32">
        <Reveal className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow text-muted-foreground">From the build</p>
            <p className="mt-4 text-muted-foreground">
              Real screens and progress photos will appear here once our client is happy to share them.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 md:col-span-8">
            <ImageSlot alt={`${p.name} screen`} label="Screen coming soon" className="aspect-[3/4] sm:col-span-2 sm:aspect-[4/3]" />
            <ImageSlot alt={`${p.name} detail`} label="Detail coming soon" className="aspect-[3/4]" />
          </div>
        </Reveal>
      </section>

      <section className="container-page pb-8">
        <Link
          to="/work/$slug"
          params={{ slug: other.slug }}
          className="group flex flex-col justify-between gap-6 border-t py-10 md:flex-row md:items-end"
        >
          <div>
            <p className="eyebrow text-muted-foreground">Next project</p>
            <p className="mt-3 font-display text-5xl transition-transform duration-500 group-hover:translate-x-2 md:text-7xl">
              {other.name}
            </p>
          </div>
          <span className="inline-flex items-center gap-2 text-sm">
            {other.category}
            <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:rotate-45" />
          </span>
        </Link>
      </section>

      <FinalCta />
    </>
  );
}
