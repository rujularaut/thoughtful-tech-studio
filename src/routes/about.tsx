import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { ImageSlot } from "@/components/site/ImageSlot";
import { FinalCta } from "@/components/site/FinalCta";
import { founderIntro, founders, studio } from "@/content/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Rujula Raut & Ritisha Bobde | Forma Digital" },
      {
        name: "description",
        content:
          "Meet Rujula Raut and Ritisha Bobde, co-founders of Forma Digital — a small studio that believes technology should make things easier, not more complicated.",
      },
      { property: "og:title", content: "About Forma Digital — two people, a lot of curiosity" },
      { property: "og:description", content: founderIntro },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const beliefs = [
  { title: "Understand first", text: "We'd rather ask one more question than build the wrong thing." },
  { title: "Keep it practical", text: "The simplest solution that works is usually the best one." },
  { title: "Talk like people", text: "No jargon. You'll always know what we're doing and why." },
  { title: "Small is a strength", text: "You work directly with the two people responsible for your project." },
];

function AboutPage() {
  return (
    <>
      <section className="container-page pb-20 pt-14 md:pt-24">
        <p className="eyebrow text-muted-foreground animate-rise">About</p>
        <h1 className="display-xl mt-6 max-w-5xl text-balance animate-rise [animation-delay:100ms]">
          Two people. <span className="italic-accent">A lot of curiosity.</span>
        </h1>
        <div className="mt-12 grid gap-10 md:grid-cols-12">
          <p className="font-display text-2xl leading-snug md:col-span-7 md:text-3xl animate-rise [animation-delay:200ms]">
            {founderIntro}
          </p>
          <p className="text-muted-foreground md:col-span-4 md:col-start-9 animate-rise [animation-delay:300ms]">
            openframe is a new, founder-led studio. We're growing carefully, working on real client
            projects, and building the kind of studio we'd want to hire ourselves.
          </p>
        </div>
      </section>

      <section className="container-page grid gap-10 pb-24 md:grid-cols-2 md:pb-32">
        {founders.map((f, i) => (
          <Reveal key={f.slug} delay={i * 120} className={i === 1 ? "md:mt-24" : ""}>
            <ImageSlot src={f.photo} alt={`Photo of ${f.name}`} label="Photo coming soon" className="aspect-[4/5]">
              <span className="m-auto font-display text-[8rem] italic text-ink/15">{f.initials}</span>
            </ImageSlot>
            <div className="mt-6 border-t pt-6">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h2 className="font-display text-4xl">{f.name}</h2>
                <span className="eyebrow text-muted-foreground">{f.role}</span>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {f.focus.map((s, k) => (
                  <li key={k} className="rounded-full border border-dashed px-3 py-1 text-xs text-muted-foreground">
                    {s}
                  </li>
                ))}
              </ul>
              {f.linkedin ? (
                <a href={f.linkedin} target="_blank" rel="noreferrer" className="link-underline mt-6 inline-flex items-center gap-1.5 text-sm">
                  LinkedIn <ArrowUpRight className="size-4" />
                </a>
              ) : (
                <p className="mt-6 text-sm text-muted-foreground">LinkedIn profile coming soon</p>
              )}
            </div>
          </Reveal>
        ))}
      </section>

      <section className="surface-ink py-24 md:py-32">
        <div className="container-page">
          <Reveal className="grid gap-6 md:grid-cols-12">
            <p className="eyebrow text-on-ink-muted md:col-span-3">What we believe</p>
            <h2 className="display-lg text-balance md:col-span-9">
              {studio.philosophy.split(",")[0]},{" "}
              <span className="italic text-slate">{studio.philosophy.split(",")[1]}</span>
            </h2>
          </Reveal>
          <ul className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-line-ink sm:grid-cols-2 lg:grid-cols-4">
            {beliefs.map((b, i) => (
              <Reveal as="li" key={b.title} delay={i * 80} className="bg-ink p-8">
                <span className="eyebrow text-taupe">0{i + 1}</span>
                <h3 className="mt-8 font-display text-2xl">{b.title}</h3>
                <p className="mt-3 text-on-ink-muted">{b.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <FinalCta title="We'd love to hear from you." />
    </>
  );
}
