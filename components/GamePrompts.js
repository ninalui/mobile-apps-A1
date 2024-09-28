import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";

export default function GamePrompts({ number, attemptsLeft, timeLeft, submitHandler }) {
  const [guess, setGuess] = useState('');
  const [hint, setHint] = useState('');
  const [isHintUsed, setIsHintUsed] = useState(false);

  // give user a hint about the range of the number
  function getHint() {
    if (number < 50) {
      setHint('The number is less than 50');
    } else {
      setHint('The number is greater than 50');
    }
    setIsHintUsed(true);
  };

  function handleSubmit() {
    submitHandler(guess);
  };

  return (
    <View>
      <TextInput
        value={guess}
        onChangeText={(guess) => setGuess(guess)}
      />
      {/* show hint only if user has used it */}
      {hint ? <Text>{hint}</Text> : null}

      {/* FOR TESTING -- REMOVE LATER */}
      <Text> {number} </Text>

      <Text>Attempts left: {attemptsLeft}</Text>
      <Text>Timer: {timeLeft}</Text>

      {/* disabled after user presses once */}
      <Button title="Use a Hint" onPress={getHint} disabled={isHintUsed} />

      <Button title="Submit Guess" onPress={handleSubmit} />

    </View>
  );
} 