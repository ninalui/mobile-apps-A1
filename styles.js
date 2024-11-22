import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  // child container (used in game result and game prompts to ensure content is centered)
  childContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  inputField: {
    borderBottomWidth: 2,
    borderColor: 'darkslateblue',
    textAlign: 'center',
    fontSize: 20,
    color: 'darkslateblue',
    fontWeight: 'bold',
    lineHeight: 30,
    height: 50,
  },
  // button row style to ensure buttons are not full width and for when 2 buttons are side by side
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
});