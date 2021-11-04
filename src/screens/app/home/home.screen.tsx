import React, { useContext, useEffect, useState, useRef } from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import { LocationPoint, LocationProperties } from 'common/constants/types';
import { LocationContext } from 'context';

import { LocationSearcherComponent } from './location-searcher/location-searcher.component';
import { LocationPointComponent } from './location-point/location-point.component';
import { LocationCardComponent, ILocationCardRef } from './location-card/location-card.component';

import styles, { mapConfiguration } from './home.style';

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

  const childRef = useRef<ILocationCardRef>(null);

  //----------------------------------------------------------------------------

  useEffect(() => {
    requestUserLocation();
  }, []);

  useEffect(() => {
    requestLocations([], []);
  }, [latitude, longitude]);

  //----------------------------------------------------------------------------

  async function requestLocations(tags: Array<string>, materials: Array<string>) {
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
      <LocationPointComponent key={point._id} point={point} getter={focusInMarkerHandler} />
    ));
  }

  function focusInMarkerHandler(locationProperties: LocationProperties): void {
    childRef.current?.setLocationPropertiesRef(locationProperties);
  }

  function focusOutMarkerHandler(): void {
    childRef.current?.clearLocationPropertiesRef();
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={requestMapRegion()}
        mapPadding={mapConfiguration.mapPadding}
        mapType={mapConfiguration.mapType}
        showsBuildings={mapConfiguration.showsBuildings}
        onPress={focusOutMarkerHandler}
      >
        {renderUserLocation()}
        {renderLocationPoints()}
      </MapView>
      <LocationCardComponent ref={childRef}></LocationCardComponent>
      <View style={styles.searcher}>
        <LocationSearcherComponent handlerSearch={requestLocations} />
      </View>
    </View>
  );
}
