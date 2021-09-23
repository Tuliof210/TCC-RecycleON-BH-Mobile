import React from 'react';
import * as Location from 'expo-location';

import { AppAPI } from 'common/libs/axios';

import { LocationsMap } from 'common/constants/types';

export default class LocationService {
  constructor(
    private readonly setLatitude: React.Dispatch<React.SetStateAction<number>>,
    private readonly setLongitude: React.Dispatch<React.SetStateAction<number>>,
  ) {}

  async watchCurrentPosition(): Promise<{ remove(): void }> {
    const locationOptions = { accuracy: 3, timeInterval: 1000, distanceInterval: 10 };
    return Location.watchPositionAsync(locationOptions, (data) => {
      this.setLatitude(data.coords.latitude);
      this.setLongitude(data.coords.longitude);

      console.log(data);
    });
  }

  async getLocationsMap(token: string | null): Promise<LocationsMap | void> {
    if (token) {
      const resource = 'locations';
      const request = 'locationTag=LEV&materials=papel';

      const response = await AppAPI.get(`/${resource}?${request}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data as LocationsMap;
    }
  }
}
