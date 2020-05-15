import { Action } from '@ngrx/store';
import { IUser } from './user';
import { IUserState } from './user.store'; 


export const LOADING_USERS = '[USER] LOADING USERS';
export const LOADING_USERS_SUCCESS = '[USER] LOADING USERS SUCCESS';
export const LOADING_USERS_FAILURE = '[USER] LOADING USERS FAILURE';
export const LOADING_USER_SUCCESS = '[USER] LOADING USER SUCCESS';
export const LOADING_USER = '[USER] LOADING USER';
export const CREATE_USER = '[USER] CREATE USER';
export const SUCCESS_CREATE_USER = '[USER] SUCCESS CREATE USER';

export class LoadingUsers implements Action {
    readonly type = LOADING_USERS;
    constructor() {
        console.log("LoadingUsers= ",LOADING_USERS);
    }
}

export class LoadingUsersSuccess implements Action {
    readonly type = LOADING_USERS_SUCCESS;
    constructor(public payload:IUser[]) {
        console.log("LoadingUsersSuccess = ",payload);
    }
}

export class LoadingUsersFailure implements Action {
    readonly type = LOADING_USERS_FAILURE;
    constructor(public payload:string) {
        console.log("LoadingUsersFailure = ",payload);
    }
}

export class LoadingUser implements Action {
    readonly type = LOADING_USER;
    constructor(public payload:number) {
        console.log("LoadingUser = ",payload);
    }
}

export class LoadingUserSuccess implements Action {
    readonly type = LOADING_USER_SUCCESS;
    constructor(public payload:IUser) {
        console.log("LoadingUserSuccess = ",payload);
    }
}

export class CreateUser implements Action {
    readonly type = CREATE_USER;
    constructor(public payload:IUser) {
        console.log("CreateUser = ",payload);
    }
}

export class SuccessCreateUser implements Action {
    readonly type = SUCCESS_CREATE_USER;
    constructor(public payload:any) {
        console.log("CreateUser = ",payload);
    }
}

export type UserAction = SuccessCreateUser | CreateUser | LoadingUsers | LoadingUsersSuccess 
        | LoadingUsersFailure | LoadingUser| LoadingUserSuccess;