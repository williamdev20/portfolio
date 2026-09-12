import About from "@/sections/About";
import { Achievements } from "@/sections/Achievements";
import { Certifications } from "@/sections/Certifications";
import { Contact } from "@/sections/Contact";
import Hero from "@/sections/Hero";
import { Projects } from "@/sections/Projects";
import ToolKit from "@/sections/Toolkit";

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <ToolKit/>
      <Projects/>
      <Achievements/>
      <Certifications/>
      <Contact/>
    </div>
  );
}
