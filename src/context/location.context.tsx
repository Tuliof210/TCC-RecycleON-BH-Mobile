import React, { createContext, useCallback, useState } from 'react';
import * as Location from 'expo-location';

import LocationService from 'services/location-service';

import { DefaultLocation } from 'common/constants/locations';

interface LocationContextData {
  latitude: number;
  longitude: number;
  requestLocationPermission(): Promise<boolean>;
  startWatchCurrentPosition(): Promise<void>;
  locationService: LocationService;
}

const LocationContext = createContext<LocationContextData>({} as LocationContextData);

export default LocationContext;

//=====================================================
const count = new Set();
//=====================================================

export const LocationProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [latitude, setLatitude] = useState<number>(DefaultLocation.latitude);
  const [longitude, setLongitude] = useState<number>(DefaultLocation.longitude);

  const locationService: LocationService = new LocationService(setLatitude, setLongitude);

  //=====================================================
  // com useCallback as funções so serão reescritas caso
  // os valores passados no array mudem
  //=====================================================
  const requestLocationPermission = useCallback(async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    return status === 'granted';
  }, []);

  const startWatchCurrentPosition = useCallback(async () => {
    await locationService.watchCurrentPosition();
  }, []);

  count.add(requestLocationPermission);
  count.add(startWatchCurrentPosition);

  console.log(count);
  //=====================================================
  //=====================================================

  return (
    <LocationContext.Provider
      value={{
        latitude,
        longitude,
        requestLocationPermission,
        startWatchCurrentPosition,
        locationService,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
