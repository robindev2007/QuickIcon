"use client";
import React from "react";
import GColorPicker, {
  ColorPickerProps as PickerProps,
} from "react-best-gradient-color-picker";

type ColorPickerProps = PickerProps & {
  color?: string;
  onChange: (color: string) => void;
};

const ColorPicker = ({
  onChange,
  hideColorGuide,
  hideControls = true,
  hidePresets = true,
  ...props
}: ColorPickerProps) => {
  return (
    <GColorPicker
      hideControls={hideControls}
      hidePresets={hidePresets}
      hideColorGuide={hideColorGuide}
      width={250}
      height={200}
      onChange={onChange}
      className={"overflow-hidden !bg-transparent"}
      {...props}
    />
  );
};

export default ColorPicker;
