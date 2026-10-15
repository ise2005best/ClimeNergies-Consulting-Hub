import { Resend } from "resend";

/**
 * A Resend client, or null when RESEND_API_KEY isn't set (for example, locally before .env.local is filled in).
 * Created per call because `new Resend()` throws without a key, which would break the build.
 */
export function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  return apiKey ? new Resend(apiKey) : null;
}
