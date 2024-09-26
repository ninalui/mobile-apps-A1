import React from "react";
import { View, Text, Button } from "react-native";

export default function Confirm({ userName, userEmail, userPhone }) {
  return (
  <View>
    <Text>Hello {userName}</Text>
    <Text>Here is the information you entered</Text>
    <Text>{userEmail}</Text>
    <Text>{userPhone}</Text>
    <Text>If it is not correct, please go back and edit them.</Text>

    <Button title="Continue" />
    <Button title="Go Back" />
  </View>
  );
}