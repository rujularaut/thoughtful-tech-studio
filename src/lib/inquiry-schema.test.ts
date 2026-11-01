import { describe, expect, it } from "vitest";
import { inquirySchema } from "./inquiry-schema";

const base = {
  name: "Asha",
  email: "asha@example.com",
  service: "Software & SaaS",
  description: "We need a simple way for patients to book appointments online.",
  elapsedMs: 8000,
};

describe("project inquiry form rules", () => {
  it("accepts “I'm not sure yet” as the service", () => {
    expect(inquirySchema.safeParse({ ...base, service: "I'm not sure yet" }).success).toBe(true);
  });

  it("accepts a submission without business, budget or timeline", () => {
    const r = inquirySchema.safeParse(base);
    expect(r.success).toBe(true);
    if (r.success) {
      expect(r.data.budget).toBeUndefined();
      expect(r.data.timeline).toBeUndefined();
      expect(r.data.business).toBeUndefined();
    }
  });

  it("rejects a missing name and an invalid email", () => {
    expect(inquirySchema.safeParse({ ...base, name: "" }).success).toBe(false);
    expect(inquirySchema.safeParse({ ...base, email: "not-an-email" }).success).toBe(false);
  });

  it("rejects a service that isn't on the list", () => {
    expect(inquirySchema.safeParse({ ...base, service: "Crypto mining" }).success).toBe(false);
  });
});
