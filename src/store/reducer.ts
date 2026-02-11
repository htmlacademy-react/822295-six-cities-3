import { createReducer } from '@reduxjs/toolkit';
import { fetchOffersByCity, fetchSortedOffers, setCurrentCity } from './actions';
import { LocationName, SortingOption } from '@/const';
import { getOffersByCity, isLocationName } from '@/utils/utils';
import { OffersMock } from '@/mock/offers.mock';

const initialState = {
  currentCity: LocationName.Paris,
  offers: getOffersByCity(OffersMock, LocationName.Paris),
  sortingOption: SortingOption.Popular,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentCity, (state, action) => {
      const city = action.payload;

      if (isLocationName(city)) {
        state.currentCity = city;
      } else {
        state.currentCity = LocationName.Paris;
      }
    })
    .addCase(fetchOffersByCity, (state) => {
      const city = state.currentCity;

      state.offers = getOffersByCity(OffersMock, city);
    })
    .addCase(fetchSortedOffers, (state, action) => {
      state.sortingOption = action.payload;
    });
});

export {reducer};
