import Image from "next/image";
import { insights } from "@/lib/content";
import { ButtonLink, Container, Eyebrow, SectionHeading, buttonClasses } from "./ui";

export function LatestInsights() {
  return (
    <section className="pb-16">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Insights &amp; Perspective</Eyebrow>
            <SectionHeading lines={["Latest From ClimeNergies"]} />
          </div>
          <ButtonLink href="/blog" size="sm" className="!bg-[#012F23] !text-white !px-16 !py-2">
            View All
          </ButtonLink>
        </div>
        <ul className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {insights.map((post) => (
            <li key={post.href}>
              <article className="group flex h-full flex-col">
                <div className="relative aspect-4/3 overflow-hidden bg-forest-50">
                  {/* Same treatment as the blog page: the whole cover, uncropped. Extra top padding clears the label. */}
                  <Image
                    src={post.cover}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 400px, 100vw"
                    className="object-contain px-6 pt-14 pb-6 drop-shadow-[0_10px_18px_rgba(0,42,32,0.25)] transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute top-4 left-4 bg-white/90 px-3 py-1 font-ui text-xs font-medium text-forest-900 backdrop-blur">
                    ClimeNergies Digest
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg leading-snug font-medium text-forest-900">{post.title}</h3>
                <p className="mt-3 line-clamp-2 flex-1 text-sm leading-relaxed text-ink/75">{post.excerpt}</p>
                <a
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClasses({ size: "sm", className: "mt-6 self-start" })}
                >
                  Read Digest <span className="sr-only">: {post.title} (PDF, opens in a new tab)</span>
                </a>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
