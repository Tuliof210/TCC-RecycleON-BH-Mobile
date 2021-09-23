export type Coordinates = {
  latitude: number;
  longitude: number;
};

export type FullCoordinates = Coordinates & {
  latitudeDelta: number;
  longitudeDelta: number;
};
