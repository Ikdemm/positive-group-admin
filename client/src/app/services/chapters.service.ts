import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chapter } from '../models/chapter.model';

@Injectable({
  providedIn: 'root'
})
export class ChaptersService {

  requestOptions = {
    headers: new HttpHeaders({
      "Access-Control-Allow-Origin": "*",
    }),
  };

  constructor(private http: HttpClient) { }

  getChapters(): Observable<any> {
    return this.http.get("/api/chapters")
  }

  addCategory(chapter: Chapter): Observable<any> {
    return this.http.post("/api/chapters", chapter)
  }

  editCategrory(chapter: Chapter): Observable<any> {
    return this.http.put(`api/chapters/${chapter._id}`, chapter)
  }

  deleteCategory(chapterId): Observable<any> {
    return this.http.delete(`api/chapters/${chapterId}`)
  }

}
