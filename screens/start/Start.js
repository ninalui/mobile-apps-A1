import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { globalStyles } from '../../styles';
import Header from '../../components/Header';
import Card from '../../components/Card';
import StartInput from '../../components/StartInput';
import CheckBoxField from '../../components/CheckBoxField';
import TwoButtons from '../../components/TwoButtons';

export default function Start({ registerInputHandler }) {
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');
  const [isRobot, setIsRobot] = useState(false);

  const [validName, setValidName] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [validPhone, setValidPhone] = useState(true);

  // clear all input fields
  function clearInputs() {
    setNameInput('');
    setEmailInput('');
    setPhoneInput('');
    setIsRobot(false);
  };

  // check if all inputs are valid before registering, show alert if not
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
      <Header title='Welcome' />
      <Card style={styles.card}>
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

        {/* I am not a robot checkbox */}
        <CheckBoxField
          label='I am not a robot'
          value={isRobot}
          onValueChange={setIsRobot}
        />

        {/* two buttons - reset to clear text, register to submit input */}
        <TwoButtons
          title1='Reset'
          onPress1={clearInputs}
          color1='firebrick'
          title2='Register'
          onPress2={checkInputs}
          color2='mediumblue'
          disabled={!isRobot}
        />

      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '70%',
  }
});
