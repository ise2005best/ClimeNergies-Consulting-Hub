import { heroSlides } from "@/lib/content";
import { ogContentType, ogSize, shareBackground, shareImage } from "@/lib/og";
import { siteName } from "@/lib/seo";

const hero = heroSlides[0];
const background = await shareBackground(hero.image);

export const alt = `${siteName}: ${hero.headline.join(" ")}`;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return shareImage({ title: hero.headline, description: hero.subheadline, background });
}
