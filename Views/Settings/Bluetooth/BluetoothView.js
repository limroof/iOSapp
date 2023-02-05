import { SafeAreaView, StyleSheet, View, Text } from "react-native";

export default function BluetoothView() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <View style={style.container}>
        <Text style={style.txt}>Scan of devices happen here</Text>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  txt: {
    color: "white",
  },
});
