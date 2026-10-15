import type { Metadata } from "next";
import { FaLinkedin } from "react-icons/fa6";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { ButtonLink, Container, Eyebrow, SectionHeading } from "@/components/ui";
import { contactDetails } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us what you're working on. Contact ClimeNergies Consulting Hub in Lagos for advisory across Africa's energy, climate, and industrial transformation.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        image="/assets/contact/Investment & Climate Finance (1).jpg"
        alt="A green light bulb and a young leaf beside stacks of coins"
        imagePosition="object-[30%_center]"
        title={["Let's Talk."]}
        subtitle="Tell us what you're working on. We'll tell you how we can help."
        actions={
          <>
            <ButtonLink href="/about">About</ButtonLink>
            <ButtonLink href="/practice-areas" variant="outline-light">
              Practice Areas
            </ButtonLink>
          </>
        }
      />

      <section className="py-16">
        <Container className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Eyebrow>Contact</Eyebrow>
            <SectionHeading lines={["Whoever You Are.", "We Know Your Context.", "Let Us Prove It."]} />
            <dl className="mt-10 space-y-5 text-[0.95rem] tracking-[0.02em]">
              <div>
                <dt className="text-forest-600">Email</dt>
                <dd className="mt-0.5">
                  <a
                    href={`mailto:${contactDetails.email}`}
                    className="break-all text-forest-900 underline-offset-4 hover:underline"
                  >
                    {contactDetails.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-forest-600">Phone</dt>
                <dd className="mt-0.5">
                  <a href={contactDetails.phoneHref} className="text-forest-900 underline-offset-4 hover:underline">
                    {contactDetails.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-forest-600">Address</dt>
                <dd className="mt-0.5 text-forest-900">
                  <address className="not-italic">
                    {contactDetails.address.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </dd>
              </div>
              <div>
                <dt className="sr-only">LinkedIn</dt>
                <dd>
                  <a
                    href={contactDetails.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-forest-900 underline-offset-4 hover:underline"
                  >
                    <FaLinkedin className="size-6 shrink-0" aria-hidden />
                    LinkedIn
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
