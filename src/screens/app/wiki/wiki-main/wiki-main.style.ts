import { StyleSheet, Platform, StatusBar } from 'react-native';
import { colors } from 'common/constants/colors';

export default StyleSheet.create({
  screen: {
    marginVertical: 20,
    marginHorizontal: 30,
    alignItems: 'flex-start',
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: colors('white'),
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  item: {
    width: '100%',
  },
  label: {
    color: colors('green-dark'),
    fontFamily: 'Ubuntu-Bold',
    fontSize: 25,
    marginBottom: 30,
  },
  itemText: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    color: colors('black-medium'),
    fontFamily: 'Ubuntu-Medium',
    fontSize: 20,
  },
  breakLine: {
    width: '100%',
    height: 1,
    marginVertical: 30,
    backgroundColor: colors('gray-line'),
  },
});
