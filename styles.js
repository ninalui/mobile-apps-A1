import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  childContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'darkgrey',
    backgroundColor: 'darkgrey',
  },
  textColor: {
    color: 'darkslateblue',
  },
  textColorGrey: {
    color: 'dimgrey',
  },
  inputField: {
    borderBottomWidth: 2,
    borderColor: 'darkslateblue',
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
});