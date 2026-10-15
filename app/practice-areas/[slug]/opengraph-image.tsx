import { notFound } from "next/navigation";
import { getPracticeArea, practiceAreas } from "@/lib/content";
import { ogContentType, ogSize, shareBackground, shareImage } from "@/lib/og";
import { siteName } from "@/lib/seo";

// Built ahead of time like the pages themselves, so the hero photos are only read during the build.
export function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }));
}

const backgrounds = new Map(
  await Promise.all(practiceAreas.map(async (area) => [area.slug, await shareBackground(area.image)] as const)),
);

// One file serves all six areas, and this export can't vary by page.
export const alt = `${siteName} practice area`;
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const area = getPracticeArea((await params).slug);
  if (!area) notFound();
  return shareImage({
    title: [`${area.title}.`],
    description: area.tagline,
    background: backgrounds.get(area.slug),
    eyebrow: "Practice Area",
  });
}
