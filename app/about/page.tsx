import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Accordion } from "@/components/accordion";
import { LinkedInLink } from "@/components/linkedin-link";
import { MissionVision } from "@/components/mission-vision";
import { PageHero } from "@/components/page-hero";
import { ButtonLink, Container, Eyebrow, StatsBadge, Prose, SectionHeading } from "@/components/ui";
import { coreValues, team } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "ClimeNergies Consulting Hub is an Africa-focused boutique advisory firm integrating policy, regulation, strategy, and capital across the continent's energy, climate, and industrial transformation.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        image="/assets/about-page/Heropage Slide 3_shutterstock_533448412 (2).jpg"
        alt="A light bulb reflecting wind turbines in front of a solar farm and green hills"
        title={["About", "ClimeNergies"]}
        subtitle="An advisory firm built for the complexity of the energy transition."
        actions={
          <>
            <ButtonLink href="/contact">Get In Touch</ButtonLink>
            <ButtonLink href="/practice-areas" variant="outline-light">
              Practice Areas
            </ButtonLink>
          </>
        }
      />

      {/* Who We Are */}
      <section className="py-16">
        <Container className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow>Who We Are</Eyebrow>
            <SectionHeading lines={["Advisory Built For", "Africa's Sustainable Future"]} />
            <Prose className="mt-8">
              <p>
                ClimeNergies Consulting Hub is an Africa-focused boutique advisory firm working across the
                continent&apos;s energy, climate, and industrial transformation.
              </p>
              <p>
                Based in Nigeria with a continent-wide mandate, we advise governments, corporations, investors,
                innovators, and development institutions, integrating policy, regulation, strategy, and capital to
                turn ambition into investable opportunities and lasting value. Our advice is grounded in
                Africa&apos;s market realities and priorities, not imported frameworks.
              </p>
              <p>
                Our expertise spans oil and gas, power systems, energy access, energy and climate transition,
                climate finance, critical minerals, resource governance, green industrialization, and ESG, with
                experience across African and international markets from policy and regulation through investment
                and execution.
              </p>
              <p>
                We are lean and senior-led. Every client works directly with experienced advisers who stay engaged
                through implementation, ensuring advice is rigorous, commercially grounded, and executable.
              </p>
            </Prose>
          </div>
          <div className="relative">
            <div className="relative aspect-4/5 overflow-hidden sm:aspect-[5/4.4] lg:aspect-auto lg:h-full">
              <Image
                src="/assets/about-page/Who We Are Section (1).jpg"
                alt="Four colleagues in discussion around a laptop at a meeting table"
                fill
                sizes="(min-width: 1024px) 600px, 100vw"
                className="object-cover"
              />
            </div>
            <StatsBadge className="absolute right-0 bottom-0" />
          </div>
        </Container>
      </section>

      {/* The Problem We Solve */}
      <section className="pb-16">
        <Container>
          <Eyebrow>The Problem We Solve</Eyebrow>
          <SectionHeading lines={["Bridging The Gap Between", "Ambition And Execution."]} />
          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* The infographic has labels near its edges, so it is never cropped. On desktop its box grows to
                the text height, and the colours of its top and bottom edges fill the extra space. */}
            <div className="flex items-center bg-[linear-gradient(to_bottom,#f4f5ee_50%,#03281f_50%)]">
              <Image
                src="/assets/about-page/Cinematic Energy Scene.png"
                alt="Illustration: policy, regulation, strategy, and capital converge into a bridge spanning the gap between ambition (policy targets, NDCs, resource endowment) and lasting value (bankable projects, investment unlocked, value retained in Africa, a resilient energy future)."
                width={1672}
                height={941}
                sizes="(min-width: 1024px) 600px, 100vw"
                className="h-auto w-full"
              />
            </div>
            <Prose>
              <p>
                Africa&apos;s energy, climate, and industrial transformation has no shortage of ambition. The gap
                is execution: turning policy targets into bankable projects.
              </p>
              <p>
                Projects stall on fragmented regulation, shifting policy, scarce fit-for-purpose capital, and
                misaligned stakeholders. The advisory meant to close that gap has not kept pace. It often leans on
                developed-market playbooks or treats policy, regulation, strategy and capital in isolation. The
                result is higher transaction costs, lost deals, and value leaving the continent.
              </p>
              <p>
                We close that gap with integrated, senior-led advisory that is technically rigorous, commercially
                grounded, and built on decades of hands-on experience across African and global markets.
              </p>
              <p>
                We turn ambition into bankable projects, unlock investment, and help Africa capture more of the
                value its resources and markets create.
              </p>
            </Prose>
          </div>
        </Container>
      </section>

      {/* Why ClimeNergies */}
      <section className="pb-16">
        <Container>
          <Eyebrow>Why ClimeNergies</Eyebrow>
          <SectionHeading lines={["Built For The Realities", "Our Clients Navigate."]} />
          <Prose className="mt-8 max-w-5xl">
            <p>
              Africa needs advisory grounded in its own markets, institutions, and realities, not global playbooks
              designed for another continent and adapted. ClimeNergies was built for that purpose.
            </p>
            <p>
              We combine global institutional rigor with deep local and African market expertise, earned across
              boardrooms, regulatory institutions, project sites, and investment committees.
            </p>
            <p>
              We understand what governments need to attract responsible investment, what investors need to deploy
              capital with confidence, and what businesses need to navigate complex markets and deliver bankable
              projects. We know the terrain because we have worked it.
            </p>
            <p>
              As a senior-led boutique practice, every client works directly with experienced advisers. No layers.
              No distance. Just technically rigorous, commercially grounded expertise applied directly to the
              challenge at hand, with the agility that larger advisory firms cannot offer and the commitment of a
              practice whose reputation rests on every engagement it undertakes.
            </p>
          </Prose>
        </Container>
      </section>

      <MissionVision />

      {/* Core Values */}
      <section className="pb-16">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Eyebrow>Our Core Values</Eyebrow>
            <SectionHeading lines={["The Principles Behind", "Every Engagement"]} />
            <Prose className="mt-6 max-w-md">
              <p>
                Five principles that govern every engagement, every recommendation, and every relationship we
                build. These are not statements on a wall; they are the operating principles behind every piece of
                advice we give and every engagement we undertake.
              </p>
            </Prose>
          </div>
          <Accordion items={coreValues} className="lg:col-span-7" />
        </Container>
      </section>

      {/* Team */}
      <section className="pb-16">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>The Team</Eyebrow>
              <SectionHeading lines={["Led By Expertise,", "Backed By A Powerful Network."]} />
            </div>
            <ButtonLink href="/team" size="sm">
              Learn More
            </ButtonLink>
          </div>
          <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {team.map((member) => (
              <li key={member.slug}>
                <Link href={`/team#${member.slug}`} className="group block">
                  <div className="relative aspect-3/4 overflow-hidden bg-forest-100">
                    <Image
                      src={member.image}
                      alt={`Portrait of ${member.name}`}
                      fill
                      sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                      className={`object-cover ${member.imagePosition ?? ""} transition-transform duration-700 group-hover:scale-[1.03]`}
                    />
                  </div>
                </Link>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl font-medium text-forest-900">
                      <Link href={`/team#${member.slug}`} className="hover:underline">
                        {member.name}
                      </Link>
                    </h3>
                    <p className="mt-1 font-ui text-sm text-forest-700">{member.role}</p>
                  </div>
                  <LinkedInLink member={member} />
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
