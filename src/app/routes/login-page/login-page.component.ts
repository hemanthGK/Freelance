import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  login: FormGroup;

  constructor() {
    this.login = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.email]),
    });
  }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.login.controls.username.value);
  }


}