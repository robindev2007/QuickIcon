"use client";
import { Button } from "@/components/ui/button";
import React, { useContext } from "react";
import { IoImagesOutline } from "react-icons/io5";
import { IconEditorContext } from "@/context/IconEditorContextProvider";
import Icon from "@/components/Icon";

function EditorSelector() {
  const { activeEditor, iconData, setActiveEditor } =
    useContext(IconEditorContext);

  return (
    <div className="flex w-full flex-row justify-evenly gap-1 border-b px-1.5 py-2 md:h-full md:w-fit md:flex-col md:justify-normal md:border-b-0 md:border-r">
      <div className="w-full text-center">
        <Button
          onClick={() => setActiveEditor("icon")}
          variant={activeEditor == "icon" ? "secondary" : "ghost"}
          className="w-full"
        >
          <Icon name={iconData.icon} className="md:hidden" />
          <p className="hidden md:block">Icon</p>
        </Button>
      </div>
      <div className="w-full text-center">
        <Button
          onClick={() => setActiveEditor("bg")}
          variant={activeEditor == "bg" ? "secondary" : "ghost"}
          className="w-full"
        >
          <IoImagesOutline className="md:hidden" />
          <p className="hidden md:block">Background</p>
        </Button>
      </div>
    </div>
  );
}

export default EditorSelector;
