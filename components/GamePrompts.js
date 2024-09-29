import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import { globalStyles } from "../styles";

export default function GamePrompts({ number, attemptsLeft, timeLeft, submitHandler }) {
  const [guess, setGuess] = useState('');
  const [hint, setHint] = useState('');
  const [isHintUsed, setIsHintUsed] = useState(false);

  // give user a hint about the range of the number
  function getHint() {

    console.log('number:', number);
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
    <View style={globalStyles.childContainer}>
      <TextInput
        style={[globalStyles.inputField, styles.guessInput]}
        value={guess}
        onChangeText={(guess) => setGuess(guess)}
      />

      <View style={styles.textContainer}>
        {/* show hint only if user has used it */}
        {hint ? <Text>{hint}.</Text> : <Text />}
        <Text style={styles.textGrey}>
          Attempts left: {attemptsLeft}
        </Text>
        <Text style={styles.textGrey}>
          Timer: {timeLeft}s
        </Text>
      </View>

      <View style={globalStyles.buttonRow}>
        {/* disabled after user presses once */}
        <Button
          color='mediumblue'
          title="Use a Hint"
          onPress={getHint}
          disabled={isHintUsed}
        />
      </View>
      <View style={globalStyles.buttonRow}>
        <Button
          color='mediumblue'
          title="Submit Guess"
          onPress={handleSubmit}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  textGrey: {
    color: 'dimgrey',
  },
  textContainer: {
    marginTop: 15,
    marginBottom: 15,
    alignItems: 'center',
  },
  guessInput: {
    fontSize: 20,
    width: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'darkslateblue',
    marginTop: 10,
  },
});