import Image from "next/image";
import React from "react";
import { Container } from "@/components/landing/Container";

import userOneImg from "../../../public/img/user1.jpg";
import userTwoImg from "../../../public/img/user2.jpg";
import userThreeImg from "../../../public/img/user3.jpg";
import { SectionTitle } from "./SectionTitle";
import ThemeChanger from "./DarkSwitch";
import Link from "../Link";
import { Box } from "@mui/material";

export const Testimonials2 = () => {
  return (
    <Container>
      <SectionTitle
        title="What are you working on today?"
      />
      
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-4">
        <CardButton image={userThreeImg}
              name="AI Bypass"
              title="Go AI Bypass"
              href="/bypass"
              alt="Rewrite any content"
              />

        <CardButton image={userTwoImg}
              name="AI Detector"
              title="Go AI Detector"
              href="/detector"
              alt="AI Checker for ChatGPT, Claude & More"
              />

        <CardButton image={userOneImg}
            name="AI Essay Writer"
            title="Go AI Essay Writer"
            href="/essay-writer"
            alt="100% Human-like"
            />

        <CardButton image={userThreeImg}
            name="AI Mind Map Maker"
            title="Go AI Mind Map Maker"
            href="/mind-map-maker"
            alt="From PDFs, Word, and Text"
            />
        
      </div>
    </Container>
  );
};



interface CardButtonProps {
  href: string;
  image: any;
  name: string;
  title: string;
  alt: string;
}

function CardButton(props: Readonly<CardButtonProps>) {
  return (
    <a href={props.href} className="hover:ring-2 ring-indigo-200 rounded-2xl">
      <div className="lg:col-span-1 xl:col-auto">
        <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
          <Avatar
            image={props.image}
            name={props.name}
            title={props.title}
            alt={props.alt}
          />
        </div>
      </div>
    </a>

  );

}

interface AvatarProps {
  image: any;
  name: string;
  title: string;
  alt: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center space-x-3">
      <div className="flex-shrink-0 overflow-hidden w-14 h-14">
        <Image
          src={props.image}
          width="60"
          height="60"
          alt={props.alt}
          placeholder="blur"
        />
      </div>
      <div className="mx-2">
        <div className="text-lg font-medium">{props.name} <Mark>&gt;</Mark> </div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
      <div>
        
        
      </div>
    </div>
  );
}

function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <>
      {" "}
      <mark className="bg-transparent mx-4 rounded-md ring-indigo-100 dark:ring-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
      <div className="cardbutton-ngt"></div>
    </>
  );
}
