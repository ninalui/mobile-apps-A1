import React, { useState } from "react";
import { View, Text, Button, TextInput, Alert} from "react-native";

export default function GamePrompts({ number, guessMultiple }) {
  const [guess, setGuess] = useState('');

  const [hint, setHint] = useState('');
  const [isHintUsed, setIsHintUsed] = useState(false);  
  
  const [attemptsLeft, setAttemptsLeft] = useState(4);
  const [timeLeft, setTimeLeft] = useState(60);

  // give user a hint about the range of the number
  function getHint() {
    if (number < 50) {
      setHint('The number is less than 50');
    } else {
      setHint('The number is greater than 50');
    }
    setIsHintUsed(true);
  };

  function checkGuess() {
    // check if guess is multiple of number
    if (!guess % guessMultiple === 0) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a multiple of ' + guessMultiple + ' between 1 and 100',
        [
          { text: 'OK' }
        ]
      );
    }
  };

  return (
    <View>
      <TextInput
        value={guess}
        onChangeText={(text) => setGuess(text)}
      />
      {/* show hint only if user has used it */}
      {hint ? <Text>{hint}</Text> : null}
      
      <Text>Attempts left: {attemptsLeft}</Text>
      <Text>Timer: {timeLeft}</Text>

      {/* disabled after user presses once */}
      <Button title="Use a Hint" onPress={getHint} disabled={isHintUsed} />

      <Button title="Submit Guess" onPress={checkGuess}/>
    </View>
  );
} 