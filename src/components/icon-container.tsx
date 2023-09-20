import { AnimatableNumericValue, StyleSheet, View } from "react-native";
import SVGIcon from "./svg-icon";
import { Radius } from "../styles/radius";
import { useTheme } from "../utility/theme-context";
import { Sizing } from "../styles/sizing";

export interface IconContainerProps {
  svg: string;
  bgColor?: string;
  fgColor?: string;
  size?: AnimatableNumericValue;
  avoidColorOverride?: boolean;
}

export default function TiIconContainer({
  svg,
  bgColor,
  fgColor,
  size,
  avoidColorOverride,
}: IconContainerProps) {
  const { themeStyles } = useTheme();
  bgColor = bgColor ? bgColor : themeStyles.bgSuccess;
  fgColor = fgColor ? fgColor : themeStyles.white;
  size = size ? size : Sizing.size32;
  const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
      borderRadius: Radius.sm,
      height: size,
      width: size,
    },
  });
  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <SVGIcon
        svg={svg}
        fill={fgColor}
        avoidColorOverride={avoidColorOverride}
      />
    </View>
  );
}
