import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { IAppState } from '../store';
import { LoadTodo } from '../todo.action';
import {ITodo} from '../todo';
import {selectTodoList,selectTodoLoading} from '../todo.selector';

@Component({
  selector: 'app-todo-overview',
  templateUrl: './todo-overview.component.html',
  styleUrls: ['./todo-overview.component.css']
})
export class TodoOverviewComponent implements OnInit {

  todos:Observable<ITodo[]>;
  todoLoading:Observable<boolean>;
  constructor(private _store : Store<IAppState>) {
    this._store.dispatch(new LoadTodo());
   }

  ngOnInit(): void {
    console.log("todoLoading: ",this.todoLoading);
    
    
    this.todos = this._store.pipe(select(selectTodoList));
    this.todoLoading = this._store.pipe(select(selectTodoLoading));
    this.todos.subscribe(data => {
      console.log("Loading Data = ", data)
    });
  }

}
