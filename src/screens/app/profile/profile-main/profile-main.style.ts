import { StyleSheet } from 'react-native';
import { colors, gradient } from 'common/constants/colors';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
});

export const backgroundGradient = [gradient('fade-green-bg').start, gradient('fade-green-bg').end];
