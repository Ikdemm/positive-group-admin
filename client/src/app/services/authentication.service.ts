import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
// import { Admin } from "../models/admin.model";
@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  login(email, password): Observable<any> {
    console.log(
      "🚀 ~ file: authentication.service.ts ~ line 12 ~ AuthenticationService ~ login ~ email",
      email
    );
    console.log(
      "🚀 ~ file: authentication.service.ts ~ line 12 ~ AuthenticationService ~ login ~ password",
      password
    );
    return this.http.post("/api/admin", { email: email, password: password });
  }
}
