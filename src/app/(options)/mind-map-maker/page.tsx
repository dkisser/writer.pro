import type { Metadata } from "next";
import { Container } from "@/components/landing/Container";
import { Hero } from "@/components/landing/Hero";
import { SectionTitle } from "@/components/landing/SectionTitle";
import { Benefits } from "@/components/landing/Benefits";
import { Video } from "@/components/landing/Video";
import { Testimonials } from "@/components/landing/Testimonials";
import { Faq } from "@/components/landing/Faq";
import { Cta } from "@/components/landing/Cta";

import { benefitBypass, benefitDetector, benefitEssay, benefitMindMaker } from "@/components/landing/data";

import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { PopupWidget }  from "@/components/PopupWidget";
import { ThemeProvider } from "next-themes";
import TryForFreeButton from "@/components/upgrade-to-pro-button";
import { Testimonials2 } from "@/components/landing/Testimonials2";
import { DigitalMarketing } from "@/components/landing/DigitalMarketing";

export const metadata: Metadata = {
  title: "AI Mind Map Maker - Instand generating & visualizing ideas",
  description: "Generate, summarize, and visualize ideas with AI Mind Map Maker. Create mind maps instantly from PDFs, Word, and text—perfect for studying and brainstorming!",
};

const MindMapMaker = () => {
  return (
    <ThemeProvider attribute="class">
      <Container>
        <Hero 
          heroTitle="AI Mind Map Maker"
          heroDescription="AI Mind Map Maker powerd by XXX - XXXXX"
          alt="brand slogan, AI Mind Map Maker"
        />
        
        <Testimonials2 />

        <SectionTitle title="Why should you use AIWriter.PRO" />

        <Benefits data={benefitBypass} />
        <Benefits imgPos="right" data={benefitDetector} />
        <Benefits data={benefitEssay} />
        <Benefits imgPos="right" data={benefitMindMaker} />

        <DigitalMarketing />
        <Testimonials />
        <Faq />
      </Container>
      <Footer />
      {/* <PopupWidget /> */}
      <TryForFreeButton />
    </ThemeProvider>
    
  )
}

export default MindMapMaker
