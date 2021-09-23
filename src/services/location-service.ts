import React from 'react';
import * as Location from 'expo-location';

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
}
