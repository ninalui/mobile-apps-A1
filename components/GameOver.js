import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { globalStyles } from "../styles";
import GameButton from "./GameButton";
import MainText from "./MainText";

export default function GameOver({ newGameHandler, gameOverReason }) {
  return (
    <View style={globalStyles.childContainer}>
      <MainText text='The game is over!' />

      <Image
        style={styles.image}
        source={require('../assets/sademoji.png')}
      />
      {/* show reason (attempts or time) if applicable */}
      {gameOverReason === 'userQuit'
        ? null
        : <MainText text={`You are out of ${gameOverReason}.`} />
      }

      {/* button to start a new game (resets game state and brings back to prompt screen) */}
      <View style={{ padding: 10 }}>
        <GameButton
          title='New Game'
          onPress={newGameHandler}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
    marginTop: 10,
  },
});