import {
  ActivityIndicator,
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
} from "react-native";
import { useTheme } from "../utility/theme-context";
import { Sizing } from "../styles/sizing";
import { Spacing } from "../styles/spacing";
import { Radius } from "../styles/radius";
import { Typograhpy } from "../styles/typography";
import React, { ReactNode } from "react";
import SVGIcon from "./svg-icon";
import { IconAlert } from "./icons/alert";

interface TiButtonProps {
  accessibilityLabel?: string;
  disabled?: boolean;
  icon?: string;
  isLoading?: boolean;
  title: string;
  variant?: ButtonVariant;
  onPress?: (event: GestureResponderEvent) => void;
}

export default function TiButton({
  accessibilityLabel,
  disabled,
  icon,
  isLoading,
  variant = "filled",
  title,
  onPress,
}: TiButtonProps) {
  const { themeStyles } = useTheme();

  const styles = StyleSheet.create({
    baseButton: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      height: Sizing.size48,
      paddingHorizontal: Spacing.space16,
      borderRadius: Radius.sm,
      gap: Spacing.space8,
    },
    baseText: {
      fontSize: Typograhpy.labelFontSize.md,
      lineHeight: Typograhpy.labelLineHeight.md,
      fontWeight: Typograhpy.labelFontWeight,
    },
    filled: {
      backgroundColor: themeStyles.bgPrimary,
    },
    filledText: {
      color: themeStyles.white,
    },
    outline: {
      backgroundColor: "transparent",
      borderColor: themeStyles.borderPrimary,
      borderWidth: 1,
    },
    outlineText: {
      color: themeStyles.textPrimary,
    },
    light: {
      backgroundColor: themeStyles.bgAlphaPrimary,
    },
    lightText: {
      color: themeStyles.textPrimary,
    },
    subtle: {
      backgroundColor: "transparent",
    },
    subtleText: {
      color: themeStyles.textPrimary,
    },
  });

  const variantButtonStyles = variant ? styles[variant] : styles.filled;
  const variantTextStyles = variant
    ? styles[`${variant}Text`]
    : styles.filledText;
  const fgColor =
    variant === "filled" ? themeStyles.white : themeStyles.textPrimary;

  return (
    <Pressable
      style={({ pressed }) => [
        styles.baseButton,
        variantButtonStyles,
        pressed ? { opacity: 0.72 } : { opacity: 1 },
      ]}
      onPress={onPress}
      disabled={disabled}
      accessibilityLabel={accessibilityLabel}>
      {isLoading && <ActivityIndicator size={"small"} color={fgColor} />}
      {icon && <SVGIcon svg={icon} fill={fgColor} />}
      <Text style={[styles.baseText, variantTextStyles]}>{title}</Text>
    </Pressable>
  );
}

export type ButtonVariant = "filled" | "outline" | "light" | "subtle";
