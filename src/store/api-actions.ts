import { TimeoutShowError } from '@/const';
import { OfferListItem } from '@/types/offer';
import { AppDispatch, State } from '@/types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { loadOffers, setError, setOffersDataLoadingStatus } from './actions';
import { store } from './';

export const clearErrorAction = createAsyncThunk(
  'data/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TimeoutShowError,
    );
  },
);

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setOffersDataLoadingStatus(true));

    const { data } = await api.get<OfferListItem[]>('/offers');

    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffers(data));
  },
);
