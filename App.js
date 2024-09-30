import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Start from './screens/start/Start';
import Confirm from './screens/confirm/Confirm';
import Game from './screens/game/Game';
import { globalStyles } from './styles';

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
    <LinearGradient colors={['lightblue', 'mediumpurple']} style={globalStyles.container}>
        <StatusBar style="auto" />
        { !showGame ? <Start registerInputHandler={handleRegisterInput} /> : null }
        { showConfirm ? <Confirm userData={userData} showConfirm={showConfirm} goBackHandler={handleConfirmGoBack} continueHandler={handleConfirmContinue}/> : null }
        { showGame ? <Game guessMultiple={guessMultiple} restartHandler={handleResetGame}/> : null }
    </LinearGradient>
  );
}