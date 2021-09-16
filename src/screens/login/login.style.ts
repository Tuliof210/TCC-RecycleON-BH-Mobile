import { StyleSheet } from 'react-native';
import { colors, gradient } from '../../constants/styles';

export default StyleSheet.create({
  containerLineBreak: {
    marginVertical: 30,
  },
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
  mainLabel: {
    color: colors.get('green-dark'),
    fontFamily: 'Ubuntu-Medium',
    fontSize: 25,
    marginBottom: 30,
  },
  redirectToSignup: {
    color: colors.get('gray-font-light'),
    fontFamily: 'Ubuntu-Medium',
    fontSize: 16,
    marginVertical: 30,
    textAlign: 'center',
  },
  redirectToSignupHighlight: {
    color: colors.get('green-dark'),
    fontFamily: 'Ubuntu-Bold',
  },
  screen: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
  },
  screenMainIcon: {
    bottom: -25,
    height: 200,
    position: 'relative',
    resizeMode: 'contain',
    width: 180,
  },
  socialLoginButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  toggleHidenPassword: {
    bottom: 40,
    position: 'absolute',
    right: 10,
  },
  toggleHidenPasswordIcon: {
    height: 30,
    width: 30,
  },
});

export const backgroundGradient = [gradient.get('fade-green-bg').start, gradient.get('fade-green-bg').end];
