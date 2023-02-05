import { SafeAreaView, ScrollView, StyleSheet, View, Text } from "react-native";
import Header from "../../Components/Header";
import BannerSeeAll from "./Components/BannerSeeAll.js";
import SectionOne from "./Components/SectionOne.js";
import SectionTwo from "./Components/SectionTwo.js";
import SectionThree from "./Components/SectionThree.js";

export function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView alwaysBounceVertical={true} bounces={true}>
        <View style={styles.container}>
          <Header />
          <BannerSeeAll
            title={"Apollo Care & Protect"}
            subtitle={"Protect your new scooter"}
          />
          <SectionOne />
          <BannerSeeAll
            title={"Accessories"}
            subtitle={"Buy new great stuff for your scooter"}
          />
          <SectionTwo />
          <BannerSeeAll
            title={"Upgrades"}
            subtitle={"Hardware & Software Updates"}
          />
          <SectionThree />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#000000",
    paddingTop: 24,
  },
});
