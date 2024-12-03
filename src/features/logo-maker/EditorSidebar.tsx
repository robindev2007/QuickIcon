"use client";
import React, { useContext } from "react";
import EditorSelector from "./EditorSelector";
import IconCustomizer from "./IconCustomizer";
import { IconEditorContext } from "@/context/IconEditorContextProvider";
import BackgroundCustomizer from "./BackgroundCustomizer";

function EditorSidebar() {
  const { activeEditor } = useContext(IconEditorContext);

  return (
    <div className="flex h-full w-full flex-col md:w-auto md:flex-row">
      <EditorSelector />

      {activeEditor == "icon" ? <IconCustomizer /> : <BackgroundCustomizer />}
    </div>
  );
}

export default EditorSidebar;
