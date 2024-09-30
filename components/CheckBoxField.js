import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Checkbox from 'expo-checkbox';
import { globalStyles } from "../styles";


export default function CheckBoxField({ label, value, onValueChange }) {
  return (
    <View style={styles.checkBoxContainer}>
      <Checkbox
        value={value}
        onValueChange={onValueChange}
      />
      <View style={{ marginLeft: 10 }}>
        <Text style={globalStyles.textColor}>{label}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  checkBoxContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
});