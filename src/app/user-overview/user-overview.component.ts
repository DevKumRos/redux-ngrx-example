import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUserState } from '../user-store/user.store';
import * as fromUsers from '../user-store/user.action';
import { IUser } from '../user-store/user';
import { selectUserLoading, selectUserList, selectUser } from '../user-store/user.selector';
import { Router } from '@angular/router';

@Component({
  selector: 'user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.css']
})
export class UserOverviewComponent implements OnInit {

  users:Observable<IUser[]>;
  usersLoading:Observable<boolean>;
  constructor(private _store : Store<IUserState>, private _router:Router) { 
    this._store.dispatch(new fromUsers.LoadingUsers());
    this.usersLoading = this._store.pipe(select(selectUserLoading));
  }

  ngOnInit(): void {
    this.users = this._store.pipe(select(selectUserList));
  }

  navigateToUser(id: number) {
    console.log("navigateToUser");
    this._router.navigate(['/userdetails', id]);
  }

  navigateToCreateUser() {
    this._router.navigate(['/createUser']);
  }

  ngOnDestroy(){
    console.log("User Overview Destroy");
    this.users.subscribe().unsubscribe();
  }
}
