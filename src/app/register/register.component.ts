import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm = new FormGroup({
    name: new FormControl('name'),
    email: new FormControl('email'),
    password: new FormControl('password'),
    password2: new FormControl(''),
  });

  onSubmit() {
    console.log(this.registerForm.value);
  }
}
