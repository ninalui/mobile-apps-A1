import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";

export default function GamePrompts({ number }) {
  const [guess, setGuess] = useState('');
  const [attemptsLeft, setAttemptsLeft] = useState(4);
  const [timeLeft, setTimeLeft] = useState(60);
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

  return (
    <View>
      <TextInput
        value={guess}
      />
      {/* show hint only if user has used it */}
      {hint ? <Text>{hint}</Text> : null}
      
      <Text>Attempts left: {attemptsLeft}</Text>
      <Text>Timer: {timeLeft}</Text>

      {/* disabled after user presses once */}
      <Button title="Use a Hint" onPress={getHint} disabled={isHintUsed} />

      <Button title="Submit Guess" />
    </View>
  );
} 