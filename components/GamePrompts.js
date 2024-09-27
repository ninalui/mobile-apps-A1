import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";

export default function GamePrompts() {
  const [guess, setGuess] = useState('');
  const [attemptsLeft, setAttemptsLeft] = useState(4);
  const [timeLeft, setTimeLeft] = useState(60);

  return (
    <View>
      <TextInput
        value={guess}
      />
      <Text>Attempts left: {attemptsLeft}</Text>
      <Text>Timer: {timeLeft}</Text>

      <Button title="Use a Hint" />
      <Button title="Submit Guess" />
    </View>
  );
} 