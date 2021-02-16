import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getAdminData() {
    return this.http.get(`/api/admin/`);
  }

  updateAdminData(newAdminData) {
    return this.http.put("api/admin", newAdminData);
  }
}
