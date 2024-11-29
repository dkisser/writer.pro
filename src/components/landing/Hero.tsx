import Image from "next/image";
import { Container } from "@/components/landing/Container";
import heroImg from "../../../public/img/hero.png";

interface HeroProps {
  heroTitle?: string;
  heroDescription?: string;
  alt: string;
}

export const Hero = (props: Readonly<HeroProps>) => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              {props?.heroTitle? props.heroTitle : "Free Landing Page Template for startups"}
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              {props?.heroDescription? props.heroDescription : "Nextly is a free landing page & marketing website template for startups and indie projects. Its built with Next.js & TailwindCSS. And its completely open-source."}
            </p>
            
            {/* 子功能点 */}
            <p className="py-5 text-xl leading-normal text-gray-600 lg:text-xl xl:text-2xl dark:text-gray-300">
              * AI Bypass : Our advanced anti-AI algorithms ensure a genuine human touch while remaining undetectable
            </p>
            <p className="py-5 text-xl leading-normal text-gray-600 lg:text-xl xl:text-2xl dark:text-gray-300">
              * AI Detector: Reliable and easy to use. No harm in double-checking your work.
            </p>
            <p className="py-5 text-xl leading-normal text-gray-600 lg:text-xl xl:text-2xl dark:text-gray-300">
              * AI Essay Writer: Focus on your ideas, not the writing grind. Fuel your academic success with essays that sound human-written.
            </p>
            <p className="py-5 text-xl leading-normal text-gray-600 lg:text-xl xl:text-2xl dark:text-gray-300">
              * AI Mind Map Maker: Need a hand visualizing your ideas? Generate and organize them in seconds
            </p>
            
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt={props.alt}
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </>
  );
}

