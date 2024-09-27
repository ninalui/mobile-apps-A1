import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { View, Text, Button, StyleSheet, Modal } from "react-native";

export default function Confirm({ userData, showConfirm, goBackHandler, continueHandler }) {

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showConfirm}
    >
      <LinearGradient
        colors={['skyblue', 'transparent']}
        style={styles.container}
      >
        <View style={styles.container}>
          <View style={styles.modal}>
            <Text>Hello {userData.name}</Text>
            <Text>Here is the information you entered:</Text>
            <Text>{userData.email}</Text>
            <Text>{userData.phone}</Text>
            <Text>If it is not correct, please go back and edit them.</Text>

            {/* continue to game */}
            <Button
              title="Continue"
              onPress={continueHandler}
            />

            {/* go back to start screen / register */}
            <Button
              title="Go Back"
              onPress={goBackHandler}
            />

          </View>
        </View>
      </LinearGradient>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'lightgrey',
    backgroundColor: 'lightgrey',
  }
});