import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserOverviewComponent } from './user-overview/user-overview.component';
import { TodoOverviewComponent } from './todo-overview/todo-overview.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { CreateUserComponent } from './create-user/create-user.component';


const routes: Routes = [

  {path : "", redirectTo : '/useroview', pathMatch:'full'}, /* Default Home page 
  {
    path : 'departments', 
    component : DepartmentComponent,
    children : [
                { path: 'overview', component : DepartmentOverviewComponent},
                { path: 'contact', component : DepartmentContactComponent}  
              ]
    },*/
  {path : 'useroview', component : UserOverviewComponent},
  {path : 'userdetails/:id', component : UserDetailsComponent},
  {path : 'tododetails', component : TodoOverviewComponent},
  {path : 'createUser', component : CreateUserComponent},
  {path : "**", component : PageNotFoundComponent} /* If any url not found page */

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
