import { StyleSheet, Dimensions } from 'react-native';

import { colors } from 'common/constants/colors';

export default StyleSheet.create({
  container: {
    position: 'relative',
    width: Dimensions.get('window').width * 0.9,
    paddingHorizontal: 20,
    height: 60,
    borderWidth: 2,
    borderRadius: 40,
    borderColor: colors('green-dark'),
    backgroundColor: colors('white'),
  },
  text: {
    flex: 1,
    fontSize: 14,
    fontFamily: 'Ubuntu-Light',
    color: colors('black') + 'B3',
    textAlignVertical: 'center',
  },
  searchContainer: {
    position: 'absolute',
    right: 0,
    width: 50,
    height: '100%',
    backgroundColor: 'transparent',
    alignContent: 'center',
    justifyContent: 'center',
  },
});
