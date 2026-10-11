"use client";

import { useActionState } from "react";
import { type NewsletterState, subscribe } from "@/app/newsletter/actions";
import { buttonClasses } from "./ui";

const initialState: NewsletterState = { status: "idle" };

export function NewsletterForm() {
  const [state, formAction, pending] = useActionState(subscribe, initialState);

  if (state.status === "success") {
    return (
      <p role="status" className="mt-5 text-sm text-citron-300">
        {state.message}
      </p>
    );
  }

  const error = state.status === "error" ? state.message : undefined;

  return (
    <form action={formAction} className="relative mt-5">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder="Enter your Email"
        defaultValue={state.email}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? "newsletter-error" : undefined}
        className={`block h-10 w-full rounded-sm border bg-transparent px-3 text-sm text-white transition-colors outline-none placeholder:text-white/55 focus:border-citron-400 ${error ? "border-red-300" : "border-white/70"}`}
      />

      <div aria-hidden className="absolute left-[-9999px]">
        <label htmlFor="newsletter-website">Website</label>
        <input id="newsletter-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {error && (
        <p id="newsletter-error" className="mt-2 text-xs text-red-300">
          {error}
        </p>
      )}

      <div className="mt-3 flex justify-end">
        <button
          type="submit"
          disabled={pending}
          className={buttonClasses({ size: "sm", className: "w-36 disabled:opacity-60" })}
        >
          {pending ? "Subscribing…" : "Subscribe"}
        </button>
      </div>
    </form>
  );
}
