import React, { createContext, useState } from 'react';
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

export const LocationProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const locationService: LocationService = new LocationService();

  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);

  async function requestLocationPermission() {
    const { status } = await Location.requestForegroundPermissionsAsync();
    return status === 'granted';
  }

  async function startWatchCurrentPosition() {
    await locationService.watchPosition(setLatitude, setLongitude);
  }

  return (
    <LocationContext.Provider value={{ latitude, longitude, requestLocationPermission, startWatchCurrentPosition }}>
      {children}
    </LocationContext.Provider>
  );
};
