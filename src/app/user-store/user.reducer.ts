import { INITIAL_USER_STATE, IUserState } from './user.store';
import * as fromUsers from './user.action';


export function userReducer(state = INITIAL_USER_STATE, action) :IUserState  {
    switch (action.type){
        case fromUsers.LOADING_USERS: {
            return {...state, 
                loading: true}};
        
        case fromUsers.LOADING_USERS_SUCCESS: {
           
            return {...state, 
                loading: false,
                users: action.payload,
                error: null}};

        case fromUsers.LOADING_USERS_FAILURE:
            return {...state, 
                loading: false,
                users: null,
                error: "Error message when failure"};

        case fromUsers.LOADING_USER_SUCCESS: {
           
            return {...state, 
                loading: false,
                selectedUser: action.payload,
                error: null}};
                
        case fromUsers.SUCCESS_CREATE_USER: {
           
            return {...state, 
                loading: false,
                selectedUser: action.payload,
                error: null}};

        default:{
           return state;
            }
    }
}