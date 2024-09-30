import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { globalStyles } from "../styles";
import GameButton from "./GameButton";

export default function GamePrompts({ attemptsLeft, timeLeft, submitHandler, hintHandler, isHintUsed, hint }) {
  const [guess, setGuess] = useState('');

  return (
    <View style={globalStyles.childContainer}>
      {/* field for user to input their guess */}
      <TextInput
        style={[globalStyles.inputField, styles.guessInput]}
        value={guess}
        onChangeText={(guess) => setGuess(guess)}
      />

      <View style={styles.textContainer}>
        {/* show hint only if user has used it */}
        {hint ? <Text style={styles.hintText}>{hint}.</Text> : <Text />}

        {/* show user attempts and time left */}
        <Text style={styles.gameText}>
          Attempts left: {attemptsLeft}
        </Text>
        <Text style={styles.gameText}>
          Timer: {timeLeft}s
        </Text>
      </View>

      {/* button to show hint - disabled after user presses once */}
      <GameButton
        title='Use a Hint'
        onPress={hintHandler}
        disabled={isHintUsed}
      />

      {/* button for user to submit their guess */}
      <GameButton
        title='Submit Guess'
        onPress={() => submitHandler(guess)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  hintText: {
    fontSize: 17,
  },
  gameText: {
    color: 'dimgrey',
    fontSize: 16,
  },
  textContainer: {
    marginTop: 15,
    marginBottom: 15,
    alignItems: 'center',
  },
  guessInput: {
    width: 30,
  },
});