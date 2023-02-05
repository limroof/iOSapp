import { StyleSheet, View, Text } from "react-native";
import * as Font from "expo-font";
import { useEffect, useState } from "react";

export default function CardPrice({ text }) {
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
    <View style={styles.container}>
      <Text style={styles.title}>{text}</Text>
    </View>
  ) : (
    <Text style={styles.loading}>Loading ...</Text>
  );
}

export const styles = StyleSheet.create({
  container: {
    minWidth: 80,
  },
  title: {
    fontFamily: "Gibson-regular",
    fontSize: "12px",
    lineHeight: "16px",
    color: "#6D6D6D",
    textAlign: "center",
  },
  loading: {
    color: "white",
  },
});
