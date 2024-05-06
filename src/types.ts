import { ReactNode } from "react";

export type Props<F extends (...args: any) => any> = Parameters<F>[0];

export type BaseProps = { className?: string };

export type ChildrenProps = BaseProps & { children?: ReactNode };
