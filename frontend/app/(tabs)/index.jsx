import React, { useEffect, useState } from "react";
import { ScrollView, Text, View, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from "../components/Navbar";
import RevenueChart from "../components/charts/Todal-Money-Made";
import CustomerSatisfactionChart from "../components/charts/category-pie-chart";
import { useRootNavigationState, useRouter } from "expo-router";
import { auth } from "../../firebaseConfig";

const Index = () => {
  const [loading, setLoading] = useState(true); // Loading state
  const router = useRouter();
  // console.log(auth);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      // console.log("Auth State Changed:", user); // Ensure this logs the correct user object
      if (user) {
        router.replace("/(tabs)");
      } else {
        router.replace("/(auth)/login");
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);
  if (loading) {
    // Show a loading spinner while determining auth state
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <ActivityIndicator size="large" color="#0000ff" />
      </SafeAreaView>
    );
  }

  // Render main content if not loading
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <Navbar />
          <Text className="font-Poppins-Light text-2xl py-3 px-2">
            Sales Overview
          </Text>
          {/* Revenue Chart */}
          <RevenueChart />
          {/* Category Chart */}
          <CustomerSatisfactionChart />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
