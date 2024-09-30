import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import { globalStyles } from "../styles";
import GameButton from "./GameButton";

export default function GameResult({ guessResult, attemptsUsed, number, tryAgainHandler, newGameHandler, endGameHandler }) {
  const imageUrl = `https://picsum.photos/id/${number}/100/100`;
  return (
    <View style={globalStyles.childContainer}>
      {guessResult === 'correct' ? (
        <>
          <Text style={globalStyles.textColor}>
            You guessed correct!
          </Text>
          <Text style={globalStyles.textColor}>
            Attempts used: {attemptsUsed}
          </Text>
          <View style={{padding: 10}}>
          <Image
            style={styles.image}
            source={{ uri: imageUrl }}
          />
          </View>
          <GameButton
            title='New Game'
            onPress={newGameHandler}
          />
        </>
      ) : (
        <>
          <Text style={globalStyles.textColor}>
            You did not guess correct! </Text>
          <Text style={globalStyles.textColor}>
            You should guess {guessResult}.
          </Text>

            <GameButton
              title='Try Again'
              onPress={tryAgainHandler}
            />
            <GameButton
              title='End the game'
              onPress={endGameHandler}
            />
        </>
      )
      }
    </View >
  );
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});