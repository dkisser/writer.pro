import type { Metadata } from "next";
import { Container } from "@/components/landing/Container";
import { Hero } from "@/components/landing/Hero";
import { SectionTitle } from "@/components/landing/SectionTitle";
import { Benefits } from "@/components/landing/Benefits";
import { Video } from "@/components/landing/Video";
import { Testimonials } from "@/components/landing/Testimonials";
import { Faq } from "@/components/landing/Faq";
import { Cta } from "@/components/landing/Cta";

import { benefitOne, benefitTwo } from "@/components/landing/data";

import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { PopupWidget }  from "@/components/PopupWidget";
import { ThemeProvider } from "next-themes";
import UpgradeToProButton from "@/components/upgrade-to-pro-button";

export const metadata: Metadata = {
  title: "Writer.pro - Easy-Writer",
  description: "Writer.pro powered by GPT4 provides One-stop AI research tools , including AI chat, writer, reader, AI detector, PPT generator and more. Easy-Writer",
};

const EasyWriter = () => {
  return (
    <ThemeProvider attribute="class">
      <Container>
        <Hero 
          heroTitle="Free AI Writer - Text Generator & AI Writing Assistant" 
          heroDescription= "Generate high-quality content  for social media, marketing, advertising, product descriptions, websites and more. 100% free . Results in no seconds."
        />
        <SectionTitle
          preTitle="Nextly Benefits"
          title=" Why should you use this landing page"
        >
          Nextly is a free landing page & marketing website template for startups
          and indie projects. Its built with Next.js & TailwindCSS. And its
          completely open-source.
        </SectionTitle>

        <Benefits data={benefitOne} />
        <Benefits imgPos="right" data={benefitTwo} />

        <SectionTitle
          preTitle="Watch a video"
          title="Learn how to fullfil your needs"
        >
          This section is to highlight a promo or demo video of your product.
          Analysts says a landing page with video has 3% more conversion rate. So,
          don&apos;t forget to add one. Just like this.
        </SectionTitle>

        <Video videoId="fZ0D0cnR88E" />

        <SectionTitle
          preTitle="Testimonials"
          title="Here's what our customers said"
        >
          Testimonials is a great way to increase the brand trust and awareness.
          Use this section to highlight your popular customers.
        </SectionTitle>

        <Testimonials />

        <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
          Answer your customers possible questions here, it will increase the
          conversion rate as well as support or chat requests.
        </SectionTitle>

        <Faq />
        {/* <Cta /> */}
      </Container>
      <Footer />
      {/* <PopupWidget /> */}
      <UpgradeToProButton />
    </ThemeProvider>
    
  )
}

export default EasyWriter
