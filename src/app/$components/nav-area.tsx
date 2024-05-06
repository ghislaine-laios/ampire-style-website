"use client";

import { usePathname } from "next/navigation";
import { Props } from "@/types";
import { useMemo } from "react";

export function NavArea(props: {
  items: Omit<Props<typeof NavItem>, "activated">[];
}) {
  let currentPath = usePathname();

  let items = useMemo(
    () =>
      props.items.map(({ name, href }) => ({
        name,
        href,
        activated: href == currentPath,
      })),
    [props.items, currentPath],
  );

  return (
    <ul
      id="nav-area"
      className="mt-5 flex flex-col gap-10 sm:mt-0 sm:flex-row sm:items-center sm:justify-end
        sm:ps-5"
    >
      {items.map((data) => (
        <NavItem key={data.name} {...data}></NavItem>
      ))}
    </ul>
  );
}

function NavItem(props: { name: string; href?: string; activated: boolean }) {
  return (
    <li>
      <a
        className={
          props.activated
            ? "font-medium text-blue-700"
            : `font-medium text-black hover:text-blue-700 dark:text-neutral-400
              dark:hover:text-neutral-500`
        }
        href="#"
      >
        {props.name}
      </a>
    </li>
  );
}
