import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { DEV_REQUEST_URL } from '../constants/dev'

@Injectable({
  providedIn: 'root'
})
export class CodesService {

  constructor(private http: HttpClient) { }

  generateCode(codeData): Observable<any> {
    return this.http.post(DEV_REQUEST_URL + '/api/codes', codeData)
  }

}
