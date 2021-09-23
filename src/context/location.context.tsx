import React, { createContext, useCallback, useState } from 'react';
import * as Location from 'expo-location';

import { Coordinates, FullCoordinates } from 'common/constants/types';
import { DefaultLocation } from 'common/constants/locations';

import LocationService from 'services/location-service';
import LocationHelper from 'helpers/location-helper';

interface LocationContextData {
  latitude: number;
  longitude: number;
  hasLocationPermission: boolean;
  requestLocationPermission(): Promise<void>;
  startWatchCurrentPosition(): Promise<void>;
  getMapRegion(coordinatesList: Array<Coordinates>): FullCoordinates;
}

const LocationContext = createContext<LocationContextData>({} as LocationContextData);

export default LocationContext;

//=====================================================
const count = new Set();
//=====================================================

export const LocationProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [latitude, setLatitude] = useState<number>(DefaultLocation.latitude);
  const [longitude, setLongitude] = useState<number>(DefaultLocation.longitude);
  const [hasLocationPermission, setHasLocationPermission] = useState<boolean>(false);

  const locationHelper: LocationHelper = new LocationHelper();
  const locationService: LocationService = new LocationService(setLatitude, setLongitude);

  //=====================================================
  // com useCallback as funções so serão reescritas caso
  // os valores passados no array mudem
  //=====================================================
  const requestLocationPermission = useCallback(async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    setHasLocationPermission(status === 'granted');
  }, []);

  const startWatchCurrentPosition = useCallback(async () => {
    await locationService.watchCurrentPosition();
  }, []);

  const getMapRegion = useCallback(
    (coordinatesList: Array<Coordinates>) => {
      const coordinates = [{ latitude, longitude }, ...coordinatesList];
      return locationHelper.getMapRegion(coordinates);
    },
    [latitude, longitude],
  );

  count.add(requestLocationPermission);
  count.add(startWatchCurrentPosition);
  count.add(getMapRegion);

  console.log(count);
  //=====================================================
  //=====================================================

  return (
    <LocationContext.Provider
      value={{
        latitude,
        longitude,
        hasLocationPermission,
        requestLocationPermission,
        startWatchCurrentPosition,
        getMapRegion,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
