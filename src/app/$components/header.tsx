import { Props } from "@/types";
import { usePathname } from "next/navigation";
import { NavArea } from "./nav-area";

export function Header() {
  let nav_data = [
    { name: "Landing", href: "/" },
    { name: "Portfolio" },
    { name: "Blogs" },
    { name: "About" },
  ] as Props<typeof NavArea>["items"];

  return (
    <header
      className=">flex border-y w-full flex-wrap bg-white text-sm sm:flex-nowrap sm:justify-start
        sticky top-0 dark:bg-neutral-800"
    >
      <nav
        className="mx-auto w-full max-w-[85rem] px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <Brand></Brand>
        <div className="flex font-urbanist text-sm font-semibold">
          <NavArea items={nav_data}></NavArea>
          <Divider></Divider>
          <HireButton></HireButton>
        </div>
      </nav>
    </header>
  );
}

function Brand() {
  return (
    <div className="flex items-center justify-between py-4">
      <a className="flex-none text-xl font-semibold dark:text-white" href="/">
        Ghislaine Laios
      </a>
    </div>
  );
}

function Divider() {
  return (
    <div
      className="ml-10 mr-6 border-t sm:border-t-0 sm:border-s border-gray-200
        dark:border-neutral-700"
    />
  );
}

function HireButton() {
  return (
    <button
      type="button"
      className="border px-6 py-[6px] rounded-2xl bg-gray-100 text-blue-600"
    >
      Hire me
    </button>
  );
}
