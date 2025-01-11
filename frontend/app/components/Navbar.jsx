import { View, Text, Image } from "react-native";
import React from "react";

const Navbar = () => {
  return (
    <View className="w-full bg-[#01b45e] h-auto flex justify-center items-center">
      <Image
        style={{
          width: 100,
          height: 50,
          resizeMode: "contain",
        }}
        className=""
        source={require("../../assets/images/vendors-logo.png")}
      />
    </View>
  );
};

export default Navbar;
