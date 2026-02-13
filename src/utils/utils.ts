import { LocationName, LocationNames, SortingOption } from '@/const';
import { OfferListItem } from '@/types/offer';

export function calculateOfferRating(rating: number, maxRating = 5): number {
  return (rating / maxRating) * 100;
}

export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function capitalizeFirst(str: string): string {
  return str ? str[0].toUpperCase() + str.slice(1).toLowerCase() : '';
}

export function getOffersByCity(offers: Array<OfferListItem>, cityName: LocationName): Array<OfferListItem> {
  return offers.filter((offer) => offer.city.name === (capitalizeFirst(cityName)));
}

export function isLocationName(value: string): value is LocationName {
  return (LocationNames as readonly string[]).includes(value.toLowerCase());
}

export function getCurrentOffers(offers: Array<OfferListItem>, cityName: LocationName, sortingOption: SortingOption): Array<OfferListItem> {
  const offersByCity = getOffersByCity(offers, cityName);

  switch (sortingOption) {
    case SortingOption.PriceLowToHigh:
      return offersByCity.sort((a, b) => a.price - b.price);
    case SortingOption.PriceHighToLow:
      return offersByCity.sort((a, b) => b.price - a.price);
    case SortingOption.TopRatedFirst:
      return offersByCity.sort((a, b) => b.rating - a.rating);
    default:
      return offersByCity;
  }
}
