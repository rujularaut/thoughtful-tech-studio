import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { ArrowUpRight, Check, Loader2, Mail, MessageCircle } from "lucide-react";
import { useRef, useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { budgetOptions, serviceOptions, studio, timelineOptions } from "@/content/site";
import { inquirySchema } from "@/lib/inquiry-schema";
import { submitInquiry } from "@/lib/inquiry.functions";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Start a project — Contact openframe" },
      {
        name: "description",
        content:
          "Tell us what you're working on. You don't need a perfect plan — share your idea, challenge or goal and we'll explore what makes sense.",
      },
      { property: "og:title", content: "Tell us what you're working on — openframe" },
      {
        property: "og:description",
        content: "You don't need a perfect plan. Tell us your idea, challenge, or goal, and we'll explore what makes sense.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

type FieldKey = "name" | "email" | "business" | "service" | "description" | "budget" | "timeline" | "website" | "elapsedMs";
type Errors = { [K in FieldKey]?: string | undefined };

function ContactPage() {
  return (
    <section className="container-page grid gap-16 pb-24 pt-14 md:pt-24 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <p className="eyebrow text-muted-foreground animate-rise">Start a project</p>
        <h1 className="display-lg mt-6 text-balance animate-rise [animation-delay:100ms]">
          Tell us what you're <span className="italic-accent">working on.</span>
        </h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground animate-rise [animation-delay:200ms]">
          You don't need a perfect plan. Tell us your idea, challenge, or goal, and we'll explore what
          makes sense.
        </p>

        <div className="mt-12 space-y-4">
          <a
            href={`mailto:${studio.email}`}
            className="group flex items-center justify-between rounded-2xl border p-5 transition-colors hover:bg-stone"
          >
            <span className="flex items-center gap-4">
              <span className="inline-flex size-10 items-center justify-center rounded-full bg-sage">
                <Mail className="size-4" />
              </span>
              <span>
                <span className="eyebrow block text-muted-foreground">Email</span>
                {studio.email}
              </span>
            </span>
            <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
          </a>
          {studio.whatsapp ? (
            <a
              href={`https://wa.me/${studio.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-2xl border p-5 transition-colors hover:bg-stone"
            >
              <span className="flex items-center gap-4">
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-sage">
                  <MessageCircle className="size-4" />
                </span>
                <span>
                  <span className="eyebrow block text-muted-foreground">WhatsApp</span>
                  Message us directly
                </span>
              </span>
              <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
            </a>
          ) : (
            <div className="flex items-center gap-4 rounded-2xl border border-dashed p-5 text-muted-foreground">
              <span className="inline-flex size-10 items-center justify-center rounded-full bg-stone">
                <MessageCircle className="size-4" />
              </span>
              <span>
                <span className="eyebrow block">WhatsApp</span>
                Number coming soon
              </span>
            </div>
          )}
        </div>

        <div className="mt-12 rounded-2xl bg-sage p-6">
          <p className="eyebrow text-muted-foreground">What happens next</p>
          <ol className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3"><span className="eyebrow text-taupe">01</span> We read your message — personally.</li>
            <li className="flex gap-3"><span className="eyebrow text-taupe">02</span> We reply with questions or a time to talk.</li>
            <li className="flex gap-3"><span className="eyebrow text-taupe">03</span> We suggest practical options that fit your budget.</li>
          </ol>
        </div>
      </div>

      <div className="lg:col-span-7">
        <InquiryForm />
      </div>
    </section>
  );
}

function InquiryForm() {
  const send = useServerFn(submitInquiry);
  const openedAt = useRef(Date.now());
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [service, setService] = useState<string>("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      business: String(fd.get("business") ?? ""),
      service,
      description: String(fd.get("description") ?? ""),
      budget: String(fd.get("budget") ?? ""),
      timeline: String(fd.get("timeline") ?? ""),
      website: String(fd.get("website") ?? ""),
      elapsedMs: Date.now() - openedAt.current,
    };
    const parsed = inquirySchema.safeParse(raw);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]) as FieldKey;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      const first = Object.keys(next)[0];
      if (first) document.getElementById(`f-${first}`)?.focus();
      return;
    }
    setErrors({});
    setStatus("sending");
    try {
      const res = await send({ data: raw });
      if (res.ok) {
        setStatus("sent");
      } else {
        setStatus("idle");
        toast.error(res.message, { description: `You can also email us at ${studio.email}.` });
      }
    } catch {
      setStatus("idle");
      toast.error("We couldn't send your message right now.", {
        description: `Please try again, or email us at ${studio.email}.`,
      });
    }
  }

  if (status === "sent") {
    return (
      <div className="flex min-h-[32rem] flex-col justify-center rounded-[2rem] bg-ink p-10 text-on-ink md:p-14" role="status">
        <span className="inline-flex size-14 items-center justify-center rounded-full bg-slate text-ink">
          <Check className="size-6" />
        </span>
        <h2 className="display-md mt-8">Thank you — we've got your message.</h2>
        <p className="mt-4 max-w-md text-on-ink-muted">
          One of us will read it personally and get back to you soon. If anything is urgent, email{" "}
          <a href={`mailto:${studio.email}`} className="underline underline-offset-4">{studio.email}</a>.
        </p>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      className="rounded-[2rem] bg-stone p-6 sm:p-10 md:p-12"
      aria-describedby="form-note"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="name" label="Your name" error={errors.name}>
          <input id="f-name" name="name" autoComplete="name" maxLength={100} className={inputCls(errors.name)} />
        </Field>
        <Field id="email" label="Email" error={errors.email}>
          <input id="f-email" name="email" type="email" autoComplete="email" maxLength={255} className={inputCls(errors.email)} />
        </Field>
        <Field id="business" label="Business or organisation" optional error={errors.business} className="sm:col-span-2">
          <input id="f-business" name="business" autoComplete="organization" maxLength={150} className={inputCls(errors.business)} />
        </Field>
      </div>

      <fieldset className="mt-8">
        <legend className="text-sm font-medium">What can we help with?</legend>
        <div id="f-service" tabIndex={-1} className="mt-3 flex flex-wrap gap-2 outline-none">
          {serviceOptions.map((opt) => {
            const active = service === opt;
            return (
              <label
                key={opt}
                className={cn(
                  "cursor-pointer rounded-full border px-4 py-2 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring",
                  active ? "border-ink bg-ink text-on-ink" : "border-ink/20 bg-ivory hover:border-ink/50",
                  opt === "I'm not sure yet" && !active && "border-dashed",
                )}
              >
                <input
                  type="radio"
                  name="service"
                  value={opt}
                  checked={active}
                  onChange={() => setService(opt)}
                  className="sr-only"
                />
                {opt}
              </label>
            );
          })}
        </div>
        {errors.service && <p className="mt-2 text-sm text-destructive">{errors.service}</p>}
      </fieldset>

      <Field id="description" label="Tell us about the problem or idea" error={errors.description} className="mt-8">
        <textarea
          id="f-description"
          name="description"
          rows={6}
          maxLength={3000}
          placeholder="What's happening now, what you'd like to change, and anything you've already tried."
          className={cn(inputCls(errors.description), "h-auto resize-y py-3")}
        />
      </Field>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <Field id="budget" label="Approximate budget" optional error={errors.budget}>
          <select id="f-budget" name="budget" defaultValue="" className={inputCls(errors.budget)}>
            <option value="">Prefer not to say</option>
            {budgetOptions.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </Field>
        <Field id="timeline" label="Expected timeline" optional error={errors.timeline}>
          <select id="f-timeline" name="timeline" defaultValue="" className={inputCls(errors.timeline)}>
            <option value="">Not sure yet</option>
            {timelineOptions.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </Field>
      </div>

      {/* Honeypot — hidden from people, tempting for bots */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="f-website">Website</label>
        <input id="f-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p id="form-note" className="max-w-xs text-xs text-muted-foreground">
          We only use your details to reply to you. Budget and timeline are optional.
        </p>
        <Button type="submit" variant="ink" size="xl" disabled={status === "sending"}>
          {status === "sending" ? (
            <>
              <Loader2 className="animate-spin" /> Sending…
            </>
          ) : (
            <>
              Send message <ArrowUpRight />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}

function inputCls(error?: string) {
  return cn(
    "h-12 w-full rounded-xl border bg-ivory px-4 text-[0.95rem] outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40",
    error ? "border-destructive" : "border-ink/15",
  );
}

function Field({
  id,
  label,
  optional,
  error,
  className,
  children,
}: {
  id: string;
  label: string;
  optional?: boolean;
  error?: string | undefined;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={`f-${id}`} className="flex items-baseline justify-between text-sm font-medium">
        {label}
        {optional && <span className="eyebrow text-[0.62rem] text-muted-foreground">Optional</span>}
      </label>
      <div className="mt-2">{children}</div>
      {error && (
        <p id={`f-${id}-error`} className="mt-2 text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
