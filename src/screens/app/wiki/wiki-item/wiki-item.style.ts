import { StyleSheet, Platform, StatusBar } from 'react-native';
import { colors } from 'common/constants/colors';

export default StyleSheet.create({
  screen: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    paddingHorizontal: 30,
    marginBottom: 30,
  },
  goBackContainer: {
    marginHorizontal: 20,
    marginTop: 50,
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  goBackText: {
    fontFamily: 'Ubuntu-Medium',
    fontSize: 25,
    color: colors('green-dark'),
    marginHorizontal: 10,
  },
  title: {
    fontFamily: 'Ubuntu-Bold',
    color: colors('green-light'),
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 30,
  },
  body: {
    fontFamily: 'Ubuntu-Light',
    color: colors('black-medium'),
    fontSize: 17,
    textAlign: 'justify',
  },
  relatedItemsLabel: {
    fontSize: 22,
    textAlign: 'left',
    color: colors('green-dark'),
    marginBottom: 20,
  },
  relatedItems: {
    fontSize: 15,
    fontFamily: 'Ubuntu-Medium',
    color: colors('green-light'),
    marginTop: 3,
  },
  breakLine: {
    width: '100%',
    height: 1,
    marginVertical: 30,
    backgroundColor: colors('gray-line'),
  },
});
