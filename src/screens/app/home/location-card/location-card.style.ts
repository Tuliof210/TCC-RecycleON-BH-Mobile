import { StyleSheet, Dimensions } from 'react-native';
import { colors } from 'common/constants/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors('white'),
    alignItems: 'center',
    width: '90%',
    height: 200,
    marginBottom: 40,
    borderRadius: 15,
  },
  containerShadow: {
    shadowColor: colors('black'),
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 15,
  },
});
