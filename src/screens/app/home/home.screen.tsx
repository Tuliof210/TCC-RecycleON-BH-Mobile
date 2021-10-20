import React, { useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import { LocationPoint } from 'common/constants/types';
import { LocationContext } from 'context';

import { LocationSearcherComponent } from './location-searcher/location-searcher.component';
import { LocationPointComponent } from './location-point/location-point.component';

import styles, { mapConfiguration, markerConfiguration } from './home.style';

export default function HomeScreen(): JSX.Element {
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
    requestLocations([], []);
  }, [latitude, longitude]);

  //----------------------------------------------------------------------------

  async function requestLocations(tags: Array<string>, materials: Array<string>) {
    console.log({ tags, materials });

    const locationPointsList = await getLocationsMap({ tags, materials });
    setLocationPoints(locationPointsList);
  }

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
    return locationPoints.map((point) => (
      <LocationPointComponent key={point._id} point={point} pinColor={markerConfiguration.pinColor} />
    ));
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
      <View style={styles.searcher}>
        <LocationSearcherComponent handlerSearch={requestLocations} />
      </View>
    </View>
  );
}
