import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserModel } from 'src/app/user/models/user.model';

@Component({
  selector: 'app-page-user-registration',
  templateUrl: './page-user-registration.component.html',
  styleUrls: ['./page-user-registration.component.css']
})
export class PageUserRegistrationComponent implements OnInit {

  // userModel = {
  //   username: '',
  //   password: '',
  //   email: '',
  //   sex: ''
  // };
  // (change)="email.errors.value = validateEmail()"
  userModel = new UserModel('kaza', 'emailema.cd', 'password', 'm');
  url = 'http://localhost:3000';
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  validateEmail(email: string): boolean {
    return (/@/).test(email);
  }

  submit(data) {
    this.http.post(this.url, data)
    .subscribe((response) => {
      console.log('== Success ==');
      console.log(data);
    }, (err) => {
      console.log(err);
  });
  }
}
