import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { FinalCta } from "@/components/site/FinalCta";
import { ServiceDiagram } from "@/components/site/ServiceDiagram";
import { services } from "@/content/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Forma Digital" },
      {
        name: "description",
        content:
          "Websites, custom software & SaaS, AI and automation, WhatsApp integrations, data analytics and creative digital services — shaped around your needs.",
      },
      { property: "og:title", content: "Services — Forma Digital" },
      {
        property: "og:description",
        content: "Six practical ways we help individuals, startups and businesses solve problems with technology.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="container-page pb-16 pt-14 md:pb-24 md:pt-24">
        <p className="eyebrow text-muted-foreground animate-rise">Services</p>
        <h1 className="display-xl mt-6 max-w-5xl text-balance animate-rise [animation-delay:100ms]">
          Practical technology, <span className="italic-accent">shaped around you.</span>
        </h1>
        <div className="mt-10 grid gap-8 md:grid-cols-12">
          <p className="text-lg leading-relaxed text-muted-foreground md:col-span-6 animate-rise [animation-delay:200ms]">
            Not sure which of these you need? That's normal. Tell us the problem and we'll suggest the
            simplest thing that solves it — even if that means building less.
          </p>
          <nav aria-label="Service categories" className="md:col-span-5 md:col-start-8">
            <ul className="flex flex-wrap gap-2">
              {services.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="inline-flex rounded-full border px-4 py-2 text-sm transition-colors hover:bg-ink hover:text-on-ink"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <div className="border-t">
        {services.map((s, i) => (
          <section
            key={s.id}
            id={s.id}
            className={cn("scroll-mt-20 border-b py-20 md:py-28", i % 2 === 1 && "bg-stone")}
          >
            <div className="container-page grid gap-12 lg:grid-cols-12">
              <Reveal className="lg:col-span-5">
                <span className="font-display text-7xl text-taupe md:text-8xl">{s.number}</span>
                <h2 className="display-md mt-4">{s.title}</h2>
                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{s.intro}</p>
                <p className="mt-6 border-l-2 border-slate pl-4 text-sm">
                  <span className="eyebrow block text-muted-foreground">Often a good fit for</span>
                  <span className="mt-1 block">{s.goodFor}</span>
                </p>
              </Reveal>
              <Reveal delay={120} className="lg:col-span-6 lg:col-start-7">
                <ServiceDiagram id={s.id} className="mb-8" />
                <ul className="grid gap-px overflow-hidden rounded-xl bg-line sm:grid-cols-2">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className={cn(
                        "flex items-center gap-3 px-5 py-4 text-[0.95rem]",
                        i % 2 === 1 ? "bg-ivory" : "bg-stone",
                      )}
                    >
                      <span className="size-1.5 shrink-0 rounded-full bg-slate" /> {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </section>
        ))}
      </div>

      <section className="container-page py-20">
        <Reveal className="grid gap-6 rounded-2xl border p-8 md:grid-cols-12 md:items-center md:p-12">
          <p className="font-display text-2xl leading-snug md:col-span-8 md:text-3xl">
            Something not on this list? <span className="italic-accent">Ask anyway.</span> If it's not
            a good fit for us, we'll say so honestly.
          </p>
          <div className="md:col-span-4 md:text-right">
            <Button asChild variant="ink" size="xl">
              <Link to="/contact">
                Start a conversation <ArrowUpRight />
              </Link>
            </Button>
          </div>
        </Reveal>
      </section>

      <FinalCta />
    </>
  );
}
