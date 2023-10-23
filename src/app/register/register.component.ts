import {Component, Injectable} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {User} from "../user/user";
import {UserService} from "../user/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm = new FormGroup({
    name: new FormControl('', {nonNullable: true}),
    email: new FormControl('', {nonNullable: true}),
    password: new FormControl('', {nonNullable: true}),
    password2: new FormControl('', {nonNullable: true}),
  });
  private user: User;

  constructor(private userService: UserService) {
    this.user = new User();
  }

  onSubmit() {
    this.user = new User();
    this.user.registerData(this.registerForm.controls['name'].value, this.registerForm.controls['email'].value, this.registerForm.controls['password'].value, this.registerForm.controls['password2'].value);
    console.log(this.user.toJSON());
    this.userService.registerUser(this.user).subscribe(user => { console.log(user) } );
  }
}
