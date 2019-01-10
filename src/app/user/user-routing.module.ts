import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageUserRegistrationComponent } from './components/page-user-registration/page-user-registration.component';
import { PageUserLoginComponent } from './components/page-user-login/page-user-login.component';

const routes: Routes = [
  {
    path: 'register',
    component: PageUserRegistrationComponent
  },
  {
    path: 'login',
    component: PageUserLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
