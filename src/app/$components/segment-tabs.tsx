"use client";

import { BaseProps, Props } from "@/types";
import { Fragment, ReactNode, useMemo } from "react";

export function SegmentTabs(
  props: BaseProps & {
    tabs: {
      title: string;
      content: ReactNode;
      tabId: string;
      tabPanelId?: string;
    }[];
  },
) {
  const { tabs, tabPanels } = useTabs(props.tabs);

  // console.debug("Segment tab re-rended.");

  return (
    <div className={`${props.className}`}>
      <SegmentTabButtons items={tabs}></SegmentTabButtons>
      <SegmentTapPanels items={tabPanels}></SegmentTapPanels>
    </div>
  );
}

export function useTabs(data: Props<typeof SegmentTabs>["tabs"]) {
  let tabs: Props<typeof SegmentTabButtons>["items"] = useMemo(
    () =>
      data.map((tab) => ({
        title: tab.title,
        id: tab.tabId,
        tabPanelId: tab.tabPanelId ? tab.tabPanelId : tab.tabId + "-panel",
      })),
    [data],
  );

  let tabPanels: Props<typeof SegmentTapPanels>["items"] = useMemo(
    () =>
      data.map((tab) => ({
        content: tab.content,
        id: tab.tabPanelId ? tab.tabPanelId : tab.tabId + "-panel",
        tabId: tab.tabId,
      })),
    [data],
  );

  return { tabs, tabPanels };
}

export function SegmentTabButtons(
  props: BaseProps & {
    items: { title: string; id: string; tabPanelId: string }[];
  },
) {
  return (
    <div className={`flex ${props.className}`}>
      <div
        className="flex bg-gray-100 hover:bg-gray-200 rounded-3xl transition p-1
          dark:bg-neutral-700 dark:hover:bg-neutral-600"
      >
        <nav className="flex space-x-1" aria-label="Tabs" role="tablist">
          {props.items.map((item, i) => (
            <button
              type="button"
              className={`hs-tab-active:bg-white hs-tab-active:text-gray-700
              hs-tab-active:dark:bg-neutral-800 hs-tab-active:dark:text-neutral-400
              dark:hs-tab-active:bg-gray-800 py-3 px-4 inline-flex items-center gap-x-2
              bg-transparent text-sm text-gray-500 hover:text-gray-700 font-medium rounded-3xl
              hs-tab-active:shadow-md hover:hover:text-blue-600 disabled:opacity-50
              disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-white ${
                i == 0 ? "active" : ""
              }`}
              id={item.id}
              data-hs-tab={`#${item.tabPanelId}`}
              aria-controls={item.tabPanelId}
              role="tab"
              key={item.id}
            >
              {item.title}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}

export function SegmentTapPanels(
  props: BaseProps & {
    items: { content: ReactNode; id: string; tabId: string }[];
  },
) {
  return (
    <Fragment>
      {props.items.map((item, i) => (
        <div
          key={item.id}
          id={item.id}
          role="tabpanel"
          aria-labelledby={item.tabId}
          className={`${i == 0 ? "" : "hidden"} ${props.className}`}
        >
          {item.content}
        </div>
      ))}
    </Fragment>
  );
}

export function _SegmentTabs(props: BaseProps) {
  return (
    <div className={`${props.className}`}>
      <div className="flex">
        <div
          className="flex bg-gray-100 hover:bg-gray-200 rounded-lg transition p-1 dark:bg-neutral-700
            dark:hover:bg-neutral-600"
        >
          <nav className="flex space-x-1" aria-label="Tabs" role="tablist">
            <button
              type="button"
              className="hs-tab-active:bg-white hs-tab-active:text-gray-700
                hs-tab-active:dark:bg-neutral-800 hs-tab-active:dark:text-neutral-400
                dark:hs-tab-active:bg-gray-800 py-3 px-4 inline-flex items-center gap-x-2
                bg-transparent text-sm text-gray-500 hover:text-gray-700 font-medium rounded-lg
                hover:hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none
                dark:text-neutral-400 dark:hover:text-white active"
              id="segment-item-1"
              data-hs-tab="#segment-1"
              aria-controls="segment-1"
              role="tab"
            >
              Tab 1
            </button>
            <button
              type="button"
              className="hs-tab-active:bg-white hs-tab-active:text-gray-700
                hs-tab-active:dark:bg-neutral-800 hs-tab-active:dark:text-neutral-400
                dark:hs-tab-active:bg-gray-800 py-3 px-4 inline-flex items-center gap-x-2
                bg-transparent text-sm text-gray-500 hover:text-gray-700 font-medium rounded-lg
                hover:hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none
                dark:text-neutral-400 dark:hover:text-white"
              id="segment-item-2"
              data-hs-tab="#segment-2"
              aria-controls="segment-2"
              role="tab"
            >
              Tab 2
            </button>
            <button
              type="button"
              className="hs-tab-active:bg-white hs-tab-active:text-gray-700
                hs-tab-active:dark:bg-neutral-800 hs-tab-active:dark:text-neutral-400
                dark:hs-tab-active:bg-gray-800 py-3 px-4 inline-flex items-center gap-x-2
                bg-transparent text-sm text-gray-500 hover:text-gray-700 font-medium rounded-lg
                hover:hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none
                dark:text-neutral-400 dark:hover:text-white"
              id="segment-item-3"
              data-hs-tab="#segment-3"
              aria-controls="segment-3"
              role="tab"
            >
              Tab 3
            </button>
          </nav>
        </div>
      </div>

      <div className="mt-3">
        <div id="segment-1" role="tabpanel" aria-labelledby="segment-item-1">
          <p className="text-gray-500 dark:text-neutral-400">
            This is the{" "}
            <em className="font-semibold text-gray-800 dark:text-neutral-200">
              first
            </em>{" "}
            items tab body.
          </p>
        </div>
        <div
          id="segment-2"
          className="hidden"
          role="tabpanel"
          aria-labelledby="segment-item-2"
        >
          <p className="text-gray-500 dark:text-neutral-400">
            This is the{" "}
            <em className="font-semibold text-gray-800 dark:text-neutral-200">
              second
            </em>{" "}
            items tab body.
          </p>
        </div>
        <div
          id="segment-3"
          className="hidden"
          role="tabpanel"
          aria-labelledby="segment-item-3"
        >
          <p className="text-gray-500 dark:text-neutral-400">
            This is the{" "}
            <em className="font-semibold text-gray-800 dark:text-neutral-200">
              third
            </em>{" "}
            items tab body.
          </p>
        </div>
      </div>
    </div>
  );
}
