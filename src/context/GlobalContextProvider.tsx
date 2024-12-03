"use client";
import React, { ReactNode } from "react";
import { IconEditorContextProvider } from "./IconEditorContextProvider";

function GlobalContextProvider({ children }: { children: ReactNode }) {
  return <IconEditorContextProvider>{children}</IconEditorContextProvider>;
}

export default GlobalContextProvider;
