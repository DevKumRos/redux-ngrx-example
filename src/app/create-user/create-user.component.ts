import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder ,Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '../../../node_modules/@angular/router';
import { IUser,IAddress, ICompany, IGeo } from '../user-store/user';
import { select, Store } from '@ngrx/store';
import { IUserState } from '../user-store/user.store';
import * as fromUsers from '../user-store/user.action';
import { Observable, Subscription } from 'rxjs';
import { selectCreateUser } from '../user-store/user.selector';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user$:Observable<IUser>;
  userForm : FormGroup;
  user:any = {};
  userMessage : string = '';
  constructor(private fb: FormBuilder,
    private _router: Router, private _route: ActivatedRoute,
    private _store : Store<IUserState>) { }

  ngOnInit(): void {
    this.userForm =  this.fb.group({
      crt_name : [''],
      user_name : [''],
      email : [''],
      phone : [''],
      website : [''],
      company: ['']
    });
  }

  onSubmit(): void {
    this.user.name = this.userForm.value['crt_name'];
    this.user.username = this.userForm.value['user_name'];
    this.user.email = this.userForm.value['email'];
    this.user.phone = this.userForm.value['phone'];
    this.user.website = this.userForm.value['website'];
    this.user.address = this.addessData;
    this.user.company = this.companyData;
    this.user.company.name =     this.userForm.value['company'];

    this._store.dispatch(new fromUsers.CreateUser(this.user));
    this.user$ = this._store.pipe(select(selectCreateUser));
    this.user$.subscribe(data => {
      if(data != null && data.id != null){
         // this._router.navigate(['/useroview']);
         this.userMessage = 'User created successfully';
      }
      
    });
  }

   navigateToUserOverview() {
    this._router.navigate(['/useroview']);
  }

companyData: ICompany = {
    id: 1,
    catchPhrase: 'tested catchPhrase',
    name: 'Tested Company',
    bs: 'tested bs'
}

addessData:IAddress =  {
    id: 1,
    street: 'testing street',
    suite: 'testing suite',
    city: 'testing city',
    zipcode: '12345',
    geo: {
      lat: 'testing',
    lng: 'tested'
    }
  }

  ngOnDestroy(){
    console.log("Create User Destroy");
    if(this.user$)
      this.user$.subscribe().unsubscribe();
  }

}
