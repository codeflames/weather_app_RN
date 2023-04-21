import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { weatherType } from "../utilities/weatherType";
import moment from "moment";

const UpcomingWeatherItem = (props) => {
  const { dt_txt, min, max, condition } = props;

  const { item, minMax } = styles;
  return (
    <View style={item}>
      <Feather name={weatherType[condition].icon} size={50} color="black" />
      <View>
        <Text>{moment(dt_txt).format("MMM Do YYYY, h:mm:ss a")}</Text>
        <Text style={minMax}>{`${Math.round(min)}°C`}</Text>
        <Text style={minMax}>{`${Math.round(max)}°C`}</Text>
        {/* <Text style={mainStyle}>{main}</Text> */}
        {/* <Text>{description}</Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "90%",
    padding: 20,
    marginVertical: 8,
    borderWidth: 2,
    borderRadius: 8,
    marginHorizontal: 16,
    backgroundColor: "white",
  },
  minMax: {
    fontSize: 18,
    fontWeight: "500",
  },
  mainStyle: {
    fontSize: 20,
    fontWeight: "500",
  },
});

export default UpcomingWeatherItem;
