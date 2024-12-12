import type { Metadata } from "next";
import { Container } from "@/components/landing/Container";
import { Hero } from "@/components/landing/Hero";
import { SectionTitle } from "@/components/landing/SectionTitle";
import { Benefits } from "@/components/landing/Benefits";
import { Video } from "@/components/landing/Video";
import { Testimonials } from "@/components/landing/Testimonials";
import { Faq } from "@/components/landing/Faq";
import { Cta } from "@/components/landing/Cta";

import { benefitBypass, benefitDetector, benefitEssay, benefitMindMaker, faq, mindMakerFaq, opsBenefitMindMaker, opsMindMakerYouCan } from "@/components/landing/data";

import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { PopupWidget }  from "@/components/PopupWidget";
import { ThemeProvider } from "next-themes";
import TryForFreeButton from "@/components/upgrade-to-pro-button";
import { Testimonials2 } from "@/components/landing/Testimonials2";
import { DigitalMarketing } from "@/components/landing/DigitalMarketing";
import PricingTable from "@/components/PricingTable";

export const metadata: Metadata = {
  title: "AI Mind Map Maker - Instand generating & visualizing ideas",
  description: "Generate, summarize, and visualize ideas with AI Mind Map Maker. Create mind maps instantly from PDFs, Word, and text—perfect for studying and brainstorming!",
};

const MindMapMaker = () => {
  return (
    <ThemeProvider attribute="class">
      <Container>
        <Hero 
          heroTitle="AI Mind Map Magic: Visualize Your Thoughts, Ace Your Work"
          heroDescription="Unleash the Power of AI to Brainstorm, Plan, and Study Smarter"
          alt="brand slogan, AI Mind Map Maker"
          options={[
            "Endless Inspiration: AI-powered expansion for any topic, big or small.",
            "Team Up and Conquer: Collaborate with classmates and study buddies.",
            "Visualize Your Success: Transform complex ideas into clear, colorful mind maps.",
            "Instant Results: Quick and structured mind maps in seconds, not hours."
          ]}
        />

        <Benefits imgPos="right" data={opsBenefitMindMaker} />

        <Benefits imgPos="left" data={opsBenefitMindMaker} />

        <Benefits imgPos="right" data={opsBenefitMindMaker} />

        <Benefits imgPos="left" data={opsMindMakerYouCan} />

        <PricingTable />

        <SectionTitle title="General Questions">
          Answer your customers possible questions here, it will increase the
          conversion rate as well as support or chat requests.
        </SectionTitle>
        
        <Faq qa={mindMakerFaq}/>
      </Container>
      <Footer />
      {/* <PopupWidget /> */}

    </ThemeProvider>
    
  )
}

export default MindMapMaker
