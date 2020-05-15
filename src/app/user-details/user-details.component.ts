import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { IUserState } from '../user-store/user.store';
import * as fromUsers from '../user-store/user.action';
import { IUser, IAddress } from '../user-store/user';
import { selectUserLoading, selectUserList, selectUser,selectUserAddress } from '../user-store/user.selector';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user$:Observable<IUser>;
  address$:Observable<IAddress>;
  constructor(private _store : Store<IUserState>, private _route:ActivatedRoute
  , private _router:Router) { }

  ngOnInit(): void {
    this._store.dispatch(new fromUsers.LoadingUser(parseInt(this._route.snapshot.paramMap.get("id"))));
    this.user$ = this._store.pipe(select(selectUser));
    this.address$ = this._store.pipe(select(selectUserAddress));
  }

  navigateToUserOverview() {
    this._router.navigate(['/useroview']);
  }

    ngOnDestroy(){
      console.log("User Details Destroy");
    this.user$.subscribe().unsubscribe();
  }

}
