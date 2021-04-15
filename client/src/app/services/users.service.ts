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

  constructor(private http: HttpClient) { console.log(DEV_REQUEST_URL) }

  getUsers(): Observable<any> {
    return this.http.get(DEV_REQUEST_URL + "/api/users");
  }

  deleteUser(id) {
    return this.http.delete(DEV_REQUEST_URL + "/api/users/" + id);
  }

  updateUser(user: User) {
    return this.http.put(DEV_REQUEST_URL + "/api/users/" + user._id, user)
  }

  getUserInvitees(id: String): Observable<object> {
    return this.http.get(DEV_REQUEST_URL + `/api/users/${id}/invitees`)
  }

}
