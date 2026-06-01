import { PageBanner } from "@/components/ui/PageBanner";
import { Projects }   from "@/components/sections/Projects";
import projectsData   from "../../../data/projects.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | UStruct Steel Detailing",
  description: "Portfolio of completed steel detailing projects across the USA.",
};

export default function ProjectsPage() {
  const projects = projectsData.filter((p) => p.active);
  return (
    <>
      <PageBanner
        label="— Portfolio"
        title="Projects"
        subtitle="A selection of completed work across industrial, commercial and mixed-use structures in the USA."
      />
      <Projects projects={projects} />
    </>
  );
}
