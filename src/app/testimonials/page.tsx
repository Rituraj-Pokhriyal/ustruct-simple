import { PageBanner }    from "@/components/ui/PageBanner";
import { Testimonials } from "@/components/sections/Testimonials";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials | UStruct Steel Detailing",
  description: "What structural engineers and fabricators across the USA say about working with UStruct.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageBanner
        label="— Client Feedback"
        title="Trusted by engineers across America."
        subtitle="Real feedback from structural engineers, fabricators and general contractors who rely on UStruct."
      />
      <Testimonials />
    </>
  );
}
