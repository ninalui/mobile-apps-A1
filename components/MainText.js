import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function MainText({ text }) {
  return (
    <Text style={styles.mainText}>
      {text}
    </Text>
  );
}

export const styles = StyleSheet.create({
  mainText: {
    color: 'darkslateblue',
    fontSize: 20,
  },
});