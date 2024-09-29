import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import { globalStyles } from "../styles";

export default function GamePrompts({ number, attemptsLeft, timeLeft, submitHandler, hintHandler, isHintUsed, hint}) {
  const [guess, setGuess] = useState('');

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
          onPress={hintHandler}
          disabled={isHintUsed}
        />
      </View>
      <View style={globalStyles.buttonRow}>
        <Button
          color='mediumblue'
          title="Submit Guess"
          onPress={() => submitHandler(guess)}
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