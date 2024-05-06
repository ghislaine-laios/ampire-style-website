"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { IStaticMethods } from "preline/preline";
import { ChildrenProps } from "@/types";
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

export function PrelineInit({children}: ChildrenProps) {
  const path = usePathname();
  const [_nonce, setNonce] = useState(0);

  useEffect(() => {
    const loadPreline = async () => {
      await import("preline/preline");

      window.HSStaticMethods.autoInit();
    };

    loadPreline();

    setNonce(1);

    console.info("Preline loaded.");
  }, [path]);

  return children;
}
