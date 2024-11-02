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

export const metadata: Metadata = {
  title: "Writer.pro - One-stop chatGPT AI research assistant - Writer.pro",
  description: "Writer.pro powered by GPT4 provides One-stop AI research tools , including AI chat, writer, reader, AI detector, PPT generator and more.",
};

export default function Home() {
  return (
    <ThemeProvider attribute="class">
      <Navbar />
      <Container>
        <Hero heroTitle="营销板块1" heroDescription="功能描述"/>
        <SectionTitle
          preTitle="Writer.pro Benefits"
          title="Why should you use Writer.pro"
        >
          下面是具体功能介绍
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
