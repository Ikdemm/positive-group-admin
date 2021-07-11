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

  getAllActivationRequests(): Observable<any> {
    return this.http.get(DEV_REQUEST_URL + "/api/requests/activation-requests")
  }

  respondToActivationRequest(user): Observable<any> {
    return this.http.put(DEV_REQUEST_URL + `/api/users/${user._id}`, user)
  }

  getAllCoursesRequests(): Observable<any> {
    return this.http.get(DEV_REQUEST_URL + "/api/requests/courses-requests")
  }

  respondToCourseRequest(user): Observable<any> {
    return this.http.put(DEV_REQUEST_URL + `/api/users/${user._id}`, user)
  }

}
