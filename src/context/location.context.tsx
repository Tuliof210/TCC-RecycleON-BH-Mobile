import React, { createContext, useCallback, useContext, useState } from 'react';
import * as Location from 'expo-location';

import { Coordinates, FullCoordinates, LocationPoint } from 'common/constants/types';
import { DefaultLocation } from 'common/constants/locations';

import { AuthContext } from 'context/auth.context';
import { LocationHelper } from 'helpers';
import { LocationService } from 'services';

interface LocationContextData {
  latitude: number;
  longitude: number;
  hasLocationPermission: boolean;
  requestLocationPermission(): Promise<boolean>;
  startWatchCurrentPosition(): Promise<void>;
  getMapRegion(coordinatesList: Array<Coordinates>): FullCoordinates;
  getLocationsMap(data: { tags: Array<string>; materials: Array<string> }): Promise<Array<LocationPoint>>;
  getLocationById(id: string): Promise<LocationPoint | void>;
}

export const LocationContext = createContext<LocationContextData>({} as LocationContextData);

export function LocationProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const { token } = useContext(AuthContext);

  const [latitude, setLatitude] = useState<number>(DefaultLocation.latitude);
  const [longitude, setLongitude] = useState<number>(DefaultLocation.longitude);
  const [hasLocationPermission, setHasLocationPermission] = useState<boolean>(false);

  const locationHelper: LocationHelper = new LocationHelper();
  const locationService: LocationService = new LocationService(setLatitude, setLongitude);

  const requestLocationPermission = useCallback(async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    const granted = status === 'granted';

    setHasLocationPermission(granted);
    return granted;
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

  const getLocationsMap = useCallback(
    async (data: { tags: Array<string>; materials: Array<string> }) => {
      const locationsMap = await locationService.getLocationsMap(token, data);
      return locationsMap ? locationsMap.features : [];
    },
    [token],
  );

  const getLocationById = useCallback(async (id: string) => {
    return locationService.getLocationsById(token, id);
  }, []);

  return (
    <LocationContext.Provider
      value={{
        latitude,
        longitude,
        hasLocationPermission,
        requestLocationPermission,
        startWatchCurrentPosition,
        getMapRegion,
        getLocationsMap,
        getLocationById,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
}
