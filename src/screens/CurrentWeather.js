import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "../components/RowText";
import { weatherType } from "../utilities/weatherType";

function CurrentWeather({ weatherData }) {
  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather,
  } = weatherData;

  const weatherCondition = weather[0].main;
  return (
    <SafeAreaView
      style={
        (styles.wrapper,
        {
          flex: 1,
          backgroundColor: weatherType[weatherCondition].backgroundColor,
        })
      }
    >
      <View style={styles.container}>
        <Feather
          name={weatherType[weatherCondition].icon}
          size={50}
          color="black"
          style={styles.temperatureText}
        />
        <Text style={styles.temperatureText}>{temp}°C </Text>

        <Text style={styles.feelsLikeText}>Feels like {feels_like}°C</Text>

        <RowText
          messageOne={`High: ${temp_max}°C`}
          messageTwo={`Low: ${temp_min}°C`}
          rowStyle={styles.rowStyle}
          bodyStyle={styles.highLowText}
        />
        <RowText
          messageOne={weather[0].description}
          messageTwo={weatherType[weatherCondition].message}
          rowStyle={styles.bodyWrapper}
          bodyStyle={styles.message}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },

  container: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  temperatureText: {
    fontSize: 48,
    fontWeight: "700",
    alignSelf: "center",
  },
  feelsLikeText: {
    fontSize: 32,
    alignSelf: "center",
  },
  highLowText: {
    fontSize: 24,
  },
  rowStyle: {
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 30,
    flexDirection: "row",
  },
  bodyWrapper: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingHorizontal: 20,
  },
  message: {
    fontSize: 30,
    fontWeight: "500",
  },
});

export default CurrentWeather;
