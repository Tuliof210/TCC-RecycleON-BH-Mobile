import React, { useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';

import AuthContext from 'context/auth.context';
import LocationContext from 'context/location.context';

import styles from './home.style';

export default (props: { navigation: NavigationProp<any, any> }): JSX.Element => {
  const [locationPermission, setLocationPermission] = useState<boolean>(false);

  const { latitude, longitude, requestLocationPermission, startWatchCurrentPosition, locationService } =
    useContext(LocationContext);

  useEffect(() => {
    requestUserLocation();
  }, []);

  useEffect(() => {
    console.log(latitude, longitude);
  }, [latitude, longitude]);

  //----------------------------------------------------------------------------

  function requestMapRegion() {
    return locationService.getMapRegion([{ latitude, longitude }]);
  }

  function requestUserLocation() {
    requestLocationPermission()
      .then(async (permission) => {
        setLocationPermission(permission);
        //await startWatchCurrentPosition();

        console.log({ permission });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={requestMapRegion()}>
        <Marker key={1} coordinate={{ latitude, longitude }} title={'Casa'} description={'Minha Casa'} />
      </MapView>
    </View>
  );
};
