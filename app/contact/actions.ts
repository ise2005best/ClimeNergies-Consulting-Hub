"use server";

import { z } from "zod";
import { ContactEnquiryEmail } from "@/emails/contact-enquiry";
import { contactDetails } from "@/lib/content";
import { getResend } from "@/lib/resend";

// No mailbox is needed for this address: replies go to the person who sent the enquiry.
const from = "ClimeNergies Website <website@climenergiesconsulting.com>";

const lagos = { timeZone: "Africa/Lagos" } as const;
const formatDate = new Intl.DateTimeFormat("en-GB", { ...lagos, day: "numeric", month: "long", year: "numeric" });
const formatTime = new Intl.DateTimeFormat("en-GB", { ...lagos, hour: "numeric", minute: "2-digit", hour12: true });

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

  const { firstName, surname, email, company, message } = result.data;
  const name = `${firstName} ${surname}`;
  const now = new Date();
  const receivedAt = `${formatDate.format(now)} at ${formatTime.format(now)} (Lagos time)`;
  const failed: ContactState = {
    status: "error",
    message: `Sorry, we couldn't send your message. Please try again, or email us at ${contactDetails.email}.`,
    values: raw,
  };

  const resend = getResend();
  if (!resend) {
    console.error("[contact] RESEND_API_KEY is not set, so the enquiry could not be sent.");
    return failed;
  }

  const { error } = await resend.emails.send({
    from,
    to: contactDetails.email,
    replyTo: email,
    // Names are single-line form fields, but a crafted request could still contain line breaks.
    subject: `New enquiry: ${name}${company ? ` (${company})` : ""}`.replace(/\s+/g, " "),
    react: ContactEnquiryEmail({ firstName, surname, email, company, message, receivedAt }),
    // The plain-text copy, for email clients that don't show HTML.
    text: [
      "New enquiry from the website contact form.",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || "Not given"}`,
      "",
      "Message:",
      message,
      "",
      `Reply to this email to answer ${firstName} directly.`,
    ].join("\n"),
  });

  if (error) {
    console.error("[contact] Resend could not send the enquiry:", error.name, error.message);
    return failed;
  }

  return { status: "success", message: "Thank you. Your message has been received and we'll be in touch shortly." };
}
