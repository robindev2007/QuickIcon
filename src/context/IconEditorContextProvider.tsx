"use client";
import { SaveDomAsImage } from "@/utils/htmlToImage";
import React, {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useRef,
} from "react";
import { toast } from "sonner";

export type IconData = {
  icon: string;
  size: number;
  rotation: number;
  borderWidth: number;
  borderColor: string;
  fillColor: string;
};

type ActiveEditor = "icon" | "bg";

type BgData = {
  borderRadous: number;
  padding: number;
  shadow: "none" | "sm" | "md" | "lg" | "xl" | "2xl";
  background: string;
};

type IconEditorContextType = {
  iconData: IconData;
  bgData: BgData;
  activeEditor: ActiveEditor;
  setBgData: (data: BgData) => void;
  setActiveEditor: (data: ActiveEditor) => void;
  setIconData: (data: IconData) => void;
  resetIconData: () => void;
  downloadPng: () => void;
  downloadSvg: () => void;
  editorDownloadableDomRef?: React.RefObject<HTMLDivElement>;
};

const defaultIconData: IconData = {
  icon: "Apple",
  size: 190,
  rotation: 0,
  borderWidth: 2.5,
  borderColor: "#FFFFFF",
  fillColor: "#ffffff",
};

const defaultBgData: BgData = {
  background:
    "linear-gradient(45deg, rgba(239,112,155,1) 0%, RGBA(255, 147, 15, 1) 100%)",
  borderRadous: 25,
  padding: 22,
  shadow: "md",
};

const IconEditorContext = createContext<IconEditorContextType>({
  iconData: defaultIconData,
  resetIconData: () => null,
  setIconData: () => null,
  bgData: defaultBgData,
  activeEditor: "icon",
  setActiveEditor: () => null,
  downloadPng: () => null,
  downloadSvg: () => null,
  setBgData: () => null,
});

const getLocatStoreIconData = () => {
  if (typeof window !== "undefined" && localStorage.getItem("iconData")) {
    return JSON.parse(localStorage.getItem("iconData") as string) as IconData;
  } else {
    return defaultIconData;
  }
};

const getLocatStoreBgData = () => {
  if (typeof window !== "undefined" && localStorage.getItem("bgData")) {
    return JSON.parse(localStorage.getItem("bgData") as string) as BgData;
  } else {
    return defaultBgData;
  }
};

function IconEditorContextProvider({ children }: { children: ReactNode }) {
  const [iconData, setIconData] = useState<IconData>(getLocatStoreIconData());
  const [bgData, setBgData] = useState<BgData>(getLocatStoreBgData());
  const [activeEditor, setActiveEditor] = useState<ActiveEditor>("icon");

  const editorDownloadableDomRef = useRef<HTMLDivElement>(null);

  const resetIconData = () => {
    setIconData(defaultIconData);
    setBgData(defaultBgData);
  };

  useEffect(() => {
    localStorage.setItem("bgData", JSON.stringify(bgData));
  }, [bgData]);

  useEffect(() => {
    localStorage.setItem("iconData", JSON.stringify(iconData));
  }, [iconData]);

  const downloadPng = () => {
    if (!editorDownloadableDomRef.current) {
      toast.error("App not inisilized");
      return;
    }
    SaveDomAsImage({
      extensition: "png",
      node: editorDownloadableDomRef.current,
      title: iconData.icon,
    });
  };

  const downloadSvg = () => {
    if (!editorDownloadableDomRef.current) {
      toast.error("App not inisilized");
      return;
    }
    SaveDomAsImage({
      extensition: "svg",
      node: editorDownloadableDomRef.current,
      title: iconData.icon,
    });
  };

  return (
    <IconEditorContext.Provider
      value={{
        iconData,
        setIconData,
        resetIconData,
        activeEditor,
        bgData,
        setActiveEditor,
        setBgData,
        editorDownloadableDomRef,
        downloadPng,
        downloadSvg,
      }}
    >
      {children}
    </IconEditorContext.Provider>
  );
}

export { IconEditorContext, IconEditorContextProvider };
