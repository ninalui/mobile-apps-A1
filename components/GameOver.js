import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
export default function GameOver({ newGameHandler }) {
  return (
    <View>
      <Text>The game is over!</Text>
      <Image style={styles.image} source={require('../assets/sademoji.png')} />
      <Button title="New Game" onPress={newGameHandler} />
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