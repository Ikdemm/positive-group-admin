import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  constructor(private http: HttpClient) { }

  login(userData): Observable<any> {
    return this.http.post("/api/auth/admins/login", userData);
  }

  // check() {
  //   return localStorage.getItem("authenticated");
  // }

  forgotPassword(user): Observable<any> {
    return this.http.post("/api/auth/admins/forgot", user)
  }
}
