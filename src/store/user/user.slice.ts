import { AuthorizationStatus, NameSpace } from '@/const';
import { createSlice } from '@reduxjs/toolkit';
import { UserData } from '@/types/user-data';
import { checkAuthAction, fetchUserCommentsAction, loginAction, logoutAction, submitUserCommentAction } from './user.api';
import { UserComment } from '@/types/offer';

type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
  userComments: Array<UserComment>;
  submitUserCommentError: string | null;
};

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
  userComments: [],
  submitUserCommentError: null,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userData = action.payload;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userData = action.payload;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(fetchUserCommentsAction.fulfilled, (state, action) => {
        state.submitUserCommentError = null;
        state.userComments = action.payload;
      })
      .addCase(submitUserCommentAction.fulfilled, (state) => {
        state.submitUserCommentError = null;
      })
      .addCase(submitUserCommentAction.rejected, (state) => {
        state.submitUserCommentError = 'Comment submit error';
      });
  }
});
