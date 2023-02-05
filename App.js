import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { HomeScreen } from "./Views/Home/HomeScreen";
import Settings from "./Views/Settings/Settings";
import BluetoothView from "./Views/Settings/Bluetooth/BluetoothView";
import { StatusBar } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/Octicons";
import BackButton from "./Components/BackButton";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  StatusBar.setBarStyle("light-content");

  const SettingsView = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name='SettingsScreen'
          component={Settings}
          options={{
            title: "Settings",
            headerLeft: () => {
              return <BackButton />;
            },
            headerStyle: {
              backgroundColor: "black",
            },
            headerTitleStyle: {
              color: "white",
              fontSize: "18px",
            },
          }}
        />
        <Stack.Screen
          name='BluetoothSettings'
          component={BluetoothView}
          options={{
            title: "Connect a scooter",
            headerStyle: {
              backgroundColor: "black",
            },
            headerTitleStyle: {
              color: "white",
              fontSize: "18px",
            },
          }}
        />
      </Stack.Navigator>
    );
  };

  const MainView = () => {
    return (
      <Tab.Navigator
        initialRouteName='Home'
        backBehavior='order'
        /* barStyle={{}} is tabBarStyle */
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            height: 90,
            paddingHorizontal: 5,
            paddingTop: 0,
            backgroundColor: "black",
            borderTopWidth: 0,
          },
          tabBarIcon: ({ focused, color, size }) => {
            let ioninic = true;
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "ios-home" : "ios-home-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "ios-settings" : "ios-settings-outline";
            } else if (route.name === "Map") {
              iconName = focused ? "md-map" : "ios-map-outline";
            } else if (route.name === "Ride List") {
              ioninic = false;
              iconName = "row";
            } else if (route.name === "Store") {
              iconName = "md-cart";
            }
            return ioninic ? (
              <Ionicons name={iconName} size={20} color={color} />
            ) : (
              <FontAwesome5 name={"rows"} size={size} color={color} />
            );
          },
        })}
      >
        <Tab.Screen
          name='Home'
          component={HomeScreen}
          options={{
            tabBarBadge: "2",
            title: "Home",
          }}
        />
        <Tab.Screen
          name='Ride List'
          component={HomeScreen}
          options={{
            title: "Ride List",
          }}
        />
        <Tab.Screen
          name='Map'
          component={HomeScreen}
          options={{
            title: "Map",
          }}
        />
        <Tab.Screen
          name='Store'
          component={HomeScreen}
          options={{
            title: "Store",
          }}
        />
        <Tab.Screen name='Settings' component={SettingsView} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Main'
          component={MainView}
          options={{ headerShown: false }}
        />
        <Stack.Screen name='Settings' component={SettingsView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
