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
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export const mapConfiguration: { mapPadding: EdgePadding; mapType: MapTypes; showsBuildings: boolean } = {
  mapPadding: { left: 50, top: 50, bottom: 50, right: 50 },
  mapType: 'standard',
  showsBuildings: false,
};

export const markerConfiguration: { pinColor: string } = {
  pinColor: colors('green-dark'),
};
