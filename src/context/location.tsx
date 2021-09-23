import React, { createContext, useCallback, useState } from 'react';
import * as Location from 'expo-location';

import LocationService from 'services/location';

interface LocationContextData {
  latitude: number | null;
  longitude: number | null;
  requestLocationPermission(): Promise<boolean>;
  startWatchCurrentPosition(): Promise<void>;
}

const LocationContext = createContext<LocationContextData>({} as LocationContextData);

export default LocationContext;

//=====================================================
const count = new Set();
//=====================================================

export const LocationProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const locationService: LocationService = new LocationService();

  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);

  //=====================================================
  // com useCallback as funções so serão reescritas caso
  // os valores passados no array mudem
  //=====================================================
  const requestLocationPermission = useCallback(async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    return status === 'granted';
  }, []);

  const startWatchCurrentPosition = useCallback(async () => {
    await locationService.watchPosition(setLatitude, setLongitude);
  }, []);

  count.add(requestLocationPermission);
  count.add(startWatchCurrentPosition);

  console.log(count);
  //=====================================================
  //=====================================================

  return (
    <LocationContext.Provider value={{ latitude, longitude, requestLocationPermission, startWatchCurrentPosition }}>
      {children}
    </LocationContext.Provider>
  );
};
