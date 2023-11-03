"use client";

import { PropsWithChildren } from "react";
import { SessionProvider } from "next-auth/react";

export type LayoutProviderProps = PropsWithChildren;

export const LayoutProvider = (props: LayoutProviderProps) => {
  return <SessionProvider>{props.children}</SessionProvider>;
};
