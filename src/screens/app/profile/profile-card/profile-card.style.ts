import { StyleSheet } from 'react-native';
import { colors } from 'common/constants/colors';

export default StyleSheet.create({
  container: {
    marginHorizontal: 25,
    padding: 15,
    backgroundColor: colors('gray-border'),
    borderRadius: 10,
  },
  label: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Ubuntu-Regular',
  },
  breakLine: {
    height: 1,
    marginVertical: 5,
    backgroundColor: colors('gray-line'),
  },
});
