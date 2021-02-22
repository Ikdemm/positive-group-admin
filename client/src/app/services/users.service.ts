import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from '../models/user.model';

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
    return this.http.get("http://localhost:8000/api/users", this.requestOptions);
  }

  deleteUser(id) {
    return this.http.delete("http://localhost:8000/api/users/" + id, this.requestOptions);
  }

  updateUser(user: User) {
    return this.http.put("http://localhost:8000/api/users/" + user._id, user, this.requestOptions)
  }

}
