import React, { useState } from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";
import GamePrompts from "../../components/GamePrompts";
import GameResult from "../../components/GameResult";

export default function Game({ guessMultiple }) {
  const [number, setNumber] = useState(0);
  const [attemptsLeft, setAttemptsLeft] = useState(4);
  const [timeLeft, setTimeLeft] = useState(60);

  const [guess, setGuess] = useState(0);
  const [guessResult, setGuessResult] = useState('');

  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isGuessSubmitted, setIsGuessSubmitted] = useState(false);

  // set a random number to guess that is a multiple of the last digit of user phone number
  function getRandomNumber() {
    const maxMultiple = Math.floor(100 / guessMultiple);
    const multiplier = Math.floor(Math.random() * maxMultiple) + 1;
    setNumber(multiplier * guessMultiple);
  };

  function startGame() {
    setIsGameStarted(true);
    console.log('Game started', isGameStarted);
    console.log('no guess', isGuessSubmitted);
    getRandomNumber();
  };

  function checkGuess(guess) {
    // check if guess is multiple of number
    if (guess % guessMultiple != 0) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a multiple of ' + guessMultiple + ' between 1 and 100',
        [
          { text: 'OK' }
        ]
      );
    } else {
      // check if guess is correct
      if (guess == number) {
        setGuessResult('correct');
        setIsGameOver(true);
      } else {
        if (guess < number) {
          setGuessResult('higher');
        } else {
          setGuessResult('lower');
        }
        setIsGuessSubmitted(true);
      }
    }
  };

  function handleSubmitGuess(guess) {
    setGuess(guess);
    checkGuess(guess);
  };

  return (
    <View style={styles.container}>

      {/* take user back to start screen and reset all information */}
      <Button title="Restart" />

      <View style={styles.card}>
        {!isGameStarted && <Text>Guess a number between 1 & 100 that is multiple of {guessMultiple}</Text>}

        {/* show start button if game has not yet started */}
        {!isGameStarted && <Button title="Start Game" onPress={startGame} />}

        {/* if game is started, show prompts until user submits a guess */}
        {isGameStarted && !isGuessSubmitted
          && <GamePrompts
            number={number}
            attemptsLeft={attemptsLeft}
            timeLeft={timeLeft}
            submitHandler={handleSubmitGuess}
          />}

        {/* if game is over or user makes a guess, show result */}
        {isGameStarted && (isGameOver || isGuessSubmitted) && <GameResult result={guessResult} />}

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'lightgrey',
    backgroundColor: 'lightgrey',
  }
});

