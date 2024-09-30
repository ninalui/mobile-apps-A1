import React from 'react';
import { Text, TextInput, StyleSheet, View } from 'react-native';
import { globalStyles } from '../styles';
import MainText from './MainText';

export default function StartInput({ label, value, onChangeText, isValid, errorMessage }) {
  return (
    <View style={{marginBottom: 20}}>
      <MainText text={label} />
      <TextInput
        style={globalStyles.inputField}
        value={value}
        onChangeText={onChangeText}
      />
      {isValid ? <Text></Text> : <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  errorMessage: {
    color: 'dimgrey',
    fontSize: 18,
  }
});