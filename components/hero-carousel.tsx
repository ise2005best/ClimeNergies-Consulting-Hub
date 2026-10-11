"use client";

import Image from "next/image";
import { useState } from "react";
import { LuChevronLeft, LuChevronRight, LuPause, LuPlay } from "react-icons/lu";
import type { heroSlides } from "@/lib/content";
import { ButtonLink, Container } from "./ui";

const SLIDE_DURATION_MS = 5000;

type Slide = (typeof heroSlides)[number];

export function HeroCarousel({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const running = !paused;
  const slide = slides[index];

  const go = (next: number) => setIndex((next + slides.length) % slides.length);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Highlights"
      className="relative isolate flex min-h-svh items-end overflow-hidden bg-forest-950"
    >
      {slides.map((s, i) => (
        <div
          key={s.image}
          aria-hidden={i !== index}
          className={`absolute inset-0 -z-10 transition-opacity duration-1000 ease-out motion-reduce:transition-none ${i === index ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            src={s.image}
            alt={s.alt}
            fill
            sizes="100vw"
            preload={i === 0}
            className={`object-cover ${s.position} transition-transform duration-8000 ease-out motion-reduce:transition-none ${i === index ? "scale-100" : "scale-105"}`}
          />
        </div>
      ))}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgba(0,26,20,0.88)_0%,rgba(0,26,20,0.45)_45%,rgba(0,26,20,0.15)_75%),linear-gradient(to_right,rgba(0,26,20,0.55),transparent_70%)]"
      />

      <Container className="pt-32 pb-14 sm:pb-20">
        <div
          key={index}
          role="group"
          aria-roledescription="slide"
          aria-label={`${index + 1} of ${slides.length}`}
          aria-live={running ? "off" : "polite"}
          className="max-w-4xl motion-safe:animate-[rise-in_0.9s_cubic-bezier(0.2,0.7,0.2,1)_both]"
        >
          <h1 className="font-asap text-[clamp(2.6rem,6.4vw,5.5rem)] leading-[0.98] font-bold tracking-tight text-balance text-white">
            {slide.headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">{slide.subheadline}</p>
        </div>

        <div className="mt-9 flex flex-wrap items-end justify-between gap-8">
          <div className="flex flex-wrap gap-4">
            <ButtonLink href="/contact">Get In Touch</ButtonLink>
            <ButtonLink href="/practice-areas" variant="outline-light">
              Practice Areas
            </ButtonLink>
          </div>

          <div className="flex items-center gap-5">
            <div className="flex gap-2">
              {slides.map((s, i) => (
                <button
                  key={s.image}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === index}
                  className="group relative h-6 w-10 sm:w-14"
                >
                  <span className="absolute inset-x-0 top-1/2 h-0.75 -translate-y-1/2 overflow-hidden rounded-full bg-white/30 transition-colors group-hover:bg-white/50">
                    {i === index && (
                      <span
                        className="absolute inset-0 origin-left bg-citron-400 motion-reduce:hidden"
                        style={{
                          animation: `progress ${SLIDE_DURATION_MS}ms linear both`,
                          animationPlayState: running ? "running" : "paused",
                        }}
                        onAnimationEnd={() => go(index + 1)}
                      />
                    )}
                    {i === index && <span className="absolute inset-0 hidden bg-citron-400 motion-reduce:block" />}
                  </span>
                </button>
              ))}
            </div>
            <div className="flex items-center gap-1 text-white">
              <button
                type="button"
                onClick={() => go(index - 1)}
                aria-label="Previous slide"
                className="inline-flex size-9 items-center justify-center rounded-full transition-colors hover:bg-white/15"
              >
                <LuChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => setPaused((p) => !p)}
                aria-label={paused ? "Play slideshow" : "Pause slideshow"}
                className="inline-flex size-9 items-center justify-center rounded-full transition-colors hover:bg-white/15 motion-reduce:hidden"
              >
                {paused ? <LuPlay className="size-4" /> : <LuPause className="size-4" />}
              </button>
              <button
                type="button"
                onClick={() => go(index + 1)}
                aria-label="Next slide"
                className="inline-flex size-9 items-center justify-center rounded-full transition-colors hover:bg-white/15"
              >
                <LuChevronRight className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
