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


export enum SortingOption {
  Popular = 'Popular',
  PriceLowToHigh = 'PriceLowToHigh',
  PriceHighToLow = 'PriceHighToLow',
  TopRatedFirst = 'TopRatedFirst',
}

export const SortingOptions = Object.values(SortingOption) as SortingOption[];

export const SortingOptionL10n = {
  [SortingOption.Popular]: 'Popular',
  [SortingOption.PriceHighToLow]: 'Price: low to high',
  [SortingOption.PriceLowToHigh]: 'Price: high to low',
  [SortingOption.TopRatedFirst]: 'Top rated first'
};

