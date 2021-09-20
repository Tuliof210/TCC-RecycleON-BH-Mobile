import { StyleSheet } from 'react-native';
import { colors } from 'styles/colors';

export default StyleSheet.create({
  inputBox: {
    marginBottom: 15,
    position: 'relative',
  },
  inputLabel: {
    color: colors.get('green-dark'),
    fontFamily: 'Ubuntu-Medium',
    fontSize: 12,
    marginBottom: 5,
    marginLeft: 5,
  },
  inputText: {
    height: 40,
    width: '100%',
  },
  toggleHidenPassword: {
    bottom: 5,
    position: 'absolute',
    right: 10,
  },
  toggleHidenPasswordIcon: {
    height: 30,
    width: 30,
  },
});
