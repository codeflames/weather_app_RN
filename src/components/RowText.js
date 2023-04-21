import React from "react";
import { View, Text } from "react-native";

const RowText = (props) => {
  const { rowStyle, bodyStyle, messageOne, messageTwo } = props;
  return (
    <View style={[rowStyle]}>
      <Text style={bodyStyle}>{messageOne}</Text>
      <Text style={bodyStyle}>{messageTwo}</Text>
    </View>
  );
};

export default RowText;
