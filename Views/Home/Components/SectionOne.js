import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
} from "react-native";
import CardTitle from "../../../Helpers/CardTitle";
import CardSubtitle from "../../../Helpers/CardSubtitle";
import CardPrice from "../../../Helpers/CardPrice";
import { Divider } from "@rneui/themed/dist/Divider";
import { data } from "./SliderSectionOne";
import { LinearGradient } from "expo-linear-gradient";

export default function SectionOne() {
  const DATA = data;

  const Item = ({ title, imageSrc, subtitle, price, bg, bgPosition }) => (
    <View style={styles.itemContainer}>
      <LinearGradient
        // Button Linear Gradient
        colors={["rgba(255, 255, 255, 0.2)", "rgba(255, 255, 255, 0)"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.background}
      >
        <View style={styles.itemContainerTop}>
          <Image source={imageSrc} style={styles.itemImage} />
          <CardTitle text={title} />
          {bgPosition === "bottom right" && (
            <Image style={styles.BackgroundBottomRight} source={bg} />
          )}
        </View>
        <View style={styles.itemContainerBottom}>
          <Divider
            width={1}
            color='rgba(151, 151, 151, 0.34)'
            style={{
              width: 500,
              marginTop: 25,
              marginBottom: 25,
              left: -20,
            }}
          />
          <View style={styles.wrapper}>
            <CardSubtitle
              style={styles.subtitle}
              text={subtitle}
              fontSize={16}
            />
            <CardPrice style={styles.price} text={price} />
          </View>
        </View>
        {bgPosition === "top right" && (
          <Image style={styles.BackgroundTopRight} source={bg} />
        )}
      </LinearGradient>
    </View>
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
              price={item.price}
              bg={item.bg}
              bgPosition={item.bgPosition}
              contentContainerStyle={{ borderRadius: 20, overflow: "hidden" }}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  background: {
    paddingTop: 30,
    paddingBottom: 18,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(151, 151, 151, 0.34)",
    width: 300,
  },
  itemContainer: {
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",

    overflow: "hidden",
    marginBottom: 50,
  },
  wrapper: {
    display: "flex",
    alignItems: "flex-start",
  },
  itemImage: {
    width: 120,
    height: 60,
    marginBottom: 65,
    paddingLeft: 20,
    zIndex: 2,
  },

  itemContainerTop: {
    width: "100%",
    paddingLeft: 20,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "stretch",
    position: "relative",
    height: 260,
  },
  itemContainerBottom: {
    paddingLeft: 20,
    position: "relative",
  },

  separator: {
    width: 23,
  },
  BackgroundTopRight: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 125,
    height: 125,
  },
  BackgroundBottomRight: {
    position: "absolute",
    bottom: -25,
    right: 0,
    width: 150,
    height: 250,
  },
});
