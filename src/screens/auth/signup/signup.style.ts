import { StyleSheet } from 'react-native';
import { colors, gradient } from 'common/constants/colors';

export default StyleSheet.create({
  containerLineBreak: {
    marginVertical: 30,
  },
  mainLabel: {
    color: colors.get('green-dark'),
    fontFamily: 'Ubuntu-Medium',
    fontSize: 25,
    marginBottom: 30,
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
  socialButtonSize: {
    width: '44%',
    height: 55,
  },
  socialSignupButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export const backgroundGradient = [gradient.get('fade-green-bg').start, gradient.get('fade-green-bg').end];
