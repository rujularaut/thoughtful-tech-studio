import { z } from "zod";
import { budgetOptions, serviceOptions, timelineOptions } from "@/content/site";

const optionalChoice = (options: readonly string[]) =>
  z
    .string()
    .trim()
    .optional()
    .transform((v) => (v ? v : undefined))
    .refine((v) => v === undefined || options.includes(v), { message: "Please choose an option" });

export const inquirySchema = z.object({
  name: z.string().trim().min(1, "Please tell us your name").max(100, "Name is too long"),
  email: z
    .string()
    .trim()
    .min(1, "Please add your email")
    .email("Please enter a valid email")
    .max(255, "Email is too long"),
  business: z
    .string()
    .trim()
    .max(150, "Please keep this under 150 characters")
    .optional()
    .transform((v) => (v ? v : undefined)),
  service: z
    .string()
    .trim()
    .refine((v) => (serviceOptions as readonly string[]).includes(v), {
      message: "Please choose a service, or “I'm not sure yet”",
    }),
  description: z
    .string()
    .trim()
    .min(20, "A couple of sentences helps us understand — at least 20 characters")
    .max(3000, "Please keep this under 3000 characters"),
  budget: optionalChoice(budgetOptions),
  timeline: optionalChoice(timelineOptions),
  // Spam protection: hidden field that real visitors leave empty.
  website: z.string().max(0).optional(),
  // Spam protection: milliseconds the form was open before submitting.
  elapsedMs: z.number().int().nonnegative(),
});

export type InquiryInput = z.input<typeof inquirySchema>;

/** Submissions faster than this are treated as automated. */
export const MIN_FILL_TIME_MS = 3000;
/** Maximum inquiries accepted from one email address per hour. */
export const MAX_PER_EMAIL_PER_HOUR = 3;
