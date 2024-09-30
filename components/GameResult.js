import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { globalStyles } from "../styles";
import GameButton from "./GameButton";
import MainText from "./MainText";

export default function GameResult({ guessResult, attemptsUsed, number, tryAgainHandler, newGameHandler, endGameHandler }) {
  const imageUrl = `https://picsum.photos/id/${number}/100/100`;
  return (
    <View style={globalStyles.childContainer}>
      {guessResult === 'correct' ? (
        <>
          <MainText text={'You guessed correct!'} />
          <MainText text={`Attempts used: ${attemptsUsed}`} />

          <View style={{ padding: 10 }}>
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
          <MainText text={'You did not guess correct!'} />
          <MainText text={`You should guess ${guessResult}.`} />

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
  },
});