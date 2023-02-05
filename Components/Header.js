import { StyleSheet, Text, View, Image } from "react-native";
import HomePageTitle from "../Helpers/HomePageTitle";
export default function HeaderRight() {
  return (
    <View style={styles.header}>
      <HomePageTitle style={styles.headerTitle} text='Store' />
      <Image
        style={styles.headerImage}
        source={require("../assets/ProfilePicture.png")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "transparent",
    marginBottom: 30,
  },

  headerImage: {
    height: 50,
    width: 50,
  },
});
