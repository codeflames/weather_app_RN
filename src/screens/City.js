import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  View,
  StatusBar,
  Text,
} from "react-native";
import moment from "moment";
import IconText from "../components/IconText";

const City = ({ cityData }) => {
  const { name, country, population, sunrise, sunset } = cityData;
  const {
    wrapper,
    container,
    image,
    cityName,
    countryName,
    cityText,
    populationText,
    populationWrapper,
    riseSetWrapper,
    riseSetText,
  } = styles;

  return (
    <SafeAreaView style={wrapper}>
      <ImageBackground
        source={require("../../assets/city_background.jpeg")}
        style={image}
      >
        <View style={container}>
          <Text style={[cityName, cityText]}>{name}</Text>
          <Text style={[countryName, cityText]}>{country}</Text>
          <View style={populationWrapper}>
            <IconText
              iconName="user"
              text={`Population: ${population ?? 0}`}
              textStyle={populationText}
              color="white"
            />
          </View>
          {/* Sunrise and sunset view */}
          <View style={riseSetWrapper}>
            <IconText
              iconName="sunrise"
              text={moment(sunrise).format("h:mm:ss A")}
              textStyle={riseSetText}
              color="white"
            />
            <IconText
              iconName="sunset"
              text={moment(sunset).format("h:mm:ss A")}
              textStyle={riseSetText}
              color="white"
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "grey",
    marginTop: StatusBar.currentHeight || 0,
  },
  container: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  image: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  cityText: {
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
  },
  populationWrapper: {
    // flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  populationText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  riseSetWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 30,
  },
  riseSetText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default City;
