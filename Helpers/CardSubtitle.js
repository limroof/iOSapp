import { StyleSheet } from "react-native";
import { Text } from "react-native";
import * as Font from "expo-font";
import { useEffect, useState } from "react";

export default function CardSubtitle({ text, fontSize }) {
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
    <Text style={styles({ fontSize }).title}>{text}</Text>
  ) : (
    <Text style={styles.loading}>Loading ...</Text>
  );
}

export const styles = (props) =>
  StyleSheet.create({
    title: {
      fontFamily: "NimbusSanL-Bol",
      fontSize: "16px",
      lineHeight: "24px",
      color: "white",
      letterSpacing: "0.34",
      marginBottom: 10,
      fontSize: props.fontSize ? props.fontSize : "16px",
    },
    loading: {
      color: "white",
    },
  });
