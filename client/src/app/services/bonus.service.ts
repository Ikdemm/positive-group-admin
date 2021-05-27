import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DEV_REQUEST_URL } from '../constants/dev';

@Injectable({
  providedIn: 'root'
})
export class BonusService {

  constructor(private http: HttpClient) { }

  getUserBonus(userId): Observable<any> {
    return this.http.get(DEV_REQUEST_URL + '/api/bonus/' + userId)
  }

  getBonusTree(userId): Observable<any> {
    return this.http.get(DEV_REQUEST_URL + '/api/bonus/tree/' + userId)
  }

}
