import { StyleSheet } from 'react-native';
import { colors } from 'common/constants/colors';

export default StyleSheet.create({
  screen: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
  },
  goBackContainer: {
    marginHorizontal: 20,
    marginTop: 50,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  goBackText: {
    fontFamily: 'Ubuntu-Medium',
    fontSize: 25,
    color: colors('green-dark'),
    marginHorizontal: 10,
  },
  bookmarksEmpty: {
    marginVertical: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookmarksEmptyImage: {
    width: 200,
    height: 200,
    opacity: 0.2,
  },
  bookmarksEmptyText: {
    marginVertical: 20,
    textAlign: 'center',
    fontFamily: 'Ubuntu-Bold',
    fontSize: 20,
    color: colors('black-medium'),
  },
});
