import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, withLatestFrom, switchMap } from 'rxjs/operators';
import { IUserState } from './user.store';
import * as fromUsers from './user.action';
import { IUser } from './user';
import { selectUserList } from './user.selector';


@Injectable()
export class UsersEffects {
    constructor(private http: HttpClient, private _action : Actions,
    private _store:Store<IUserState>) {}

private ApiURL: string = 'http://localhost:3000/users';

@Effect()
getUsers$ = this._action.pipe(
    ofType<fromUsers.LoadingUsers>(fromUsers.LOADING_USERS),
     mergeMap(action =>
        this.http.get(this.ApiURL).pipe(
          map((data: IUser[]) => {
            return new fromUsers.LoadingUsersSuccess(data);
          }),
          catchError((error: any) => {
            return of(new fromUsers.LoadingUsersFailure(error));
          })
        )
      )
    );

@Effect()
getUser$ = this._action.pipe( 
    ofType<fromUsers.LoadingUser>(fromUsers.LOADING_USER),
    map(action => action.payload),
    withLatestFrom(this._store.pipe(select(selectUserList))),
    switchMap(([id, users] )=> { 
       const selectedUser = users.filter(user => user.id === id)[0];
       return of(new fromUsers.LoadingUserSuccess(selectedUser));
    })
 );

 @Effect()
 createUser$ = this._action.pipe(
    ofType<fromUsers.CreateUser>(fromUsers.CREATE_USER),
    mergeMap(action =>
        this.http.post(this.ApiURL, JSON.stringify(action.payload), {
            headers: { 'Content-Type': 'application/json' }
          }).pipe(
             map((data: IUser) => {
            return new fromUsers.SuccessCreateUser(data);
          }),
          catchError((error: any) => {
            return of(new fromUsers.LoadingUsersFailure(error));
          })
          )
    ));

}