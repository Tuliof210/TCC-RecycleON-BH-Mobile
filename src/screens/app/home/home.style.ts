import { StyleSheet } from 'react-native';
import { colors } from 'styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.get('green-light'),
    justifyContent: 'center',
  },
  text: {
    color: colors.get('black-light'),
    fontFamily: 'Ubuntu-Bold',
    fontSize: 20,
    textAlign: 'center',
  },
});
