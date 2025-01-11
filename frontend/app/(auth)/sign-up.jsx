import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Link, useRouter } from "expo-router";
import { auth } from "../../firebaseConfig";
import COLORS from "../constants/COLORS";
const SignUp = () => {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    if (!fullName || !email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential.user) {
        await updateProfile(userCredential.user, {
          displayName: fullName,
        });
        Alert.alert("Success", "Account created successfully");
        router.replace("/(auth)/login");
      }
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f8f1ed00" }}>
      <View style={styles.container}>
        <View className="ml-5 my-20">
          <Text className="text-3xl  font-Poppins-Bold">Create Account,</Text>
          <Text className="text-xl color-gray-400 font-Poppins-Bold">
            Sign up to get started!
          </Text>
        </View>
        <View className="px-5 my-5">
          <View className="w-full space-y-4">
            {/* Full Name Field */}
            <View>
              <TextInput
                value={fullName}
                onChangeText={setFullName}
                placeholder="Full Name"
                className="text-lg my-2 border placeholder:color-slate-400 border-gray-300 rounded-lg px-4 py-2 bg-white "
              />
            </View>

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
                className="text-lg my-2  placeholder:color-slate-400 border border-gray-300 rounded-lg px-4 py-2 bg-white r"
              />
            </View>

            {/* Login Button */}
            <TouchableOpacity
              onPress={handleSignUp}
              style={{
                backgroundColor: "#01b45e",
              }}
              className=" py-3 rounded-lg mt-4"
            >
              <Text className="text-center text-white font-bold text-lg">
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Text className="text-center mx-auto mt-28 text-slate-900 font-Poppins-Light">
        I'm already a member.{" "}
        <Link style={{ color: COLORS.primary }} href={"/(auth)/login"}>
          Sign In
        </Link>
      </Text>
    </SafeAreaView>
  );
};

export default SignUp;

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
