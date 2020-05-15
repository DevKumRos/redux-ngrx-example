import { Action } from '@ngrx/store';
import { ITodo } from './todo';
import { IAppState } from './store'; 

export const LOAD_TODO = '[TODO] LOAD TODO';
export const LOAD_TODO_SUCCESS = '[TODO] LOAD TODO SUCCESS';
export const LOAD_TODO_FAILURE = '[TODO] LOAD TODO FAILURE';
export const ADD_TODO = '[TODO] ADD TODO';
export const TOGGLE_TODO = '[TODO] TOGGLE TODO';
export const REMOVE_TODO = '[TODO] REMOVE TODO';
export const REMOVE_ALL_TODOS = '[TODO] REMOVE ALL TODOS';


export class LoadTodo implements Action {
    readonly type = LOAD_TODO;
    constructor() {
        console.log("LOAD_TODO = ",LOAD_TODO);
    }
}

export class LoadTodoSuccess implements Action {
    readonly type = LOAD_TODO_SUCCESS;
    constructor(public payload:any) {
        console.log("LOAD_TODO_SUCCESS = ",payload);
    }
}

export class LoadTodoFailure implements Action {
    readonly type = LOAD_TODO_FAILURE;
    constructor(public payload:string) {
        console.log("LOAD_TODO_FAILURE = ",LOAD_TODO_FAILURE);
    }
}

export class AddTodo implements Action {
    readonly type = ADD_TODO;
    constructor(public payload:ITodo){}
}

export class ToggleTodo implements Action {
    readonly type = TOGGLE_TODO;
    constructor(public payload:any){}
}

export class RemoveTodo implements Action {
    readonly type = REMOVE_TODO;
    constructor(public payload:any){}
}

export class RemoveAllTodo implements Action {
    readonly type = REMOVE_ALL_TODOS;
    constructor(public payload:any){}
}

export type TodoAction = LoadTodo | LoadTodoSuccess| AddTodo | ToggleTodo | RemoveTodo | RemoveAllTodo;