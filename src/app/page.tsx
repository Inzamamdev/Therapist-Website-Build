import Image from "next/image";
import Hero from "@/components/ui/Hero";
import About from "@/components/ui/About";
import Services from "@/components/ui/Services";
import FAQ from "@/components/ui/Faq";
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <FAQ />
    </>
  );
}
