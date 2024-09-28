import React from "react";
import { View, Text, Button } from "react-native";

export default function GameResult({ guessResult }) {
  return (
    <View>
      {guessResult === 'correct' ? (
        <>
          <Text>You guessed correct!</Text>
          <Button title="New Game" />
        </>
      ) : (
        <>
          <Text>You did not guess correct!</Text>
          <Text>You should guess {guessResult}</Text>
          <Button title="Try Again" />
          <Button title="End the game" />
        </>
      )}
    </View>
  );
} 