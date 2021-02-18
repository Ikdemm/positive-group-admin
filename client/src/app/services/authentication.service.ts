import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

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
    return this.http.post("/api/auth/admins/login", userData, this.requestOptions);
  }

  // check() {
  //   return localStorage.getItem("authenticated");
  // }

  forgotPassword(user: String): Observable<any> {
    return this.http.post("/api/auth/admins/forgot", user, this.requestOptions)
  }
}
