import { PageBanner } from "@/components/ui/PageBanner";
import { Services }   from "@/components/sections/Services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | UStruct Steel Detailing",
  description: "Structural steel detailing, shop drawings, GA drawings, erection plans, Tekla 3D modeling and BIM coordination — all per AISC standards.",
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        label="— What We Deliver"
        title="Our Services"
        subtitle="Comprehensive steel detailing solutions powered by Tekla Structures and delivered by experienced professionals."
      />
      <Services />
    </>
  );
}
