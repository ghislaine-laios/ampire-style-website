"use client";

import { Fragment, ReactNode, useState } from "react";
import kemomimi1 from "@/../public/kemomimi-1.jpg";
import whu1 from "@/../public/WHU-1.jpg";
import coding1 from "@/../public/coding-1.webp";
import Image from "next/image";
import {
  SegmentTabButtons,
  SegmentTabs,
  SegmentTapPanels,
  useTabs,
} from "./$components/segment-tabs";
import { ChildrenProps, Props } from "@/types";
import { Label } from "./$components/label";
import { Timeline } from "./$components/timeline";
import { SoftButton } from "./$components/soft-button";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-[85rem]">
      <HeroSection></HeroSection>
      <hr />
      <SecondSection></SecondSection>
      <div className="h-20"></div>
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
        <SoftButton>Check Github Profile</SoftButton>
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
    {
      title: "Experience",
      content: <ExperienceTab></ExperienceTab>,
      tabId: "experienced-tab",
    },
  ];

  const { tabs, tabPanels } = useTabs(tabsData);

  return (
    <div
      id="second-section"
      className="w-full pt-16 flex flex-col items-center"
    >
      <h2 className="text-3xl leading-normal">{`Educated & Experienced`}</h2>
      <p className="mt-4 text-gray-600">
        {`Well-educated, `}
        {`and possess enough experience to solve problems.`}
      </p>
      <SegmentTabButtons
        className="mt-16 my-32"
        items={tabs}
      ></SegmentTabButtons>
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
    <SecondSectionBox
      heading="Graduated from Wuhan University"
      right={
        <Image
          src={whu1}
          alt="WHU"
          className="rounded-lg h-full object-cover object-center"
        ></Image>
      }
    >
      <div className="text-gray-600 flex-1 flex flex-col justify-between">
        <p>{`This person graduated from Wuhan University, China, with a Bachelor's degree in Computer Science and Technology in June 2024.`}</p>
        <div className="flex flex-col gap-6 mt-12 p-6 border rounded-xl shadow-lg">
          <h4 className="text-lg font-semibold font-urbanist">Major Courses</h4>
          <div className="flex flex-wrap gap-2">
            {majorCourses.map((course) => (
              <Label key={course}>{course}</Label>
            ))}
          </div>
        </div>
      </div>
    </SecondSectionBox>
  );
}

function ExperienceTab() {
  type TimelineItem = Props<typeof Timeline>["items"][0];
  const timelineData: (Omit<
    TimelineItem,
    "timeLabel" | "heading" | "content"
  > & {
    content: { heading: string; subTitle: string; corp: string };
  })[] = [
    {
      time: "2023.03 - 2024.03",
      content: {
        heading: "Backend Engineer",
        subTitle: "Write the backend using Rust and Golang.",
        corp: "Wuhan Kesong Technology Co., Ltd.",
      },
    },
    {
      time: "2021.09 - 2021.12",
      content: {
        heading: "Frontend Engineer (Intern)",
        subTitle: "Write the MVP & UI library using svelte & SCSS.",
        corp: "Hong Kong Aukemi Limited",
      },
    },
  ];

  const timelineItems: TimelineItem[] = timelineData.map((data) => ({
    time: data.time,
    content: {
      heading: (className: string) => (
        <h4 className={className}>{data.content.heading}</h4>
      ),
      subTitle: data.content.subTitle,
      nameArea: (
        <p className="text-sm font-urbanist font-semibold">
          {data.content.corp}
        </p>
      ),
    },
    timeLabel: <Timeline.TimeLabel time={data.time}></Timeline.TimeLabel>,
  }));

  return (
    <SecondSectionBox
      heading="Possess Enough Experience to Solve Problems"
      right={
        <Image
          src={coding1}
          alt="coding image"
          className="rounded-lg h-full object-cover object-center"
        ></Image>
      }
    >
      <div className="flex flex-col justify-between flex-1 text-gray-600">
        <p>{`This person has been employed by multiple startup companies and has learned how to solve technical problems during this process.`}</p>
        <Timeline items={timelineItems}></Timeline>
      </div>
    </SecondSectionBox>
  );
}

function SecondSectionBox(
  props: ChildrenProps & { heading: string; right: ReactNode },
) {
  return (
    <div className="flex gap-24">
      <div className="flex flex-col basis-2/3">
        <h3 className="text-3xl mb-12">{props.heading}</h3>
        {props.children}
      </div>
      <div className="flex-1 basis-1/3 relative h-[400px]">{props.right}</div>
    </div>
  );
}

function TechSkillSection() {
  
}