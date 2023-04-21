import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import { ActivityIndicator, View, StyleSheet } from "react-native";

import { useFetchWeather } from "./src/hooks/useFetchWeather";
import ErrorItem from "./src/components/ErrorItem";

export default function App() {
  const [weather, loading, error] = useFetchWeather();
  if (weather && weather.list) {
    return (
      <NavigationContainer>
        <Tabs weatherResponse={weather} />
      </NavigationContainer>
    );
  }
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size={"large"} color={"blue"} />
      ) : (
        <ErrorItem errorMsg={error} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
