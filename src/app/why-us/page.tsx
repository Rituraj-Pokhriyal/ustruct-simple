import { PageBanner } from "@/components/ui/PageBanner";
import { WhyUs }      from "@/components/sections/WhyUs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why UStruct | Steel Detailing",
  description: "48-hour turnaround, AISC 360-22 compliance, 98% first-pass accuracy and 40% cost savings over domestic detailing firms.",
};

export default function WhyUsPage() {
  return (
    <>
      <PageBanner
        label="— Why UStruct"
        title="The competitive edge your project deserves."
        subtitle="Six reasons USA structural engineers and fabricators choose UStruct over every other option."
      />
      <WhyUs />
    </>
  );
}
