import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DEV_REQUEST_URL } from '../constants/dev';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  requestOptions = {
    headers: new HttpHeaders({
      "Access-Control-Allow-Origin": "*",
    }),
  };

  constructor(private http: HttpClient) { }

  getAllRequests(): Observable<any> {
    return this.http.get(DEV_REQUEST_URL + "/api/requests")
  }
}
