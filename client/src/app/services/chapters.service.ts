import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chapter } from '../models/chapter.model';
import { DEV_REQUEST_URL } from '../constants/dev';

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
    return this.http.get(DEV_REQUEST_URL + "/api/chapters")
  }

  addChapter(chapter: Chapter): Observable<any> {
    return this.http.post(DEV_REQUEST_URL + "/api/chapters", chapter)
  }

  editChapter(chapter: Chapter): Observable<any> {
    return this.http.put(DEV_REQUEST_URL + `/api/chapters/${chapter._id}`, chapter)
  }

  deleteChapter(chapterId): Observable<any> {
    return this.http.delete(DEV_REQUEST_URL + `/api/chapters/${chapterId}`)
  }

}
