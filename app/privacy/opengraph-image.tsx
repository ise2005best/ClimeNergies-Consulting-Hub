import { ogContentType, ogSize, shareImage } from "@/lib/og";
import { siteName } from "@/lib/seo";

export const alt = `${siteName}: Privacy Policy`;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return shareImage({ title: ["Privacy Policy."], eyebrow: "Legal" });
}
