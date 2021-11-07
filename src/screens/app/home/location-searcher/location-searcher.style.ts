import { StyleSheet, Dimensions } from 'react-native';

import { colors } from 'common/constants/colors';

export default StyleSheet.create({
  container: {
    position: 'relative',
    width: Dimensions.get('window').width * 0.9,
    paddingHorizontal: 20,
    height: 60,
    borderWidth: 1.5,
    borderRadius: 40,
    borderColor: colors('gray-line'),
    backgroundColor: colors('white'),
  },
  containerShadow: {
    shadowColor: colors('black'),
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 10,
  },
  text: {
    flex: 1,
    fontSize: 17,
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
