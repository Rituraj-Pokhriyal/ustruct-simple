import { PageBanner } from "@/components/ui/PageBanner";
import { Projects }   from "@/components/sections/Projects";
import pdfData        from "../../../data/pdf-samples.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | UStruct Steel Detailing",
  description: "View real completed work from UStruct — shop drawings, erection plans, stair details, structural frames and connection details.",
};

export default function ProjectsPage() {
  const projects = pdfData.filter((p) => p.active);
  return (
    <>
      <PageBanner
        label="— Our Work"
        title="Projects"
        subtitle="Real deliverables from completed projects, grouped by category — click any drawing to preview the model and shop drawing side by side."
      />
      <Projects projects={projects} />
    </>
  );
}
