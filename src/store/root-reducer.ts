import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import { userProcess } from './user-process/user-process.slice';
import { offersData } from './offers-data/offers-data.slice';
import { appActions } from './app/app-actions.slice';


export const rootReducer = combineReducers({
  [NameSpace.Data]: offersData.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.App]: appActions.reducer,
});
