import React, {useState} from "react";
import { View, Text, Button } from "react-native";

export default function Confirm({ userData }) {

  return (
    <View>
      <Text>Hello {userData.name}</Text>
      <Text>Here is the information you entered:</Text>
      <Text>{userData.email}</Text>
      <Text>{userData.phone}</Text>
      <Text>If it is not correct, please go back and edit them.</Text>

      <Button
        title="Continue"
      />

      <Button
        title="Go Back"
      />

    </View>
  );
}