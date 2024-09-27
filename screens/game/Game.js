import React, {useState} from "react";
import { View, Text, Button, TextInput } from "react-native";
import GamePrompts from "../../components/GamePrompts";

export default function Game() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  function startGame() {
    setIsGameStarted(true);
  };

  return (
    <View>
      {/* take user back to start screen and reset all information */}
      <Button title="Restart" />
      {/* guessing anumber that is a multiple of the last digit of user phone number */}
      <Text>Guess a number between 1 & 100 that is multiply of 9</Text>

      {/* if game is started, show prompts, otherwise show start button */}
      { isGameStarted ? <GamePrompts /> : <Button title="Start" onPress={startGame} /> }

    </View>
  );
}
