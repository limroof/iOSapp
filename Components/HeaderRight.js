import { StyleSheet, Text, View, Image } from "react-native";

export default function HeaderRight() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.headerImage}
        source={require("../assets/ProfilePicture.png")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    overflow: "visible",
  },
  headerImage: {
    height: 50,
    width: 50,
  },
});
