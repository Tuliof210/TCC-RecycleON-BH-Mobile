import { StyleSheet } from 'react-native';
import { colors } from 'common/constants/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors('white'),
    borderColor: colors('green-light'),
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 10,
    paddingVertical: 15,
    paddingHorizontal: 15,
    alignSelf: 'center',
  },
  title: {
    textAlign: 'center',
    textAlignVertical: 'top',
    fontFamily: 'Ubuntu-Bold',
    color: colors('gray-font-dark'),
  },
  itens: {
    fontFamily: 'Ubuntu-Light',
    fontSize: 10,
  },
  breakLine: {
    height: 1,
    marginVertical: 5,
    backgroundColor: colors('green-light'),
  },
});
