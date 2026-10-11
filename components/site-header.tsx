"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LuArrowUpRight, LuMenu, LuX } from "react-icons/lu";
import { navLinks } from "@/lib/content";
import { Logo } from "./logo";
import { ButtonLink } from "./ui";

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
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
      <div
        className="mx-auto max-w-318 rounded-sm bg-forest-950/95 shadow-[0_12px_40px_-16px_rgba(0,0,0,0.5)] backdrop-blur-md"
        onClick={(e) => {
          if ((e.target as HTMLElement).closest("a")) setOpen(false);
        }}
      >
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

        <div
          id="mobile-nav"
          inert={!open}
          className={`grid transition-[grid-template-rows] duration-300 ease-out lg:hidden ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
        >
          <nav aria-label="Mobile" className="overflow-hidden">
            <ul className="space-y-1 border-t border-white/10 px-5 pt-3 pb-5">
              {navLinks.map((link) => {
                const active = isActive(pathname, link);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={`block py-2.5 font-ui text-base ${active ? "text-citron-400" : "text-white"}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-3">
                <ButtonLink href="/contact" className="w-full">
                  Contact <LuArrowUpRight className="size-4" aria-hidden />
                </ButtonLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
