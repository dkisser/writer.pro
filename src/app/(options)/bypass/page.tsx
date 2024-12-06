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
  title: "Humanize AI content with AI Pro | Bypass AI detection",
  description: "Rewrite any content with our Bypass tool using anti-AI algorithms. Perfect for homework and assignments. AIWriter.PRO helps you write like a pro!",
};

const Bypass = () => {
  return (
    <ThemeProvider attribute="class">
      <Container>
        <Hero 
          heroTitle="Write like Human: Undetectable AI Generator - XXXXX"
          heroDescription="Write like Human offers an undetectable AI generator, ensuring your content is indistinguishable from human-written text. Perfect for writers and marketers seeking a competitive edge. Create natural, engaging content effortlessly. Try our AI generator today!"
          alt="brand slogan, Write like Human: Undetectable AI Generator"
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

export default Bypass
