import React from 'react';
import { View, Button } from 'react-native';
import { globalStyles } from '../styles';

export default function GameButton ({ title, onPress, disabled, color }) {
  return (
    // wrapped in buttonRow style so it does not take up full width
    <View style={globalStyles.buttonRow}>
      <Button 
      title={title} 
      onPress={onPress} 
      // color is mediumblue by default unless specified (eg - restart button is default color)
      color={color ? '' : 'mediumblue'}
      disabled={disabled}/>
    </View>
  );
}