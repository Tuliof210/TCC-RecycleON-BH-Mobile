import React, { useContext, useEffect } from 'react';
import { View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';

import LocationContext from 'context/location.context';

import styles from './home.style';

export default (props: { navigation: NavigationProp<any, any> }): JSX.Element => {
  const {
    latitude,
    longitude,
    hasLocationPermission,
    requestLocationPermission,
    startWatchCurrentPosition,
    getMapRegion,
  } = useContext(LocationContext);

  useEffect(() => {
    requestUserLocation();
  }, []);

  useEffect(() => {
    console.log(latitude, longitude);
  }, [latitude, longitude]);

  //----------------------------------------------------------------------------

  function requestMapRegion() {
    return getMapRegion([]);
  }

  function requestUserLocation() {
    requestLocationPermission()
      .then(async () => {
        setTimeout(async () => {
          await startWatchCurrentPosition();
        }, 5000);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function renderUserLocation(): JSX.Element | false {
    return (
      hasLocationPermission && (
        <Marker key={'user'} coordinate={{ latitude, longitude }} title={'Casa'} description={'Minha Casa'} />
      )
    );
  }

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={requestMapRegion()}>
        {renderUserLocation()}
      </MapView>
    </View>
  );
};
