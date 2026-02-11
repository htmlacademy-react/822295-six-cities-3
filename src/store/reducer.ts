import { createReducer } from '@reduxjs/toolkit';
import { fetchOffersByCity, setCurrentCity } from './actions';
import { LocationName } from '@/const';
import { getOffersByCity, isLocationName } from '@/utils/utils';
import { OffersMock } from '@/mock/offers.mock';

const initialState = {
  currentCity: LocationName.Paris,
  offersByCity: getOffersByCity(OffersMock, LocationName.Paris),
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
    .addCase(fetchOffersByCity, (state, action) => {
      const city = action.payload;

      state.offersByCity = getOffersByCity(OffersMock, city);
    });
});

export {reducer};
