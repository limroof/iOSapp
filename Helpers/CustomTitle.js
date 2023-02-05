import { StyleSheet } from "react-native";
import { Text } from "react-native";
import * as Font from "expo-font";
import { useEffect, useState } from "react";

export default function CustomTitle({ text }) {
  const [isfontsLoaded, setIsFontLoaded] = useState(false);

  async function loadFonts() {
    try {
      await Font.loadAsync({
        "Gibson-regular": require("../assets/fonts/NimbusSanL-Reg.otf"),
        "Gibson-regular-italic": require("../assets/fonts/NimbusSanL-RegIta.otf"),
        "Gibson-bold": require("../assets/fonts/gibson-bold.ttf"),
        "Gibson-bold-italic": require("../assets/fonts/NimbusSanL-BolIta.otf"),
      });
      setIsFontLoaded(true);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    loadFonts();
  }, []);

  return isfontsLoaded ? (
    <Text style={styles.title}>{text}</Text>
  ) : (
    <Text style={styles.loading}>Loading ...</Text>
  );
}

export const styles = StyleSheet.create({
  title: {
    fontFamily: "Gibson-bold",
    color: "white",
    fontSize: "20px",
    fontWeight: "500",
    lineHeight: 24,
  },
  loading: {
    color: "white",
  },
});
