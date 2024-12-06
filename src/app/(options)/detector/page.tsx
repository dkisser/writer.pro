import type { Metadata } from "next";
import { Container } from "@/components/landing/Container";
import { Hero } from "@/components/landing/Hero";
import { SectionTitle } from "@/components/landing/SectionTitle";
import { Benefits } from "@/components/landing/Benefits";
import { Video } from "@/components/landing/Video";
import { Testimonials } from "@/components/landing/Testimonials";
import { Faq } from "@/components/landing/Faq";
import { Cta } from "@/components/landing/Cta";

import { benefitBypass, benefitDetector, benefitEssay, benefitMindMaker, faq } from "@/components/landing/data";

import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { PopupWidget }  from "@/components/PopupWidget";
import { ThemeProvider } from "next-themes";
import TryForFreeButton from "@/components/upgrade-to-pro-button";
import { Testimonials2 } from "@/components/landing/Testimonials2";
import { DigitalMarketing } from "@/components/landing/DigitalMarketing";

export const metadata: Metadata = {
  title: " AI Detector - Reliable AI Checker for ChatGPT, Claude & More",
  description: "Reliable AI checker for all AI models. Analyzes multiple components to ensure originality—perfect for college students seeking credible academic writing.",
};

const Detector = () => {
  return (
    <ThemeProvider attribute="class">
      <Container>
        <Hero 
          heroTitle="AI Detector by XXX - XXXXX"
          heroDescription="XXX's AI-powered essay generator assists in conquering writer's block by crafting essays that are rich in precise, thoroughly researched content."
          alt="brand slogan, AI Detector by XXX"
        />
        
        <Testimonials2 />

        <SectionTitle title="Why should you use AIWriter.PRO" />

        <Benefits data={benefitBypass} />
        <Benefits imgPos="right" data={benefitDetector} />
        <Benefits data={benefitEssay} />
        <Benefits imgPos="right" data={benefitMindMaker} />

        <DigitalMarketing />
        <Testimonials />
        <Faq qa={faq}/>
      </Container>
      <Footer />
      {/* <PopupWidget /> */}
      <TryForFreeButton />
    </ThemeProvider>
    
  )
}

export default Detector
