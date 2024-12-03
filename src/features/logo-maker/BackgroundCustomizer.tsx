import React, { useContext } from "react";
import NameValueTitle from "./NameValueTitle";
import { IconEditorContext } from "@/context/IconEditorContextProvider";
import { Slider } from "@/components/ui/slider";
import ColorPicker from "@/components/ColorPicker";

const shadows = ["none", "sm", "md", "lg", "xl", "2xl"];

function BackgroundCustomizer() {
  const { bgData, setBgData } = useContext(IconEditorContext);

  const setShadow = (number: number) => {
    console.log(number);
    console.log(number, shadows[number]);

    setBgData({
      ...bgData,
      shadow: shadows[number] as "sm",
    });
  };

  const getShadowNumber = (shadow: string) => {
    const a = shadows.findIndex((a) => a == shadow);
    console.log(a);
    return a;
  };

  return (
    <div className="space-y-3 border-r px-3 py-2 md:w-sideBar">
      <div className="space-y-1">
        <NameValueTitle name="Rounded" value={`${bgData.borderRadous}px`} />

        <Slider
          value={[bgData.borderRadous]}
          min={0}
          max={300}
          onValueChange={(value) =>
            setBgData({
              ...bgData,
              borderRadous: value[0],
            })
          }
        />
      </div>
      <div className="space-y-1">
        <NameValueTitle name="Pading" value={`${bgData.padding}px`} />

        <Slider
          value={[bgData.padding]}
          min={0}
          max={100}
          onValueChange={(value) =>
            setBgData({
              ...bgData,
              padding: value[0],
            })
          }
        />
      </div>
      <div className="space-y-1">
        <NameValueTitle name="Shadow" value={`${bgData.shadow}`} />

        <Slider
          value={[getShadowNumber(bgData.shadow)]}
          min={0}
          max={5}
          onValueChange={(value) => setShadow(value[0])}
        />
      </div>
      <div className="space-y-1">
        <NameValueTitle name="Background" />
        <ColorPicker
          hideControls={false}
          value={bgData.background}
          onChange={(color) =>
            setBgData({
              ...bgData,
              background: color,
            })
          }
        />

        {/* <ColorPicker
          color={bgData.background.solidColor}
          onChange={(color) =>
            setBgData({
              ...bgData,
              background: {
                solidColor: color,
              },
            })
          }
        /> */}
      </div>
    </div>
  );
}

export default BackgroundCustomizer;
