import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { IAppState, INITIAL_STATE } from './store';
import { rootReducer } from './todo.reducer';
import { userReducer } from './user-store/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodoOverviewComponent } from './todo-overview/todo-overview.component';
import { ToDoEffects } from './todo.effects';
import { UsersEffects } from './user-store/user.effects';
import { UserOverviewComponent } from './user-overview/user-overview.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ReactiveFormsModule  } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    TodoOverviewComponent,
    UserOverviewComponent,
    PageNotFoundComponent,
    UserDetailsComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot({rootReducer, userReducer}),
    EffectsModule.forRoot([ToDoEffects, UsersEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
