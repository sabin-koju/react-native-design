import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";

interface JerseyProps {
  number: string;
  colorBack: string;
  colorSleeve: string;
  colorText: string;
  size: number;
}

export default function Jersey({
  number,
  colorBack,
  colorSleeve,
  colorText,
  size = 80,
}: JerseyProps) {
  const styles = StyleSheet.create({
    container: {
      position: "relative",
      height: size,
      width: size,
    },
    textContainer: {
      position: "absolute",
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      zIndex: 10,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      fontSize: 24,
      fontWeight: "bold",
      color: colorText,
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{number}</Text>
      </View>
      <Svg fill="none" viewBox="0 0 56 56">
        <Path
          fill={colorBack}
          d="M47.405 3.148V56H8.595V3.148L19.622 0C22.159 1.23 25 1.917 28 1.917S33.841 1.23 36.378 0l11.027 3.148Z"
        />
        <Path
          fill={colorSleeve}
          d="M47.404 3.148 56 20.912s-2.692 5.472-8.596 4.363V3.148Zm-38.809 0L0 20.912s2.691 5.472 8.595 4.363V3.148Z"
        />
      </Svg>
    </View>
  );
}
