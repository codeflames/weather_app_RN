// useFetchWeather hook

import { useState, useEffect } from "react";
import * as Location from "expo-location";
import { TEST_KEY } from "@env";

export const useFetchWeather = () => {
  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);

  const fetchWeatherData = async () => {
    try {
      const res = await fetch(
        // eslint-disable-next-line comma-dangle
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${TEST_KEY}&units=metric`
      );
      const json = await res.json();
      setWeather(json);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("Permission to access location was denied");
        return;
      }
      let gottenLocation = await Location.getCurrentPositionAsync({});
      setLat(gottenLocation.coords.latitude);
      setLon(gottenLocation.coords.longitude);
      await fetchWeatherData();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lat, lon]);
  return [weather, loading, error];
};
