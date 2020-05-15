import { IUser } from './user';


export interface IUserState {
    users: IUser[];
    selectedUser:IUser
    loading: boolean;
    error: any;
}

export const INITIAL_USER_STATE: IUserState = {
    users: [],
    selectedUser: null,
    loading: false,
    error: null
}