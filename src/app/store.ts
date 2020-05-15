import { ITodo } from './todo';

export interface IAppState {
    todos: ITodo[];
    loading: boolean;
    error: any;
    lastUpdate: any;
}

export const INITIAL_STATE: IAppState = {
    todos: [],
    loading: false,
    error: null,
    lastUpdate: null
}