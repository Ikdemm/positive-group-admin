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
    return this.http.post("http://localhost:8000/api/auth/login", userData, this.requestOptions);
  }

  // check() {
  //   return localStorage.getItem("authenticated");
  // }

  forgotPassword(user: String): Observable<any> {
    console.log(user)
    return this.http.post("/api/auth/forgot", user, this.requestOptions)
  }
}
