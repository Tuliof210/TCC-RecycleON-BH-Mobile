import React, { useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';

import AuthContext from 'context/auth';
import LocationContext from 'context/location';

import styles from './home.style';

export default (props: { navigation: NavigationProp<any, any> }): JSX.Element => {
  const { signOut } = useContext(AuthContext);
  const { latitude, longitude, requestLocationPermission, startWatchCurrentPosition } = useContext(LocationContext);

  const [locationPermission, setLocationPermission] = useState<boolean>(false);

  useEffect(() => {
    requestUserLocation();
  }, []);

  useEffect(() => {
    console.log({ latitude, longitude });
  }, [latitude, latitude]);

  //----------------------------------------------------------------------------

  function requestUserLocation() {
    requestLocationPermission()
      .then(async (permission) => {
        setLocationPermission(permission);
        await startWatchCurrentPosition();

        console.log({ permission });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function renderMainMark() {
    return (
      latitude &&
      longitude && <Marker key={1} coordinate={{ latitude, longitude }} title={'Casa'} description={'Minha Casa'} />
    );
  }

  return (
    <View style={styles.container}>
      {/*TODO https://github.com/react-native-maps/react-native-maps/issues/505 */}
      <MapView
        style={styles.map}
        region={{ latitude: latitude ?? 0, longitude: longitude ?? 0, latitudeDelta: 0.04, longitudeDelta: 0.001 }}
      >
        {renderMainMark()}
      </MapView>
    </View>
  );
};
