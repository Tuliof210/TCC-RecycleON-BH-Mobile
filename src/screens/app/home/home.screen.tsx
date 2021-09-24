import React, { useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import MapView, { Callout, Marker } from 'react-native-maps';

import { LocationPoint } from 'common/constants/types';
import { LocationContext } from 'context';

import styles, { mapConfiguration, markerConfiguration } from './home.style';

export default function HomeScreen(props: { navigation: NavigationProp<any, any> }): JSX.Element {
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
      const coordinates = location.geometry.coordinates;
      return { latitude: coordinates[1], longitude: coordinates[0] };
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
      const coordinates = point.geometry.coordinates;
      return (
        <Marker
          key={point._id}
          pinColor={markerConfiguration.pinColor}
          coordinate={{ latitude: coordinates[1], longitude: coordinates[0] }}
          title={point.locationTag}
          description={point.properties.name}
        >
          <Callout tooltip>
            {/*TODO adicionar aqui o component de card de cada localização */}
            <View
              style={{
                width: 100,
                height: 50,
                borderRadius: 10,
                borderStyle: 'solid',
                borderWidth: 2,
                borderColor: '#f00',
                backgroundColor: '#ff0',
              }}
            ></View>
          </Callout>
        </Marker>
      );
    });
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={requestMapRegion()}
        mapPadding={mapConfiguration.mapPadding}
        mapType={mapConfiguration.mapType}
        showsBuildings={mapConfiguration.showsBuildings}
      >
        {renderUserLocation()}
        {renderLocationPoints()}
      </MapView>
    </View>
  );
}
