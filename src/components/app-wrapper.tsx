import { StatusBar } from "expo-status-bar";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import TiButton, { ButtonVariant } from "./button";
import { useTheme } from "../utility/theme-context";
import { Typography } from "../styles/typography";
import { Spacing } from "../styles/spacing";
import { Radius } from "../styles/radius";
import { IconAlert } from "./icons/alert";
import Jersey from "./jersey";
import TiAvatar, { AvatarSizes } from "./avatar";
import { Sizing } from "../styles/sizing";

export default function AppWrapper() {
  const { toggleTheme, themeStyles, theme } = useTheme();
  const avatarSizeOptions: AvatarSizes[] = [
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
  ];
  const buttonVariants: ButtonVariant[] = [
    "filled",
    "outline",
    "light",
    "subtle",
  ];

  const surfaceOptions = ["base", 100, 200];

  const toggleThemeBtnTitle = `Switch to ${
    theme === "light" ? "Dark" : "Light"
  }`;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: themeStyles.surfaceBase,
    },
    content: {
      gap: Spacing.space64,
      padding: Spacing.space24,
    },
    section: {
      gap: Spacing.space32,
    },
    text: {
      fontSize: Typography.headingFontSize.h3,
      textAlign: "center",
      color: themeStyles.text100,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={theme === "light" ? "dark" : "light"} />

      <ScrollView>
        <View style={styles.content}>
          {/* buttons */}
          <View style={styles.section}>
            <Text style={styles.text}>Button</Text>
            <View
              style={{
                gap: Spacing.space24,
              }}
            >
              {buttonVariants.map((variants, index) => {
                return (
                  <TiButton
                    key={index}
                    accessibilityLabel={`${toggleThemeBtnTitle} button`}
                    icon={IconAlert}
                    title={toggleThemeBtnTitle}
                    variant={variants}
                    onPress={toggleTheme}
                  />
                );
              })}
            </View>
          </View>

          {/* jersey */}
          <View style={styles.section}>
            <Text style={styles.text}>Jersey</Text>
            <View
              style={{
                gap: Spacing.space24,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Jersey
                size={Sizing.size80}
                number="10"
                colorBack="#323232"
                colorSleeve="#121212"
                colorText={themeStyles.white}
              />
              <Jersey
                size={Sizing.size80}
                number="11"
                colorBack="#4c2ccc"
                colorSleeve="#412c91"
                colorText={themeStyles.white}
              />
              <Jersey
                size={Sizing.size80}
                number="11"
                colorBack="#cc2cbc"
                colorSleeve="#922187"
                colorText={themeStyles.white}
              />
            </View>
          </View>

          {/* avatar */}
          <View style={styles.section}>
            <Text style={styles.text}>Avatar</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                gap: Spacing.space48,
              }}
            >
              <View style={{ alignItems: "center", gap: Spacing.space16 }}>
                {avatarSizeOptions.map((size, index) => {
                  return (
                    <TiAvatar
                      key={index}
                      size={size}
                      name="Winter Spoon"
                      accessibilityLabel="Winter spoon avatar image"
                      accessibilityHint="Tap to view winter spoon's details"
                      imgSrc={{
                        uri: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE3fHxwZXJzb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
                      }}
                    />
                  );
                })}
              </View>
              <View style={{ alignItems: "center", gap: Spacing.space16 }}>
                {avatarSizeOptions.map((size, index) => {
                  return (
                    <TiAvatar
                      key={index}
                      size={size}
                      name="Winter Spoon"
                      accessibilityLabel="Winter spoon avatar image"
                      accessibilityHint="Tap to view winter spoon's details"
                    />
                  );
                })}
              </View>
            </View>
          </View>

          {/* surface */}
          <View style={styles.section}>
            <Text style={styles.text}>Surface</Text>
            {surfaceOptions.map((surface, index) => {
              return (
                <View
                  style={{
                    alignItems: "center",
                    paddingVertical: Spacing.space48,
                    paddingHorizontal: Spacing.space16,
                    borderRadius: Radius.xxl,
                    backgroundColor: themeStyles[`surface${surface}`],
                    borderWidth: Sizing.size1,
                    borderColor: themeStyles[`border100`],
                  }}
                >
                  <Text
                    style={{
                      color: themeStyles.text100,
                      fontWeight: Typography.labelFontWeight,
                    }}
                  >{`Surface${surface}`}</Text>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
