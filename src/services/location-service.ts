import React from 'react';
import * as Location from 'expo-location';

import { AppAPI, handleHttpError } from 'common/libs/axios';

import { LocationPoint, LocationsMap } from 'common/constants/types';

export class LocationService {
  constructor(
    private readonly setLatitude: React.Dispatch<React.SetStateAction<number>>,
    private readonly setLongitude: React.Dispatch<React.SetStateAction<number>>,
  ) {}

  async watchCurrentPosition(): Promise<{ remove(): void }> {
    const locationOptions = { accuracy: 3, timeInterval: 1000, distanceInterval: 10 };
    return Location.watchPositionAsync(locationOptions, (data) => {
      this.setLatitude(data.coords.latitude);
      this.setLongitude(data.coords.longitude);
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

      try {
        return AppAPI.get(`/locations?${request}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then((response) => response.data as LocationsMap);
      } catch (error) {
        handleHttpError(error);
      }
    }
  }

  async getLocationsById(token: string | null, id: string): Promise<LocationPoint | void> {
    if (token) {
      try {
        return AppAPI.get(`/locations/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then((response) => response.data as LocationPoint);
      } catch (error) {
        handleHttpError(error);
      }
    }
  }

  private mountQueryParams(tags: string, materials: string) {
    const query = [];

    if (tags) query.push(`locationTag=${tags}`);
    if (materials) query.push(`materials=${materials}`);

    return query.join('&');
  }
}
