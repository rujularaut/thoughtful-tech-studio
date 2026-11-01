import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroGraphic } from "@/components/site/HeroGraphic";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { ProjectVisual } from "@/components/site/ProjectVisual";
import { ImageSlot } from "@/components/site/ImageSlot";
import { FinalCta } from "@/components/site/FinalCta";
import { founderIntro, founders, problems, processSteps, projects, services, studio } from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Forma Digital — Your problem. Our next big idea." },
      {
        name: "description",
        content:
          "A small, founder-led studio building websites, software, AI automation, WhatsApp integrations and data tools — for projects of every size.",
      },
      { property: "og:title", content: "Forma Digital — Your problem. Our next big idea." },
      {
        property: "og:description",
        content: "Technology that makes sense. Real people. Meet the studio behind MediBook and TickReply.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Problems />
      <Services />
      <SelectedWork />
      <Process />
      <Value />
      <Founders />
      <FinalCta />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-page grid items-center gap-14 pb-20 pt-12 md:pt-20 lg:grid-cols-12 lg:gap-8 lg:pb-28">
        <div className="lg:col-span-7">
          <p className="eyebrow flex items-center gap-3 text-muted-foreground animate-rise">
            <span className="h-px w-10 bg-taupe" /> {studio.tagline}
          </p>
          <h1 className="display-xl mt-8 text-balance animate-rise [animation-delay:120ms]">
            Your problem.
            <br />
            Our next <span className="italic-accent">big idea.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground animate-rise [animation-delay:240ms]">
            We're a small, founder-led studio that turns everyday challenges into websites, software
            and automations that actually help — and we're happy to talk about projects of any size.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 animate-rise [animation-delay:360ms]">
            <Button asChild variant="ink" size="xl">
              <Link to="/contact">
                Let's Solve It <ArrowUpRight />
              </Link>
            </Button>
            <Button asChild variant="line" size="xl">
              <Link to="/work">Explore Our Work</Link>
            </Button>
          </div>
          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t pt-6 animate-rise [animation-delay:480ms]">
            {[
              ["2", "founders you'll talk to directly"],
              ["6", "ways we can help"],
              ["2", "client projects in development"],
            ].map(([n, l]) => (
              <div key={l}>
                <dt className="sr-only">{l}</dt>
                <dd className="font-display text-4xl">{n}</dd>
                <dd className="mt-1 text-xs leading-snug text-muted-foreground">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="flex justify-center lg:col-span-5 lg:justify-end">
          <HeroGraphic />
        </div>
      </div>
    </section>
  );
}

function Problems() {
  return (
    <section className="bg-stone py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          index="01"
          label="Problems we solve"
          title={
            <>
              Sounds familiar? <span className="italic-accent">We can help.</span>
            </>
          }
          intro="You don't need to know which technology you need. Most projects start with a sentence like one of these."
        />
        <ul className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-line sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p, i) => (
            <Reveal as="li" key={p.text} delay={i * 70} className="group bg-ivory p-8 transition-colors duration-500 hover:bg-sage">
              <span className="eyebrow text-taupe">{p.tag}</span>
              <p className="mt-6 font-display text-2xl leading-snug">{p.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          index="02"
          label="What we do"
          title={
            <>
              From the first idea to <span className="italic-accent">something that works.</span>
            </>
          }
        />
        <ol className="mt-16 border-b">
          {services.map((s, i) => (
            <Reveal as="li" key={s.id} delay={i * 50}>
              <Link
                to="/services"
                hash={s.id}
                className="group grid grid-cols-12 items-baseline gap-4 border-t py-8 transition-all duration-500 hover:bg-stone md:px-4"
              >
                <span className="eyebrow col-span-2 text-taupe md:col-span-1">{s.number}</span>
                <h3 className="col-span-10 font-display text-2xl transition-transform duration-500 group-hover:translate-x-2 md:col-span-5 md:text-4xl">
                  {s.title}
                </h3>
                <p className="col-span-12 text-muted-foreground md:col-span-5">{s.short}</p>
                <ArrowUpRight className="hidden size-5 text-muted-foreground transition-all duration-500 group-hover:rotate-45 group-hover:text-foreground md:col-span-1 md:block md:justify-self-end" />
              </Link>
            </Reveal>
          ))}
        </ol>
        <div className="mt-10">
          <Link to="/services" className="link-underline inline-flex items-center gap-2 text-sm">
            See everything we can help with <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function SelectedWork() {
  return (
    <section className="surface-ink py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          index="03"
          label="Selected work"
          title={
            <>
              Two real projects, <span className="italic text-slate">being built right now.</span>
            </>
          }
          intro="We'd rather show you honest work in progress than polished claims. Both projects are in active development with our clients."
        />
        <div className="mt-16 space-y-20">
          {projects.map((p, i) => (
            <Reveal key={p.slug}>
              <Link
                to="/work/$slug"
                params={{ slug: p.slug }}
                className="group grid items-center gap-10 lg:grid-cols-12"
              >
                <div className={i % 2 === 1 ? "lg:order-2 lg:col-span-7" : "lg:col-span-7"}>
                  <div className="transition-transform duration-700 group-hover:-translate-y-1.5 group-hover:scale-[1.01]">
                    <ProjectVisual slug={p.slug} />
                  </div>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1 lg:col-span-5" : "lg:col-span-5"}>
                  <div className="flex items-center gap-3">
                    <span className="eyebrow text-taupe">Project {p.number}</span>
                    <span className="eyebrow inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-on-ink-muted">
                      <span className="size-1.5 rounded-full bg-slate animate-pulse-soft" /> {p.status}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-5xl md:text-6xl">{p.name}</h3>
                  <p className="eyebrow mt-3 text-on-ink-muted">{p.category}</p>
                  <p className="mt-6 text-lg leading-relaxed text-on-ink-muted">{p.oneLiner}</p>
                  <span className="mt-8 inline-flex items-center gap-2 border-b border-on-ink/30 pb-1 text-sm transition-colors group-hover:border-on-ink">
                    Read the case study <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:rotate-45" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          index="04"
          label="How we work"
          title={
            <>
              No complicated process. <span className="italic-accent">Just good collaboration.</span>
            </>
          }
          intro="Clear communication, practical solutions and a realistic scope that respects your budget."
        />
        <ol className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          <span aria-hidden="true" className="absolute left-0 right-0 top-[1.15rem] hidden h-px bg-line md:block" />
          {processSteps.map((s, i) => (
            <Reveal as="li" key={s.number} delay={i * 120} className="relative">
              <span className="relative z-10 inline-flex size-9 items-center justify-center rounded-full border bg-background eyebrow">
                {s.number}
              </span>
              <h3 className="mt-6 font-display text-2xl leading-snug">{s.title}</h3>
              <p className="mt-3 text-muted-foreground">{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Value() {
  const points = [
    ["Start small", "Begin with what matters most, then grow it when you're ready."],
    ["Honest scope", "We'll tell you what's realistic for your budget — and what isn't needed."],
    ["Open budgets", "Share a rough figure, or none at all. We'll suggest options either way."],
    ["Direct contact", "No account managers. You speak with the people building your project."],
  ];
  return (
    <section className="bg-sage py-24 md:py-32">
      <div className="container-page grid gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-6">
          <p className="eyebrow text-muted-foreground">
            <span className="text-taupe">05</span>&nbsp;&nbsp; Affordability & value
          </p>
          <h2 className="display-lg mt-6 text-balance">
            You don't need a huge budget. <span className="italic-accent">You need the right solution.</span>
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Good technology isn't only for big companies. We shape the work around what you need and
            what you can invest — without cutting corners on quality.
          </p>
          <Button asChild variant="ink" size="xl" className="mt-10">
            <Link to="/contact">
              Talk about your budget <ArrowUpRight />
            </Link>
          </Button>
        </Reveal>
        <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-6">
          {points.map(([t, d], i) => (
            <Reveal as="li" key={t} delay={i * 80} className="rounded-2xl bg-ivory p-7 transition-shadow duration-500 hover:shadow-lift">
              <span className="font-display text-5xl text-taupe">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-6 font-display text-2xl">{t}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Founders() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          index="06"
          label="Meet the founders"
          title={
            <>
              Two people. <span className="italic-accent">A lot of curiosity.</span>
            </>
          }
          intro={founderIntro}
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {founders.map((f, i) => (
            <Reveal key={f.slug} delay={i * 120} className={i === 1 ? "md:mt-16" : ""}>
              <ImageSlot src={f.photo} alt={`Photo of ${f.name}`} label="Photo coming soon" className="aspect-[4/5]">
                <span className="m-auto font-display text-[7rem] italic text-ink/15">{f.initials}</span>
              </ImageSlot>
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <h3 className="font-display text-3xl">{f.name}</h3>
                <span className="eyebrow text-muted-foreground">{f.role}</span>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-12">
          <Link to="/about" className="link-underline inline-flex items-center gap-2 text-sm">
            More about us <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
