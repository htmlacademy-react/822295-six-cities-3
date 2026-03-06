import { OfferListItem } from '@/types/offer';
import { AppDispatch, State } from '@/types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AuthData } from '@/types/auth-data';
import { dropToken, saveToken } from '@/services/token';
import { UserData } from '@/types/user-data';

export const fetchOffersAction = createAsyncThunk<
  Array<OfferListItem>,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'data/fetchOffers',
    async (_arg, { extra: api }) => {
      const { data } = await api.get<OfferListItem[]>('/offers');

      return data;
    },
  );

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { extra: api }) => {
    await api.get('/login');
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ email, password }, { extra: api }) => {
    const { data } = await api.post<UserData>('/login', { email, password });

    saveToken(data.token);

    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete('/logout');

    dropToken();
  },
);
