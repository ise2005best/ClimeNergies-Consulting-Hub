import type { Metadata } from "next";
import Image from "next/image";
import { JsonLd } from "@/components/json-ld";
import { LinkedInLink } from "@/components/linkedin-link";
import { Container, Eyebrow, Prose, SectionHeading } from "@/components/ui";
import { team, teamHeading } from "@/lib/content";
import { absoluteUrl, heroTitle, organizationRef, pageMetadata } from "@/lib/seo";

// The heading has no subtitle under it, so the description is written for search results.
export const metadata: Metadata = pageMetadata({
  title: heroTitle(teamHeading),
  description:
    "Meet the senior advisers behind ClimeNergies: decades of experience across energy law, transactions, venture investment, project origination, and climate policy in Africa.",
  path: "/team",
  keywords: ["ClimeNergies team", "energy advisers Africa", "climate experts Nigeria", ...team.map((m) => m.name)],
});

export default function TeamPage() {
  return (
    <section className="pt-36 pb-16 sm:pt-44">
      <JsonLd
        data={{
          "@graph": team.map((member) => ({
            "@type": "Person",
            name: member.name,
            jobTitle: member.role,
            image: absoluteUrl(member.image),
            url: absoluteUrl(`/team#${member.slug}`),
            sameAs: member.linkedin ? [member.linkedin] : undefined,
            worksFor: organizationRef,
          })),
        }}
      />
      <Container>
        <Eyebrow>The Team</Eyebrow>
        <SectionHeading as="h1" lines={teamHeading} />

        <div className="mt-16 space-y-16">
          {team.map((member, i) => (
            <article
              key={member.slug}
              id={member.slug}
              className="grid scroll-mt-32 gap-10 md:grid-cols-12 md:gap-12"
            >
              <div
                className={`relative aspect-4/5 overflow-hidden bg-forest-100 md:col-span-5 lg:aspect-auto ${i % 2 === 1 ? "md:order-last" : ""}`}
              >
                <Image
                  src={member.image}
                  alt={`Portrait of ${member.name}`}
                  fill
                  sizes="(min-width: 768px) 500px, 100vw"
                  preload={i === 0}
                  className={`object-cover ${member.imagePosition ?? ""}`}
                />
              </div>
              <div className="md:col-span-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-display text-2xl font-bold text-forest-900 sm:text-3xl">{member.name}</h2>
                    <p className="mt-1 font-ui text-sm font-semibold text-forest-700">{member.role}</p>
                  </div>
                  <LinkedInLink member={member} />
                </div>
                <Prose className="mt-6">
                  {member.bio.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </Prose>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
