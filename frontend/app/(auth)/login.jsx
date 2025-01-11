import { auth } from "@/firebaseConfig";
import { Link, useRouter } from "expo-router";

import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../constants/COLORS";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  // -> Login function
  const handleLogin = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);

      if (user) {
        Alert.alert("Success", "Login successful");
        router.replace("/(tabs)");
      }
    } catch (error) {}
    // Implement your login logic here
    Alert.alert("Error", "Invalid email or password");
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f8f1ed00" }}>
      <View style={styles.container}>
        <View className="ml-5 my-20">
          <Text className="text-3xl  font-Poppins-Bold">Welcome,</Text>
          <Text className="text-xl color-gray-400 font-Poppins-Bold">
            Sign in to continue!
          </Text>
        </View>
        {/* Form */}
        <View className="px-5 my-8">
          <View className="w-full space-y-4">
            {/* Email Field */}
            <View>
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Enter your email"
                keyboardType="email-address"
                className="text-lg my-2 border placeholder:color-slate-400 border-gray-300 rounded-lg px-4 py-2 bg-white "
              />
            </View>

            {/* Password Field */}
            <View>
              <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Enter your password"
                secureTextEntry
                className="text-lg  my-2 placeholder:color-slate-400 border border-gray-300 rounded-lg px-4 py-2 bg-white r"
              />
            </View>

            {/* Login Button */}
            <TouchableOpacity
              style={{
                backgroundImage: `linear-gradient(90deg, #01b45e, #00d98b)`,
                backgroundColor: "#01b45e",
              }}
              onPress={handleLogin}
              className=" py-3 rounded-lg mt-4"
            >
              <Text className="text-center text-white font-bold text-lg">
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text className="text-center mx-auto mt-28 text-slate-900 font-Poppins-Light">
          I'm a new user.{" "}
          <Link style={{ color: COLORS.primary }} href={"/(auth)/sign-up"}>
            Sign Up
          </Link>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f1ed00",
  },
  img: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
});
