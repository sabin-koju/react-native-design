import React from "react";
import { NumberProp, SvgXml } from "react-native-svg";

interface SVGIconProps {
  svg: string;
  width?: NumberProp;
  height?: NumberProp;
  fill?: string;
  avoidColorOverride?: boolean;
}

export default function SVGIcon({
  svg,
  width = 24,
  height = 24,
  fill = "",
  avoidColorOverride = false,
}: SVGIconProps) {
  const xmlWithFill = !avoidColorOverride
    ? svg.replace(/fill="[^"]+"/g, `fill="${fill}"`)
    : svg;
  return <SvgXml xml={xmlWithFill} width={width} height={height} />;
}
