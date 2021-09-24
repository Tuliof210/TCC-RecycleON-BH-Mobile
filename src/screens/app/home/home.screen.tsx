import React, { useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';

import { LocationPoint } from 'common/constants/types';

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
    getLocationsMap,
  } = useContext(LocationContext);

  const [locationPoints, setLocationPoints] = useState<Array<LocationPoint>>([]);

  //----------------------------------------------------------------------------

  useEffect(() => {
    requestUserLocation();
  }, []);

  useEffect(() => {
    (async () => {
      console.log(latitude, longitude);
      const locationPointsList = await getLocationsMap({ tags: [], materials: [] });
      setLocationPoints(locationPointsList);
    })();
  }, [latitude, longitude]);

  //----------------------------------------------------------------------------

  function requestMapRegion() {
    const pointsCoordinates = locationPoints.map((location) => {
      const [pointLongitude, pointLatitude] = location.geometry.coordinates;
      return { latitude: pointLatitude, longitude: pointLongitude };
    });
    return getMapRegion(pointsCoordinates);
  }

  function requestUserLocation() {
    requestLocationPermission()
      .then(async () => {
        if (hasLocationPermission) {
          setTimeout(async () => {
            await startWatchCurrentPosition();
          }, 5000);
        }
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

  function renderLocationPoints(): Array<JSX.Element> {
    return locationPoints.map((point) => {
      const [pointLongitude, pointLatitude] = point.geometry.coordinates;
      return (
        <Marker
          key={point._id}
          coordinate={{ latitude: pointLatitude, longitude: pointLongitude }}
          title={point.locationTag}
          description={point.properties.name}
        />
      );
    });
  }

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={requestMapRegion()}>
        {renderUserLocation()}
        {renderLocationPoints()}
      </MapView>
    </View>
  );
};
