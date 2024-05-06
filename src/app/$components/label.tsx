import { ChildrenProps } from "@/types";

export function Label(props: ChildrenProps) {
  return (
    <span
      className={`border rounded-3xl px-4 py-1 bg-slate-100 text-blue-700 ${props.className}`}
    >
      {props.children}
    </span>
  );
}
