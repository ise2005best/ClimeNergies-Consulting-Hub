"use server";

import { z } from "zod";

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

  // TODO: add the address to the mailing list (e.g. Mailchimp, Brevo or Resend Audiences).
  // Until that is wired up, sign-ups are only written to the server log.
  console.info("[newsletter] New subscriber", result.data);

  return { status: "success", message: "Thanks for subscribing. You'll hear from us soon." };
}
