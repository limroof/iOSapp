import { StyleSheet, View, Button } from "react-native";
import CustomTitle from "../../../Helpers/CustomTitle";
import Subtitle from "../../../Helpers/CustomSubtitle";
import { useNavigation } from "@react-navigation/native";

export default function BannerSeeAll({ title, subtitle }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <CustomTitle text={title} />
        <Button
          title={"See all"}
          onPress={() => {
            navigation.navigate("Settings");
          }}
        />
      </View>
      <Subtitle text={subtitle} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
