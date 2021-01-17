import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../models/course.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  getCourses(): Observable<any> {
    return this.http.get("/api/courses")
  }

  createCourse(course: Course): Observable<any> {
    return this.http.post("/api/courses", course);
  }
}
