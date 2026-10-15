import { teamHeading } from "@/lib/content";
import { ogContentType, ogSize, shareImage } from "@/lib/og";
import { siteName } from "@/lib/seo";

export const alt = `${siteName}: ${teamHeading.join(" ")}`;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return shareImage({ title: teamHeading, eyebrow: "The Team" });
}
