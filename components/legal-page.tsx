import type { ReactNode } from "react";
import { contactDetails } from "@/lib/content";
import { Container, Eyebrow, Prose, SectionHeading } from "./ui";

export type LegalSection = { id: string; title: string; body: ReactNode };

// Section bodies are plain JSX, so lists, links and sub-headings are styled here rather than one by one.
const bodyClasses =
  "[&_a]:text-forest-900 [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-forest-700 [&_h3]:pt-2 [&_h3]:font-display [&_h3]:text-lg [&_h3]:text-forest-900 [&_strong]:font-medium [&_strong]:text-forest-900 [&_ul]:list-disc [&_ul]:space-y-2.5 [&_ul]:pl-5 [&_ul]:marker:text-forest-600";

/** Shared layout for the Privacy Policy and Terms of Service: title, date, contents list and numbered sections. */
export function LegalPage({
  title,
  lastUpdated,
  intro,
  sections,
}: {
  title: string;
  lastUpdated: string;
  intro: ReactNode;
  sections: LegalSection[];
}) {
  return (
    <article className="pt-36 pb-20">
      <Container>
        <Eyebrow>Legal</Eyebrow>
        <SectionHeading as="h1" lines={[title]} />
        <p className="mt-4 font-ui text-sm text-forest-600">Last updated: {lastUpdated}</p>

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <nav aria-label="Contents" className="lg:col-span-4">
            <div className="border-t border-forest-900/20 pt-5 lg:sticky lg:top-28">
              <p className="font-ui text-sm font-medium text-forest-900">Contents</p>
              <ol className="mt-3 space-y-2 font-ui text-sm text-ink/80">
                {sections.map((section, i) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="flex gap-2 underline-offset-4 transition-colors hover:text-forest-900 hover:underline"
                    >
                      <span className="w-6 shrink-0 text-forest-600 tabular-nums">{i + 1}.</span>
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          <div className={`lg:col-span-8 ${bodyClasses}`}>
            <Prose className="max-w-3xl">{intro}</Prose>
            {sections.map((section, i) => (
              <section
                key={section.id}
                id={section.id}
                aria-labelledby={`${section.id}-heading`}
                className="mt-12 scroll-mt-28 border-t border-forest-900/20 pt-8"
              >
                <h2 id={`${section.id}-heading`} className="font-display text-[1.4rem] leading-snug text-forest-900">
                  {i + 1}. {section.title}
                </h2>
                <Prose className="mt-4 max-w-3xl">{section.body}</Prose>
              </section>
            ))}
          </div>
        </div>
      </Container>
    </article>
  );
}

export function EmailLink() {
  return <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>;
}

/** Email, phone and postal address, for the closing "Contact Us" sections. */
export function LegalContactDetails() {
  return (
    <dl className="space-y-3">
      <div className="sm:flex sm:gap-6">
        <dt className="text-forest-600 sm:w-20 sm:shrink-0">Email</dt>
        <dd>
          <EmailLink />
        </dd>
      </div>
      <div className="sm:flex sm:gap-6">
        <dt className="text-forest-600 sm:w-20 sm:shrink-0">Phone</dt>
        <dd>
          <a href={contactDetails.phoneHref}>{contactDetails.phone}</a>
        </dd>
      </div>
      <div className="sm:flex sm:gap-6">
        <dt className="text-forest-600 sm:w-20 sm:shrink-0">Post</dt>
        <dd>
          <address className="not-italic">
            {contactDetails.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
        </dd>
      </div>
    </dl>
  );
}
