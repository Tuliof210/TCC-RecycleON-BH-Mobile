export type SigninData = {
  email: string;
  password: string;
};

export type SignupData = SigninData & {
  name: string;
};

export type AuthenticatedUser = {
  token: string;
  user: object;
};

//------------------------------------------------

export type Coordinates = {
  latitude: number;
  longitude: number;
};

export type FullCoordinates = Coordinates & {
  latitudeDelta: number;
  longitudeDelta: number;
};
