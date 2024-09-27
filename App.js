import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Start from './screens/start/Start';
import Confirm from './screens/confirm/Confirm';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const [userData, setUserData] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);

  function handleRegisterInput(inputData) {
    let newUser = { name: inputData.name, email: inputData.email, phone: inputData.phone };
    setUserData(newUser);
    setShowConfirm(true);
  };

  return (
    <LinearGradient colors={['lightblue', 'mediumpurple']} style={styles.container}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Start registerInputHandler={handleRegisterInput} />
        <Confirm userData={userData} showConfirm={showConfirm} />
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
