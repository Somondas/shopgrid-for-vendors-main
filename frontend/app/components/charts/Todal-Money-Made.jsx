import React from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import COLORS from "../../constants/COLORS";

const screenWidth = Dimensions.get("window").width;
const RevenueChart = () => {
  return (
    <View
      className="mx-4 p-4"
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
      <Text
        style={{
          fontFamily: "Poppins-Light",
        }}
        className="text-lg font-light my-1"
      >
        Total Money Made
      </Text>
      <Text
        style={{
          fontFamily: "Poppins-Light",
        }}
        className="text-xl font-bold my-1"
      >
        &#8377;32,455
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={true}>
        <LineChart
          data={{
            labels: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            datasets: [
              {
                data: [
                  500, 1000, 3455, 7878, 439, 7800, 434, 678, 900, 456, 789,
                  123,
                ],
              },
            ],
          }}
          width={630} // from react-native
          height={220}
          chartConfig={{
            backgroundColor: "rgb(28, 201, 16)",
            backgroundGradientFrom: "#ffffff",
            backgroundGradientTo: "#ffffff",
            color: (opacity = 1) => `rgba(28, 201, 16, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              fill: COLORS.primary,
            },
            fillShadowGradientFrom: COLORS.primary,
            fillShadowGradientTo: "rgb(10, 212, 10)", // Fill gradient for the area under the curve
            fillShadowGradientOpacity: 0.5,
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </ScrollView>
    </View>
  );
};

export default RevenueChart;

const styles = StyleSheet.create({});
