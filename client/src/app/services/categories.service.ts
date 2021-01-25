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
    return this.http.get("/api/categories", this.requestOptions);
  }

  createCategory(category: Category) {
    return this.http.post("/api/categories", category, this.requestOptions);
  }

  deleteCategory(id) {
    return this.http.delete("/api/categories/" + id, this.requestOptions);
  }

  updateCategory(category: Category) {
    return this.http.put("/api/categories/" + category._id, category, this.requestOptions)
  }

}
