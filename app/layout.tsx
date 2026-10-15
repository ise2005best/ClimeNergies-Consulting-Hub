import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { asap, manrope, sequelBody, sequelDisplay } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ClimeNergies Consulting Hub | Advisory Built for Africa",
    template: "%s | ClimeNergies Consulting Hub",
  },
  description:
    "Integrated advisory across Africa's energy, climate, and industrial transformation. Policy, regulation, strategy, and capital, grounded in execution.",
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
