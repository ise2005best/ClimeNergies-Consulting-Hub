import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { Container, Eyebrow, SectionHeading, buttonClasses } from "@/components/ui";
import { digests } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Analysis and perspectives on Africa's energy, climate, and industrial transition from the ground up, including The ClimeNergies Digest monthly news roundup.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        image="/assets/blog/iStock-1201144154.jpg"
        alt="Colleagues in discussion around a tablet and printed charts"
        title={["Our Blog."]}
        subtitle="Local insights and global perspective on energy, climate, critical minerals and industrial transition."
      />

      <section className="py-16">
        <Container>
          <Eyebrow>The ClimeNergies Digest</Eyebrow>
          <SectionHeading lines={["Monthly News Roundup"]} />
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-relaxed text-ink/80">
            A monthly news roundup across Nigeria, Africa &amp; the world, covering oil &amp; gas, power &amp;
            renewables, critical minerals, and climate &amp; ESG.
          </p>

          <ul className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {digests.map((digest) => (
              <li key={digest.href}>
                <article className="group flex h-full flex-col">
                  {/* Duplicate of the button link below, so it's hidden from screen readers and the tab order. */}
                  <a
                    href={digest.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={-1}
                    aria-hidden
                    className="relative block aspect-4/3 overflow-hidden bg-forest-50"
                  >
                    <Image
                      src={digest.cover}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 440px, (min-width: 640px) 50vw, 100vw"
                      className="object-contain p-6 drop-shadow-[0_10px_18px_rgba(0,42,32,0.25)] transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </a>
                  <p className="mt-5 font-ui text-xs font-medium tracking-wide text-forest-600">
                    {digest.issue} · {digest.date}
                  </p>
                  <h3 className="mt-2 font-display text-lg leading-snug font-medium text-forest-900">
                    {digest.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/75">{digest.excerpt}</p>
                  <a
                    href={digest.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClasses({ size: "sm", className: "mt-6 self-start" })}
                  >
                    Read Digest <span className="sr-only">: {digest.title} (PDF, opens in a new tab)</span>
                  </a>
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
