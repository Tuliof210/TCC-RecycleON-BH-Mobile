import { StyleSheet } from 'react-native';
import { colors } from 'common/constants/colors';

export default StyleSheet.create({
  container: {
    marginVertical: 5,
    marginHorizontal: 10,
    backgroundColor: colors('white-dark'),
    borderRadius: 7,
  },
  containerShadow: {
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
  },
  menuOption: {
    flexDirection: 'row',
    padding: 10,
  },
  menuOptionText: {
    fontSize: 20,
    fontFamily: 'Ubuntu-Medium',
    color: colors('gray-font-dark'),
    paddingHorizontal: 10,
  },
  exit: {
    color: colors('red'),
  },
  svgIcon: {
    alignSelf: 'center',
  },
  bottomBorder: {
    borderBottomColor: colors('gray-border'),
    borderBottomWidth: 1,
  },
});
