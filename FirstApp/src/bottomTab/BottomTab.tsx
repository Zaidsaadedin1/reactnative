import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ContactUsScreen from "../screens/ContactUsScreen";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import ProfileScreen from "../screens/ProfileScreen";
const MyTabs = createBottomTabNavigator({
  screens: {
    HomeScreen: HomeScreen,
    ContactUsScreen: ContactUsScreen,
  },
});

const BottomTab = () => {
  return (
    <MyTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: "#61dafb",
        tabBarInactiveTintColor: "black",

        tabBarIconStyle: {
          marginBottom: 5,
        },
      }}
    >
      <MyTabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarIcon: () => <Feather name="home" size={24} color="black" />,
        }}
      />
      <MyTabs.Screen
        name="ContactUsScreen"
        component={ContactUsScreen}
        options={{
          title: "Contact Us",
          tabBarIcon: () => <Feather name="phone" size={24} color="black" />,
        }}
      />
      <MyTabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: "Profile",
          tabBarIcon: () => <Feather name="user" size={24} color="black" />,
        }}
      />
    </MyTabs.Navigator>
  );
};
export default BottomTab;
