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
          <ButtonLink href="/blog" size="sm">
            View All
          </ButtonLink>
        </div>
        <ul className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {insights.map((post) => (
            <li key={post.href}>
              <article className="group flex h-full flex-col">
                <div className="relative aspect-4/3 overflow-hidden bg-forest-100">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 400px, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
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
                  Read Article <span className="sr-only">: {post.title} (PDF, opens in a new tab)</span>
                </a>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
