import { StyleSheet, Dimensions } from 'react-native';
import { colors } from 'common/constants/colors';

import { EdgePadding, MapTypes } from 'react-native-maps';

export default StyleSheet.create({
  text: {
    color: colors('black-light'),
    fontFamily: 'Ubuntu-Bold',
    fontSize: 20,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  map: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  locationCard: {
    width: 150,
    height: 75,
  },
  locationCardButton: {
    width: 100,
    height: 20,
  },
  searcher: {
    position: 'absolute',
    top: 75,
  },
});

export const mapConfiguration: { mapPadding: EdgePadding; mapType: MapTypes; showsBuildings: boolean } = {
  mapPadding: { left: 10, top: 0, bottom: 30, right: 10 },
  mapType: 'standard',
  showsBuildings: false,
};
