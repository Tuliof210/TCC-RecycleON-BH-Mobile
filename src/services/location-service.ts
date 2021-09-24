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

  async getLocationsMap(
    token: string | null,
    requestData: { tags: Array<string>; materials: Array<string> },
  ): Promise<LocationsMap | void> {
    if (token) {
      const tags = requestData.tags.join(',');
      const materials = requestData.materials.join(',');
      const request = this.mountQueryParams(tags, materials);

      console.log(request);

      const response = await AppAPI.get(`/locations?${request}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data as LocationsMap;
    }
  }

  private mountQueryParams(tags: string, materials: string) {
    const query = [];

    if (tags) query.push(`locationTag=${tags}`);
    if (materials) query.push(`materials=${materials}`);

    return query.join('&');
  }
}
