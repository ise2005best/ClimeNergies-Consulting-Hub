"use server";

import { z } from "zod";
import { getResend } from "@/lib/resend";

const emailSchema = z
  .string()
  .trim()
  .pipe(z.email("Please enter a valid email address.").max(254, "Please enter a valid email address."));

export type NewsletterState = {
  status: "idle" | "success" | "error";
  message?: string;
  email?: string;
};

export async function subscribe(_prev: NewsletterState, formData: FormData): Promise<NewsletterState> {
  // Honeypot: real visitors never see this field, bots tend to fill it.
  if (formData.get("website")) {
    return { status: "success", message: "Thanks for subscribing." };
  }

  const email = String(formData.get("email") ?? "");
  const result = emailSchema.safeParse(email);

  if (!result.success) {
    return { status: "error", message: result.error.issues[0].message, email };
  }

  const failed: NewsletterState = {
    status: "error",
    message: "Sorry, we couldn't subscribe you just now. Please try again later.",
    email,
  };

  // Contacts belong to the whole Resend account, so subscribers go into the Digest's own segment, which is
  // what each issue is broadcast to.
  const resend = getResend();
  const segmentId = process.env.RESEND_DIGEST_SEGMENT_ID;
  if (!resend || !segmentId) {
    console.error("[newsletter] RESEND_API_KEY or RESEND_DIGEST_SEGMENT_ID is not set, so the sign-up was not saved.");
    return failed;
  }

  const created = await resend.contacts.create({ email: result.data, segments: [{ id: segmentId }] });
  if (created.error) {
    // Usually the address is already a contact (for example, someone signing up twice), so make sure it's in the
    // Digest segment. Anyone who unsubscribed before stays unsubscribed.
    const added = await resend.contacts.segments.add({ email: result.data, segmentId });
    if (added.error) {
      console.error(
        "[newsletter] Resend could not add the subscriber:",
        `${created.error.name}: ${created.error.message};`,
        `${added.error.name}: ${added.error.message}`,
      );
      return failed;
    }
  }

  return { status: "success", message: "Thanks for subscribing. You'll hear from us soon." };
}
