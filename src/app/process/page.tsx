import { PageBanner } from "@/components/ui/PageBanner";
import { Process }    from "@/components/sections/Process";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Process | UStruct Steel Detailing",
  description: "How UStruct works — from receiving your drawings to delivering fabrication-ready shop drawings in 48 hours.",
};

export default function ProcessPage() {
  return (
    <>
      <PageBanner
        label="— How It Works"
        title="From drawings to delivery in 5 steps."
        subtitle="A repeatable, quality-controlled workflow that gets your fabricator on the floor fast."
      />
      <Process />
    </>
  );
}
