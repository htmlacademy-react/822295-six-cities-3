import { LocationName, SortingOption } from '@/const';
import { createAction } from '@reduxjs/toolkit';

export const setCurrentCity = createAction<LocationName>('city/changeCity');
export const fetchOffersByCity = createAction('offer/fetchOffersByCity');
export const fetchSortedOffers = createAction<SortingOption>('offer/fetchSortedOffers');
