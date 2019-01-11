import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, EmailValidator, FormBuilder } from '@angular/forms';
import { forbiddenEmail } from 'src/app/validators/forbiddenEmail.validator';
import { AuthService } from '../../services/auth.service';
import { UserCredentials } from '../../interfaces/user-credentials.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-user-login',
  templateUrl: './page-user-login.component.html',
  styleUrls: ['./page-user-login.component.css']
})
export class PageUserLoginComponent implements OnInit {

  authError: string = null;
  get email() {
    return this.loginFormGroup.get('email');
  }

  get password() {
    return this.loginFormGroup.get('password');
  }

  // loginFormGroup = new FormGroup({
  //   email: new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(3),
  //     forbiddenEmail]),
  //   password: new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(3)])
  // });

  loginFormGroup = this.fb.group({
    email: ['', [
      Validators.required,
      Validators.minLength(3),
      forbiddenEmail]],
    password: ['', [
      Validators.required,
      Validators.minLength(3)]]
  });

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private route: Router
  ) { }

  ngOnInit() {
    setTimeout(() => {
      // this.email.setValue('sdfsdf');
      // this.password.setValue('aaaaa');
      this.loginFormGroup.setValue({
        email: 'example@com',
        password: '123komputer'
      });
    }, 1000);
  }
  validateField(fieldName: string) {
    const field = this.loginFormGroup.get(fieldName);
    return field.errors && field.touched;
  }

  onSubmit() {
    const data: UserCredentials = this.loginFormGroup.getRawValue();
    console.log(data);
    const status = this.auth.authenticate(data);
    if (status) {
      this.route.navigate(['/movies']);
    } else {
      this.authError = 'Login was failed. Unauthor';
    }
    console.log('staus ' + status);
  }

}
