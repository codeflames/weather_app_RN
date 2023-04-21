import React from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
} from "react-native";
import UpcomingWeatherItem from "../components/UpcomingWeatherListItem";

const UpcomingWeather = ({ weatherList }) => {
  const renderItem = ({ item }) => (
    <UpcomingWeatherItem
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
      condition={item.weather[0].main}
      // main={item.weather[0].main}
      // description={item.weather[0].description}
    />
  );

  const { container, image } = styles;

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("../../assets/clouds.jpeg")}
        style={image}
      >
        {/* <Text style={titleText}>UpcomingWeather</Text> */}
        <FlatList
          data={weatherList}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "yellow",
  },
  container: {
    backgroundColor: "green",
    flex: 1,

    // alignItems: "center",
    justifyContent: "center",
    // paddingHorizontal: 20,
    // paddingVertical: 20,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "500",
    alignSelf: "center",
  },
  image: {
    flex: 1,
    // resizeMode: "cover",
    // justifyContent: "center",
  },
});

export default UpcomingWeather;
