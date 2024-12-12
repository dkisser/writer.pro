import type { Metadata } from "next";
import { Container } from "@/components/landing/Container";
import { Hero } from "@/components/landing/Hero";
import { SectionTitle } from "@/components/landing/SectionTitle";
import { Benefits } from "@/components/landing/Benefits";
import { Video } from "@/components/landing/Video";
import { Testimonials } from "@/components/landing/Testimonials";
import { Faq } from "@/components/landing/Faq";
import { Cta } from "@/components/landing/Cta";

import { benefitBypass, benefitDetector, benefitEssay, benefitMindMaker, detectorFaq, faq, opsBenefitDetector, opsBenefitEssay } from "@/components/landing/data";

import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { PopupWidget }  from "@/components/PopupWidget";
import { ThemeProvider } from "next-themes";
import TryForFreeButton from "@/components/upgrade-to-pro-button";
import { Testimonials2 } from "@/components/landing/Testimonials2";
import { DigitalMarketing } from "@/components/landing/DigitalMarketing";
import PricingTable from "@/components/PricingTable";

export const metadata: Metadata = {
  title: " AI Detector - Reliable AI Checker for ChatGPT, Claude & More",
  description: "Reliable AI checker for all AI models. Analyzes multiple components to ensure originality—perfect for college students seeking credible academic writing.",
};

const Detector = () => {
  return (
    <ThemeProvider attribute="class">
      <Container>
        <Hero 
          heroTitle="AI Detector - The Most Accurate AI Content Detector"
          heroDescription="Ideal for academics and professionals"
          alt="brand slogan, AI Detector"
        />
        
        

        <SectionTitle title="Why should you use AI Detector" />
        <Benefits imgPos="right" data={opsBenefitDetector} />

        <SectionTitle title="How to use AI Detector" preTitle="Learn how to use AI Detector"/>
        <Video videoId="fZ0D0cnR88E" />

        <SectionTitle title="Unlock powerful writing assistance with AIWriter.PRO" />
        <Testimonials2 />

        <PricingTable />

        <SectionTitle title="General Questions">
          Answer your customers possible questions here, it will increase the
          conversion rate as well as support or chat requests.
        </SectionTitle>
        <Faq 
          qa={detectorFaq}
        />
      </Container>
      <Footer />
      {/* <PopupWidget /> */}

    </ThemeProvider>
    
  )
}

export default Detector
