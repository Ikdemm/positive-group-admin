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
    return this.http.get("http://localhost:8000/api/chapters", this.requestOptions)
  }

  addChapter(chapter: Chapter): Observable<any> {
    return this.http.post("http://localhost:8000/api/chapters", chapter, this.requestOptions)
  }

  editChapter(chapter: Chapter): Observable<any> {
    return this.http.put(`http://localhost:8000/api/chapters/${chapter._id}`, chapter)
  }

  deleteChapter(chapterId): Observable<any> {
    return this.http.delete(`http://localhost:8000/api/chapters/${chapterId}`, this.requestOptions)
  }

}
