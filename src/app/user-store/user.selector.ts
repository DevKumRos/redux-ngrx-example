import {createSelector}  from '@ngrx/store';
import { IUserState } from './user.store';
import { IUser } from './user';

const selectUserState = (state : any) => state.userReducer;

export const selectUserLoading = createSelector(
    selectUserState,
    (appState: IUserState) => {
        return appState.loading
    }
);

export const selectUserList = createSelector(
    selectUserState,
    (appState: IUserState) => {
        return appState.users
    }
);

export const selectUser = createSelector(
    selectUserState,
    (user: IUserState) => {
        return user.selectedUser;
    }
);

export const selectUserAddress = createSelector(
    selectUser,
    (user: IUser) => {
        return user.address;
    }
);

export const selectCreateUser = createSelector(
    selectUserState,
    (user: IUserState) => {
        return user.selectedUser;
    }
);

