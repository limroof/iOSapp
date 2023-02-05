import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  Button,
} from "react-native";
import CardTag from "../../../Helpers/CardTag";
import CardSubtitle from "../../../Helpers/CardSubtitle";
import { Divider } from "@rneui/themed/dist/Divider";
import { data } from "./sliderSectionThree.js";
import BuyButtonOrange from "../../../Helpers/BuyButtonOrange";
import { BlurView } from "expo-blur";

export default function SectionTwo() {
  const DATA = data;
  const Item = ({ imageSrc, subtitle, tag, price }) => (
    <React.Fragment>
      <View style={styles.itemContainer}>
        <View style={styles.itemContainerTop}>
          <Image source={imageSrc} style={styles.itemImage} />
        </View>
        <View style={styles.itemContainerBottom}>
          <Divider
            width={1}
            color='rgba(151, 151, 151, 0.34)'
            style={{
              width: 500,
              position: "relative",
              left: -20,
            }}
          />
          <BlurView intensity={50} style={styles.blurContainer}>
            <View style={styles.wrapper}>
              <View style={styles.itemContainerBottomTop}>
                <CardSubtitle text={subtitle} fontSize={24} />
                <BuyButtonOrange title='Buy' />
              </View>
              <View style={styles.itemContainerBottomBottom}>
                <CardTag style={styles.tag} text={tag} />
              </View>
            </View>
          </BlurView>
        </View>
      </View>
    </React.Fragment>
  );
  return (
    <View>
      <SafeAreaView>
        <FlatList
          ItemSeparatorComponent={
            Platform.OS !== "android" &&
            (({ highlighted }) => (
              <View
                style={[styles.separator, highlighted && { marginLeft: 0 }]}
              />
            ))
          }
          horizontal={true}
          data={DATA}
          renderItem={({ item }) => (
            <Item
              title={item.title}
              imageSrc={item.imageSrc}
              subtitle={item.subtitle}
              tag={item.tag}
              contentContainerStyle={{ borderRadius: 20, overflow: "hidden" }}
              price={item.price}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#171717",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(151, 151, 151, 0.34)",
    width: 350,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingTop: 0,
    overflow: "hidden",
    marginBottom: 50,
  },

  itemImage: {
    width: "100%",
    height: "138%",
    position: "absolute",
    top: 0,
    left: 0,
  },

  itemContainerTop: {
    width: "100%",
    paddingLeft: 20,
    display: "flex",
    alignItems: "stretch",
    position: "relative",
    height: 260,
  },
  itemContainerBottom: {
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  wrapper: {
    paddingLeft: 20,
    paddingRight: 20,
    display: "flex",
    flexDirection: "column",
    marginTop: 25,
    paddingBottom: 18,
  },
  itemContainerBottomTop: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemContainerBottomBottom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },

  separator: {
    width: 23,
  },
});
