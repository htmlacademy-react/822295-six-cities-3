import { LocationName, SortingOption } from '@/const';
import { createAction } from '@reduxjs/toolkit';

export const changeCurrentCity = createAction<LocationName>('city/changeCurrentCity');
export const changeSort = createAction<SortingOption>('app/changeSort');
