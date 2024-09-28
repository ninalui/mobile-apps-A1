import React, { useState } from "react";
import { View, Text, Button, TextInput, Alert } from "react-native";

export default function GameResult({ guessResult }) {
  return (
    <View>
        <Text>You did not guess correct!</Text>
        <Text>You should guess {guessResult}.</Text>

        <Button title="Try Again" />
        <Button title="End the game" />
    </View>
  );
} 