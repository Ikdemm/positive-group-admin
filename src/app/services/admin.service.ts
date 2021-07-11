import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DEV_REQUEST_URL } from '../constants/dev';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getAdminData(email: String): Observable<any> {
    return this.http.get(`${DEV_REQUEST_URL}/api/admin/${email}`);
  }

  updateAdminData(newAdminData): Observable<any> {
    return this.http.put(DEV_REQUEST_URL + "api/admin", newAdminData);
  }
}
