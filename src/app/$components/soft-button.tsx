import { ChildrenProps } from "@/types";

export function SoftButton({children}: ChildrenProps) {
  return (
    <button
      className="mt-16 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold
        rounded-3xl border border-transparent bg-blue-100 text-blue-800
        hover:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none
        dark:hover:bg-blue-900 dark:text-blue-400"
    >
      {children}
    </button>
  );
}
