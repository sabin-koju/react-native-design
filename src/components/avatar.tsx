import {
  AnimatableNumericValue,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useTheme } from "../utility/theme-context";
import { Typography } from "../styles/typography";
import { Sizing } from "../styles/sizing";
import { Radius } from "../styles/radius";
import { IconPerson } from "./icons/person";
import SVGIcon from "./svg-icon";

interface TiAvatarProps {
  accessibilityHint?: string;
  accessibilityLabel?: string;
  bgColor?: string;
  fgColor?: string;
  name: string;
  imgSrc?: ImageSourcePropType;
  radius?: AnimatableNumericValue;
  size?: AvatarSizes;
}

export default function TiAvatar({
  accessibilityHint,
  accessibilityLabel,
  imgSrc,
  bgColor,
  fgColor,
  name,
  radius = Radius.full,
  size = "md",
}: TiAvatarProps) {
  const { themeStyles } = useTheme();
  const avatarBgColor = bgColor ? bgColor : themeStyles.bgAccent;
  const avatarFgColor = fgColor ? fgColor : themeStyles.white;

  const styles = StyleSheet.create({
    avatar: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: avatarBgColor,
      borderRadius: radius,
    },
    xs: {
      height: Sizing.size32,
      width: Sizing.size32,
      minWidth: Sizing.size32,
    },
    sm: {
      height: Sizing.size40,
      width: Sizing.size40,
      minWidth: Sizing.size40,
    },
    md: {
      height: Sizing.size48,
      width: Sizing.size48,
      minWidth: Sizing.size48,
    },
    lg: {
      height: Sizing.size56,
      width: Sizing.size56,
      minWidth: Sizing.size56,
    },
    xl: {
      height: Sizing.size64,
      width: Sizing.size64,
      minWidth: Sizing.size64,
    },
    "2xl": {
      height: Sizing.size80,
      width: Sizing.size80,
      minWidth: Sizing.size80,
    },
    "3xl": {
      height: Sizing.size96,
      width: Sizing.size96,
      minWidth: Sizing.size96,
    },
  });

  const sizeStyles = size ? styles[size] : styles["md"];

  const getInitials = (name: string): string => {
    const splitName = name.trim().split(" ");
    if (splitName.length > 1) {
      return splitName[0][0] + splitName[1][0];
    }
    return splitName[0][0];
  };

  return (
    <View
      accessibilityRole="image"
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
    >
      {imgSrc ? (
        <Image
          source={imgSrc}
          style={[styles.avatar, sizeStyles]}
          accessibilityLabel={name}
        />
      ) : (
        <View style={[styles.avatar, sizeStyles]}>
          {/* <Text style={styles.avatarInitials}>{getInitials(name)}</Text> */}
          <SVGIcon
            svg={IconPerson}
            height={"50%"}
            width={"50%"}
            fill={avatarFgColor}
          />
        </View>
      )}
    </View>
  );
}

export type AvatarSizes = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
