"use client";
import React from "react";
import { Container } from "@/components/landing/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { SectionTitle } from "./SectionTitle";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <SectionTitle title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "What is AIWriter.PRO?",
    answer: "AIWriter.PRO is an advanced AI writing tool designed to assist students and professionals in crafting high-quality content. It offers a suite of tools, including AI Bypass, AI Detector, AI Essay Writer, and AI Mind Map Maker.",
  },
  {
    question: "How does AIWriter.PRO help students?",
    answer: "AIWriter.PRO empowers students by: *Automating tasks: Streamlining the writing process and saving time.  *Improving quality: Generating well-structured and coherent content. *Ensuring originality: Providing plagiarism-free and AI-undetectable text. *Enhancing creativity: Facilitating brainstorming and idea generation.",
  },
  {
    question: "What is AI Bypass? ",
    answer: "AI Bypass is a tool that rephrases text to evade AI detection. It helps you create or rewrite human-quality content that is indistinguishable from human-written text.",
  },
  {
    question: "How does AI Bypass work? ",
    answer: "AI Bypass utilizes advanced algorithms to rewrite text while preserving its original meaning and style. It can bypass AI detection tools like GPTZero and Originality.ai.",
  },
  {
    question: "What is AI Detector? ",
    answer: "AI Detector is a tool that can accurately identify AI-generated text. It helps you verify the authenticity of content and avoid plagiarism.",
  },
  {
    question: "How accurate is AI Detector? ",
    answer: "AI Detector boasts a high accuracy rate, capable of detecting AI-generated text from various sources, including ChatGPT, Claude, and Bard/Gemini.",
  },
  {
    question: "Can AI Essay Writer write complete essays? ",
    answer: "While AI Essay Writer can assist in generating ideas, outlines, and paragraphs, it is not designed to write entire essays autonomously. It's best used as a tool to enhance your writing process.",
  },
  {
    question: "Is AI Essay Writer safe to use? ",
    answer: "Yes, AI Essay Writer prioritizes data privacy and security. Your personal information is protected, and your content remains confidential.",
  },
  {
    question: "How can AI Mind Map Maker help me? ",
    answer: "AI Mind Map Maker allows you to visualize and organize your thoughts effectively. It can generate mind maps from text, PDFs, and Word documents, helping you brainstorm and plan your work.",
  },
  {
    question: "Can I customize mind maps created with AI Mind Map Maker?",
    answer: "Yes, AI Mind Map Maker offers customization options to tailor your mind maps to your specific needs. You can adjust colors, fonts, and layouts to create visually appealing and informative diagrams.",
  },
  {
    question: "Is AIWriter.PRO free to use?",
    answer: "  - AIWriter.PRO offers a free plan with basic features. For advanced features and unlimited usage, consider upgrading to a premium plan.",
  },
  {
    question: "What languages does AIWriter.PRO support?",
    answer: "  - AIWriter.PRO supports multiple languages, allowing you to generate content in various languages.",
  },
  {
    question: "Can I use AIWriter.PRO for academic writing?",
    answer: "  - While AIWriter.PRO can be a helpful tool for academic writing, it's important to use it responsibly. Always cite your sources and avoid plagiarism.",
  },
  {
    question: "How can I get help with AIWriter.PRO?",
    answer: "  - AIWriter.PRO offers comprehensive customer support through email and a knowledge base.",
  },
];
