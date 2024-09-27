import React from "react";
import { View, Text, Button } from "react-native";

export default function Game() {
  
  return (
    <View>
      <Button title="Restart" />
      {/* guessing anumber that is a multiple of the last digit of user phone number */}
      <Text>Guess a number between 1 & 100 that is multiply of 9</Text>
      <Button title="Start" />
    </View>
  );
}
