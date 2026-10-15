import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { LatestInsights } from "@/components/latest-insights";
import { PageHero } from "@/components/page-hero";
import { PracticeAreaCard } from "@/components/practice-area-card";
import { ButtonLink, Container, Prose, SectionHeading } from "@/components/ui";
import { pageHeroes, practiceAreaHref, practiceAreas, practiceLenses } from "@/lib/content";
import { absoluteUrl, heroTitle, pageMetadata } from "@/lib/seo";

const hero = pageHeroes.practiceAreas;

export const metadata: Metadata = pageMetadata({
  title: heroTitle(hero.title),
  description: hero.subtitle,
  path: "/practice-areas",
  keywords: ["practice areas", ...practiceAreas.map((area) => area.title)],
});

export default function PracticeAreasPage() {
  return (
    <>
      <JsonLd
        data={{
          "@type": "ItemList",
          name: "Practice Areas",
          itemListElement: practiceAreas.map((area, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: area.title,
            url: absoluteUrl(practiceAreaHref(area.slug)),
          })),
        }}
      />
      <PageHero
        image={hero.image}
        alt={hero.alt}
        title={hero.title}
        subtitle={hero.subtitle}
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
              Our practice is organised around six focus areas at the forefront of Africa&apos;s energy, climate, resource,
             and industrial future.
            </p>
            <p>
              The engagements we work on rarely fit neatly into one discipline, so we look at every mandate through
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
