import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private client: HttpClient ) {

  }

  registerUser(user: User)  : Observable<User> {
    return this.client.post<User>("http://localhost:8080/users/register", user.toJSON());
  }
}
