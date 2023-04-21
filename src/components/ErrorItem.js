import React from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const ErrorItem = ({ errorMsg }) => {
  console.log(errorMsg);
  return (
    <View style={styles.wrapper}>
      <Feather name={"frown"} size={50} color={"black"} />
      <Text style={styles.errorText}>{errorMsg ?? "An error occured"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginTop: StatusBar.currentHeight || 0,
  },
  errorText: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 20,
    color: "black",
  },
});

export default ErrorItem;
