import type { MetadataRoute } from "next";
import { digests, legalLinks, practiceAreaHref, practiceAreas } from "@/lib/content";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "/", priority: 1 },
    { path: "/about", priority: 0.8 },
    { path: "/practice-areas", priority: 0.9 },
    ...practiceAreas.map((area) => ({ path: practiceAreaHref(area.slug), priority: 0.8 })),
    { path: "/team", priority: 0.7 },
    { path: "/blog", priority: 0.7 },
    { path: "/contact", priority: 0.6 },
    ...legalLinks.map((link) => ({ path: link.href, priority: 0.2 })),
    // The Digest issues are PDFs, which search engines index too.
    ...digests.map((digest) => ({ path: digest.href, priority: 0.5 })),
  ];

  return pages.map(({ path, priority }) => ({ url: absoluteUrl(path), priority }));
}
