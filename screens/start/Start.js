import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Checkbox from 'expo-checkbox';

export default function Start() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Welcome</Text>

      {/* card view */}
      <View>
        <Text>Name:</Text>
        <TextInput/>

        <Text>Email:</Text>
        <TextInput/>

        <Text>Phone number:</Text>
        <TextInput/>

        <Checkbox/>
        <Text>I am not a robot</Text>

        <Button title='Reset'/>
        <Button title='Register'/>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
