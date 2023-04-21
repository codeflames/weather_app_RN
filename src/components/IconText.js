import { React } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const IconText = ({ iconName, text, color, textStyle }) => {
  return (
    <View style={styles.wrapper}>
      <Feather name={iconName} size={32} color={color} />
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default IconText;
