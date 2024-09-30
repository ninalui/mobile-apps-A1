import React from 'react';
import { View, Button } from 'react-native';
import { globalStyles } from '../styles';

export default function TwoButtons({ title1, onPress1, color1, title2, onPress2, color2, disabled }) {
  return (
    <View style={globalStyles.buttonRow}>
      <View style={{ padding: 5 }}>
        <Button title={title1} onPress={onPress1} color={color1} />
      </View>
      <View style={{ padding: 5 }}>
        {/* disable the second button if disabled is true (for register button)*/}
        <Button title={title2} onPress={onPress2} color={color2} disabled={disabled} />
      </View>
    </View>
  );
}