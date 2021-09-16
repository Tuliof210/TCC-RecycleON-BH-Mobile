import { StyleSheet } from 'react-native';
import { colors, gradient } from '../../styles/colors';

export default StyleSheet.create({
  containerLineBreak: {
    marginVertical: 30,
  },
  inputBox: {
    marginBottom: 15,
    position: 'relative',
  },
  inputBoxesContainer: {
    marginBottom: 40,
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
    marginBottom: 40,
  },
  redirectToLogin: {
    color: colors.get('gray-font-light'),
    fontFamily: 'Ubuntu-Medium',
    fontSize: 16,
    marginVertical: 30,
    textAlign: 'center',
  },
  redirectToLoginHighlight: {
    color: colors.get('green-dark'),
    fontFamily: 'Ubuntu-Bold',
  },
  screen: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
  },
  screenMainIcon: {
    bottom: -5,
    height: 70,
    position: 'relative',
    resizeMode: 'contain',
    width: 70,
  },
  socialSignupButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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

export const backgroundGradient = [gradient.get('fade-green-bg').start, gradient.get('fade-green-bg').end];
