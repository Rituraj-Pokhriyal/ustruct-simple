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
        subtitle="Eight specialized deliverables — from structural detailing to full BIM coordination, all produced in Tekla Structures to LOD 400."
      />
      <Services />
    </>
  );
}
