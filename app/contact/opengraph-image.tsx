import { pageHeroes } from "@/lib/content";
import { ogContentType, ogSize, shareBackground, shareImage } from "@/lib/og";
import { siteName } from "@/lib/seo";

const hero = pageHeroes.contact;
const background = await shareBackground(hero.image);

export const alt = `${siteName}: ${hero.title.join(" ")}`;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return shareImage({ title: hero.title, description: hero.subtitle, background });
}
