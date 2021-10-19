import { StyleSheet } from 'react-native';
import { colors } from 'common/constants/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors('white-dark'),
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 7,
    paddingVertical: 20,
  },
  containerShadow: {
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
  },
  label: {
    textAlign: 'left',
    color: colors('gray-font-dark'),
    paddingHorizontal: 10,
  },
  labelName: {
    fontFamily: 'Ubuntu-Bold',
    opacity: 1.0,
    fontSize: 25,
  },
  labelPassword: {
    fontFamily: 'Ubuntu-Light',
    opacity: 0.4,
    fontSize: 15,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 20,
    marginHorizontal: 15,
  },
});
