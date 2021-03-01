import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getAdminData(email: String): Observable<any> {
    return this.http.get(`http://localhost:8000/api/admin/${email}`);
  }

  updateAdminData(newAdminData): Observable<any> {
    return this.http.put("api/admin", newAdminData);
  }
}
