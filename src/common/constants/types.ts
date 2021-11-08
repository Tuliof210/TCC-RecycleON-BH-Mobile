export type SigninData = {
  email: string;
  password: string;
};

export type SignupData = SigninData & {
  name: string;
};

export type User = {
  _id: string;
  name: string;
  email: string;
  bookmarks: Array<string>;
};

export type AuthenticatedUser = {
  token: string;
  user: User;
};

export type UpdateUserData = {
  name?: string;
  email?: string;
  bookmarks?: Array<string>;
};

//------------------------------------------------

export type SocialProfileData = {
  id: string;
  name: string;
  email: string;
};

export type SocialAuthData = {
  name: string;
  password: string;
  socialId: {
    facebook?: string;
    google?: string;
  };
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

//------------------------------------------------

export type LocationsMap = {
  type: string;
  count: number;
  features: Array<LocationPoint>;
};

export type LocationPoint = {
  _id: string;
  type: string;
  locationTag: string;
  geometry: {
    type: string;
    coordinates: Array<number>;
  };
  properties: LocationProperties;
};

export type LocationProperties = {
  materials: Array<string>;
  idExternal: string;
  name: string;
  businessHours: string | null;
  address: {
    reference: string | null;
    region: string | null;
    neighborhood: string | null;
    number: string | null;
    street: string | null;
  };
  info: string | null;
};

//------------------------------------------------

export type WikiItem = {
  _id: string;
  keyWords: Array<string>;
  tag: string;
  type: string;
};

export type WikiData = Array<WikiItem>;

export type WikiFullItem = WikiItem & {
  about: string;
  relatedItems: Array<string>;
};
