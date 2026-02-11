import { LocationName } from '@/const';
import { createAction } from '@reduxjs/toolkit';

export const setCurrentCity = createAction<LocationName>('city/changeCity');
export const fetchOffersByCity = createAction<LocationName>('offer/fetchOffersByCity');
