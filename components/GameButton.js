import React from 'react';
import { View, Button } from 'react-native';
import { globalStyles } from '../styles';

export default function GameButton ({ title, onPress, disabled, color }) {
  return (
    <View style={globalStyles.buttonRow}>
      <Button 
      title={title} 
      onPress={onPress} 
      color={color ? '' : 'mediumblue'}
      disabled={disabled}/>
    </View>
  );
}