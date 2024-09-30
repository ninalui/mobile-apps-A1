import React from 'react';
import { View, Button } from 'react-native';
import { globalStyles } from '../styles';

export default function GameButton ({ title, onPress, disabled }) {
  return (
    <View style={globalStyles.buttonRow}>
      <Button title={title} onPress={onPress} color='mediumblue' disabled={disabled}/>
    </View>
  );
}