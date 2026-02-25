import { createReducer } from '@reduxjs/toolkit';
import { changeCurrentCity, changeSort, loadOffers, setError, setOffersDataLoadingStatus } from './actions';
import { LocationName, SortingOption } from '@/const';
import { OfferListItem } from '@/types/offer';

type InitialState = {
  currentCity: LocationName;
  offers: Array<OfferListItem>;
  sortingOption: SortingOption;
  isOffersDataLoading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  currentCity: LocationName.Paris,
  offers: [],
  sortingOption: SortingOption.Popular,
  isOffersDataLoading: false,
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCurrentCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(changeSort, (state, action) => {
      state.sortingOption = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    });
});

export { reducer };
