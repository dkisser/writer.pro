import type { Metadata } from "next";
import { Container } from "@/components/landing/Container";
import { Hero } from "@/components/landing/Hero";
import { SectionTitle } from "@/components/landing/SectionTitle";
import { Benefits } from "@/components/landing/Benefits";
import { Video } from "@/components/landing/Video";
import { Testimonials } from "@/components/landing/Testimonials";
import { Faq } from "@/components/landing/Faq";
import { Cta } from "@/components/landing/Cta";

import { essayFaq, opsBenefitEssay } from "@/components/landing/data";

import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { PopupWidget }  from "@/components/PopupWidget";
import { ThemeProvider } from "next-themes";
import TryForFreeButton from "@/components/upgrade-to-pro-button";
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

        <Hero 
          heroTitle="AI Essay Writer:  Write better essays in less time" 
          heroDescription= "Our AI acts as your personal writing assistant, providing well-structured and researched content."
          alt="brand slogan, AI Essay Writer"
          options={[
            "Trusted by millions of students and professionals",
            "Support 200+languages",
            "Covers a wide range of academic disciplines.",
          ]}
        />

        <SectionTitle title="AI Essay Writer" />
        <AITextField />

        <SectionTitle title="Why should you use AI Essay Writer" />
        <Benefits data={opsBenefitEssay} />

        <SectionTitle title="How to use AI Essay Writer" preTitle="Learn how to use AI Essay Writer"/>
        <Video videoId="fZ0D0cnR88E" />

        
        <Testimonials />

        <SectionTitle title="General Questions">
          Answer your customers possible questions here, it will increase the
          conversion rate as well as support or chat requests.
        </SectionTitle>
        <Faq 
          qa={essayFaq}
        />
      </Container>
      <Footer />
    </ThemeProvider>
    
  )
}

export default EssayWriter;
