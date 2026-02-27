import { createReducer } from '@reduxjs/toolkit';
import { changeCurrentCity, changeSort, loadOffers, requireAuthorization, setError, setOffersDataLoadingStatus } from './actions';
import { AuthorizationStatus, LocationName, SortingOption } from '@/const';
import { OfferListItem } from '@/types/offer';

type InitialState = {
  authorizationStatus: AuthorizationStatus;
  currentCity: LocationName;
  offers: Array<OfferListItem>;
  sortingOption: SortingOption;
  isOffersDataLoading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  currentCity: LocationName.Paris,
  offers: [],
  sortingOption: SortingOption.Popular,
  isOffersDataLoading: false,
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
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
