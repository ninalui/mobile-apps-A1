import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, Button, StyleSheet, Modal } from "react-native";
import { globalStyles } from '../../styles';
import TwoButtons from '../../components/TwoButtons';

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

          {/* two buttons - go back to register form, continue to game*/}
          <TwoButtons
            title1='Go Back'
            onPress1={goBackHandler}
            color1='firebrick'
            title2='Continue'
            onPress2={continueHandler}
            color2='mediumblue'
          />

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