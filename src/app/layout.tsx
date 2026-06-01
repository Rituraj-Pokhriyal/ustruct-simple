import type { Metadata } from "next";
import "./globals.css";
import { Nav }    from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import siteConfig from "../../data/site-config.json";

export const metadata: Metadata = {
  title: "UStruct Steel Detailing | Tekla-Certified · AISC Standards",
  description:
    "Tekla-certified structural steel detailing for the USA market. Shop drawings, GA drawings, erection plans, BIM coordination — high accuracy, expert delivery.",
  keywords: ["steel detailing", "shop drawings", "Tekla Structures", "AISC", "BIM coordination", "structural steel"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const visibleTabs: string[] = siteConfig.visibleTabs ?? [];

  return (
    <html lang="en">
      <body>
        <Nav visibleTabs={visibleTabs} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
