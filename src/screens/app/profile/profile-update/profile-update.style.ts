import { StyleSheet } from 'react-native';
import { colors, gradient } from 'common/constants/colors';

export default StyleSheet.create({
  containerLineBreak: {
    marginVertical: 30,
  },
  return: {
    color: colors('green-dark'),
    fontFamily: 'Ubuntu-Medium',
    fontSize: 25,
    marginBottom: 30,
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
});

export const backgroundGradient = [gradient('fade-green-bg').start, gradient('fade-green-bg').end];
