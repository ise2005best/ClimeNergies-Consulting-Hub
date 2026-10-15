import { ogContentType, ogSize, shareImage } from "@/lib/og";
import { siteName } from "@/lib/seo";

export const alt = `${siteName}: Terms of Service`;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return shareImage({ title: ["Terms of Service."], eyebrow: "Legal" });
}
