import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
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
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
});