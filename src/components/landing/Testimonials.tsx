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

export const Testimonials = () => {
  return (
    <Container>
      <SectionTitle
        title="Millions are becoming better writers"
      />
      
      <div className="grid gap-1 lg:grid-cols-4 xl:grid-cols">
        {/* <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-3xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Share a real <Mark>testimonial</Mark>
              that hits some of your benefits from one of your popular customer.
            </p>

            <Avatar
              image={userOneImg}
              name="Sarah Steiner"
              title="VP Sales at Google"
            />
          </div>
        </div> */}
        <div className="flex flex-col justify-between w-full h-full px-14 rounded-3xl py-14 dark:bg-trueGray-800">
          <AlignCenterBox>
            <p className="text-2xl leading-normal ">
              <Mark>35+</Mark>
            </p>
          </AlignCenterBox>
          
          <p>
            Million writers worldwide
          </p>
          
        </div>
        <div className="flex flex-col justify-between w-full h-full px-14 rounded-3xl py-14 dark:bg-trueGray-800">
          <AlignCenterBox>
            <p className="text-2xl leading-normal ">
              <Mark>180+</Mark>
            </p>
          </AlignCenterBox>
          <p>
            Countries that use QuillBot
          </p>

          {/* <Avatar
            image={userOneImg}
            name="Sarah Steiner"
            title="VP Sales at Google"
          /> */}
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full px-14 rounded-3xl py-14 dark:bg-trueGray-800">
            <AlignCenterBox>
              <p className="text-2xl leading-normal">
                <Mark>75%</Mark>
              </p>
            </AlignCenterBox>
            <p>
              Average time savings per writng project
            </p>

          
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full px-14 rounded-3xl py-14 dark:bg-trueGray-800">
            <AlignCenterBox>
              <p className="text-2xl leading-normal ">
                <Mark>4.3/5</Mark>
              </p>
            </AlignCenterBox>
            <p>
              Million writers worldwide
            </p>

          </div>
        </div>
      </div>
      <Container>
        <AlignCenterBox>
          <Link href="/login" className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5">
              Sign up now.It's free!
            </Link>
        </AlignCenterBox>
      </Container>
    </Container>
  );
};

interface AvatarProps {
  image: any;
  name: string;
  title: string;
}

function AlignCenterBox(props: { readonly children: React.ReactNode }) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      >
      {props.children}
    </Box>
  );
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <>
      {" "}
      <mark className="bg-transparent text-indigo-800 rounded-md ring-indigo-100 dark:ring-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}

function Mark2(props: { readonly children: React.ReactNode }) {
  return (
    <>
      {" "}
      <mark className=" bg-transparent text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
