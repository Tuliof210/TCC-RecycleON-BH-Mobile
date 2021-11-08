import { Coordinates, FullCoordinates } from 'common/constants/types';

export class LocationHelper {
  getMapRegion(points: Array<Coordinates>): FullCoordinates {
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
