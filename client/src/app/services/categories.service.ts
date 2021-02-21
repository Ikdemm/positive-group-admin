import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Category } from "../models/category.model";

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
    return this.http.get("http://localhost:8000/api/categories", this.requestOptions);
  }

  createCategory(categoryData: FormData): Observable<any> {
    console.log(categoryData)
    return this.http.post("http://localhost:8000/api/categories", categoryData);
  }

  deleteCategory(id) {
    return this.http.delete("http://localhost:8000/api/categories/" + id, this.requestOptions);
  }

  updateCategory(id: String, category: FormData) {
    return this.http.put("http://localhost:8000/api/categories/" + id, category, this.requestOptions)
  }

}
