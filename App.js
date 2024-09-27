import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Start from './screens/start/Start';
import Confirm from './screens/confirm/Confirm';

export default function App() {
  const [userData, setUserData] = useState([]);

  function handleRegisterInput(inputData) {
    let newUser = { name: inputData.name, email: inputData.email, phone: inputData.phone };
    setUserData(newUser);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Start registerInputHandler = {handleRegisterInput} />
      <Confirm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
