import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from '../models/user.model';
import { DEV_REQUEST_URL } from '../constants/dev';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  requestOptions = {
    headers: new HttpHeaders({
      "Access-Control-Allow-Origin": "*",
    }),
  };

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(DEV_REQUEST_URL + "/api/users", this.requestOptions);
  }

  deleteUser(id) {
    return this.http.delete(DEV_REQUEST_URL + "/api/users/" + id, this.requestOptions);
  }

  updateUser(user: User) {
    return this.http.put(DEV_REQUEST_URL + "/api/users/" + user._id, user, this.requestOptions)
  }

}
