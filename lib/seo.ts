import type { Metadata } from "next";
import { contactDetails, heroSlides, practiceAreas, team } from "./content";

export const siteUrl = "https://www.climenergiesconsulting.com";
export const siteName = "ClimeNergies Consulting Hub";

export const absoluteUrl = (path: string) => new URL(path, siteUrl).href;

/** Every page lists these after its own keywords. */
const siteKeywords = [
  "ClimeNergies",
  "ClimeNergies Consulting Hub",
  "Africa energy advisory",
  "energy transition Africa",
  "climate advisory Africa",
  "energy consulting Nigeria",
  "climate consulting Nigeria",
  "advisory firm Lagos",
  "energy policy and regulation",
  "climate finance Africa",
  "carbon markets Africa",
  "critical minerals Africa",
  "ESG advisory Nigeria",
  "oil and gas advisory Nigeria",
  "power sector reform Nigeria",
  "green industrialisation Africa",
];

/** Hero lines as one page title, without the closing full stop the headings use. */
export const heroTitle = (lines: string[]) => lines.join(" ").replace(/\.$/, "");

/**
 * Title, description, keywords, canonical URL and Open Graph tags for a page. The share image comes from the
 * route's opengraph-image file, and Next.js copies the title, description and image into the X (Twitter) tags.
 */
export function pageMetadata({
  title,
  description,
  path,
  keywords = [],
}: {
  title: Metadata["title"];
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  return {
    title,
    description,
    keywords: [...keywords, ...siteKeywords],
    alternates: { canonical: path },
    openGraph: { type: "website", siteName, locale: "en_NG", url: path },
  };
}

const organizationId = `${siteUrl}/#organization`;

/** Enough to identify the firm wherever other structured data points to it. */
export const organizationRef = {
  "@type": "ProfessionalService",
  "@id": organizationId,
  name: siteName,
  url: siteUrl,
};

const founder = team[0];

/** The firm's full profile, for the home page. */
export const organizationJsonLd = {
  ...organizationRef,
  alternateName: "ClimeNergies",
  description: heroSlides[0].subheadline,
  logo: absoluteUrl("/logos/ClimeNergies_Primary-Logo-(Dark-Green-&-Lemon-Green).png"),
  image: absoluteUrl(heroSlides[0].image),
  email: contactDetails.email,
  telephone: contactDetails.phoneHref.replace("tel:", ""),
  // contactDetails.address is written for display, so the structured version is spelled out here.
  address: {
    "@type": "PostalAddress",
    streetAddress: "2nd Floor, Alternative Bank building, 21 Admiralty Way",
    addressLocality: "Lekki Phase 1",
    addressRegion: "Lagos",
    addressCountry: "NG",
  },
  areaServed: { "@type": "Continent", name: "Africa" },
  sameAs: [contactDetails.linkedin],
  founder: {
    "@type": "Person",
    name: founder.name,
    jobTitle: founder.role,
    sameAs: founder.linkedin ? [founder.linkedin] : undefined,
  },
  knowsAbout: practiceAreas.map((area) => area.title),
};

export const websiteJsonLd = {
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: siteName,
  inLanguage: "en",
  publisher: { "@id": organizationId },
};

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
