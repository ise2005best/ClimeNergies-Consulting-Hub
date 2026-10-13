import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CoverageList } from "@/components/coverage-list";
import { LatestInsights } from "@/components/latest-insights";
import { PageHero } from "@/components/page-hero";
import { PracticeAreaCard } from "@/components/practice-area-card";
import { Container, Eyebrow, Prose } from "@/components/ui";
import { getPracticeArea, practiceAreas } from "@/lib/content";

// All six pages are prerendered. Cache Components doesn't allow `dynamicParams`,
// so any other slug is rendered on request and hits notFound() below.
export function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: PageProps<"/practice-areas/[slug]">): Promise<Metadata> {
  const area = getPracticeArea((await params).slug);
  if (!area) return {};
  return { title: area.title, description: area.intro[0] };
}

export default async function PracticeAreaPage({ params }: PageProps<"/practice-areas/[slug]">) {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) notFound();

  // Three other areas, rotating so each page suggests a different set.
  const index = practiceAreas.indexOf(area);
  const others = [3, 4, 5].map((offset) => practiceAreas[(index + offset) % practiceAreas.length]);

  return (
    <>
      <PageHero image={area.image} alt={area.imageAlt} title={[area.title]} />

      <section className="py-16">
        <Container>
          <h2 className="max-w-4xl font-display text-[clamp(1.6rem,3vw,2.4rem)] leading-tight text-forest-900">
            {area.tagline}
          </h2>
          <Prose className="mt-6 max-w-5xl">
            {area.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Prose>
          <CoverageList items={area.coverage} className="mt-12" />
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <Eyebrow>Other Practice Areas</Eyebrow>
          <ul className="mt-8 grid gap-10 md:grid-cols-3 md:gap-8">
            {others.map((other) => (
              <li key={other.slug}>
                <PracticeAreaCard area={other} />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <LatestInsights />
    </>
  );
}
