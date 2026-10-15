import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { heroSlides } from "@/lib/content";
import { siteName, siteUrl } from "@/lib/seo";
import { asap, manrope, sequelBody, sequelDisplay } from "./fonts";
import "./globals.css";

// Defaults for every page. Each page sets its own title, description, keywords and canonical URL with pageMetadata().
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: heroSlides[0].subheadline,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "business",
  openGraph: { type: "website", siteName, locale: "en_NG" },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${sequelDisplay.variable} ${sequelBody.variable} ${manrope.variable} ${asap.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
