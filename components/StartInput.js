import React from 'react';
import { Text, TextInput, StyleSheet } from 'react-native';
import { globalStyles } from '../styles';

export default function StartInput({ label, value, onChangeText, isValid, errorMessage }) {
  return (
    <>
      <Text style={globalStyles.textColor}>{label}</Text>
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