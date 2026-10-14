import Image from "next/image";
import type { ReactNode } from "react";
import { Container } from "./ui";

export function PageHero({
  image,
  alt,
  title,
  subtitle,
  actions,
  imagePosition = "object-center",
}: {
  image: string;
  alt: string;
  title: string[];
  subtitle?: string;
  actions?: ReactNode;
  imagePosition?: string;
}) {
  return (
    <section className="relative isolate flex min-h-svh items-end overflow-hidden bg-forest-950">
      <Image src={image} alt={alt} fill sizes="100vw" preload className={`-z-10 object-cover ${imagePosition}`} />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgba(0,26,20,0.82)_0%,rgba(0,26,20,0.35)_50%,rgba(0,26,20,0.1)_80%),linear-gradient(to_right,rgba(0,26,20,0.5),transparent_65%)]"
      />
      <Container className="pt-32 pb-14 sm:pb-20">
        <div className="max-w-4xl motion-safe:animate-[rise-in_0.9s_cubic-bezier(0.2,0.7,0.2,1)_both]">
          <h1 className="font-asap text-[clamp(3rem,8vw,6.5rem)] leading-[0.95] font-bold tracking-[-0.03em] text-white">
            {title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">{subtitle}</p>
          )}
          {actions && <div className="mt-8 flex flex-wrap gap-4">{actions}</div>}
        </div>
      </Container>
    </section>
  );
}
