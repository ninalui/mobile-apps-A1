import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";
import GamePrompts from "../../components/GamePrompts";
import GameResult from "../../components/GameResult";
import GameOver from "../../components/GameOver";
import { globalStyles } from "../../styles";
import GameButton from "../../components/GameButton";

export default function Game({ guessMultiple, restartHandler }) {
  // game variable states
  const [number, setNumber] = useState(0);
  const [attemptsLeft, setAttemptsLeft] = useState(4);
  const [attemptsUsed, setAttemptsUsed] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [hint, setHint] = useState('');
  const [isHintUsed, setIsHintUsed] = useState(false);
  const [gameOverReason, setGameOverReason] = useState('');

  // user guess states
  const [guess, setGuess] = useState(0);
  const [guessResult, setGuessResult] = useState('');

  // game states
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isGuessSubmitted, setIsGuessSubmitted] = useState(false);

  // set a random number to guess that is a multiple of the last digit of user phone number
  function getRandomNumber() {
    const maxMultiple = Math.floor(100 / guessMultiple);
    const multiplier = Math.floor(Math.random() * maxMultiple) + 1;
    setNumber(multiplier * guessMultiple);
  };

  // set game to end when time runs out
  useEffect(() => {
    if (timeLeft == 0) {
      handleEndGame();
    }
  }, [timeLeft]);

  // start timer when game starts
  useEffect(() => {
    let timer;
    if (isGameStarted) {
      timer = startTimer();
    }
    return () => clearInterval(timer);
  }, [isGameStarted]);

  // timer function to decrease time by 1 second
  function startTimer() {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
    return timer;
  }

  // reset game variables and start a new game
  function startGame() {
    setIsGameStarted(true);
    setAttemptsLeft(4);
    setTimeLeft(60);
    setIsHintUsed(false);
    setHint('');
    setAttemptsUsed(0);
    setIsGameOver(false);
    setIsGuessSubmitted(false);
    setGuessResult('');
    getRandomNumber();
  };

  // check the user's guess - is it valid, is it correct 
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
      // update attempts and guess submitted
      setAttemptsLeft(attemptsLeft - 1);
      setAttemptsUsed(attemptsUsed + 1);
      setIsGuessSubmitted(true);

      // check if guess is correct
      if (guess == number) {
        setGuessResult('correct');
        // provide feedback on guess
      } else {
        if (guess < number) {
          setGuessResult('higher');
        } else {
          setGuessResult('lower');
        }
      }
    }
  };

  // handle when the user submits a guess
  function handleSubmitGuess(guess) {
    setGuess(guess);
    checkGuess(guess);
  };

  // handle when user wants to try again after a guess
  function handleTryAgain() {
    if (attemptsLeft == 0 || timeLeft == 0) {
      handleEndGame();
    } else {
      setIsGuessSubmitted(false);
      setGuessResult('');
      setGuess(0);
    }
  };

  // handle ending the game
  function handleEndGame() {
    setIsGameOver(true);
    // out of attempts
    if (attemptsLeft == 0) {
      setGameOverReason('attempts');
      // out of time
    } else if (timeLeft == 0) {
      setGameOverReason('time');
      // user quits
    } else {
      setGameOverReason('userQuit');
    }
  };

  // give user a hint about the range of the number
  function handleGetHint() {
    if (number >= 50) {
      setHint('The number is between 50 and 100');
    } else {
      setHint('The number is between 1 and 50');
    };
    setIsHintUsed(true);
  };

  return (
    <View style={globalStyles.container}>

      {/* take user back to start screen and resets all information */}
      <View style={styles.restartButtonPosition}>
        <Button
          title="Restart"
          onPress={restartHandler} />
      </View>

      <View style={globalStyles.card}>
        {/* show game prompt while on game's start and input prompt screen */}
        {!isGameOver && !isGuessSubmitted
          && <Text style={globalStyles.textColor}>Guess a number between 1 & 100 that is multiple of {guessMultiple}.</Text>}

        {/* show start button if game has not yet started */}
        {!isGameStarted
          && <GameButton
            title='Start'
            onPress={startGame}
          />
        }

        {/* if game has started, show prompts until user submits a guess */}
        {isGameStarted && !isGameOver && !isGuessSubmitted
          && <GamePrompts
            number={number}
            attemptsLeft={attemptsLeft}
            timeLeft={timeLeft}
            submitHandler={handleSubmitGuess}
            hintHandler={handleGetHint}
            isHintUsed={isHintUsed}
            hint={hint}
          />}

        {/* if user makes a guess, show result */}
        {isGameStarted && isGuessSubmitted && !isGameOver
          && <GameResult
            guessResult={guessResult}
            attemptsUsed={attemptsUsed}
            number={number}
            tryAgainHandler={handleTryAgain}
            newGameHandler={startGame}
            endGameHandler={handleEndGame}
          />}

        {/* if out of attempts or time, showw game is over */}
        {isGameOver && <GameOver newGameHandler={startGame} gameOverReason={gameOverReason} />}

      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  restartButtonPosition: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
});

