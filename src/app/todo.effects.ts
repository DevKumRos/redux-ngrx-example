import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { IAppState } from './store';
import * as fromTODOs from './todo.action';
import { ITodo } from './todo';

@Injectable()
export class ToDoEffects {
    constructor(private _action : Actions) {}

@Effect()
getTodos$ = this._action.pipe(
    ofType<fromTODOs.LoadTodoSuccess>(fromTODOs.LOAD_TODO),
     map((data: any) => {
            console.log("effect data : ", todoData);
            return new fromTODOs.LoadTodoSuccess(todoData);
          })
      
);

}

const todoData:ITodo[]= [
    {
        id: 1,
        description: 'Kumar Setup System environment',
        responsible: 'Need to complete today',
        priority: '1',
        isCompleted: false
    },
    {
        id: 2,
        description: 'Kumar Setup development environment',
        responsible: 'Need to complete tomorrow',
        priority: '2',
        isCompleted: false
    },
    {
        id: 1,
        description: 'Kumar start pair programming',
        responsible: 'Need to complete today',
        priority: '3',
        isCompleted: true
    },
    {
        id: 1,
        description: 'Kumar need to start development',
        responsible: 'Need to complete today',
        priority: '4',
        isCompleted: false
    }

]
