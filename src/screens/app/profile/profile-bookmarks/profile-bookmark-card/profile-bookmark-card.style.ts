import { StyleSheet } from 'react-native';
import { colors } from 'common/constants/colors';

export default StyleSheet.create({
  container: {
    alignSelf: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors('white'),
    width: '90%',
    height: 250,
    marginVertical: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  containerShadow: {
    shadowColor: colors('black'),
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 15,
  },
  containerBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerSubBody: {
    width: '50%',
  },
  containerFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  directionButton: {
    height: 30,
    width: '60%',
  },
  labelText: {
    textAlign: 'left',
    fontFamily: 'Ubuntu-Bold',
    color: colors('gray-font-dark'),
    fontSize: 15,
  },
  text: {
    textAlign: 'left',
    fontFamily: 'Ubuntu-Medium',
    color: colors('green-light'),
    fontSize: 13,
  },
  subText: {
    marginHorizontal: 15,
    textAlign: 'left',
    fontFamily: 'Ubuntu-Light',
    fontSize: 13,
    color: colors('gray-font-light'),
  },
  itens: {
    fontFamily: 'Ubuntu-Medium',
    fontSize: 13,
    color: colors('green-dark'),
  },
  breakLine: {
    height: 1,
    width: '100%',
    alignSelf: 'center',
    marginVertical: 15,
    backgroundColor: colors('gray-line'),
  },
});
