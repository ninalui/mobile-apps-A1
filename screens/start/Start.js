import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Alert } from 'react-native';
import Checkbox from 'expo-checkbox';
import { globalStyles } from '../../styles';
import StartInput from '../../components/StartInput';
import TwoButtons from '../../components/TwoButtons';

export default function Start({ registerInputHandler }) {
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

  function checkInputs() {
    if (!validName || !validEmail || !validPhone) {
      Alert.alert(
        'Invalid input',
        'Please check all inputs',
        [
          { text: 'OK' }
        ]
      );
    } else {
      registerInputHandler({ name: nameInput, email: emailInput, phone: phoneInput });
    };
  };

  return (
    <View style={globalStyles.container}>
      <Text style={styles.welcomeText}>Welcome</Text>
      <View style={globalStyles.card}>
        {/* name input */}
        <StartInput
          label={'Name:'}
          value={nameInput}
          onChangeText={(text) => {
            setNameInput(text);
            setValidName(text.length > 1 && !text.match(/\d/));
          }}
          isValid={validName}
          errorMessage={'Please enter a valid name'}
        />

        {/* email input */}
        <StartInput
          label={'Email:'}
          value={emailInput}
          onChangeText={(text) => {
            setEmailInput(text);
            setValidEmail(text.includes('@') && text.includes('.'));
          }}
          isValid={validEmail}
          errorMessage={'Please enter a valid email'}
        />

        {/* phone input */}
        <StartInput
          label={'Phone number:'}
          value={phoneInput}
          onChangeText={(text) => {
            setPhoneInput(text);
            setValidPhone(text.length === 10 && !isNaN(text) && text[text.length - 1] !== '0' && text[text.length - 1] !== '1');
          }}
          isValid={validPhone}
          errorMessage={'Please enter a valid phone number'}
        />

        <View style={styles.checkBoxContainer}>
          <Checkbox
            value={isRobot}
            onValueChange={setIsRobot}
          />

          <View style={{ marginLeft: 10 }}>
            <Text style={globalStyles.textColor}>I am not a robot</Text>
          </View>
        </View>

        <TwoButtons
          title1='Reset'
          onPress1={clearInputs}
          color1='firebrick'
          title2='Register'
          onPress2={checkInputs}
          color2='mediumblue'
          disabled={!isRobot}
        />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'indigo',
    marginBottom: 20,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
  errorMessage: {
    color: 'dimgrey',
    marginBottom: 10,
  }
});
