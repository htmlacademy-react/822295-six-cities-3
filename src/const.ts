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

export const UrlMarkerDefault = './img/markup/img/pin.svg';
export const UrlMarkerCurrent = './img/markup/img/pin-active.svg';

export const FirstElementIndex = 0;


export const enum SortingOption {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first',
}

export const SortingOptions = [
  {
    option: SortingOption.Popular,
    isActive: true,
  },
  {
    option: SortingOption.PriceLowToHigh,
    isActive: false,
  },
  {
    option: SortingOption.PriceHighToLow,
    isActive: false,
  },
  {
    option: SortingOption.TopRatedFirst,
    isActive: false,
  },
] as const;
