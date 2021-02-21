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

  createCourse(course: FormData): Observable<any> {
    return this.http.post("http://localhost:8000/api/courses", course);
  }

  deleteCourse(id) {
    return this.http.delete("/api/courses/" + id)
  }

  updateCourse(course: Course) {
    return this.http.put("/api/courses/" + course._id, course)
  }

}
