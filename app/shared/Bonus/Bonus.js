import React from "react";
import { Text, StyleSheet } from "react-native";
import { Box } from "native-base";
import { secondaryButtonColor } from './../../settings/constants/Colors';



const Bonus = () => {
  return (
    <Box
      style={defaultStyles.box}
    >
      <Text style={defaultStyles.text}>Бонус</Text>
    </Box>
  );
};

const defaultStyles = StyleSheet.create({
  box: {
    backgroundColor: secondaryButtonColor,
    width: 46,
    height: 18,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    color: secondaryButtonColor,
  },
  text: {
    fontFamily: "Roboto",
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 18,
    textAlign: "center",
    color: "white",
  },
});

export default Bonus;