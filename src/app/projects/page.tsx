import { PageBanner } from "@/components/ui/PageBanner";
import { Projects }   from "@/components/sections/Projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | UStruct Steel Detailing",
  description: "Portfolio of completed steel detailing projects — warehouses, office towers, distribution centers and mixed-use structures across the USA.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageBanner
        label="— Portfolio"
        title="Projects"
        subtitle="A selection of completed work across industrial, commercial and mixed-use structures in the USA."
      />
      <Projects />
    </>
  );
}
