import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";

export default function GameResult({ guessResult, attemptsUsed, number, tryAgainHandler }) {
  const imageUrl = `https://picsum.photos/id/${number}/100/100`;
  return (
    <View>
      {guessResult === 'correct' ? (
        <>
          <Text>You guessed correct!</Text>
          <Text>Attempts used: {attemptsUsed}</Text>
          <Image style={styles.image} source={{ uri: imageUrl }} />
          <Button title="New Game" />
        </>
      ) : (
        <>
          <Text>You did not guess correct!</Text>
          <Text>You should guess {guessResult}.</Text>
          <Button title="Try Again" onPress={tryAgainHandler} />
          <Button title="End the game" />
        </>
      )}
    </View>
  );
} 

const styles = StyleSheet.create({
  image: {
      width: 100,
      height: 100,
      marginBottom: 10,
  },
});