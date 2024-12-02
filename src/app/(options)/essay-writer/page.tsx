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
import UpgradeToProButton from "@/components/upgrade-to-pro-button";
import PricingTable from "@/components/PricingTable";
import { Testimonials2 } from "@/components/landing/Testimonials2";
import { DigitalMarketing } from "@/components/landing/DigitalMarketing";
import AITextField from "@/components/input/AITextField";

export const metadata: Metadata = {
  title: "AI Essay Writer| Undetectable Gen AI tool|100% Human-like",
  description: "Generate plagiarism-free essays with our undetectable AI Essay Writer. 100% human-like, original, and perfect for academic success. Simplify writing now!",
};

const EssayWriter = () => {
  return (
    <ThemeProvider attribute="class">
      <Container>

        <AITextField />

        <Hero 
          heroTitle="Free AI Writer - Text Generator & AI Writing Assistant" 
          heroDescription= "Generate high-quality content  for social media, marketing, advertising, product descriptions, websites and more. 100% free . Results in no seconds."
          alt="brand slogan, AI Essay Writer"
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
    </ThemeProvider>
    
  )
}

export default EssayWriter;
