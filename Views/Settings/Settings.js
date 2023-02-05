import { SafeAreaView, StyleSheet, View, Text, Button } from "react-native";
import { ListItem } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export default function Settings() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <View style={style.container}>
        <ListItem
          linearGradientProps={{
            colors: ["#000000e6", "black"],
            start: { x: 0, y: 0 },
            end: { x: 1, y: 1 },
          }}
          ViewComponent={LinearGradient} // Only if no expo
        >
          <ListItem.Content>
            <ListItem.Title style={{ color: "white", fontWeight: "bold" }}>
              <Button
                title='Connect your device'
                onPress={() => navigation.navigate("BluetoothSettings")}
              />
            </ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron color='white' />
        </ListItem>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
});
