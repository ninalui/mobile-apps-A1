import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, StyleSheet, Modal } from "react-native";
import { globalStyles } from '../../styles';
import Card from '../../components/Card';
import TwoButtons from '../../components/TwoButtons';
import MainText from "../../components/MainText";

export default function Confirm({ userData, showConfirm, goBackHandler, continueHandler }) {

  // text to show user the information they entered
  const confirmText = `
Hello ${userData.name}
Here is the information you entered:
${userData.email}
${userData.phone}
If it is not correct, please go back and edit them.
  `.trim();

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
        <Card>
          {/* show the data that the user entered */}
          <MainText text={confirmText} />

        {/* two buttons - go back to register form, continue to game*/}
        <TwoButtons
          title1='Go Back'
          onPress1={goBackHandler}
          color1='firebrick'
          title2='Continue'
          onPress2={continueHandler}
          color2='mediumblue'
        />

      </Card>
    </LinearGradient>
    </Modal >
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