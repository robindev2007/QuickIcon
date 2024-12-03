"use client";
import nodeToImage from "dom-to-image";
import { toast } from "sonner";

export const SaveDomAsImage = async ({
  node,
  extensition,
  title,
}: {
  node: HTMLDivElement;
  extensition: "png" | "svg" | "jpeg";
  title: string;
}) => {
  const scale = 3;

  const width = node.offsetWidth * scale;
  const height = node.offsetHeight * scale;

  const config = {
    style: {
      transform: `scale(${scale})`,
      transformOrigin: "top left",
      alignItems: "start",
      justifyContent: "start",
    },

    height,
    width,
  };

  if (extensition === "png") {
    const imageSrc = await nodeToImage.toPng(node, config);
    const download = donwloadFile(imageSrc, title + `.${extensition}`);
    if (download.error) {
      return toast.warning("Something went worng | Refresh Browser");
    }

    return "success";
  }

  if (extensition === "svg") {
    const imageSrc = await nodeToImage.toSvg(node, config);
    const download = donwloadFile(imageSrc, title + `.${extensition}`);
    if (download.error) {
      return toast.warning("Something went worng | Refresh Browser");
    }

    return "success";
  }

  if (extensition === "jpeg") {
    const imageSrc = await nodeToImage.toJpeg(node, config);
    const download = donwloadFile(imageSrc, title + `.${extensition}`);
    if (download.error) {
      return toast.warning("Something went worng | Refresh Browser");
    }

    return "success";
  }
};

export const donwloadFile = (url: string, fileName: string) => {
  try {
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName ? fileName : url;
    a.click();

    return { code: "success", error: null };
  } catch (error) {
    return { code: "error", error };
  }
};
