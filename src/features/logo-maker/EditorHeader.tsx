"use client";
import Icon from "@/components/Icon";
import { Button } from "@/components/ui/button";
import React, { useContext } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IconEditorContext } from "@/context/IconEditorContextProvider";
import Image from "next/image";

function EditorHeader() {
  const { downloadPng, downloadSvg, resetIconData } =
    useContext(IconEditorContext);

  return (
    <div className="flex items-center justify-between border-b p-3 py-2">
      <div>
        <Image
          src={"/images/logo_black.png"}
          width={444}
          height={92}
          alt=""
          className="h-5 w-full"
        />
      </div>
      <div className="space-x-2">
        <Button variant={"secondary"} onClick={resetIconData}>
          Reset <Icon name="RefreshCw" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"secondary"}>
              Download <Icon name="ChevronDown" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={downloadPng}>
              <Icon name="ArrowDown" /> Download PNG
            </DropdownMenuItem>
            <DropdownMenuItem onClick={downloadSvg}>
              <Icon name="ArrowDown" /> Download SVG
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default EditorHeader;
