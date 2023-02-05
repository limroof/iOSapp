import React, { useEffect, useState } from "react";
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
import CardPrice from "../../../Helpers/CardPrice";
import { Divider } from "@rneui/themed/dist/Divider";
import { data } from "./sliderSectionTwo";
import BuyButtonOrange from "../../../Helpers/BuyButtonOrange";

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
              marginTop: 25,
              marginBottom: 25,
              position: "relative",
              left: -20,
            }}
          />
          <View style={styles.wrapper}>
            <View style={styles.itemContainerBottomTop}>
              <CardSubtitle
                style={styles.subtitle}
                text={subtitle}
                fontSize={16}
              />
              <BuyButtonOrange title='Buy' />
            </View>
            <View style={styles.itemContainerBottomBottom}>
              <CardTag style={styles.tag} text={tag} />
              <CardPrice text={price} />
            </View>
          </View>
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
    width: 300,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingTop: 30,
    paddingBottom: 18,
    overflow: "hidden",
    marginBottom: 50,
  },

  itemImage: {
    width: "90%",
    height: "110%",
    position: "absolute",
    top: 0,
    right: 0,
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
    paddingLeft: 20,
    paddingRight: 20,
    width: "100%",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
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
    alignItems: "center",
  },

  separator: {
    width: 23,
  },
});
