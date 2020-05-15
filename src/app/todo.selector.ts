import {createSelector}  from '@ngrx/store';
import { IAppState } from './store';
import { ITodo } from './todo';

const selectTodoState = (state : any) => state.rootReducer;

export const selectTodoList = createSelector(
    selectTodoState,
    (appState: IAppState) => {
        console.log("appState = ",appState.todos);
        return appState.todos
    }
);

export const selectTodoLoading = createSelector(
    selectTodoState,
    (appState: IAppState) => {
        return appState.loading
    }
);