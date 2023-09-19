import { StatusBar } from "expo-status-bar";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import TiButton from "./button";
import { useTheme } from "../utility/theme-context";
import { Typography } from "../styles/typography";
import { Spacing } from "../styles/spacing";
import { Radius } from "../styles/radius";
import { IconAlert } from "./icons/alert";
import { IconVAR } from "./icons/var";
import { IconCheck } from "./icons/check";
import { IconChat } from "./icons/chat";
import Jersey from "./jersey";
import TiAvatar from "./avatar";
import { Sizing } from "../styles/sizing";

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
      fontSize: Typography.headingFontSize.h4,
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
            paddingVertical: Spacing.space48,
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

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            gap: Spacing.space16,
            paddingBottom: Spacing.space24,
          }}
        >
          <TiAvatar
            name="Winter Spoon"
            accessibilityLabel="Winter spoon avatar image"
            accessibilityHint="Tap to view winter spoon's details"
            imgSrc={{
              uri: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE3fHxwZXJzb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            }}
          />
          <TiAvatar
            name="Winter Spoon"
            accessibilityLabel="Winter spoon avatar image"
            accessibilityHint="Tap to view winter spoon's details"
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            gap: Spacing.space24,
            paddingHorizontal: Spacing.space16,
            paddingBottom: Spacing.space24,
          }}
        >
          <View
            style={{
              flex: 1,
              paddingVertical: Spacing.space48,
              paddingHorizontal: Spacing.space16,
              borderRadius: Radius.xxl,
              backgroundColor: themeStyles.surface100,
            }}
          >
            <Text style={styles.text}>Hello there !!</Text>
          </View>
          <View
            style={{
              flex: 1,
              paddingVertical: Spacing.space48,
              paddingHorizontal: Spacing.space16,
              borderRadius: Radius.xxl,
              backgroundColor: themeStyles.surface200,
            }}
          >
            <Text style={styles.text}>Hello there !!</Text>
          </View>
          <View
            style={{
              flex: 1,
              paddingVertical: Spacing.space48,
              paddingHorizontal: Spacing.space16,
              borderRadius: Radius.xxl,
              backgroundColor: themeStyles.surface300,
            }}
          >
            <Text style={styles.text}>Hello there !!</Text>
          </View>
        </View>

        <View style={{ gap: 24, paddingHorizontal: 16 }}>
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
