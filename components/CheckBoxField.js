import React from "react";
import { View, StyleSheet } from "react-native";
import Checkbox from 'expo-checkbox';
import MainText from "./MainText";


export default function CheckBoxField({ label, value, onValueChange }) {
  return (
    <View style={styles.checkBoxContainer}>
      <Checkbox
        value={value}
        onValueChange={onValueChange}
      />
      <View style={{ marginLeft: 10 }}>
        <MainText text={label} />
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