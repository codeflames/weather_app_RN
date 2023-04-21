/* eslint-disable react/no-unstable-nested-components */
import React from "react";
import CurrentWeather from "../screens/CurrentWeather";
import UpcomingWeather from "../screens/UpcomingWeather";
import City from "../screens/City";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Tabs = ({ weatherResponse }) => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: "black",
      tabBarInactiveTintColor: "grey",
      tabBarStyle: { backgroundColor: "yellow" },
      // headerShown: false,
      headerStyle: { backgroundColor: "yellow" },
      headerTitleStyle: { color: "black", fontSize: 18, fontWeight: "700" },
    }}
  >
    <Tab.Screen
      name="Current"
      options={{
        tabBarIcon: ({ focused }) => (
          <Feather name="sun" size={24} color={focused ? "black" : "grey"} />
        ),
      }}
    >
      {() => <CurrentWeather weatherData={weatherResponse.list[0]} />}
    </Tab.Screen>

    <Tab.Screen
      name="Upcoming"
      options={{
        tabBarIcon: ({ focused }) => (
          <Feather name="clock" size={24} color={focused ? "black" : "grey"} />
        ),
      }}
    >
      {() => <UpcomingWeather weatherList={weatherResponse.list} />}
    </Tab.Screen>
    <Tab.Screen
      name="City"
      options={{
        tabBarIcon: ({ focused }) => (
          <Feather
            name="map-pin"
            size={24}
            color={focused ? "black" : "grey"}
          />
        ),
      }}
    >
      {() => <City cityData={weatherResponse.city} />}
    </Tab.Screen>
  </Tab.Navigator>
);

export default Tabs;
