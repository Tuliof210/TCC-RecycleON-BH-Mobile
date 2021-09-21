import * as Location from 'expo-location';
import React from 'react';

export default class LocationService {
  async watchPosition(
    setLatitude: React.Dispatch<React.SetStateAction<number | null>>,
    setLongitude: React.Dispatch<React.SetStateAction<number | null>>,
  ) {
    const locationOptions = { accuracy: 3, timeInterval: 1000, distanceInterval: 10 };
    return Location.watchPositionAsync(locationOptions, ({ coords }) => {
      setLatitude(coords.latitude);
      setLongitude(coords.longitude);
    });
  }
}
