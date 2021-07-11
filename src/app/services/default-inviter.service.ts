import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { DEV_REQUEST_URL } from '../constants/dev';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DefaultInviterService {

  constructor(private http: HttpClient) { }

  makeDefaultInviter(userId): Observable<any> {
    return this.http.put(DEV_REQUEST_URL + "/api/default-inviter/assign/" + userId, {})
  }

  unassignDefaultInviter(): Observable<any> {
    return this.http.post(DEV_REQUEST_URL + "/api/default-inviter/unassign/", {})
  }

}
