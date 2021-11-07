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
  bookmarksContainer: {
    // paddingVertical: 20,
    // marginVertical: 20,
  },
});
