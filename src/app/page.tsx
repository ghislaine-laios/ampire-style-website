"use client";

import { Fragment, useState } from "react";
import kemomimi1 from "@/../public/kemomimi-1.jpg";
import whu1 from "@/../public/WHU-1.jpg";
import Image from "next/image";
import {
  SegmentTabButtons,
  SegmentTabs,
  SegmentTapPanels,
  useTabs,
} from "./$components/segment-tabs";
import { Props } from "@/types";
import { Label } from "./$components/label";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-[85rem]">
      <HeroSection></HeroSection>
      <hr />
      <SecondSection></SecondSection>
    </div>
  );
}

function HeroSection() {
  return (
    <div id="hero-section" className="pt-4 flex justify-between items-center">
      <div>
        <h1 className="text-5xl leading-normal">
          I&apos;m a Developer <br />
          <span className="bg-gradient-to-r from-blue-700 to-rose-600 bg-clip-text text-transparent">
            with 3 year experience.
          </span>
        </h1>
        <p className="mt-16 text-lg">
          {`Just to clarify, the image on the right isn't me. I'm not that cute.`}
          <br />
          {`Her name is "kemomimi", created by ながユー.`}
          <br />
          {`The image was borrowed because she is incredibly cute.`}
        </p>
      </div>
      <Image
        src={kemomimi1}
        alt="Here is a cute kemomimi."
        height={600}
        priority={true}
      ></Image>
    </div>
  );
}

function SecondSection() {
  const tabsData: Props<typeof SegmentTabs>["tabs"] = [
    {
      title: "Education",
      content: <EducationTab></EducationTab>,
      tabId: "educated-tab",
    },
    { title: "Experience", content: <div>22</div>, tabId: "experienced-tab" },
  ];

  const { tabs, tabPanels } = useTabs(tabsData);

  return (
    <div
      id="second-section"
      className="w-full pt-16 flex flex-col items-center"
    >
      <h2 className="text-3xl leading-normal">{`Educated & Experienced`}</h2>
      <p className="mt-4">
        {`I'm well-educated, `}
        {`and possess enough experience to solve problems.`}
      </p>
      <SegmentTabButtons className="my-16" items={tabs}></SegmentTabButtons>
      <SegmentTapPanels className="w-full" items={tabPanels}></SegmentTapPanels>
    </div>
  );
}

function EducationTab() {
  const majorCourses = [
    "Computer Organization And Design",
    "Operating Systems",
    "Computer Networks",
    "Software Engineering",
    "Abstract Algebra",
    "...",
  ];

  return (
    <div className="flex gap-24 items-center">
      <div className="flex flex-col basis-2/3">
        <h3 className="text-3xl">Graduated from Wuhan University</h3>
        <div className="text-gray-600">
          <p className="mt-12">{`This person graduated from Wuhan University, China, with a Bachelor's degree in Computer Science and Technology in June 2024.`}</p>
          {/* <p className="mt-4">{`The major courses include Computer Organization And Design, Operating Systems, Computer Networks, Software Engineering and Abstract Algebra.`}</p> */}
          <div className="flex flex-col gap-6 mt-12 p-6 border rounded-xl shadow-lg">
            <h4 className="text-lg font-semibold font-urbanist">
              Major Courses
            </h4>
            <div className="flex flex-wrap gap-2">
              {majorCourses.map((course) => (
                <Label key={course}>{course}</Label>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 basis-1/3 relative h-[400px]">
        <Image
          src={whu1}
          alt="WHU"
          className="rounded-lg h-full object-cover object-center"
        ></Image>
      </div>
    </div>
  );
}
