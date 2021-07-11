import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { DEV_REQUEST_URL } from '../constants/dev';

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  requestOptions = {
    headers: new HttpHeaders({
      "Access-Control-Allow-Origin": "*",
    }),
  };

  constructor(private http: HttpClient) { }

  login(userData): Observable<any> {
    userData["origin"] = 0;
    return this.http.post(DEV_REQUEST_URL + "/api/auth/login", userData);
  }

  forgotPassword(user: String): Observable<any> {
    return this.http.post(DEV_REQUEST_URL + "/api/auth/forgot", user)
  }
}
