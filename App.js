import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Start from './screens/start/Start';
import Confirm from './screens/confirm/Confirm';
import Game from './screens/game/Game';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const [userData, setUserData] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showGame, setShowGame] = useState(false);

  function handleRegisterInput(inputData) {
    let newUser = { name: inputData.name, email: inputData.email, phone: inputData.phone };
    setUserData(newUser);
    setShowConfirm(true);
  };

  function handleConfirmGoBack() {
    setShowConfirm(false);
  };

  function handleConfirmContinue() {
    setShowConfirm(false);
    setShowGame(true);
  };

  function handleResetGame() {
    setShowGame(false);
    setUserData([]);
  };

  //  guess multiple is last number of user's phone number
  const guessMultiple = userData.phone % 10;

  return (
    <LinearGradient colors={['lightblue', 'mediumpurple']} style={styles.container}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        { !showGame ? <Start registerInputHandler={handleRegisterInput} /> : null }
        <Confirm userData={userData} showConfirm={showConfirm} goBackHandler={handleConfirmGoBack} continueHandler={handleConfirmContinue}/>
        { showGame ? <Game guessMultiple={guessMultiple} restartHandler={handleResetGame}/> : null }
      </View >
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
