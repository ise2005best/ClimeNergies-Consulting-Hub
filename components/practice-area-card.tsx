import Image from "next/image";
import Link from "next/link";
import { type PracticeArea, practiceAreaHref } from "@/lib/content";
import { buttonClasses } from "./ui";

export function PracticeAreaCard({ area }: { area: PracticeArea }) {
  const href = practiceAreaHref(area.slug);

  return (
    <article className="group flex h-full flex-col">
      {/* Duplicate of the Read More link, so it's hidden from screen readers and the tab order. */}
      <Link href={href} tabIndex={-1} aria-hidden className="relative block aspect-4/3 overflow-hidden bg-forest-100">
        <Image
          src={area.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 450px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </Link>
      <h3 className="mt-5 font-display text-lg leading-snug font-medium text-forest-900">{area.title}</h3>
      <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-ink/75">{area.intro[0]}</p>
      <Link href={href} className={buttonClasses({ size: "sm", className: "mt-6 self-start" })}>
        Read More<span className="sr-only">: {area.title}</span>
      </Link>
    </article>
  );
}
