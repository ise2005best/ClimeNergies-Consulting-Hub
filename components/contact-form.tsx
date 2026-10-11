"use client";

import { useActionState } from "react";
import { type ContactState, submitContact } from "@/app/contact/actions";
import { buttonClasses } from "./ui";

const initialState: ContactState = { status: "idle" };

type FieldProps = {
  name: "firstName" | "surname" | "email" | "company" | "message";
  label: string;
  state: ContactState;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  multiline?: boolean;
  className?: string;
};

function Field({ name, label, state, type = "text", autoComplete, required, multiline, className = "" }: FieldProps) {
  const error = state.errors?.[name];
  const shared = {
    id: name,
    name,
    required,
    autoComplete,
    defaultValue: state.values?.[name],
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? `${name}-error` : undefined,
    className: `mt-1 block w-full border-0 border-b bg-transparent px-0 py-2.5 text-[0.95rem] text-ink transition-[border-color,box-shadow] outline-none placeholder:text-ink/40 focus:shadow-[0_1px_0_0_var(--color-forest-900)] ${error ? "border-red-700" : "border-forest-900/40 focus:border-forest-900"}`,
  };

  return (
    <div className={className}>
      <label htmlFor={name} className="block font-ui text-sm text-forest-900">
        {label}
        {!required && <span className="text-forest-600"> (optional)</span>}
      </label>
      {multiline ? (
        <textarea rows={4} {...shared} className={`${shared.className} resize-y`} />
      ) : (
        <input type={type} {...shared} />
      )}
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-xs text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState);

  if (state.status === "success") {
    return (
      <div role="status" className="flex h-full flex-col justify-center border border-forest-900/15 bg-white p-8 sm:p-10">
        <p className="font-display text-2xl text-forest-900">Message sent.</p>
        <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-ink/80">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="relative grid gap-x-6 gap-y-8 sm:grid-cols-2">
      <Field name="firstName" label="First Name" autoComplete="given-name" required state={state} />
      <Field name="surname" label="Surname" autoComplete="family-name" required state={state} />
      <Field name="email" label="Email" type="email" autoComplete="email" required state={state} className="sm:col-span-2" />
      <Field name="company" label="Company" autoComplete="organization" state={state} className="sm:col-span-2" />
      <Field name="message" label="Message" multiline required state={state} className="sm:col-span-2" />

      <div aria-hidden className="absolute left-[-9999px]">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="sm:col-span-2">
        <button type="submit" disabled={pending} className={buttonClasses({ size: "lg", className: "w-full disabled:opacity-60" })}>
          {pending ? "Sending…" : "Submit Form"}
        </button>
        <p role="status" aria-live="polite" className="mt-3 min-h-5 text-sm text-red-700">
          {state.status === "error" ? state.message : ""}
        </p>
      </div>
    </form>
  );
}
