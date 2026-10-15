import Image from "next/image";
import { FaCircleCheck, FaCompassDrafting, FaMagnifyingGlass } from "react-icons/fa6";
import { Accordion } from "@/components/accordion";
import { HeroCarousel } from "@/components/hero-carousel";
import { MissionVision } from "@/components/mission-vision";
import { GetInTouch } from "@/components/get-in-touch";
import { LatestInsights } from "@/components/latest-insights";
import { ButtonLink, Container, Eyebrow, StatsBadge, Prose, SectionHeading } from "@/components/ui";
import { approach, clientGroups, founderFullName, founderIntro, heroSlides, practiceAreaHref, practiceAreas, team } from "@/lib/content";

const approachIcons = {
  search: FaMagnifyingGlass,
  compass: FaCompassDrafting,
  check: FaCircleCheck,
};

const founder = team[0];

export default function HomePage() {
  return (
    <>
      <HeroCarousel slides={heroSlides} />

      {/* The Problem */}
      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow>The Problem</Eyebrow>
            <SectionHeading lines={["Vast Potential.", "Persistent Execution Gaps."]} />
            <Prose className="mt-8">
              <p>
                Africa&apos;s energy, climate and industrial transformation has no shortage of ambition. The gap
                is execution.
              </p>
              <p>
                Fragmented regulation, shifting policy, scarce fit-for-purpose capital and misaligned stakeholders
                keep stalling viable opportunities. Too often, the advice on offer is imported from developed
                markets or delivered in silos, far from African realities.
              </p>
              <p>
                ClimeNergies closes that gap. We connect policy, regulation, strategy and capital to turn ambition
                into bankable opportunities, unlock investment and help Africa capture more value from its
                resources and markets.
              </p>
            </Prose>
          </div>
          <div className="relative aspect-4/3 overflow-hidden lg:aspect-auto lg:h-full">
            <Image
              src="/assets/home-page/Latest Section 1 Image .jpg"
              alt="An ageing thermal power station under a grey sky"
              fill
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      {/* Who We Are */}
      <section className="pb-16">
        <Container className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Below the text on mobile, on the left on desktop. */}
          <div className="relative order-last lg:order-first">
            {/* On desktop the image fills the row, so it matches the height of the text column. */}
            <div className="relative aspect-[4/3.6] overflow-hidden lg:aspect-auto lg:h-full">
              <Image
                src="/assets/home-page/shutterstock_2843619517.jpg"
                alt="Two smiling professionals standing in front of a living moss map of Africa"
                fill
                sizes="(min-width: 1024px) 600px, 100vw"
                className="object-cover"
              />
            </div>
            <StatsBadge className="absolute right-0 bottom-0" />
          </div>
          <div>
            <Eyebrow>Who We Are</Eyebrow>
            <SectionHeading lines={["Built For Africa.", "Focused On Execution."]} />
            <Prose className="mt-8">
              <p>
                We are a boutique advisory firm rooted in Nigeria, delivering integrated solutions across
                Africa&apos;s energy, climate, and industrial transformation.
              </p>
              <p>
                We work with governments, investors, innovators, DFIs, and businesses, bringing together policy,
                regulatory, strategic, and capital expertise to turn potential into scalable, investment-ready
                opportunities and lasting value.
              </p>
              <p>
                Our expertise spans energy transition, oil and gas, climate finance, resource governance, green
                industrialization, critical minerals, and ESG, with experience across African and international
                markets, from policy and regulation to investment and execution.
              </p>
              <p>
                We are lean and senior-led. Every client works directly with advisers who have done the work, not
                described it.
              </p>
            </Prose>
            <ButtonLink href="/about" className="mt-9">
              More About Us
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* What We Do */}
      <section id="practice-areas" className="pb-16">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>What We Do</Eyebrow>
              <SectionHeading lines={["Integrated Advisory Across", "Six Practice Areas."]} />
            </div>
            <ButtonLink href="/practice-areas" size="sm">
              Explore Our Practice Areas
            </ButtonLink>
          </div>
          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-4/3 overflow-hidden lg:aspect-auto lg:h-full">
              <Image
                src="/assets/home-page/shutterstock_2730446025 (2).jpg"
                alt="Aerial view of a biogas plant with green digester domes beside rows of solar panels"
                fill
                sizes="(min-width: 1024px) 600px, 100vw"
                className="object-cover"
              />
            </div>
            <Accordion
              items={practiceAreas.map((area) => ({ ...area, href: practiceAreaHref(area.slug) }))}
            />
          </div>
        </Container>
      </section>

      {/* Why ClimeNergies */}
      <section className="pb-16">
        <Container>
          <Eyebrow>Why ClimeNergies</Eyebrow>
          <SectionHeading lines={["Global Rigor.", "African Depth. Real Execution."]} />
          <Prose className="mt-8 max-w-7xl">
            <p>
              Africa needs advisory grounded in its own markets and institutions, not adapted global playbooks. We
              combine the technical standards of global institutions with market knowledge earned across
              boardrooms, regulatory bodies, project sites, and investment committees.
            </p>
            <p>
              We connect policy, capital, and execution to deliver bankable outcomes for governments, investors,
              and businesses.
            </p>
            <p>
              As a senior-led boutique practice, our clients work directly with the advisers handling their
              mandate. No layers. No handoffs. Just rigorous, commercially grounded expertise applied directly to
              the challenge at hand.
            </p>
          </Prose>
        </Container>
      </section>

      {/* Who We Work With */}
      <section className="pb-16">
        <Container>
          <Eyebrow>Who We Work With</Eyebrow>
          <SectionHeading
            lines={[
              "The Leaders Transforming Africa's",
              "Energy, Climate, And Industrial Landscape.",
            ]}
          />
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-relaxed text-ink/80">
            We understand their mandates, their constraints, and what it takes to deliver results in the markets
            where they operate.
          </p>

          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-4/3 overflow-hidden lg:order-last lg:aspect-auto lg:h-full">
              <Image
                src="/assets/home-page/image3.png"
                alt="Four business leaders in professional and traditional Nigerian attire walking together outside an office"
                fill
                sizes="(min-width: 1024px) 700px, 100vw"
                className="object-cover object-[center_30%]"
              />
            </div>
            <Accordion items={clientGroups} />
          </div>
        </Container>
      </section>

      {/* How We Work */}
      <section className="pb-16">
        <Container>
          <Eyebrow>How We Work</Eyebrow>
          <SectionHeading lines={["Diagnose. Architect. Execute."]} />
          <p className="mt-5 max-w-3xl text-[0.95rem] leading-relaxed text-ink/80">
            We do not sell frameworks. We build strategies grounded in insight, technical depth, and policy
            expertise, tailored to the specific challenge in front of us and the market it sits in.
          </p>
          <ol className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
            {approach.map((step, i) => {
              const Icon = approachIcons[step.icon];
              return (
                <li key={step.title} className="flex flex-col items-center text-center">
                  <span className="inline-flex size-16 items-center justify-center rounded-sm bg-forest-50">
                    <Icon className="size-8 text-forest-900" aria-hidden />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-medium text-forest-900">
                    <span className="sr-only">Step {i + 1}: </span>
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-[0.95rem] leading-[1.75] text-ink/80">{step.description}</p>
                </li>
              );
            })}
          </ol>
        </Container>
      </section>

      {/* Meet The Founder */}
      <section className="pb-16">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Meet The Founder</Eyebrow>
              <SectionHeading
                lines={["25+ Years Across Law, Strategy, Venture", "Investment, And Project Execution."]}
              />
            </div>
            <ButtonLink href="/team" size="sm">
              Meet The Team
            </ButtonLink>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-12 md:gap-14">
            <div className="relative aspect-4/5 overflow-hidden bg-forest-900 md:col-span-4 lg:aspect-auto lg:h-full">
              <Image
                src="/assets/our-team/Adedoyin_Pearse.webp"
                alt={`Portrait of ${founder.name}`}
                fill
                sizes="(min-width: 768px) 400px, 100vw"
                className="object-cover object-top"
              />
            </div>
            <div className="md:col-span-8">
              <h3 className="font-display text-2xl font-medium text-forest-900 sm:text-3xl">{founder.name}</h3>
              <p className="mt-1 font-ui text-sm font-semibold text-forest-700">{founder.role}</p>
              <Prose className="mt-6">
                {founderIntro.map((paragraph) => (
                  <p key={paragraph}>
                    {paragraph.startsWith(founderFullName) ? (
                      <>
                        <strong className="font-semibold">{founderFullName}</strong>
                        {paragraph.slice(founderFullName.length)}
                      </>
                    ) : (
                      paragraph
                    )}
                  </p>
                ))}
              </Prose>
            </div>
          </div>
        </Container>
      </section>

      <MissionVision />

      <GetInTouch withImage />

      <LatestInsights />
    </>
  );
}
