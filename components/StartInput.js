import React from 'react';
import { Text, TextInput, StyleSheet } from 'react-native';
import { globalStyles } from '../styles';
import MainText from './MainText';

export default function StartInput({ label, value, onChangeText, isValid, errorMessage }) {
  return (
    <>
      <MainText text={label} />
      <TextInput
        style={globalStyles.inputField}
        value={value}
        onChangeText={onChangeText}
      />
      {isValid ? <Text></Text> : <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </>
  );
}

const styles = StyleSheet.create({
  errorMessage: {
    color: 'dimgrey',
    marginBottom: 10,
  }
});