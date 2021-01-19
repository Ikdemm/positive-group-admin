import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Admin } from "../models/admin.model";
@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  login(email, password): Observable<any> {
    return this.http.post("/api/admin", { email: email, password: password });
  }
}
