import { createServerFn } from "@tanstack/react-start";
import { inquirySchema, MAX_PER_EMAIL_PER_HOUR, MIN_FILL_TIME_MS } from "./inquiry-schema";

export type InquiryResult =
  | { ok: true }
  | { ok: false; reason: "rate_limited" | "error"; message: string };

export const submitInquiry = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => inquirySchema.parse(input))
  .handler(async ({ data }): Promise<InquiryResult> => {
    // Bots: filled the hidden field or submitted instantly. Pretend success, store nothing.
    if (data.website || data.elapsedMs < MIN_FILL_TIME_MS) {
      return { ok: true };
    }

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const email = data.email.toLowerCase();

    const since = new Date(Date.now() - 60 * 60 * 1000).toISOString();
    const { count, error: countError } = await supabaseAdmin
      .from("project_inquiries")
      .select("id", { count: "exact", head: true })
      .eq("email", email)
      .gte("created_at", since);

    if (countError) {
      console.error("inquiry rate check failed", countError.message);
      return { ok: false, reason: "error", message: "We couldn't send your message right now." };
    }
    if ((count ?? 0) >= MAX_PER_EMAIL_PER_HOUR) {
      return {
        ok: false,
        reason: "rate_limited",
        message: "We've already received a few messages from you — we'll be in touch soon.",
      };
    }

    const { error } = await supabaseAdmin.from("project_inquiries").insert({
      name: data.name,
      email,
      business: data.business ?? null,
      service: data.service,
      description: data.description,
      budget: data.budget ?? null,
      timeline: data.timeline ?? null,
    });

    if (error) {
      console.error("inquiry insert failed", error.message);
      return { ok: false, reason: "error", message: "We couldn't send your message right now." };
    }
    return { ok: true };
  });
