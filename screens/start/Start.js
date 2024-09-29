import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Alert } from 'react-native';
import Checkbox from 'expo-checkbox';
import { globalStyles } from '../../styles';

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
        <Text style={globalStyles.textColor}>Name:</Text>
        <TextInput
          style={globalStyles.inputField}
          value={nameInput}
          onChangeText={(text) => {
            setNameInput(text);
            setValidName(text.length > 1 && !text.match(/\d/));
          }}
        />
        {validName ? <Text></Text> : <Text style={styles.errorMessage}>Please enter a valid name</Text>}

        <Text style={globalStyles.textColor}>Email:</Text>
        <TextInput
          style={globalStyles.inputField}
          value={emailInput}
          onChangeText={(text) => {
            setEmailInput(text);
            setValidEmail(text.includes('@') && text.includes('.'));
          }}
        />
        {validEmail ? <Text></Text> : <Text style={styles.errorMessage}>Please enter a valid email</Text>}

        <Text style={globalStyles.textColor}>Phone number:</Text>
        <TextInput
          style={globalStyles.inputField}
          value={phoneInput}
          onChangeText={(text) => {
            setPhoneInput(text);
            setValidPhone(text.length === 10 && !isNaN(text) && text[text.length - 1] !== '0' && text[text.length - 1] !== '1');
          }}
        />
        {validPhone ? <Text></Text> : <Text style={styles.errorMessage}>Please enter a valid phone number</Text>}

        <View style={styles.checkBoxContainer}>

            <Checkbox
              value={isRobot}
              onValueChange={setIsRobot}
            />
 
          <View style={{marginLeft: 10}}>
            <Text style={globalStyles.textColor}>I am not a robot</Text>
          </View>
        </View>

        <View style={globalStyles.buttonRow}>
          <View style={{padding: 10}}>
            <Button
              title='Reset'
              color='firebrick'
              onPress={clearInputs}
            />
          </View>
          <View style={{padding: 10}}>
            <Button
              title='Register'
              color='mediumblue'
              disabled={!isRobot}
              onPress={() => { checkInputs() }}
            />
          </View>
        </View>

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
  },
  errorMessage: {
    color: 'dimgrey',
    marginBottom: 10,
  }
});
