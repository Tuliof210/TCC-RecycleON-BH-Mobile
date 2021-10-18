import { StyleSheet } from 'react-native';
import { colors } from 'common/constants/colors';

export default StyleSheet.create({
  topContainer: {
    position: 'relative',
    backgroundColor: colors('green-light'),
    width: '100%',
    flex: 1,
    zIndex: 2,
  },
  profilePicture: {
    width: 150,
    height: 150,
  },
  profilePictureContainer: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: -75,
    width: 150,
    height: 150,
    borderColor: colors('green-dark'),
    backgroundColor: colors('white'),
    borderWidth: 1,
    borderRadius: 150,
  },
  bottomContainer: {
    backgroundColor: colors('white'),
    width: '100%',
    flex: 3,
  },
  profileScreenItens: {
    marginVertical: 20,
    fontSize: 15,
    fontFamily: 'Ubuntu-Bold',
    color: colors('gray-font-dark'),
  },
});
