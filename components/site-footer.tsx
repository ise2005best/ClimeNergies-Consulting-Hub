import Link from "next/link";
import type { ReactNode } from "react";
import { LuMail, LuMapPin, LuPhone } from "react-icons/lu";
import { contactDetails, legalLinks, navLinks } from "@/lib/content";
import { Logo } from "./logo";
import { NewsletterForm } from "./newsletter-form";
import { Container } from "./ui";

const footerNav = [...navLinks, { href: "/contact", label: "Contact" }];

const linkClass = "transition-colors hover:text-citron-400";

function FooterHeading({ children }: { children: ReactNode }) {
  return <p className="text-[0.95rem] font-medium text-citron-400">{children}</p>;
}

export function SiteFooter() {
  return (
    <footer className="bg-forest-950 font-ui text-white">
      <Container className="grid gap-10 pt-14 pb-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:pt-16 lg:pb-16">
        <div className="sm:col-span-2 lg:col-span-4">
          <Logo size="footer" />
        </div>

        <nav aria-label="Footer" className="lg:col-span-2">
          <FooterHeading>Navigation</FooterHeading>
          <ul className="mt-3 space-y-1.5 text-[0.95rem]">
            {footerNav.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <FooterHeading>Let&apos;s Talk</FooterHeading>
          <ul className="mt-3 space-y-2.5 text-[0.95rem]">
            <li className="flex gap-3">
              <LuMail className="mt-1 size-4 shrink-0 text-citron-400" aria-hidden />
              <a href={`mailto:${contactDetails.email}`} className={`break-all ${linkClass}`}>
                {contactDetails.email}
              </a>
            </li>
            <li className="flex gap-3">
              <LuPhone className="mt-1 size-4 shrink-0 text-citron-400" aria-hidden />
              <a href={contactDetails.phoneHref} className={linkClass}>
                {contactDetails.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <LuMapPin className="mt-1 size-4 shrink-0 text-citron-400" aria-hidden />
              <address className="leading-snug not-italic">
                {contactDetails.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </li>
          </ul>
        </div>

        <div className="sm:col-span-2 lg:col-span-3">
          <FooterHeading>Stay Informed</FooterHeading>
          <p className="mt-3 text-[0.95rem] leading-snug">Stay ahead in Africa&apos;s energy &amp; climate space</p>
          <NewsletterForm />
        </div>
      </Container>

      <Container className="flex flex-col gap-3 pb-8 text-xs text-white/80 sm:flex-row sm:items-center sm:justify-between">
        <p>© ClimeNergies 2026. All rights reserved.</p>
        <ul className="flex gap-6">
          {legalLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={linkClass}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}
