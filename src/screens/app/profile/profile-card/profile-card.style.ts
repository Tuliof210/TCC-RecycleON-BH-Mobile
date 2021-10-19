import { StyleSheet } from 'react-native';
import { colors } from 'common/constants/colors';

export default StyleSheet.create({
  container: {
    marginVertical: 5,
    marginHorizontal: 10,
    // padding: 15,
    backgroundColor: colors('white-dark'),
    borderRadius: 7,
  },
  containerShadow: {
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
  },
  containerOptions: {},
  label: {
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'Ubuntu-Regular',
  },
  breakLine: {
    height: 1,
    marginVertical: 5,
    backgroundColor: colors('gray-line'),
  },
  menuOption: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 15,
    fontFamily: 'Ubuntu-Medium',
    color: colors('gray-font-dark'),
  },
  exit: {
    color: colors('red'),
  },
});
