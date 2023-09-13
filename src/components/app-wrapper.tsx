import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import TiButton from "./button";
import { useTheme } from "../utility/theme-context";
import { Typograhpy } from "../styles/typography";
import { Spacing } from "../styles/spacing";
import { Radius } from "../styles/radius";
import { IconAlert } from "./icons/alert";
import { IconVAR } from "./icons/var";
import { IconCheck } from "./icons/check";
import { IconChat } from "./icons/chat";
import Jersey from "./jersey";

export default function AppWrapper() {
  const { toggleTheme, themeStyles, theme } = useTheme();

  const toggleThemeBtnTitle = `Switch to ${
    theme === "light" ? "Dark" : "Light"
  }`;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: themeStyles.surfaceBase,
    },
    text: {
      fontSize: Typograhpy.headingFontSize.h1,
      textAlign: "center",
      color: themeStyles.text100,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={theme === "light" ? "dark" : "light"} />

      <ScrollView>
        <View
          style={{
            paddingVertical: 48,
            gap: 24,
            flexDirection: "row",
            justifyContent: "center",
          }}>
          <Jersey
            size={80}
            number="10"
            colorBack="#323232"
            colorSleeve="#121212"
            colorText={themeStyles.white}
          />
          <Jersey
            size={80}
            number="11"
            colorBack="#4c2ccc"
            colorSleeve="#412c91"
            colorText={themeStyles.white}
          />
          <Jersey
            size={80}
            number="11"
            colorBack="#cc2cbc"
            colorSleeve="#922187"
            colorText={themeStyles.white}
          />
        </View>
        <View style={{ gap: 24, paddingHorizontal: 16 }}>
          <View
            style={{
              padding: Spacing.space48,
              borderRadius: Radius.xxl,
              backgroundColor: themeStyles.surface100,
            }}>
            <Text style={styles.text}>Hello there !!</Text>
          </View>
          <View
            style={{
              padding: Spacing.space48,
              borderRadius: Radius.xxl,
              backgroundColor: themeStyles.surface200,
            }}>
            <Text style={styles.text}>Hello there !!</Text>
          </View>
          <View
            style={{
              padding: Spacing.space48,
              borderRadius: Radius.xxl,
              backgroundColor: themeStyles.surface300,
            }}>
            <Text style={styles.text}>Hello there !!</Text>
          </View>

          <TiButton
            accessibilityLabel={`${toggleThemeBtnTitle} button`}
            icon={IconAlert}
            title={toggleThemeBtnTitle}
            variant="filled"
            onPress={toggleTheme}
          />
          <TiButton
            accessibilityLabel={`${toggleThemeBtnTitle} button`}
            icon={IconVAR}
            title={toggleThemeBtnTitle}
            variant="outline"
            onPress={toggleTheme}
          />
          <TiButton
            accessibilityLabel={`${toggleThemeBtnTitle} button`}
            icon={IconCheck}
            title={toggleThemeBtnTitle}
            variant="light"
            onPress={toggleTheme}
          />
          <TiButton
            accessibilityLabel={`${toggleThemeBtnTitle} button`}
            icon={IconChat}
            title={toggleThemeBtnTitle}
            variant="subtle"
            onPress={toggleTheme}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
