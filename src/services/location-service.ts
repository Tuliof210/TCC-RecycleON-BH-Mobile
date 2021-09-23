import * as Location from 'expo-location';
import React from 'react';

export default class LocationService {
  constructor(
    private readonly setLatitude: React.Dispatch<React.SetStateAction<number>>,
    private readonly setLongitude: React.Dispatch<React.SetStateAction<number>>,
  ) {}

  async watchCurrentPosition() {
    const locationOptions = { accuracy: 3, timeInterval: 1000, distanceInterval: 10 };
    return Location.watchPositionAsync(locationOptions, (data) => {
      this.setLatitude(data.coords.latitude);
      this.setLongitude(data.coords.longitude);

      console.log(data);
    });
  }

  getMapRegion(points: Array<{ latitude: number; longitude: number }>): {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  } {
    // points should be an array of { latitude: X, longitude: Y }
    let minX: number;
    let maxX: number;
    let minY: number;
    let maxY: number;

    // init first point
    ((point) => {
      minX = point.latitude;
      maxX = point.latitude;
      minY = point.longitude;
      maxY = point.longitude;
    })(points[0]);

    // calculate rect
    points.forEach((point) => {
      minX = Math.min(minX, point.latitude);
      maxX = Math.max(maxX, point.latitude);
      minY = Math.min(minY, point.longitude);
      maxY = Math.max(maxY, point.longitude);
    });

    const midX = (minX + maxX) / 2;
    const midY = (minY + maxY) / 2;
    const deltaX = maxX - minX;
    const deltaY = maxY - minY;

    return {
      latitude: midX,
      longitude: midY,
      latitudeDelta: deltaX,
      longitudeDelta: deltaY,
    };
  }
}
