import React from "react";
import { View, StyleSheet } from "react-native";

export default function Card({ children }) {
  return (
    <View style={styles.card}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'darkgrey',
    backgroundColor: 'darkgrey',
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.26,
  },
});

