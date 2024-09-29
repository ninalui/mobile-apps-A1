import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, Button, StyleSheet, Modal } from "react-native";
import { globalStyles } from '../../styles';

export default function Confirm({ userData, showConfirm, goBackHandler, continueHandler }) {

  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={showConfirm}
    >
      <LinearGradient
        colors={['skyblue', 'transparent']}
        style={globalStyles.container}
      >
        <View style={styles.modal}>
          {/* show the data that the user entered */}
          <Text style={globalStyles.textColor}>
            Hello {userData.name}{'\n'}
            Here is the information you entered:{'\n'}
            {userData.email}{'\n'}
            {userData.phone}{'\n'}
            If it is not correct, please go back and edit them.
          </Text>

          <View style={globalStyles.buttonRow}>
            {/* go back to start screen/register */}
            <View style={{ padding: 10 }}>
              <Button
                title='Go Back'
                color='firebrick'
                onPress={goBackHandler}
              />
            </View>
            {/* continue to game */}
            <View style={{ padding: 10 }}>
              <Button
                title='Continue'
                color='mediumblue'
                onPress={continueHandler}
              />
            </View>
          </View>

        </View>
      </LinearGradient>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'darkgrey',
    backgroundColor: 'darkgrey',
  }
});