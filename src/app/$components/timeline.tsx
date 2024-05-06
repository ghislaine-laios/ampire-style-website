import { BaseProps, Props } from "@/types";
import { ReactNode } from "react";

export function Timeline(props: {
  items: {
    time: string;
    content: { heading: (className: string) => ReactNode } & Pick<
      Props<typeof Content>,
      "subTitle" | "nameArea"
    >;
    timeLabel: ReactNode;
  }[];
}) {
  return (
    <div>
      {props.items.map((item) => (
        <div key={item.time} className="flex gap-x-3">
          <div className="flex flex-col items-end">
            <div className="flex items-center">
              {item.timeLabel}
              <Icon className="ml-3"></Icon>
              {item.content.heading("text-lg invisible truncate w-0")}
            </div>
            <div className="flex-1 w-2">
              <div className="w-[0.6px] h-full mx-auto box-border bg-slate-300"></div>
            </div>
          </div>
          <Content
            heading={item.content.heading("text-lg")}
            subTitle={item.content.subTitle}
            nameArea={item.content.nameArea}
          ></Content>
        </div>
      ))}
    </div>
  );
}

function Content(
  props: BaseProps & {
    heading: ReactNode;
    subTitle: string;
    nameArea: ReactNode;
  },
) {
  return (
    <div className="grow pb-8 gap-1">
      {props.heading}
      <p className="mt-4 text-sm text-gray-600">{props.subTitle}</p>
      {props.nameArea}
    </div>
  );
}

export namespace Timeline {
  export function TimeLabel(props: BaseProps & { time: string }) {
    return (
      <div className={`w-48 text-end text-sm font-mono ${props.className}`}>
        <span className="text-gray-600">{props.time}</span>
      </div>
    );
  }
}

function Icon({ className }: BaseProps) {
  return <div className={`size-2 rounded-full bg-blue-600 ${className}`}></div>;
}

function _LegacyIcon() {
  return (
    <div
      className="relative last:after:hidden after:absolute after:top-7 after:bottom-0
        after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200"
    >
      <div className="relative z-10 w-7 flex justify-center items-center">
        <div className="size-2 rounded-full bg-gray-400"></div>
      </div>
    </div>
  );
}
