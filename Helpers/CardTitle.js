import { StyleSheet, View, Text } from "react-native";
import * as Font from "expo-font";
import { useEffect, useState } from "react";

export default function Cardtitle({ text }) {
  const [isfontsLoaded, setIsFontLoaded] = useState(false);

  async function loadFonts() {
    try {
      await Font.loadAsync({
        "NimbusSanL-Regular": require("../assets/fonts/NimbusSanL-Reg.otf"),
        "NimbusSanL-Regular-italic": require("../assets/fonts/NimbusSanL-RegIta.otf"),
        "NimbusSanL-Bol": require("../assets/fonts/NimbusSanL-Bol.otf"),
        "NimbusSanL-Bold-italic": require("../assets/fonts/NimbusSanL-BolIta.otf"),
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
    fontFamily: "NimbusSanL-Bol",
    fontSize: "32px",
    lineHeight: "39px",
    color: "white",
    letterSpacing: "0.34",
    letterSpacing: "1",
    textTransform: "uppercase",
    width: "100%",
  },
  loading: {
    color: "white",
  },
});
