import type { Metadata } from "next";
import { Container } from "@/components/landing/Container";
import { Hero } from "@/components/landing/Hero";
import { SectionTitle } from "@/components/landing/SectionTitle";
import { Benefits } from "@/components/landing/Benefits";
import { Video } from "@/components/landing/Video";
import { Testimonials } from "@/components/landing/Testimonials";
import { Faq } from "@/components/landing/Faq";
import { Cta } from "@/components/landing/Cta";

import { benefitFour, benefitOne, benefitThree, benefitTwo } from "@/components/landing/data";

import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { PopupWidget }  from "@/components/PopupWidget";
import { ThemeProvider } from "next-themes";
import UpgradeToProButton from "@/components/upgrade-to-pro-button";
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
          heroTitle="AIwritor.pro: Write Like a Pro. " 
          heroDescription="Free AI Writing Tool for Students - Make Academic Writing Easier"
          alt="brand slogan, AIwritor.pro , write like a pro."
          />

        <Testimonials2 />
        <SectionTitle
          title="Why should you use AIWriter.PRO"
        >
        </SectionTitle>
        
        <Benefits data={benefitOne} />
        <Benefits imgPos="right" data={benefitTwo} />
        <Benefits data={benefitThree} />
        <Benefits imgPos="right" data={benefitFour} />


        <DigitalMarketing />
        <Testimonials />
        <Faq />
        {/* <Cta /> */}
      </Container>
      <Footer />
      {/* <PopupWidget /> */}
      <UpgradeToProButton />
    </ThemeProvider>
    
  );
}
