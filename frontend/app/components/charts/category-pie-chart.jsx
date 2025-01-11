import React from "react";
import { View, Text, Dimensions, StyleSheet, ScrollView } from "react-native";
import { BarChart } from "react-native-chart-kit";

const CustomerSatisfactionBarChart = () => {
  const chartData = {
    labels: [
      "Very\nSatisfied",
      "Satisfied",
      "Neutral",
      "Dissatisfied",
      "Very\nDissatisfied",
    ],
    datasets: [
      {
        data: [40, 30, 15, 10, 5],
      },
    ],
  };

  return (
    <View
      className="mx-4 my-6 p-4"
      style={{
        shadowColor: "rgba(0, 0, 0, 1)", // Shadow color for iOS
        shadowOpacity: 0.23, // Shadow opacity for iOS
        shadowOffset: { width: 0, height: 10 }, // Shadow offset for iOS
        shadowRadius: 10, // Shadow blur for iOS
        elevation: 12, // Elevation for Android
        borderRadius: 10, // Border radius
        height: "auto", // Height of the component
        backgroundColor: "white", // Ensure background color is set for shadow visibility
      }}
    >
      <Text className="font-Poppins-Light text-lg font-light my-1">
        Customer Satisfaction
      </Text>
      <Text
        style={{
          fontFamily: "Poppins-Light",
        }}
        className="text-xl font-bold my-1"
      >
        75k Reviews
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={true}>
        <BarChart
          data={chartData}
          //   width={Dimensions.get("window").width - 60} // Responsive width
          width={440} // Responsive width
          height={"300"}
          fromZero
          showBarTops={false}
          chartConfig={{
            backgroundGradientFrom: "#ffffff",
            backgroundGradientTo: "#ffffff",
            color: (opacity = 1) => `rgba(76, 175, 80, ${opacity})`, // Bar color
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Label color
            barPercentage: 1, // Thinner bars
            decimalPlaces: 0,
            // Removes decimal points
            // propsForLabels: {
            //   rotation: "90deg", // Ensure labels are horizontal
            // },
          }}
          style={styles.chart}
          verticalLabelRotation={15} // Rotate labels for better readability
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  chart: {
    marginVertical: 10,
    borderRadius: 10,
  },
});

export default CustomerSatisfactionBarChart;
