import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import { globalStyles } from "../styles";

export default function GameOver({ newGameHandler, gameOverReason }) {
  return (
    <View style={globalStyles.childContainer}>
      <Text style={globalStyles.textColor}>
        The game is over!
      </Text>
      <Image
        style={styles.image}
        source={require('../assets/sademoji.png')}
      />
      {gameOverReason === 'userQuit'
        ? null
        : <Text style={globalStyles.textColor}>
          You are out of {gameOverReason}.
        </Text>
      }

      <View style={{ padding: 10 }}>
        <Button
          color='mediumblue'
          title="New Game"
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