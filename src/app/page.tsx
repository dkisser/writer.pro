import type { Metadata } from "next";
import { Container } from "@/components/landing/Container";
import { Hero } from "@/components/landing/Hero";
import { SectionTitle } from "@/components/landing/SectionTitle";
import { Benefits } from "@/components/landing/Benefits";
import { Video } from "@/components/landing/Video";
import { Testimonials } from "@/components/landing/Testimonials";
import { Faq } from "@/components/landing/Faq";
import { Cta } from "@/components/landing/Cta";

import { benefitBypass, benefitDetector, benefitEssay, benefitMindMaker, faq} from "@/components/landing/data";

import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { PopupWidget }  from "@/components/PopupWidget";
import { ThemeProvider } from "next-themes";
import TryForFreeButton from "@/components/upgrade-to-pro-button";
import Tooltip from "@mui/material/Tooltip";
import styles from '../components/upgrade-to-pro-button/styles.module.css'
import { DigitalMarketing } from "@/components/landing/DigitalMarketing";
import { Testimonials2 } from "@/components/landing/Testimonials2";

export const metadata: Metadata = {
  title: "Free AI writer for students - make academic writing easier",
  description: "Write effortlessly with our free AI writer for college students. Perfect for essays, papers, and assignments with human-like quality and bypass tools.",
};

export default function Home() {
  return (
    <ThemeProvider attribute="class">
      <Navbar />
      <Container>
        <Hero 
          heroTitle="AIwritor.PRO, " 
          greenTitle="Write Like a Pro."
          heroDescription="Free AI Writing Tool for Students - Make Academic Writing Easier"
          alt="brand slogan, AIwritor.PRO , write like a pro."
          options={[
            "AI Bypass : Our advanced anti-AI algorithms ensure a genuine human touch while remaining undetectable",
            "AI Detector: Reliable and easy to use. No harm in double-checking your work.",
            "AI Essay Writer: Focus on your ideas, not the writing grind. Fuel your academic success with essays that sound human-written.",
            "AI Mind Map Maker: Need a hand visualizing your ideas? Generate and organize them in seconds",
            ]}
          />

        <SectionTitle
          title="What are you working on today?"
        />
        <Testimonials2 />

        <SectionTitle title="Why should you use AIWriter.PRO" />
        
        <Benefits data={benefitBypass} />
        <Benefits imgPos="right" data={benefitDetector} />
        <Benefits data={benefitEssay} />
        <Benefits imgPos="right" data={benefitMindMaker} />

        <DigitalMarketing />

        <SectionTitle
          title="Millions are becoming better writers"
        />
        <Testimonials />
        
        <SectionTitle title="Frequently Asked Questions">
          Answer your customers possible questions here, it will increase the
          conversion rate as well as support or chat requests.
        </SectionTitle>
        <Faq qa={faq} />
        {/* <Cta /> */}
      </Container>
      <Footer />
      {/* <PopupWidget /> */}
      {/* <UpgradeToProButton /> */}
    </ThemeProvider>
    
  );
}
