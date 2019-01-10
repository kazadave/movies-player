import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { PageUserRegistrationComponent } from './components/page-user-registration/page-user-registration.component';
import { PageUserLoginComponent } from './components/page-user-login/page-user-login.component';

@NgModule({
  declarations: [PageUserRegistrationComponent, PageUserLoginComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
