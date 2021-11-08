import { StyleSheet } from 'react-native';
import { colors, gradient } from 'common/constants/colors';

export default StyleSheet.create({
  containerLineBreak: {
    marginVertical: 30,
  },
  mainLabel: {
    color: colors('green-dark'),
    fontFamily: 'Ubuntu-Medium',
    fontSize: 25,
    marginBottom: 30,
  },
  redirectToSignup: {
    color: colors('gray-font-light'),
    fontFamily: 'Ubuntu-Medium',
    fontSize: 16,
    marginVertical: 30,
    textAlign: 'center',
  },
  redirectToSignupHighlight: {
    color: colors('green-dark'),
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
});

export const backgroundGradient = [gradient('fade-green-bg').start, gradient('fade-green-bg').end];
