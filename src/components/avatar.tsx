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

interface TiAvatarProps {
  accessibilityHint?: string;
  accessibilityLabel?: string;
  name: string;
  imgSrc?: ImageSourcePropType;
  radius?: AnimatableNumericValue;
  size?: number;
}

export default function TiAvatar({
  accessibilityHint,
  accessibilityLabel,
  imgSrc,
  name,
  radius = Radius.full,
  size = Sizing.size48,
}: TiAvatarProps) {
  const { themeStyles } = useTheme();

  const styles = StyleSheet.create({
    avatar: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: themeStyles.bgAccent,
      borderRadius: radius,
    },
    avatarSizes: {
      height: size,
      width: size,
      minWidth: size,
      borderRadius: radius,
    },
    avatarInitials: {
      fontSize: Typography.labelFontSize.md,
      fontWeight: Typography.labelFontWeight,
      color: themeStyles.white,
    },
  });

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
        <Image source={imgSrc} style={[styles.avatar, styles.avatarSizes]} />
      ) : (
        <View style={[styles.avatar, styles.avatarSizes]}>
          <Text style={styles.avatarInitials}>{getInitials(name)}</Text>
        </View>
      )}
    </View>
  );
}
