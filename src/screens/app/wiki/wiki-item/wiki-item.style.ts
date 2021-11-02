import { StyleSheet } from 'react-native';
import { colors, gradient } from 'common/constants/colors';

export default StyleSheet.create({
  screen: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export const backgroundGradient = [gradient('fade-green-bg').start, gradient('fade-green-bg').end];
