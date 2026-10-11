"use server";

import { z } from "zod";

const contactSchema = z.object({
  firstName: z.string().trim().min(1, "Please enter your first name.").max(100, "That name looks too long."),
  surname: z.string().trim().min(1, "Please enter your surname.").max(100, "That name looks too long."),
  email: z
    .string()
    .trim()
    .pipe(z.email("Please enter a valid email address.").max(254, "Please enter a valid email address.")),
  company: z.string().trim().max(200, "Please shorten the company name."),
  message: z
    .string()
    .trim()
    .min(10, "Please tell us a little more about what you're working on.")
    .max(5000, "Please keep your message under 5,000 characters."),
});

type ContactFields = z.input<typeof contactSchema>;
type Field = keyof ContactFields;

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<Field, string>>;
  values?: Partial<ContactFields>;
};

export async function submitContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Honeypot: real visitors never see this field, bots tend to fill it.
  if (formData.get("website")) {
    return { status: "success", message: "Thank you. We'll be in touch shortly." };
  }

  const raw = Object.fromEntries(
    contactSchema.keyof().options.map((field) => [field, String(formData.get(field) ?? "")]),
  ) as ContactFields;

  const result = contactSchema.safeParse(raw);

  if (!result.success) {
    const { fieldErrors } = z.flattenError(result.error);
    const errors = Object.fromEntries(
      Object.entries(fieldErrors).map(([field, messages]) => [field, messages?.[0]]),
    ) as ContactState["errors"];
    return { status: "error", message: "Please check the highlighted fields.", errors, values: raw };
  }

  // TODO: deliver the enquiry (e.g. email via Resend or Postmark, or a CRM webhook).
  // Until that is wired up, submissions are only written to the server log.
  console.info("[contact] New enquiry", result.data);

  return { status: "success", message: "Thank you. Your message has been received and we'll be in touch shortly." };
}
