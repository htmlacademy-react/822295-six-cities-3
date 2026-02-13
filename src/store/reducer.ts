import { createReducer } from '@reduxjs/toolkit';
import { changeCurrentCity, changeSort } from './actions';
import { LocationName, SortingOption } from '@/const';
import { OffersMock } from '@/mock/offers.mock';

const initialState = {
  currentCity: LocationName.Paris,
  offers: OffersMock,
  sortingOption: SortingOption.Popular,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCurrentCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(changeSort, (state, action) => {
      state.sortingOption = action.payload;
    });
});

export {reducer};
