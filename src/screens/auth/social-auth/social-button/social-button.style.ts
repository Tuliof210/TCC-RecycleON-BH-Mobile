import { StyleSheet } from 'react-native';
import { colors, gradient } from 'common/constants/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerBorder: {
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: colors('gray-border'),
  },
  icon: {
    width: 35,
    height: 35,
  },
});

export const backgroundGradient = [gradient('fade-gray-btn').start, gradient('fade-gray-btn').end];
