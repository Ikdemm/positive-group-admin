import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Category } from "../models/category.model";

import { DEV_REQUEST_URL } from '../constants/dev';

@Injectable({
  providedIn: "root",
})
export class CategoriesService {
  requestOptions = {
    headers: new HttpHeaders({
      "Access-Control-Allow-Origin": "*",
    }),
  };

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any> {
    return this.http.get(DEV_REQUEST_URL + "/api/categories");
  }

  createCategory(categoryData: FormData): Observable<any> {
    return this.http.post(DEV_REQUEST_URL + "/api/categories", categoryData);
  }

  deleteCategory(id) {
    return this.http.delete(DEV_REQUEST_URL + "/api/categories/" + id);
  }

  updateCategory(id: String, category: FormData) {
    return this.http.put(DEV_REQUEST_URL + "/api/categories/" + id, category)
  }

}
