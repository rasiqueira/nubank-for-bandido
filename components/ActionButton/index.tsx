import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ActionButton = ({ IconComponent, title }: any) => {
  return (
    <View style={{ gap: 10, alignItems: "center" }}>
      <View style={styles.buttonContainer}>
        <IconComponent width={25} />
      </View>
      <Text style={styles.description}>{title} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "pink",
    width: 60,
    height: 60,
    borderRadius: 50,
    padding: 36,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
  description: {
    fontSize: 14,
    fontWeight: "medium",
  },
});

export default ActionButton;
