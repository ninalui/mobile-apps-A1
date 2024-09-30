import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { globalStyles } from "../styles";
import GameButton from "./GameButton";
import MainText from "./MainText";

export default function GameResult({ guessResult, attemptsUsed, number, tryAgainHandler, newGameHandler, endGameHandler }) {
  
  // image url - based on random number that was chosen by game
  const imageUrl = `https://picsum.photos/id/${number}/100/100`;

  return (
    <View style={globalStyles.childContainer}>
      {/* if guess was correct */}
      {guessResult === 'correct' ? (
        <>
        {/* provide user with number of attempts used */}
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
        // if guess was incorrect
        <>
        {/* provide user with whether they should guess higher or lower */}
          <MainText text={'You did not guess correct!'} />
          <MainText text={`You should guess ${guessResult}.`} />

          {/* button to go back to prompt screen and submit another guess */}
          <GameButton
            title='Try Again'
            onPress={tryAgainHandler}
          />

          {/* button to end the game, goes to game over screen */}
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