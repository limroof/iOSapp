import { StyleSheet } from "react-native";
import { Pressable, Text } from "react-native";

export default function BuyButtonOrange({ title }) {
  return (
    <Pressable style={styles.BuyButton}>
      <Text color={"white"} style={styles.text}>
        {title}
      </Text>
    </Pressable>
  );
}

export const styles = StyleSheet.create({
  BuyButton: {
    backgroundColor: "#F2591E",
    borderRadius: 32,
    minWidth: 80,
    fontSize: "24px",
    lineHeight: "26px",
    padding: 10,
  },
  text: {
    fontWeight: "700",
    color: "white",
    fontSize: "14px",
    textAlign: "center",
  },
});
