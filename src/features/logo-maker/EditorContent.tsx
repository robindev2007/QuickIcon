"use client";
import Icon from "@/components/Icon";
import { IconEditorContext } from "@/context/IconEditorContextProvider";
import { cn } from "@/lib/utils";
import React, { useContext } from "react";

function EditorContent() {
  const { iconData, bgData, editorDownloadableDomRef } =
    useContext(IconEditorContext);

  const shadow = `shadow-${bgData.shadow}`;

  return (
    <div className="aspect-square h-72 w-72 rounded-md border-2 border-dashed bg-muted-foreground/20">
      <div
        className="h-full w-full"
        ref={editorDownloadableDomRef}
        style={{
          padding: `${bgData.padding}px`,
        }}
      >
        <div
          className={cn(
            "flex aspect-square items-center justify-center overflow-hidden bg-secondary",
            shadow,
          )}
          style={{
            borderRadius: `${bgData.borderRadous}px`,
            background: bgData.background,
          }}
        >
          <Icon
            name={iconData.icon}
            style={{
              height: iconData.size,
              width: iconData.size,
              rotate: `${iconData.rotation}deg`,
              strokeWidth: `${iconData.borderWidth}px`,
              color: iconData.borderColor,
              fill: iconData.fillColor,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default EditorContent;
