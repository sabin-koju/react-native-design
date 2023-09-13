import React from "react";
import { SvgXml } from "react-native-svg";

interface SVGIconProps {
  svg: string;
  width?: number;
  height?: number;
  fill?: string;
}

export default function SVGIcon({
  svg,
  width = 24,
  height = 24,
  fill = "",
}: SVGIconProps) {
  const xmlWithFill = svg.replace(/fill="[^"]+"/g, `fill="${fill}"`);
  return <SvgXml xml={xmlWithFill} width={width} height={height} />;
}
