import type { Metadata } from "next";
import { LatestInsights } from "@/components/latest-insights";
import { PageHero } from "@/components/page-hero";
import { PracticeAreaCard } from "@/components/practice-area-card";
import { ButtonLink, Container, Prose, SectionHeading } from "@/components/ui";
import { practiceAreas, practiceLenses } from "@/lib/content";

export const metadata: Metadata = {
  title: "Practice Areas",
  description:
    "Six practice areas at the forefront of Africa's energy, resource, industrial, and climate future, each approached through regulatory, policy, strategy, and capital lenses.",
};

export default function PracticeAreasPage() {
  return (
    <>
      <PageHero
        image="/assets/carousel/Connecting Capital Ecosystems Innovation (1).png"
        alt="A glowing green globe centred on the African continent, connected by a network of points"
        title={["Six Practice Areas"]}
        subtitle="Six specialist practices. Four threads. One integrated approach."
        actions={
          <>
            <ButtonLink href="/contact">Get In Touch</ButtonLink>
            <ButtonLink href="/about" variant="outline-light">
              About
            </ButtonLink>
          </>
        }
      />

      {/* Intro and the four lenses */}
      <section className="py-16">
        <Container>
          <SectionHeading lines={["Our Practice Areas"]} />
          <Prose className="mt-6 max-w-5xl">
            <p>
              Our practice is organised around six focus areas at the forefront of Africa&apos;s energy, resource,
              industrial, and climate future.
            </p>
            <p>
              The challenges we work on rarely fit neatly into one discipline, so we look at every mandate through
              four connected lenses:
            </p>
          </Prose>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {practiceLenses.map((lens) => (
              <li key={lens.title} className="border-t-2 border-citron-500 bg-forest-50 p-6">
                <h3 className="font-display text-lg font-medium text-forest-900">{lens.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/80">{lens.description}</p>
              </li>
            ))}
          </ul>
          <Prose className="mt-10 max-w-4xl">
            <p>
              Together, they run through each of our practice areas, so every mandate is solved as a whole rather
              than in parts.
            </p>
          </Prose>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <ul className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((area) => (
              <li key={area.slug}>
                <PracticeAreaCard area={area} />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <LatestInsights />
    </>
  );
}
