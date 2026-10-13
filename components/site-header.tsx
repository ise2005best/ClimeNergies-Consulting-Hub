"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LuArrowUpRight, LuMenu, LuX } from "react-icons/lu";
import { contactDetails, legalLinks, navLinks } from "@/lib/content";
import { Logo } from "./logo";
import { ButtonLink, StepMark } from "./ui";

function isActive(pathname: string, link: (typeof navLinks)[number]) {
  if (link.href === "/") return pathname === "/";
  const prefixes = "match" in link ? link.match : [link.href];
  return prefixes.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`));
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    // The header box also spans the closed (invisible) mobile menu, so it ignores taps itself and only
    // the bar and the open menu receive them. Otherwise it blocks the top of the page on mobile.
    <header
      className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5"
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("a")) setOpen(false);
      }}
    >
      <div className="pointer-events-auto mx-auto max-w-318 rounded-sm bg-forest-950/95 shadow-[0_12px_40px_-16px_rgba(0,0,0,0.5)] backdrop-blur-md">
        <div className="flex h-16 items-center justify-between gap-6 px-5 lg:px-7">
          <Logo preload />

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-12">
              {navLinks.map((link) => {
                const active = isActive(pathname, link);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={`font-ui text-sm transition-colors hover:text-citron-400 ${active ? "text-citron-400" : "text-white"}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden lg:block">
            <ButtonLink href="/contact" aria-current={pathname === "/contact" ? "page" : undefined} size="sm">
              Contact <LuArrowUpRight className="size-4" aria-hidden />
            </ButtonLink>
          </div>

          <button
            type="button"
            className="-mr-2 inline-flex size-10 items-center justify-center rounded text-white lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <LuX className="size-6" /> : <LuMenu className="size-6" />}
          </button>
        </div>

      </div>

      {/* Mobile menu: its own panel below the bar */}
      <div
        id="mobile-nav"
        inert={!open}
        className={`pointer-events-auto mx-auto mt-2 max-h-[calc(100svh-6.5rem)] max-w-318 overflow-y-auto rounded-sm bg-forest-950 shadow-[0_12px_40px_-16px_rgba(0,0,0,0.5)] transition-[opacity,translate,visibility] duration-200 ease-out lg:hidden ${open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"}`}
      >
        <nav aria-label="Mobile" className="px-6 pt-8 pb-10 font-ui text-white">
          <ul>
            {navLinks.map((link) => {
              const active = isActive(pathname, link);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className="flex items-center gap-2.5 py-2.5 text-xl transition-colors hover:text-citron-400"
                  >
                    {active && <StepMark className="h-2 w-4.5 shrink-0 text-citron-400" />}
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <ButtonLink href="/contact" size="lg" className="mt-8 w-full">
            Contact <LuArrowUpRight className="size-4" aria-hidden />
          </ButtonLink>

          <div className="mt-12 space-y-8 text-lg tracking-wide">
            <div>
              <p className="text-sm text-white/55">Contact</p>
              <ul className="mt-3 space-y-2">
                <li>
                  <a href={`mailto:${contactDetails.email}`} className="break-all hover:text-citron-400">
                    {contactDetails.email}
                  </a>
                </li>
                <li>
                  <a href={contactDetails.phoneHref} className="hover:text-citron-400">
                    {contactDetails.phone}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm text-white/55">Legal</p>
              <ul className="mt-3 space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-citron-400">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
