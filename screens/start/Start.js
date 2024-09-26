import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Checkbox from 'expo-checkbox';

export default function Start() {
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');
  const [isRobot, setIsRobot] = useState(false);

  const [validName, setValidName] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [validPhone, setValidPhone] = useState(true);

  function clearInputs() {
    setNameInput('');
    setEmailInput('');
    setPhoneInput('');
    setIsRobot(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Welcome</Text>

      <View style={styles.card}>
        <Text>Name:</Text>
        <TextInput
          value={nameInput}
          onChangeText={(text) => {
            setNameInput(text);
            setValidName(text.length > 1 && !text.match(/\d/));
          }}
        />
        {validName ? null : <Text>Please enter a valid name</Text>}

        <Text>Email:</Text>
        <TextInput
          value={emailInput}
          onChangeText={(text) => {
            setEmailInput(text);
            setValidEmail(text.includes('@') && text.includes('.'));
          }}
        />
        {validEmail ? null : <Text>Please enter a valid email</Text>}

        <Text>Phone number:</Text>
        <TextInput
          value={phoneInput}
          onChangeText={(text) => {
            setPhoneInput(text);
            setValidPhone(text.length === 10 && !isNaN(text) && text[text.length - 1] !== '0' && text[text.length - 1] !== '1');
          }}
        />
        {validPhone ? null : <Text>Please enter a valid phone number</Text>}

        <Checkbox
          value={isRobot}
          onValueChange={setIsRobot}
        />
        <Text>I am not a robot</Text>

        <Button
          title='Reset'
          onPress={clearInputs}
        />

        <Button
          title='Register'
        />

      </View>

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
  card: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'lightgrey',
    backgroundColor: 'lightgrey',
  }
});
