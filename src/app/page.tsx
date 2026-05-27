import { Hero }         from "@/components/sections/Hero";
import { Stats }        from "@/components/sections/Stats";
import { Services }     from "@/components/sections/Services";
import { Process }      from "@/components/sections/Process";
import { Projects }     from "@/components/sections/Projects";
import { WhyUs }        from "@/components/sections/WhyUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact }      from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Process />
      <Projects />
      <WhyUs />
      <Testimonials />
      <Contact />
    </>
  );
}
