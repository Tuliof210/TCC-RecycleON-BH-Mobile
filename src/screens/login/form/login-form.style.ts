import { StyleSheet } from 'react-native';
import { colors } from 'styles/colors';

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
  toggleHidenPasswordIcon: {
    height: 30,
    width: 30,
  },
  toggleHidenPassword: {
    bottom: 40,
    position: 'absolute',
    right: 10,
  },
});
