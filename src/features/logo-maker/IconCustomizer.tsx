import { Slider } from "@/components/ui/slider";
import React, { useContext } from "react";
import NameValueTitle from "./NameValueTitle";
import { IconEditorContext } from "@/context/IconEditorContextProvider";
import IconSelector from "./IconSelector";
import { RgbaStringColorPicker } from "react-colorful";

function IconCustomizer() {
  const { iconData, setIconData } = useContext(IconEditorContext);

  return (
    <div className="h-full w-full overflow-y-auto border-r py-2 md:w-sideBar">
      <div className="space-y-3 px-3">
        <IconSelector />
        <div className="space-y-1">
          <NameValueTitle name="Size" value={`${iconData.size} px`} />
          <Slider
            value={[iconData.size]}
            min={100}
            max={400}
            onValueChange={(value) =>
              setIconData({
                ...iconData,
                size: value[0],
              })
            }
          />
        </div>
        <div className="space-y-1">
          <NameValueTitle name="Rotate" value={`${iconData.rotation}°`} />
          <Slider
            value={[iconData.rotation]}
            min={-180}
            max={180}
            onValueChange={(value) =>
              setIconData({
                ...iconData,
                rotation: value[0],
              })
            }
          />
        </div>
        <div className="space-y-1">
          <NameValueTitle
            name="Border width"
            value={`${iconData.borderWidth} px`}
          />
          <Slider
            value={[iconData.borderWidth]}
            min={1}
            max={4}
            step={0.1}
            onValueChange={(value) =>
              setIconData({
                ...iconData,
                borderWidth: value[0],
              })
            }
          />
        </div>
        <div className="space-y-1">
          <NameValueTitle name="Border color" />
          <RgbaStringColorPicker
            color={iconData.borderColor}
            onChange={(color) =>
              setIconData({
                ...iconData,
                borderColor: color,
              })
            }
          />
        </div>
        <div className="space-y-1">
          <NameValueTitle name="Fill color" />
          <RgbaStringColorPicker
            color={iconData.fillColor}
            onChange={(color) =>
              setIconData({
                ...iconData,
                fillColor: color,
              })
            }
          />
        </div>
      </div>
    </div>
  );
}

export default IconCustomizer;
