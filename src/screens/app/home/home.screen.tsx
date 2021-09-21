import React, { useContext, useEffect, useState } from 'react';
import { Text, ScrollView } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

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
    console.log({ coordinates: { latitude, longitude } });
  }, [latitude, longitude]);

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

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Text onPress={signOut}>Sair</Text>
    </ScrollView>
  );
};
