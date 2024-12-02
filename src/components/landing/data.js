import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../../public/img/benefit-one.png";
import benefitTwoImg from "../../../public/img/benefit-two.png";

const benefitBypass = {
  title: "AI Bypass - Bypass AI Every Time With 100% Undetectable Content",
  desc: "Generate Human-Like Content. Guaranteed Plagiarism-Free!",
  image: benefitOneImg,
  bullets: [
    {
      title: "Wide Coverage",
      desc: "Covers all popular AI Detectors Like GPTZero, Originality.ai and More.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "High Success Rate",
      desc: "Built-in detection capabilities ensure a 99% success rate.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Outstanding Features",
      desc: "Plagiarism-free and avoids spam folders.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitDetector = {
  title: "AI Detector - Reliable and Easy to Use",
  desc: "AI Checker for ChatGPT, Claude & More",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Reliable and Easy to Use",
      desc: "90% accuracy rate guaranteed.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "The Best Way to Detect AI",
      desc: "Covers major large language models like ChatGPT, Claude, Bard/Gemini, and more.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Designed for Students",
      desc: "Perfect for projects like assignments, research papers, and working drafts.",
      icon: <SunIcon />,
    },
  ],
};

const benefitEssay = {
  title: "AI Essay Writer - Your #1 Paper Writing Assistant ",
  desc: "100% human like , get your A+ essays Faster",
  image: benefitOneImg,
  bullets: [
    {
      title: "AI Writer that Understands",
      desc: "Trained on high-quality essays, our AI understands essay structure and grading criteria.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Personal Data Safety",
      desc: "Your data is protected and risk-free.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Multilingual Capabilities",
      desc: "Rephrase text in over 20 languages.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitMindMaker = {
  title: "AI Mind Map Maker",
  desc: "Communicate Ideas Faster and Clearer",
  image: benefitOneImg,
  bullets: [
    {
      title: "Organize Your Thoughts",
      desc: "Create instant, customizable, and shareable visual content in seconds.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Create from Documented Information",
      desc: "Generate mind maps from PDFs, Word documents, and text.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "I-Driven Expansion for Endless Ideas",
      desc: "Perfect for studying and brainstorming sessions.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};


export {benefitBypass, benefitDetector, benefitEssay, benefitMindMaker};
