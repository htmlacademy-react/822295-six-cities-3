export enum AppRoute {
  Root = '/',
  City = '/city/:city',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  NotFound = '/*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum LocationName {
  Paris = 'paris',
  Cologne = 'cologne',
  Brussels = 'brussels',
  Amsterdam = 'amsterdam',
  Hamburg = 'hamburg',
  Dusseldorf = 'dusseldorf',
}

export const LocationNames = Object.values(LocationName) as LocationName[];

export const URL_MARKER_DEFAULT = './img/markup/img/pin.svg';
export const URL_MARKER_CURRENT = './img/markup/img/pin-active.svg';

export const FirstElementIndex = 0;
