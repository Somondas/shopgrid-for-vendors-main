import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Feather, FontAwesome } from "@expo/vector-icons";
import COLORS from "../constants/COLORS";

const RootLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="manage-orders"
        options={{
          title: "Orders",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="shopping-basket" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="manage-products"
        options={{
          title: "Products",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="package" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="id-badge" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default RootLayout;
