import { PageBanner } from "@/components/ui/PageBanner";
import { Contact }    from "@/components/sections/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | UStruct Steel Detailing",
  description: "Send us your drawings. We scope same day and respond within 4 business hours. 48-hour turnaround guaranteed.",
};

export default function ContactPage() {
  return (
    <>
      <PageBanner
        label="— Get in Touch"
        title="Let's build something together."
        subtitle="Send your drawings and we will scope the project same day. No obligation — typical response within 4 business hours."
      />
      <Contact hideBanner />
    </>
  );
}
