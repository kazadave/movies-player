import { Injectable } from '@angular/core';
import { UserCredentials } from '../interfaces/user-credentials.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersStoreService {

  users = [
    {email: 'example@com', password: '123komputer'},
    {email: 'example2@com', password: '123komputer'},
  ];
  check(userCredentials: UserCredentials) {
    return this.users.find((user) => {
      return user.email === userCredentials.email
      && user.password === userCredentials.password;
    }) !== undefined;
  }

  constructor() { }
}
