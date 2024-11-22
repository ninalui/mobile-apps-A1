import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import Start from './screens/start/Start';
import Confirm from './screens/confirm/Confirm';
import Game from './screens/game/Game';
import { globalStyles } from './styles';

export default function App() {
  const [userData, setUserData] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showGame, setShowGame] = useState(false);

  // handle user input from Start screen
  function handleRegisterInput(inputData) {
    let newUser = { name: inputData.name, email: inputData.email, phone: inputData.phone };
    setUserData(newUser);
    setShowConfirm(true);
  };

  // handle going back to Start screen from Confirm screen
  function handleConfirmGoBack() {
    setShowConfirm(false);
  };

  // handle continuing to Game screen from Confirm screen
  function handleConfirmContinue() {
    setShowConfirm(false);
    setShowGame(true);
  };

  // handle going back to Start screen from Game screen
  function handleResetGame() {
    setShowGame(false);
    setUserData([]);
  };

  //  guess multiple is last number of user's phone number
  const guessMultiple = userData.phone % 10;

  return (
    <LinearGradient colors={['lightblue', 'mediumpurple']} style={globalStyles.container}>
        <StatusBar style="auto" />
        {/* Start screen is shown in the beginning, and when game is restarted from Game screen */}
        { !showGame ? <Start registerInputHandler={handleRegisterInput} /> : null }
        {/* Confirm screen is shown after user clicks register from Start screen*/}
        { showConfirm ? <Confirm userData={userData} showConfirm={showConfirm} goBackHandler={handleConfirmGoBack} continueHandler={handleConfirmContinue}/> : null }
        {/* Game screen is shown after user clicks continue from Confirm screen */}
        { showGame ? <Game guessMultiple={guessMultiple} restartHandler={handleResetGame}/> : null }
    </LinearGradient>
  );
}