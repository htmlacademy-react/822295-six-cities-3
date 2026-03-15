import { Offer, OfferListItem } from '@/types/offer';
import { ThunkOptions } from '@/types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchOffersAction = createAsyncThunk<
  Array<OfferListItem>,
  undefined,
  ThunkOptions
>(
  'data/fetchOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<OfferListItem[]>('/offers');

    return data;
  },
);

export const fetchOfferAction = createAsyncThunk<
  Offer,
  { offerId: string },
  ThunkOptions & { rejectValue: number | string }
>(
  'data/fetchOffer',
  async ({ offerId }, { extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.get<Offer>(`/offers/${offerId}`);

      return data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {

        return rejectWithValue(error.response.status);
      }

      return rejectWithValue('unknown');
    }
  }
);

export const fetchNearbyOffersAction = createAsyncThunk<
  OfferListItem[],
  { offerId: string },
  ThunkOptions
>(
  'data/fetchNearbyOffers',
  async ({ offerId }, { extra: api }) => {
    const { data } = await api.get<OfferListItem[]>(`/offers/${offerId}/nearby`);

    return data;
  },
);

export const fetchFavoritesAction = createAsyncThunk<
  Array<OfferListItem>,
  undefined,
  ThunkOptions
>(
  'data/fetchFavorites',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<OfferListItem[]>('/favorite');

    return data;
  },
);

export const toggleFavoriteStatusAction = createAsyncThunk<
  Offer,
  { offerId: string; isFavorite: boolean },
  ThunkOptions
>(
  'data/toggleFavoriteStatus',
  async ({ offerId, isFavorite }, { extra: api }) => {
    const status = isFavorite ? 0 : 1;
    const { data } = await api.post<Offer>(`/favorite/${offerId}/${status}`);

    return data;
  },
);
