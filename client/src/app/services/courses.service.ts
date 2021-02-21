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
    return this.http.get("http://localhost:8000/api/courses")
  }

  createCourse(course: FormData): Observable<any> {
    return this.http.post("http://localhost:8000/api/courses", course);
  }

  deleteCourse(id) {
    return this.http.delete("http://localhost:8000/api/courses/" + id)
  }

  updateCourse(id, course: FormData) {
    return this.http.put("http://localhost:8000/api/courses/" + id, course)
  }

}
