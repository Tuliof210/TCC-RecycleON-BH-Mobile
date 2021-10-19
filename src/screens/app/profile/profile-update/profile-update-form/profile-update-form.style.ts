import { StyleSheet } from 'react-native';
import { colors } from 'common/constants/colors';

export default StyleSheet.create({
  formWarning: {
    top: 62,
    left: 5,
  },
  inputBoxesContainer: {
    marginBottom: 40,
  },
  inputBox: {
    marginBottom: 20,
    position: 'relative',
  },
  inputLabel: {
    color: colors('green-dark'),
    fontFamily: 'Ubuntu-Medium',
    fontSize: 12,
    marginBottom: 5,
    marginLeft: 5,
  },
  inputText: {
    height: 40,
    width: '100%',
  },
  submitButton: {
    height: 50,
    width: '100%',
  },
  toggleHidenPassword: {
    bottom: 5,
    position: 'absolute',
    right: 10,
  },
  toggleHidenPasswordIcon: {
    position: 'relative',
    height: 30,
    width: 30,
  },
});
