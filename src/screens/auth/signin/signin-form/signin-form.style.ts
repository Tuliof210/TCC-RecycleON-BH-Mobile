import { StyleSheet } from 'react-native';
import { colors } from 'common/constants/colors';

export default StyleSheet.create({
  forgotPassword: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
  },
  forgotPasswordTxt: {
    fontSize: 13,
    marginRight: 5,
    marginTop: 15,
    textAlign: 'right',
    width: 200,
  },
  inputBox: {
    marginBottom: 15,
    position: 'relative',
  },
  inputBoxesContainer: {
    marginBottom: 20,
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
  toggleHidenPasswordIcon: {
    height: 30,
    width: 30,
  },
  toggleHidenPassword: {
    bottom: 5,
    position: 'absolute',
    right: 10,
  },
});
